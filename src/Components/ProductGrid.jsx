import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Manzanas Rojas x Kg",
    desc: "Manzana fresca y crocante.",
    price: 5200,
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Banano x Kg",
    desc: "Banano maduro ideal para snacks.",
    price: 3200,
    image:
      "https://agroclick.org/agpanel/assets/img/blogs/banana-1.jpg",
  },
  {
    id: 3,
    title: "Leche Entera 1L",
    desc: "Leche entera fresca.",
    price: 3500,
    image:
      "https://laalacenadelchef.co/wp-content/uploads/2025/01/FOTOS-WEB-TAMANO-7.png",
  },
  {
    id: 4,
    title: "Huevos x Docena",
    desc: "Huevos de gallina frescos.",
    price: 9800,
    image:
      "https://static1.ara.cat/clip/dd590ad8-63e6-40c4-96bd-54cbfc90ccc0_16-9-aspect-ratio_775w_0_x1880y887.webp",
  },
  {
    id: 5,
    title: "Tomate x Kg",
    desc: "Tomate fresco y jugoso.",
    price: 2800,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvk63mP2uhU5Zq1jgfWL-pu5tE9QihfGre8Q&s",
  },
  {
    id: 6,
    title: "Pan Fresco",
    desc: "Pan artesanal del día.",
    price: 2500,
    image:
      "https://www.hola.com/horizon/landscape/918cb28d3a78-pan-leche-t.jpg?im=Resize=(960),type=downsize",
  },
];

export default function ProductGrid() {
  return (
    <section id="productos" className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-semibold mb-6 text-blue-900">
        Productos destacados
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
