import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-stone-900 hover:text-amber-900 transition-colors">
          GAMAZ
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-medium text-stone-600">
          <a href="#servicios" className="hover:text-amber-900 transition-colors">Servicios</a>
          <a href="#proyectos" className="hover:text-amber-900 transition-colors">Proyectos</a>
          <a href="#nosotros" className="hover:text-amber-900 transition-colors">Nosotros</a>
        </div>

        {/* Primary CTA */}
        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me/TUNUMERO" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex bg-stone-900 text-stone-50 px-6 py-2.5 rounded-lg font-medium hover:bg-amber-900 transition-all shadow-sm"
          >
            Solicitar cotización
          </a>
          
          {/* Mobile Menu Button & Mobile CTA */}
          <a 
            href="https://wa.me/TUNUMERO" 
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden flex items-center justify-center bg-stone-900 text-stone-50 px-4 py-2 rounded-lg font-medium hover:bg-amber-900 transition-colors text-sm"
          >
            Cotizar
          </a>
        </div>
      </div>
    </nav>
  );
}
