import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carrousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image:
        "https://www.imbanaco.com/idcsalud-client/cm/images?locale=es_CO&idMmedia=2493074",
      title: "Frutas 100% frescas",
      description: "Frutas cultivadas totalmente frescas ",
    },
    {
      id: 2,
      image: "https://strapi.fitia.app/uploads/verduras_402de1696c.jpg",
      title: "Verduras Orgánicas",
      description: "cultivo 100% natural y fresco",
    },
    {
      id: 3,
      image:
        "https://www.revistamoi.com/wp-content/uploads/2019/06/guia-de-carnes.jpg",
      title: "Carnes finas",
      description: "De la mejor calidad y precio",
    },
    {
      id: 4,
      image: "https://m.media-amazon.com/images/I/A1CTUsdPdXL._SL1500_.jpg",
      title: "Pasabocas",
      description: "Saludables y deliciosos",
    },
    {
      id: 5,
      image:
        "https://www.suppliescolombia.com/wp-content/uploads/2019/04/ProductosAseoLimpieza.png",
      title: "Productos de aseo",
      description: "Los mejores productos para tu hogar",
    },
  ];

  const handleComprar = () => {
    const element = document.getElementById("productos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full">
      <div className="relative h-96 md:h-96 lg:h-96 overflow-hidden bg-gray-200">
        {/* Slides */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover brightness-75"
              />

              <div
                className={`absolute inset-0 bg-linear-to-r ${slide.color} opacity-40`}
              ></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center text-white shadow-lg [text-shadow:1px_1px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000] text-center px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl drop-shadow-md max-w-2xl">
                  {slide.description}
                </p>
                <button
                  onClick={() => handleComprar(slide.category)}
                  className="mt-8 bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition"
                >
                  Comprar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-blue-600 bg-opacity-50 hover:bg-opacity-100 text-black p-2 rounded-full transition"
        >
          <ChevronLeft size={32} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-blue-600 bg-opacity-50 hover:bg-opacity-100 text-black p-2 rounded-full transition"
        >
          <ChevronRight size={32} />
        </button>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition ${
                index === currentSlide
                  ? "bg-blue-500 w-3 h-3"
                  : "bg-white bg-opacity-50 w-2 h-2 hover:bg-opacity-75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <h3 className="font-bold text-lg mb-2 dark:text-yellow-300">
                Envíos Gratis
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                En pedidos mayores a $100.000
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <h3 className="font-bold text-lg mb-2 dark:text-yellow-300">
                Garantía Fresco
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Si tus productos están frescos y en buen estado, si no, te
                devolvemos tu dinero
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <h3 className="font-bold text-lg mb-2 dark:text-yellow-300">
                Entrega Rápida
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Entrega de 24 H
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
