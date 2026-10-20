import projects from "../data/project";

export default function ProjectsPage() {
  return (
    <main className="container section-padding">
  
      <div className="d-flex align-items-center gap-3 mb-4">
        <h1 className="fw-bold m-0 text-light display-5">Tutti i Progetti</h1>
        <div className="flex-grow-1" style={{ height: "1px", backgroundColor: "#2d2d2d" }}></div>
      </div>

      <p className="text-secondary mb-5" style={{ color: "#adb5bd" }}>
        Una panoramica completa delle applicazioni web e full-stack che ho realizzato.
      </p>

     
      <div className="row g-4">
        {projects.map((item) => (
          <div key={item.id} className="col-12 col-md-6 col-lg-4">
            <div className="custom-card h-100 d-flex flex-column p-4">
              <div className="mb-3">
                <h3 className="h4 fw-bold text-light mb-2">{item.title}</h3>
                <p className="text-secondary small" style={{ color: "#adb5bd" }}>
                  {item.description}
                </p>
              </div>

              {/* Badge Tecnologie */}
              <div className="d-flex flex-wrap gap-2 mb-4 mt-auto">
                {item.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link GitHub e Live Demo */}
              <div className="d-flex gap-2 pt-3 mt-auto" style={{ borderTop: "1px solid #2d2d2d" }}>
                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-gold btn-sm flex-grow-1"
                  >
                    GitHub
                  </a>
                )}
                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold btn-sm flex-grow-1"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}