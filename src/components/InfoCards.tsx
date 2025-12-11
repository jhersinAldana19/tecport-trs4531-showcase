const specs = [
  {
    icon: "pi-box",
    title: "Capacidad de Carga",
    value: "45 Ton",
    description: "Capacidad máxima de elevación para contenedores de hasta 45 toneladas.",
  },
  {
    icon: "pi-arrows-v",
    title: "Altura de Apilamiento",
    value: "5+1",
    description: "Apilamiento de 5 contenedores más 1 sobre camión o vagón.",
  },
  {
    icon: "pi-bolt",
    title: "Motor",
    value: "Cummins",
    description: "Motor diésel de alta eficiencia con bajas emisiones y gran torque.",
  },
  {
    icon: "pi-cog",
    title: "Transmisión",
    value: "Dana",
    description: "Transmisión automática de alta resistencia para operación continua.",
  },
  {
    icon: "pi-compass",
    title: "Radio de Giro",
    value: "7.5 m",
    description: "Excelente maniobrabilidad en espacios reducidos de terminal.",
  },
  {
    icon: "pi-shield",
    title: "Seguridad",
    value: "Premium",
    description: "Sistema de protección integral con sensores y cámaras 360°.",
  },
];

const InfoCards = () => {
  return (
    <section id="especificaciones" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-display text-sm font-semibold tracking-widest uppercase mb-4">
            Características
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Especificaciones Técnicas
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            El TRS4531 combina potencia bruta con tecnología de vanguardia para
            maximizar la productividad de tu operación.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {specs.map((spec, index) => (
            <div
              key={spec.title}
              className="card-premium group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-250">
                <i className={`pi ${spec.icon} text-2xl text-primary group-hover:text-secondary transition-colors duration-250`}></i>
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-bold text-primary mb-2">
                {spec.title}
              </h3>
              <div className="font-display text-3xl font-extrabold text-secondary mb-3">
                {spec.value}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {spec.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
