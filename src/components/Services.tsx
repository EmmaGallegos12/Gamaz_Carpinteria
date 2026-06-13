const services = [
  {
    title: "Home Office",
    description:
      "Escritorios flotantes y soluciones funcionales.",
  },

  {
    title: "Oficinas",
    description:
      "Mobiliario profesional para espacios de trabajo.",
  },

  {
    title: "Piezas Artesanales",
    description:
      "Cajas de relojes y muebles premium.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12">
          Lo que hacemos
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="border rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}