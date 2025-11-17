import type { APIRoute } from "astro";

export const prerender = false; // penting biar tidak di-prerender

export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime.env; // akses ke D1 di Cloudflare

  const data = await request.json();
  const { name, email, message, whatsapp } = data;

  await env.DB.prepare(
    "INSERT INTO submissions (name, email, message, whatsapp) VALUES (?, ?, ?, ?)"
  ).bind(name, email, message, whatsapp).run();

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
