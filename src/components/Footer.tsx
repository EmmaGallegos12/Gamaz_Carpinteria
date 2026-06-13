export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-xl font-bold mb-4">GAMAZ Carpintería</h3>
          <p className="text-sm">
            Diseño y fabricación de muebles a medida.<br/>
            Calidad, confianza y tradición familiar.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Enlaces</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
            <li><a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a></li>
            <li><a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li>WhatsApp: <a href="https://wa.me/TUNUMERO" className="hover:text-white">Solicitar cotización</a></li>
            <li>Ubicación: México</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-stone-800 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} GAMAZ Carpintería. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
