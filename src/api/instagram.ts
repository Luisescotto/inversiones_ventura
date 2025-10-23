export async function GET() {
    const token = import.meta.env.INSTAGRAM_TOKEN; // ⚠️ Añade esto en tu .env
  
    try {
      const res = await fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,timestamp&access_token=${token}`
      );
  
      if (!res.ok) {
        return new Response(JSON.stringify({ error: "Error al obtener publicaciones" }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }
  
      const data = await res.json();
  
      // Solo mostrar las 6 más recientes
      const posts = data.data?.slice(0, 6) || [];
  
      return new Response(JSON.stringify(posts), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: "Error del servidor" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
  