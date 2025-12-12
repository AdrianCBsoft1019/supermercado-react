import { useEffect, useRef, useState } from "react";
import FALLBACK_IMG from "../assets/img/frutas1.avif";

const MAIN_IMG =
  "https://s32519.pcdn.co/es/wp-content/uploads/sites/3/2022/02/blog-supermarket-inventory-management-1-1136x480.jpg.webp";

export default function SobreNosotros() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [src, setSrc] = useState(MAIN_IMG);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function handleImgError() {
    if (!errored) {
      setErrored(true);
      setSrc(FALLBACK_IMG);
    } else {
      setSrc(
        "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D'800'%20height%3D'600'%20xmlns%3D'http%3A//www.w3.org/2000/svg'%3E%3Crect%20fill%3D'%23e2e8f0'%20width%3D'100%25'%20height%3D'100%25'/%3E%3Ctext%20x%3D'50%25'%20y%3D'50%25'%20dominant-baseline%3D'middle'%20text-anchor%3D'middle'%20fill%3D'%236b7280'%20font-size%3D'20'%3EImagen%20no%20disponible%3C/text%3E%3C/svg%3E"
      );
    }
  }

  return (
    <section
      ref={ref}
      className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8"
    >
      {/* Texto */}
      <div
        className={`flex-1 transition-all duration-700 ease-out transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-2xl font-semibold mb-4">Sobre Nosotros</h2>

        <h3 className="text-lg font-medium mb-2">Información de la empresa</h3>
        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
          Fast DRC Supermarket es tu supermercado de confianza en Madrid,
          Cundinamarca. Nos especializamos en productos frescos, precios
          accesibles y atención rápida para que tu experiencia sea siempre la
          mejor.
        </p>

        <h3 className="text-lg font-medium mb-2">Nuestro objetivo</h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          Nuestro objetivo es garantizar calidad, frescura y accesibilidad para
          todas las familias, apoyando a productores locales y mejorando
          constantemente para ofrecer el mejor servicio.
        </p>
      </div>

      <div
        className={`w-full md:w-1/3 flex-shrink-0 transition-all duration-700 ease-out transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <img
          src={src}
          alt="Supermercado"
          loading="lazy"
          onError={handleImgError}
          className="w-full h-56 object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
