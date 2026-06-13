export default function Projects() {
  const projects = [
    {
      title: "Cocinas Integrales",
      description: "Diseño y fabricación de cocinas a la medida con acabados premium.",
    },
    {
      title: "Clósets y Vestidores",
      description: "Optimización de espacios con un diseño elegante y funcional.",
    },
    {
      title: "Muebles a Medida",
      description: "Mesas, centros de entretenimiento y muebles únicos para tu hogar.",
    }
  ];

  return (
    <section id="proyectos" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-stone-900">
          Nuestros Proyectos
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-stone-200 aspect-square rounded-xl mb-6 overflow-hidden">
                {/* Aquí iría la imagen del proyecto en el futuro */}
                <div className="w-full h-full bg-stone-300 transition-transform group-hover:scale-105 duration-500"></div>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-stone-900">{project.title}</h3>
              <p className="text-stone-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
