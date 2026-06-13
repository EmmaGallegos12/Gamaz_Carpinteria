export default function About() {
  return (
    <section id="nosotros" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Visual Content */}
        <div className="relative order-2 lg:order-1">
          {/* Main Image */}
          <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-2xl z-10">
            {/* TODO: Add Next/Image with a photo of the workshop or craftsmen working */}
            <div className="absolute inset-0 bg-stone-200"></div>
          </div>
          
          {/* Decorative Background Box */}
          <div className="absolute -top-8 -left-8 w-full h-full border-2 border-amber-900/20 rounded-2xl -z-10 hidden md:block"></div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-12 bg-stone-900 text-stone-50 p-6 md:p-8 rounded-2xl shadow-xl z-20 max-w-[200px] md:max-w-[240px]">
            <div className="text-3xl md:text-5xl font-bold text-amber-500 mb-2">15+</div>
            <p className="text-sm font-medium text-stone-300">Años perfeccionando el arte de la madera.</p>
          </div>
        </div>

        {/* Text Content */}
        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-amber-900"></div>
            <h2 className="text-sm font-bold tracking-widest text-amber-900 uppercase">
              Nuestra Historia
            </h2>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8 leading-tight">
            Tradición familiar, <br className="hidden md:block"/>
            calidad excepcional.
          </h3>
          
          <div className="space-y-6 text-lg text-stone-600 mb-10">
            <p>
              En GAMAZ Carpintería somos una empresa familiar con raíces profundas en el oficio. Creemos que la madera tiene vida propia, y nuestro trabajo es transformarla en piezas que cuenten una historia en tu hogar.
            </p>
            <p>
              Nos alejamos de la producción en masa. Cada corte, cada ensamble y cada acabado se realiza con la dedicación de artesanos que aman lo que hacen. Tu visión es nuestro punto de partida.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 border-t border-stone-200 pt-10">
            <div>
              <h4 className="text-stone-900 font-bold text-xl mb-2">Trato Cercano</h4>
              <p className="text-stone-600 text-sm">Te escuchamos y asesoramos en cada paso del proceso.</p>
            </div>
            <div>
              <h4 className="text-stone-900 font-bold text-xl mb-2">Materiales Premium</h4>
              <p className="text-stone-600 text-sm">Seleccionamos cuidadosamente maderas de la más alta calidad.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
