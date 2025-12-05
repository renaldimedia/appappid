export default async function getSettings(name: string){
    try {
        const data = await env.DB.prepare(
    "SELECT setting_value from settings WHERE setting_key = ?"
  ).bind(name).run();

  return data
    } catch (error) {
        console.log(error)
    }
}

