export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Muebles hechos para durar.
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mb-8">
          Diseñamos y fabricamos muebles funcionales
          para hogares, oficinas y espacios profesionales.
        </p>

        <div className="flex gap-4 flex-wrap">

          <a
            href="https://wa.me/TUNUMERO"
            className="bg-black text-white px-8 py-4 rounded-lg"
          >
            Solicitar cotización
          </a>

          <a
            href="#proyectos"
            className="border px-8 py-4 rounded-lg"
          >
            Ver proyectos
          </a>

        </div>

      </div>

    </section>
  );
}