declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          'camera-controls'?: boolean;
          'auto-rotate'?: boolean;
          'shadow-intensity'?: string;
          'environment-image'?: string;
          poster?: string;
          loading?: string;
          reveal?: string;
          ar?: boolean;
        },
        HTMLElement
      >;
    }
  }
}

const ModelViewer = () => {
  return (
    <section id="equipo" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-display text-sm font-semibold tracking-widest uppercase mb-4">
            Explorar
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Visor 3D Interactivo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explora cada detalle del TRS4531 con nuestro visor 3D de alta calidad.
            Rota, acerca y descubre la ingeniería de precisión.
          </p>
        </div>

        {/* 3D Model Container */}
        <div className="max-w-5xl mx-auto">
          <div className="model-container bg-gradient-to-b from-card to-muted/50 p-2">
            <model-viewer
              src="/model/base.glb"
              alt="Reach Stacker TRS4531"
              camera-controls
              auto-rotate
              shadow-intensity="1"
              environment-image="neutral"
              loading="eager"
              style={{
                width: '100%',
                height: '500px',
                borderRadius: '12px',
                backgroundColor: 'hsl(200 5% 97%)',
              }}
            >
              {/* Loading Placeholder */}
              <div 
                slot="poster"
                className="w-full h-full flex flex-col items-center justify-center bg-muted/50"
              >
                <i className="pi pi-spin pi-spinner text-4xl text-primary mb-4"></i>
                <p className="text-muted-foreground font-medium">Cargando modelo 3D...</p>
                <p className="text-sm text-muted-foreground/70 mt-2">
                  Sube tu modelo a /public/model/base.glb
                </p>
              </div>
            </model-viewer>
          </div>

          {/* Controls Info */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <i className="pi pi-arrows-alt text-secondary"></i>
              <span>Arrastra para rotar</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="pi pi-search-plus text-secondary"></i>
              <span>Scroll para zoom</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="pi pi-sync text-secondary"></i>
              <span>Rotación automática</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelViewer;
