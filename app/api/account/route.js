export async function GET() {
  // Mock account data
  const account = {
    id: 1,
    name: "Demo User",
    email: "demo@example.com"
  };
  return Response.json(account);
}
