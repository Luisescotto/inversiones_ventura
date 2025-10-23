export type Product = {
    id: string;              // usado para la URL /productos/[id]
    title: string;
    category: string;
    image: string;
    description: string;
    brand: string;
    price?: string;
    features?: string[];
  };
  
  // Utilidad: genera un slug legible basado en el título
  function slugify(title: string): string {
    return title.toLowerCase()
      .normalize("NFD") // elimina acentos
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/-+/g, "-");
  }
  
  // ---- Datos ----
  const smartphones = [
    {
      title: "Samsung Galaxy S23 Ultra",
      image: "/products/s23ultra.avif",
      description: "Cámara profesional y batería duradera.",
      brand: "Samsung",
      price: "RD$ 64,990",
      features: ["12 GB RAM", "512 GB almacenamiento", "200 MP cámara"],
    },
    {
      title: "Google Pixel 9 Pro",
      image: "/products/googlepixel9pro.avif",
      description: "Android puro con excelente cámara.",
      brand: "Samsung",
      price: "RD$ 64,990",
      features: ["12 GB RAM", "512 GB almacenamiento", "200 MP cámara"],
    },
    {
      title: "Iphone 16 Pro Max",
      image: "/products/iphone16promax.avif",
      description: "El mejor rendimiento y fotografía en iOS.",
      brand: "Samsung",
      price: "RD$ 64,990",
      features: ["12 GB RAM", "512 GB almacenamiento", "48 MP cámara"],
    },
    {
      title: "Iphone 17 Pro Max",
      image: "/products/iphone17promax.avif",
      description: "Diseño refinado y chip A19 Pro ultrapotente.",
      brand: "Samsung",
      price: "RD$ 64,990",
      features: ["12 GB RAM", "512 GB almacenamiento", "200 MP cámara"],
    },
    {
      title: "Honor 44 Pro",
      image: "/products/honor400pro.avif",
      description: "Rendimiento fluido y diseño elegante.",
      brand: "Samsung",
      price: "RD$ 64,990",
      features: ["12 GB RAM", "512 GB almacenamiento", "200 MP cámara"],
    },
    {
      title: "Samsung Galaxy S26 Ultra",
      image: "/products/s26ultra.avif",
      description: "Innovación y cámara de nivel profesional.",
      brand: "Samsung",
      price: "RD$ 64,990",
      features: ["12 GB RAM", "512 GB almacenamiento", "200 MP cámara"],
    },
  ].map((p) => ({ ...p, id: slugify(p.title), category: "smartphones" }));
  
  const tablets = [
    {
      title: "Ipad Air 2020",
      image: "/products/ipadair2020.avif",
      description: "Tablet de alto rendimiento.",
      brand: "Samsung",
      price: "RD$ 64,990",
      features: ["12 GB RAM", "512 GB almacenamiento", "200 MP cámara"],
    },
    {
      title: "Samsung A9 plus",
      image: "/products/samsunga9plus.avif",
      description: "Perfecta para trabajo y entretenimiento.",
      brand: "Samsung",
      price: "RD$ 64,990",
      features: ["12 GB RAM", "512 GB almacenamiento", "200 MP cámara"],
    },
    {
      title: "Dell Latitude 7320",
      image: "/products/delllatitude7320.avif",
      description: "Ideal para profesionales en movimiento.",
      brand: "Samsung",
      price: "RD$ 64,990",
      features: ["12 GB RAM", "512 GB almacenamiento", "200 MP cámara"],
    },
    {
      title: "Asus Rog Flow Z13",
      image: "/products/asusrogflowz13.avif",
      description: "Tablet gamer con potencia de laptop.",
      brand: "Samsung",
      price: "RD$ 64,990",
      features: ["16 GB RAM", "1 TB SSD", "Pantalla 120Hz"],
    },
    {
      title: "Redmi Pad Pro",
      image: "/products/redmipadpro.avif",
      description: "Equilibrio perfecto entre rendimiento y precio.",
      brand: "Samsung",
      price: "RD$ 64,990",
      features: ["12 GB RAM", "512 GB almacenamiento", "200 MP cámara"],
    },
    {
      title: "Lenovo M10",
      image: "/products/lenovom10.avif",
      description: "Compacta, rápida y accesible.",
      brand: "Samsung",
      price: "RD$ 64,990",
      features: ["12 GB RAM", "512 GB almacenamiento", "200 MP cámara"],
    },
  ].map((p) => ({ ...p, id: slugify(p.title), category: "tablets" }));
  
  const consoles = [
    {
      title: "PlayStation 5",
      image: "/products/play5.avif",
      description: "Consola de nueva generación.",
      brand: "Sony",
      price: "RD$ 64,990",
    },
    {
      title: "Nintendo Switch 2",
      image: "/products/switch2.avif",
      description: "Versátil, portátil y familiar.",
      brand: "Nintendo",
      price: "RD$ 64,990",
    },
    {
      title: "Xbox Series X",
      image: "/products/xboxseriex.avif",
      description: "Versátil, portátil y familiar.",
      brand: "Microsoft",
      price: "RD$ 64,990",
    },
    {
      title: "Nintendo Switch Oled",
      image: "/products/switcholed.avif",
      description: "Versátil, portátil y familiar.",
      brand: "Nintendo",
      price: "RD$ 64,990",
    },
    {
      title: "Xbox Series S",
      image: "/products/xboxseries.avif",
      description: "Versátil, portátil y familiar.",
      brand: "Microsoft",
      price: "RD$ 64,990",
    },
  ].map((p) => ({ ...p, id: slugify(p.title), category: "consoles" }));
  
  const sound = [
    {
      title: "Xiaomi Buds 3t Pro",
      image: "/products/xiaomibuds3tpro.avif",
      description: "Audio nítido con cancelación de ruido activa.",
      brand: "Samsung",
      price: "RD$ 64,990",
      features: ["Bluetooth 5.3", "Hasta 24h de batería", "ANC inteligente"],
    },
    {
      title: "Asus Cetra True Wireless",
      image: "/products/asuscetra.avif",
      description: "Sonido envolvente y diseño gamer.",
      brand: "Samsung",
      price: "RD$ 64,990",
      features: ["ANC", "Modo baja latencia", "Carga rápida"],
    },
    {
      title: "Bocina JBL",
      image: "/products/bocinajbl.avif",
      description: "Graves potentes y sonido equilibrado.",
      brand: "Samsung",
      price: "RD$ 64,990",
      features: ["Bluetooth 5.1", "12h de autonomía", "Resistente al agua"],
    },
    {
      title: "Bocina Beats",
      image: "/products/bocinabeats.avif",
      description: "Diseño premium con sonido superior.",
      brand: "Samsung",
      price: "RD$ 64,990",
      features: ["Sonido 360°", "Carga rápida", "Diseño portátil"],
    },
    {
      title: "Logitech G432",
      image: "/products/logitechg432.avif",
      description: "Auriculares gamer con sonido envolvente 7.1.",
      brand: "Samsung",
      price: "RD$ 64,990",
      features: ["Micrófono retráctil", "Audio DTS:X", "Conexión 3.5mm"],
    },
    {
      title: "Sony WHRF 400",
      image: "/products/sonywhrf400.avif",
      description: "Comodidad inalámbrica para cine en casa.",
      brand: "Samsung",
      price: "RD$ 64,990",
      features: ["Conexión RF", "Batería 20h", "Base de carga incluida"],
    },
  ].map((p) => ({ ...p, id: slugify(p.title), category: "sound" }));
  
  // ---- Exports ----
  export const products: Product[] = [
    ...smartphones,
    ...tablets,
    ...consoles,
    ...sound,
  ];
  
  // Devuelve productos por categoría
  export function getProductsByCategory(category: string) {
    return products.filter((p) => p.category === category);
  }
  
  // Devuelve un producto por su ID (slug)
  export function getProductById(id: string) {
    return products.find((p) => p.id === id);
  }
  
  export { smartphones, tablets, consoles, sound };