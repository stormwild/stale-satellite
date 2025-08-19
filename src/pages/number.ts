export const prerender = false

export async function GET() {
  const number = Math.floor(Math.random() * 100)
  return new Response(JSON.stringify({ number }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
