export async function GET({ params, request }) {
  const { url } = request

  return new Response(JSON.stringify({ name: 'astro' }))
}