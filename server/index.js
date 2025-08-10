const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Serve static header/footer HTML
app.get('/api/header', (req, res) => {
  res.send(`
    <header style="width:100%;padding:16px 0;background:#f3f4f6;text-align:center;font-weight:bold;font-size:1.5rem;">Min Min Nạo Nạo E-Shop Header</header>
  `);
});

app.get('/api/footer', (req, res) => {
  res.send(`
    <footer style="width:100%;padding:24px 0;background:#f3f4f6;text-align:center;font-size:1rem;">
      <div style="max-width:900px;margin:auto;text-align:left;">
        <h3 style="font-weight:bold;margin-bottom:8px;">Thông tin cửa hàng</h3>
        <p>Cung cấp danh sách 85 cửa hàng TopZone trên toàn quốc, bao gồm địa chỉ chi tiết ở các thành phố lớn như TP. Hồ Chí Minh, Hà Nội, Đà Nẵng, Bình Dương và Cần Thơ.</p>
        <h3 style="font-weight:bold;margin:16px 0 8px;">Hỗ trợ khách hàng</h3>
        <ul style="margin-bottom:8px;">
          <li>Bảo hành, đổi trả</li>
          <li>Phương thức thanh toán: Tiền mặt, thẻ, Apple Pay</li>
        </ul>
        <h3 style="font-weight:bold;margin:16px 0 8px;">Liên hệ và pháp lý</h3>
        <p>Email: support@minminnaonao.vn | Hotline: 1900 1234</p>
        <p style="margin-top:8px;font-size:0.95em;color:#666;">Trang web thuộc Min Min Nạo Nạo E-Shop. Mọi nội dung chỉ mang tính tham khảo, không chịu trách nhiệm pháp lý.</p>
      </div>
      <div style="margin-top:16px;">&copy; 2025 Min Min Nạo Nạo E-Shop</div>
    </footer>
  `);
});

// Kết nối Oracle
const oracledb = require('oracledb');
const dbConfig = {
  user: 'admin',
  password: '09012001',
  connectString: 'localhost:1521/XEPDB1' // Thay bằng connect string của bạn
};

// API lấy sản phẩm từ Oracle
app.get('/api/products', async (req, res) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(
      'SELECT product_id, name, description, price, image_url, category FROM products'
    );
    res.json(result.rows.map(row => ({
      product_id: row[0],
      name: row[1],
      description: row[2],
      price: row[3],
      image_url: row[4],
      category: row[5]
    })));
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    if (connection) await connection.close();
  }
});

// Mock cart endpoint
app.get('/api/cart', (req, res) => {
  res.json({ items: [], total: 0 });
});
app.post('/api/cart', (req, res) => {
  const { productId } = req.body;
  res.json({ success: true, productId });
});

// Mock account endpoint
app.get('/api/account', (req, res) => {
  res.json({ id: 1, name: 'Demo User', email: 'demo@example.com' });
});

// Welcome route
app.get('/', (req, res) => {
  res.send(`
    <div style="width:100%;padding:32px 0;background:#e0e7ef;text-align:center;font-size:1.25rem;">
      <h1 style="font-size:2rem;font-weight:bold;margin-bottom:16px;">Chào mừng đến với Min Min Nạo Nạo E-Shop API</h1>
      <p>Đây là hệ thống backend cung cấp dữ liệu cho website thương mại điện tử.</p>
      <p>Truy cập các endpoint như <code>/api/header</code>, <code>/api/footer</code>, <code>/api/products</code> để lấy dữ liệu.</p>
    </div>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
