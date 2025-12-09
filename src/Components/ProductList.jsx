import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Carne de Res Premium",
    price: 18900,
    category: "carnes",
    desc: "500g de lomo fino de alta calidad.",
    image: "./src/assets/img/carne1.png",
  },
  {
    id: 2,
    title: "Pechuga de Pollo",
    price: 12900,
    category: "carnes",
    desc: "Pechuga sin piel lista para cocinar.",
    image: "./src/assets/img/pollo1.webp",
  },

  {
    id: 3,
    title: "Manzanas Rojas",
    price: 5900,
    category: "frutas",
    desc: "Manzanas frescas y crujientes.",
    image: "./src/assets/img/frutas1.avif",
  },
  {
    id: 4,
    title: "Banano",
    price: 2900,
    category: "frutas",
    desc: "Banano maduro ideal para snacks.",
    image: "./src/assets/img/frutas2.jpg",
  },

  {
    id: 5,
    title: "Lechuga Crespa",
    price: 3200,
    category: "verduras",
    desc: "Lechuga fresca para ensaladas.",
    image: "./src/assets/img/verduras1.jpeg",
  },
  {
    id: 6,
    title: "Zanahorias",
    price: 2500,
    category: "verduras",
    desc: "Paquete de zanahorias frescas.",
    image: "./src/assets/img/verduras2.jpg",
  },

  {
    id: 7,
    title: "Fríjol rojo",
    price: 4800,
    category: "granos",
    desc: "Libra de fríjol seleccionado.",
    image: "./src/assets/img/granos1.webp",
  },
  {
    id: 8,
    title: "Arroz Premium",
    price: 5200,
    category: "granos",
    desc: "Arroz blanco grano largo.",
    image: "./src/assets/img/granos2.jpg",
  },

  {
    id: 9,
    title: "Galletas Oreo",
    price: 3500,
    category: "pasabocas",
    desc: "Paquete de galletas Oreo.",
    image: "./src/assets/img/oreo.webp",
  },
  {
    id: 10,
    title: "Papas Margarita",
    price: 2900,
    category: "pasabocas",
    desc: "Papas fritas sabor natural.",
    image: "./src/assets/img/papasmargarita.png",
  },

  {
    id: 11,
    title: "Filete de Salmón",
    price: 25900,
    category: "pescado",
    desc: "Filete fresco de salmón.",
    image: "./src/assets/img/salmon.webp",
  },
  {
    id: 12,
    title: "Filete de Tilapia",
    price: 12900,
    category: "pescado",
    desc: "Tilapia fresca lista para cocinar.",
    image: "./src/assets/img/tilapia.webp",
  },

  {
    id: 13,
    title: "Detergente Líquido",
    price: 7800,
    category: "aseo",
    desc: "Detergente para ropa con aroma suave.",
    image: "./src/assets/img/detergente.webp",
  },
  {
    id: 14,
    title: "Jabón Antibacterial",
    price: 3500,
    category: "aseo",
    desc: "Elimina el 99.9% de bacterias.",
    image: "./src/assets/img/jabon.png",
  },

  {
    id: 15,
    title: "Platos Desechables",
    price: 4200,
    category: "hogar",
    desc: "Paquete de 20 platos resistentes.",
    image: "./src/assets/img/platos.jpeg",
  },
  {
    id: 16,
    title: "Vasos Plásticos",
    price: 3800,
    category: "hogar",
    desc: "Paquete de 25 vasos.",
    image: "./src/assets/img/vasos.jpeg",
  },
  {
  id: 17,
  title: "Costilla de Cerdo",
  price: 15800,
  category: "carnes",
  desc: "500g de costilla fresca ideal para asar.",
  image: "./src/assets/img/carne2.webp",
},
{
  id: 18,
  title: "Chorizo Antioqueño",
  price: 8400,
  category: "carnes",
  desc: "Paquete de 6 chorizos tradicionales.",
  image: "./src/assets/img/chorizo.webp",
},
{
  id: 19,
  title: "Pera Verde",
  price: 4500,
  category: "frutas",
  desc: "Pera fresca y jugosa por unidad.",
  image: "./src/assets/img/pera.jpeg",
},
{
  id: 20,
  title: "Mango Tommy",
  price: 5200,
  category: "frutas",
  desc: "Mango dulce y aromático de tamaño grande.",
  image: "./src/assets/img/mango.jpeg",
},
{
  id: 21,
  title: "Pimentón Rojo",
  price: 3300,
  category: "verduras",
  desc: "Pimentón rojo fresco, unidad.",
  image: "./src/assets/img/pimenton.jpeg",
},
{
  id: 22,
  title: "Lentejas",
  price: 4100,
  category: "granos",
  desc: "Libra de lenteja tradicional.",
  image: "./src/assets/img/lentejas.jpeg",
},
{
  id: 23,
  title: "Chocorramo",
  price: 3200,
  category: "pasabocas",
  desc: "Ponqué de chocolate clásico.",
  image: "./src/assets/img/chocorramo.jpeg",
},
{
  id: 24,
  title: "Club Social",
  price: 2100,
  category: "pasabocas",
  desc: "Paquete de galletas saladas.",
  image: "./src/assets/img/clubsocial.jpeg",
},
{
  id: 25,
  title: "Doritos Queso",
  price: 3500,
  category: "pasabocas",
  desc: "Tortilla crujiente sabor queso.",
  image: "./src/assets/img/doritos.jpeg",
},
];

export default function ProductList() {
  return (
    <section id="productos" className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-semibold mb-6 text-blue-900">
        Nuestros Productos
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
