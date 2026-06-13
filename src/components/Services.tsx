export default function Services() {
  const services = [
    {
      title: "Cocinas Integrales",
      description:
        "Diseñamos el corazón de tu hogar. Cocinas a medida que combinan funcionalidad perfecta con acabados premium y maderas de la más alta calidad.",
      features: ["Diseño 3D", "Herrajes de lujo", "Maderas finas"],
    },
    {
      title: "Clósets y Vestidores",
      description:
        "Maximizamos tus espacios con elegancia. Vestidores personalizados pensados para el orden y la estética de tus ambientes más íntimos.",
      features: ["Aprovechamiento de espacio", "Iluminación integrada", "Diseño ergonómico"],
    },
    {
      title: "Mobiliario Especial",
      description:
        "Piezas únicas hechas a mano. Desde centros de entretenimiento hasta mobiliario de oficina y detalles artesanales que elevan cualquier espacio.",
      features: ["Hecho a mano", "Diseños únicos", "Acabados duraderos"],
    },
  ];

  return (
    <section id="servicios" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-sm font-bold tracking-widest text-amber-900 uppercase mb-3">
            Nuestros Servicios
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Soluciones a la medida de tu espacio.
          </h3>
          <p className="text-xl text-stone-600">
            Cada proyecto es único. Trabajamos de la mano contigo para crear muebles que no solo se ven increíbles, sino que resisten el paso del tiempo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-stone-50 border border-stone-200 rounded-2xl p-8 hover:shadow-lg hover:border-amber-900/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 mb-8 rounded-full bg-stone-200 flex items-center justify-center text-amber-900 font-bold text-xl group-hover:bg-amber-900 group-hover:text-white transition-colors">
                {index + 1}
              </div>
              
              <h4 className="text-2xl font-semibold text-stone-900 mb-4">
                {service.title}
              </h4>
              
              <p className="text-stone-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-sm font-medium text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-700 mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Secondary CTA */}
        <div className="mt-16 text-center">
          <p className="text-stone-600 mb-4">¿Tienes una idea diferente en mente?</p>
          <a
            href="https://wa.me/TUNUMERO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-amber-900 font-semibold hover:text-stone-900 transition-colors"
          >
            Platiquemos de tu proyecto
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
