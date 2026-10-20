export default function Skills() {
  return (
    <main className="container section-padding">
      {/* Intestazione della pagina */}
      <div className="d-flex align-items-center gap-3 mb-4">
        <h1 className="fw-bold m-0 text-light display-5">Competenze Tecniche</h1>
        <div className="flex-grow-1" style={{ height: "1px", backgroundColor: "#2d2d2d" }}></div>
      </div>

      <p className="text-secondary mb-5" style={{ color: "#adb5bd" }}>
        Panoramica approfondita delle tecnologie, dei linguaggi e degli strumenti che utilizzo quotidianamente nello sviluppo full-stack.
      </p>

      {/* Griglia delle categorie di skill */}
      <div className="row g-4">
        {/* Card Front-End */}
        <div className="col-12 col-md-4">
          <div className="custom-card h-100 p-4 d-flex flex-column">
            <h3 className="h4 fw-bold mb-3" style={{ color: "#d4af37" }}>
              Front-End
            </h3>
            <p className="text-secondary small mb-4" style={{ color: "#adb5bd" }}>
              Sviluppo di interfacce utente reattive, dinamiche, orientate ai componenti e responsive.
            </p>
            <div className="d-flex flex-wrap gap-2 mt-auto">
              <span className="tech-badge">HTML5</span>
              <span className="tech-badge">CSS3</span>
              <span className="tech-badge">JavaScript (ES6+)</span>
              <span className="tech-badge">React</span>
              <span className="tech-badge">TypeScript</span>
              <span className="tech-badge">Bootstrap 5</span>
              <span className="tech-badge">Vite</span>
            </div>
          </div>
        </div>

        {/* Card Back-End */}
        <div className="col-12 col-md-4">
          <div className="custom-card h-100 p-4 d-flex flex-column">
            <h3 className="h4 fw-bold mb-3" style={{ color: "#d4af37" }}>
              Back-End
            </h3>
            <p className="text-secondary small mb-4" style={{ color: "#adb5bd" }}>
              Creazione di API RESTful, logica di server scalabile e modellazione di database relazionali.
            </p>
            <div className="d-flex flex-wrap gap-2 mt-auto">
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">Express.js</span>
              <span className="tech-badge">SQL</span>
              <span className="tech-badge">MySQL</span>
              <span className="tech-badge">REST API</span>
            </div>
          </div>
        </div>

        {/* Card Tools & Strumenti */}
        <div className="col-12 col-md-4">
          <div className="custom-card h-100 p-4 d-flex flex-column">
            <h3 className="h4 fw-bold mb-3" style={{ color: "#d4af37" }}>
              Tools & Strumenti
            </h3>
            <p className="text-secondary small mb-4" style={{ color: "#adb5bd" }}>
              Strumenti di sviluppo, testing di endpoint, controllo di versione e gestione dell'ambiente.
            </p>
            <div className="d-flex flex-wrap gap-2 mt-auto">
              <span className="tech-badge">Git</span>
              <span className="tech-badge">GitHub</span>
              <span className="tech-badge">VS Code</span>
              <span className="tech-badge">Postman</span>
              <span className="tech-badge">MySQL Workbench</span>
              <span className="tech-badge">npm</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}