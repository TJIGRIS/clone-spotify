export async function GET({ params, request }) {
  const { url } = request

  console.log(url);
  return new Response(JSON.stringify({ name: 'astro' }))
}