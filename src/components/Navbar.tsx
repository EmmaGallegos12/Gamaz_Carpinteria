export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          GAMAZ
        </h1>

        <div className="hidden md:flex gap-8">

          <a href="#servicios">Servicios</a>

          <a href="#proyectos">Proyectos</a>

          <a href="#nosotros">Nosotros</a>

          <a href="#contacto">Contacto</a>

        </div>

      </div>
    </nav>
  );
}