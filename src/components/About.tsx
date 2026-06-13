export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-stone-900">
            Tradición y Calidad
          </h2>
          <p className="text-lg text-stone-600 mb-6">
            En GAMAZ Carpintería somos una empresa familiar dedicada a transformar la madera en piezas únicas. Creemos en el trabajo bien hecho, la atención al detalle y la durabilidad de cada uno de nuestros muebles.
          </p>
          <p className="text-lg text-stone-600 mb-8">
            Nuestro compromiso es ofrecerte un servicio profesional y cercano, entendiendo tus necesidades para entregar resultados que superen tus expectativas.
          </p>
          <div className="flex gap-4">
            <div className="border-l-4 border-amber-900 pl-4">
              <span className="block text-2xl font-bold text-stone-900">+15</span>
              <span className="text-stone-600">Años de experiencia</span>
            </div>
            <div className="border-l-4 border-amber-900 pl-4 ml-4">
              <span className="block text-2xl font-bold text-stone-900">100%</span>
              <span className="text-stone-600">Calidad garantizada</span>
            </div>
          </div>
        </div>
        <div className="bg-stone-200 aspect-[4/5] rounded-xl overflow-hidden">
          {/* Placeholder para una imagen del taller o de la familia */}
          <div className="w-full h-full bg-stone-300"></div>
        </div>
      </div>
    </section>
  );
}
