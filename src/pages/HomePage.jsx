import { useState } from "react";
import { NavLink } from "react-router-dom";
import projects from "../data/project";

export default function HomePage() {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const itemsPerPage = 3;
  const maxIndex = Math.max(0, projects.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <main>
      {/* SEZIONE HERO / PRESENTAZIONE */}
      <section id="home" className="container section-padding">
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="custom-card p-4 p-md-5">
              <span className="text-uppercase fw-bold fs-6" style={{ color: "#d4af37" }}>
                Junior Full-Stack Developer
              </span>
              <h1 className="display-4 fw-bold text-light my-3">
                <span style={{ color: "#d4af37" }}>Ernesto Costanzo</span>
              </h1>
              <p className="lead text-secondary mb-4" style={{ color: "#adb5bd" }}>
                Sviluppo applicazioni web moderne, reattive e scalabili. Appassionato di architetture React,
                integrazione API REST e gestione di database relazionali.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <a href="#progetti" className="btn btn-gold px-4 py-2">
                  Vedi i Progetti
                </a>
                <NavLink to={"/contatti"} className="btn btn-outline-gold px-4 py-2">
                  Contattami
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE PROGETTI CON CAROSELLO DINAMICO */}
      <section id="progetti" className="container section-padding">
        {/* Titolo e controlli Carosello */}
        <div className="d-flex align-items-center justify-content-between gap-3 mb-5">
          <div className="d-flex align-items-center gap-3 flex-grow-1">
            <h2 className="fw-bold m-0 text-light">Progetti</h2>
            <div className="flex-grow-1" style={{ height: "1px", backgroundColor: "#2d2d2d" }}></div>
          </div>

          {/* Frecce di navigazione Carosello */}
          {projects.length > itemsPerPage && (
            <div className="d-flex gap-2">
              <button
                className="btn btn-outline-gold btn-sm px-3"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                style={{ opacity: currentIndex === 0 ? 0.4 : 1 }}
              >
                &#8592;
              </button>
              <button
                className="btn btn-outline-gold btn-sm px-3"
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                style={{ opacity: currentIndex >= maxIndex ? 0.4 : 1 }}
              >
                &#8594;
              </button>
            </div>
          )}
        </div>

        {/* Griglia / Slide Carosello */}
        <div className="row g-4 flex-nowrap overflow-hidden">
          {projects.map((item) => (
            <div
              key={item.id}
              className="col-12 col-md-6 col-lg-4 flex-shrink-0"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: "transform 0.4s ease-in-out"
              }}
            >
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
                  {item.liveUrl ? (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-gold btn-sm flex-grow-1"
                    >
                      Demo
                    </a>
                  ) : (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-gold btn-sm flex-grow-1 disabled"
                    >
                      Demo
                    </a>
                  )
                }
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEZIONE SKILLS */}
      <section id="skills" className="container section-padding">
        
        <div className="d-flex align-items-center gap-3 mb-5">
          <h2 className="fw-bold m-0 text-light">Competenze Tecniche</h2>
          <div className="flex-grow-1" style={{ height: "1px", backgroundColor: "#2d2d2d" }}></div>
        </div>

        <div className="row g-4">
          {/* Card Front-End */}
          <div className="col-12 col-md-4">
            <div className="custom-card h-100 p-4">
              <h3 className="h4 fw-bold mb-3" style={{ color: "#d4af37" }}>
                Front-End
              </h3>
              <p className="text-secondary small mb-4" style={{ color: "#adb5bd" }}>
                Sviluppo di interfacce utente reattive, dinamiche e responsive.
              </p>
              <div className="d-flex flex-wrap gap-2">
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
            <div className="custom-card h-100 p-4">
              <h3 className="h4 fw-bold mb-3" style={{ color: "#d4af37" }}>
                Back-End
              </h3>
              <p className="text-secondary small mb-4" style={{ color: "#adb5bd" }}>
                Creazione di API RESTful, logica di server e gestione database.
              </p>
              <div className="d-flex flex-wrap gap-2">
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
            <div className="custom-card h-100 p-4">
              <h3 className="h4 fw-bold mb-3" style={{ color: "#d4af37" }}>
                Tools & Strumenti
              </h3>
              <p className="text-secondary small mb-4" style={{ color: "#adb5bd" }}>
                Strumenti di sviluppo, testing API, controllo versione e ambiente.
              </p>
              <div className="d-flex flex-wrap gap-2">
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
      </section>
    </main>
  );
}