import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white pt-10 pb-6 mt-10">

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <h3 className="text-lg font-semibold mb-3">Fast DRC Supermarket</h3>
          <p className="text-white/80 text-sm leading-relaxed">
            Tu supermercado de confianza. Productos frescos, precios bajos
            y servicio rápido para que siempre encuentres lo que necesitas.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Información</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li> Madrid, Cundinamarca</li>
            <li> +57 320 444 5566</li>
            <li> 7:00 AM a 9:00 PM</li>
          </ul>
        </div>

        {}
        <div>
          <h3 className="text-lg font-semibold mb-3">Síguenos</h3>

          <div className="flex space-x-4 text-3xl">
            <a className="hover:scale-110 transition" href="#">
              <FaFacebook />
            </a>

            <a className="hover:scale-110 transition" href="#">
              <FaInstagram />
            </a>

            <a className="hover:scale-110 transition" href="#">
              <FaTiktok />
            </a>
          </div>

          <p className="mt-3 text-sm text-white/80 text-center md:text-left">
            <span className="font-semibold">FastDRCSupermarket12</span>
          </p>
        </div>
      </div>

      <p className="text-center text-white/70 text-xs mt-10">
        © {new Date().getFullYear()} NovaMarket — Todos los derechos reservados.
      </p>

    </footer>
  );
}
