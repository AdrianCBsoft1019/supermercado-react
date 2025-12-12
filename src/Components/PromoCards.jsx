export default function PromoCards() {
  const promos = [
    {
      title: "Especial de Navidad",
      description: "Descuentos mágicos para celebrar en familia.",
      img: "https://scontent.feyp2-1.fna.fbcdn.net/v/t39.30808-6/491046849_1228319935680834_3562046632411001019_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHi3LKEk9Ow_hTnJ-uF55Z27hRNCvzluK_uFE0K_OW4r-zOj6lSBPoxx_5Sw70xBYxAreNfuAAPM_yb1GytREQe&_nc_ohc=ZnJfaJrq14wQ7kNvwEv7tAW&_nc_oc=AdkfSzaF2Xjqn2s9uPZpYaxuZxTmZmYV6YYH33DznOgFdHurSHqmzYXKmmfYb53fJKA&_nc_zt=23&_nc_ht=scontent.feyp2-1.fna&_nc_gid=MNO6gPQ6F5Hguy0boScMvA&oh=00_AflbIBrDFtXzrFp9CUsfLZBxB_hofrSFyJRlcXJLGilm4w&oe=694194B3", 
      bg: "bg-red-100 dark:bg-red-900",
    },
    {
      title: "Black Friday",
      description: "Ofertas irresistibles por tiempo limitado.",
      img: "https://blog.supermercadosmas.com/wp-content/uploads/2021/11/INBOUND-GENERICO-BLACK-WEEK1080x1080-1.jpg",
      bg: "bg-gray-100 dark:bg-gray-800",
    },
    {
      title: "Año Nuevo",
      description: "Empieza el año con precios renovados.",
      img: "https://image.isu.pub/240308205804-4d77a416a351f1f8a4cb18adff258c34/jpg/page_1_thumb_large.jpg",
      bg: "bg-yellow-100 dark:bg-yellow-900",
    },
    {
      title: "Semana del Ahorro",
      description: "Promociones exclusivas en productos esenciales.",
      img: "https://pluralidadz.com/wp-content/uploads/2024/09/La-promo-mas-grande-de-Colombia-la-tiene-Exito.webp",
      bg: "bg-blue-100 dark:bg-blue-900",
    },
    {
      title: "Festival de Sabores",
      description: "Ideal para los amantes de la cocina.",
      img: "https://cazaofertas.com.co/wp-content/uploads/2024/07/colsubsidio-trasnochn-.jpg", 
      bg: "bg-green-100 dark:bg-green-900",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
        Promociones Especiales
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {promos.map((promo, idx) => (
          <div
            key={idx}
            className={`rounded-xl shadow-lg overflow-hidden transform transition hover:scale-[1.02] ${promo.bg}`}
          >
            <div className="w-full h-40 bg-white/50 dark:bg-white/10 flex items-center justify-center">

              {promo.img ? (
                <img
                  src={promo.img}
                  alt={promo.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500 dark:text-gray-300 text-sm">
                </span>
              )}
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {promo.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {promo.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
