export default function Testimonials() {
  const testimonials = [
    {
      quote: "Buscábamos una cocina integral a la medida y GAMAZ superó todas nuestras expectativas. La atención al detalle en la madera de nogal y los ensambles es impecable.",
      author: "Sofía Ruiz",
      role: "Propietaria, Residencia en Condesa",
      rating: 5,
    },
    {
      quote: "El trato familiar y la honestidad en el proceso nos dio mucha confianza desde el primer día. La mesa de comedor que fabricaron para nosotros es ahora el centro de nuestro hogar.",
      author: "Carlos Mendoza",
      role: "Cliente Particular",
      rating: 5,
    },
    {
      quote: "Excelente comunicación y puntualidad. Diseñaron y armaron todo el clóset boutique optimizando cada centímetro. Materiales de primera y herrajes sumamente suaves.",
      author: "Alejandra Gómez",
      role: "Diseñadora de Interiores",
      rating: 5,
    },
  ];

  return (
    <section className="py-32 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <h2 className="text-sm font-bold tracking-widest text-amber-500 uppercase mb-3">
            Opiniones de Clientes
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold leading-tight">
            La confianza se construye con cada detalle.
          </h3>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="bg-stone-800/50 border border-stone-800 rounded-2xl p-8 md:p-10 flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-8 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-xl text-stone-200 leading-relaxed font-light italic mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div>
                <div className="h-px bg-stone-800 mb-6"></div>
                <h4 className="font-bold text-stone-100 text-lg">{t.author}</h4>
                <p className="text-stone-400 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
