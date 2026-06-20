import Image from "next/image";
import { getWhatsAppLink } from "@/config";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-stone-50 overflow-hidden">
      {/* Decorative background element for warmth */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-stone-200 opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/80 text-stone-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-700"></span>
            Carpintería Fina y Muebles a Medida
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-stone-900 mb-6 leading-tight">
            Diseño en madera, <br/>
            <span className="text-amber-900">hecho para durar.</span>
          </h1>
          
          <p className="text-xl text-stone-600 mb-10 leading-relaxed">
            Transformamos tus espacios con piezas artesanales de alta calidad. Desde cocinas integrales hasta mobiliario premium, diseñados y fabricados a tu medida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center bg-stone-900 text-stone-50 px-8 py-4 rounded-xl text-lg font-medium hover:bg-amber-900 transition-all shadow-md hover:shadow-lg"
            >
              Solicitar cotización por WhatsApp
            </a>
            <a
              href="#proyectos"
              className="inline-flex justify-center items-center bg-transparent border-2 border-stone-300 text-stone-700 px-8 py-4 rounded-xl text-lg font-medium hover:border-stone-900 hover:text-stone-900 transition-colors"
            >
              Ver nuestros trabajos
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex items-center gap-6 pt-8 border-t border-stone-200">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-stone-900">15+</span>
              <span className="text-sm text-stone-600 font-medium">Años de experiencia</span>
            </div>
            <div className="w-px h-12 bg-stone-300"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-stone-900">100%</span>
              <span className="text-sm text-stone-600 font-medium">Calidad artesanal</span>
            </div>
          </div>
        </div>

        {/* Visual Content (Image) */}
        <div className="relative h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/hero_woodworking.jpg"
            alt="Cocina de diseño artesanal en madera de nogal por GAMAZ Carpintería"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
        </div>

      </div>
    </section>
  );
}
