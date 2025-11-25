export default async function getSettings(name: string){
    try {
        const data = await env.DB.prepare(
    "SELECT setting_value from settings WHERE setting_key = ?"
  ).bind(name).run();
    } catch (error) {
        
    }
}