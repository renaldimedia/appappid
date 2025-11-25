import type { APIRoute } from "astro";

export const prerender = false; // penting biar tidak di-prerender

export const GET: APIRoute = async ({ url, locals }) => {
    try {
        const env = locals.runtime.env; // akses ke D1 di Cloudflare

        const name = url.searchParams.get('name');

        const data = await env.DB.prepare(
            "SELECT setting_value from settings WHERE setting_key = ?"
        ).bind(name).run();

        return new Response(JSON.stringify({ success: true, data }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: any) {
        return new Response(JSON.stringify({
            success: false,
            message: error.message,
            stack: error.stack,
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }

};
