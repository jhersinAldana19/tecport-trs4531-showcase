const Hero = () => {
  return (
    <section id="inicio" className="hero-section min-h-screen flex items-center justify-center relative pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Title */}
        <div className="animate-fade-in-up">
          <span className="inline-block text-secondary font-display text-lg md:text-xl font-semibold tracking-widest uppercase mb-4">
            TECPORT presenta
          </span>
        </div>

        <h1 className="animate-fade-in-up animation-delay-100 font-display text-7xl md:text-9xl lg:text-[12rem] font-extrabold text-primary-foreground text-shadow-lg leading-none mb-4">
          TRS4531
        </h1>

        <h2 className="animate-fade-in-up animation-delay-200 font-display text-3xl md:text-5xl lg:text-6xl font-bold text-secondary text-shadow mb-8">
          Reach Stacker
        </h2>

        <p className="animate-fade-in-up animation-delay-300 text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-sans">
          Potencia, precisión y rendimiento excepcional para operaciones portuarias
          y logísticas de alto nivel.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#equipo" className="btn-secondary">
            <i className="pi pi-eye mr-2"></i>
            Ver Equipo 3D
          </a>
          <a href="#descargas" className="btn-primary border-2 border-primary-foreground/20 bg-transparent hover:bg-primary-foreground/10">
            <i className="pi pi-download mr-2"></i>
            Ficha Técnica
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-fade-in animation-delay-500 absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="animate-float">
            <i className="pi pi-chevron-down text-primary-foreground/50 text-2xl"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
