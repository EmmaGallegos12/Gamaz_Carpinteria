export default function CTA() {
  return (
    <section className="py-24 bg-stone-900 text-stone-50 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">
          ¿Listo para darle vida a tu proyecto?
        </h2>
        <p className="text-xl text-stone-400 mb-10">
          Contáctanos hoy mismo y comencemos a trabajar en ese mueble o espacio que siempre has imaginado.
        </p>
        <a 
          href="https://wa.me/TUNUMERO" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-stone-900 font-semibold px-8 py-4 rounded-lg hover:bg-stone-200 transition-colors"
        >
          Solicitar cotización por WhatsApp
        </a>
      </div>
    </section>
  );
}
