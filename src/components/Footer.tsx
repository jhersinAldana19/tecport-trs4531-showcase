import tecportLogo from "@/assets/tecport-logo.png";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <img
              src={tecportLogo}
              alt="TECPORT"
              className="h-10 brightness-0 invert mb-4"
            />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Soluciones de equipamiento portuario y logístico de alto rendimiento
              para operaciones de clase mundial.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-primary-foreground/70 hover:text-secondary transition-colors duration-250 text-sm">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#equipo" className="text-primary-foreground/70 hover:text-secondary transition-colors duration-250 text-sm">
                  Visor 3D
                </a>
              </li>
              <li>
                <a href="#especificaciones" className="text-primary-foreground/70 hover:text-secondary transition-colors duration-250 text-sm">
                  Especificaciones
                </a>
              </li>
              <li>
                <a href="#descargas" className="text-primary-foreground/70 hover:text-secondary transition-colors duration-250 text-sm">
                  Descargas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <i className="pi pi-envelope text-secondary"></i>
                <span>info@tecport.com</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <i className="pi pi-phone text-secondary"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <i className="pi pi-map-marker text-secondary"></i>
                <span>Ciudad Industrial, País</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} TECPORT. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-secondary hover:text-secondary-foreground transition-all duration-250">
                <i className="pi pi-linkedin"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-secondary hover:text-secondary-foreground transition-all duration-250">
                <i className="pi pi-youtube"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-secondary hover:text-secondary-foreground transition-all duration-250">
                <i className="pi pi-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
