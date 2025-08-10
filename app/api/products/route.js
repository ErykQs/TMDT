export async function GET() {
  // Mock product data
  const products = [
    { id: 1, name: "Product 1", price: 100, image: "/next.svg" },
    { id: 2, name: "Product 2", price: 200, image: "/next.svg" },
    { id: 3, name: "Product 3", price: 300, image: "/next.svg" }
  ];
  return Response.json(products);
}
