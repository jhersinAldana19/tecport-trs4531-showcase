import tecportLogo from "@/assets/tecport-logo.png";

const Navbar = () => {
  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Equipo", href: "#equipo" },
    { label: "Especificaciones", href: "#especificaciones" },
    { label: "Descargas", href: "#descargas" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center">
            <img
              src={tecportLogo}
              alt="TECPORT"
              className="h-10 md:h-12 brightness-0 invert"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="nav-link text-sm uppercase tracking-wider py-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary-foreground p-2">
            <i className="pi pi-bars text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
