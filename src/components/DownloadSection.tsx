import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-blue/theme.css";

const DownloadSection = () => {
  const handleDownload = () => {
    window.open('/files/TRS4531.pdf', '_blank');
  };

  return (
    <section id="descargas" className="py-24 bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-8">
            <i className="pi pi-file-pdf text-4xl text-secondary"></i>
          </div>

          {/* Content */}
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Ficha Técnica Completa
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Descarga el documento PDF con todas las especificaciones técnicas,
            dimensiones, capacidades y características del TRS4531.
          </p>

          {/* Download Button */}
          <Button
            label="Descargar Ficha Técnica"
            icon="pi pi-download"
            className="p-button-rounded p-button-lg"
            style={{
              background: '#CE5D2A',
              border: 'none',
              color: '#FFF',
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              fontWeight: 600,
              fontFamily: 'Montserrat, sans-serif',
              boxShadow: '0 8px 24px -4px rgba(206, 93, 42, 0.4)',
              transition: 'all 0.25s ease-out',
            }}
            onClick={handleDownload}
          />

          {/* File Info */}
          <p className="text-primary-foreground/50 text-sm mt-6">
            <i className="pi pi-info-circle mr-2"></i>
            Formato PDF • Sube tu archivo a /public/files/TRS4531.pdf
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
