export async function GET() {
  // Mock cart data
  const cart = {
    items: [],
    total: 0
  };
  return Response.json(cart);
}

export async function POST(request) {
  // Add item to cart (mock)
  const { productId } = await request.json();
  // Normally, update cart in DB here
  return Response.json({ success: true, productId });
}
