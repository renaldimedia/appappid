export async function onRequestPost({ request, env }) {
  try {
    const body = await request.json();

    // simple validation
    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const message = (body.message || '').trim();

    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Nama & email wajib.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    // sanitize minimal (trimming). For more, use sanitizer libs if needed.
    const sql = `INSERT INTO submissions (name, email, message) VALUES (?, ?, ?)`;
    // env.DB adalah binding D1 yang kamu set di Cloudflare
    const res = await env.DB.prepare(sql).bind(name, email, message).run();

    // res mungkin berisi lastInsertRowid / success flag tergantung runtime
    return new Response(JSON.stringify({ success: true, id: res?.lastInsertRowid ?? null }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
