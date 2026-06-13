export default function Projects() {
  const projects = [
    {
      title: "Cocinas de Autor",
      category: "Residencial",
      description: "Espacios culinarios diseñados a medida con maderas tratadas y acabados en mate.",
    },
    {
      title: "Clóset Boutique",
      category: "Interiores",
      description: "Vestidor abierto con iluminación LED integrada y divisiones personalizadas.",
    },
    {
      title: "Mesa de Nogal",
      category: "Mobiliario",
      description: "Comedor artesanal para 8 personas tallado en madera sólida de nogal.",
    }
  ];

  return (
    <section id="proyectos" className="py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-amber-900 uppercase mb-3">
              Nuestro Trabajo
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-stone-900">
              Transformando madera <br className="hidden md:block" /> en obras de arte.
            </h3>
          </div>
          <a
            href="https://wa.me/TUNUMERO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-stone-600 font-medium hover:text-amber-900 transition-colors"
          >
            Quiero un proyecto así
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative bg-stone-200 aspect-[4/5] rounded-2xl mb-6 overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500">
                {/* 
                  TODO: Replace with actual Next/Image 
                  Suggested: High resolution, professional photography of the final product.
                */}
                <div className="absolute inset-0 bg-stone-300 transform group-hover:scale-105 transition-transform duration-700 ease-out"></div>
                
                {/* Subtle dark overlay that appears on hover */}
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-stone-900 uppercase transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {project.category}
                </div>
              </div>
              
              {/* Project Info */}
              <h4 className="text-2xl font-bold text-stone-900 mb-2 group-hover:text-amber-900 transition-colors">
                {project.title}
              </h4>
              <p className="text-stone-600 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
