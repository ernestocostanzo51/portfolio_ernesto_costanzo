import { NavLink } from "react-router-dom";
export default function AppFooter() {
  return (
    <footer className="border-top" style={{ backgroundColor: "#121212", borderColor: "#2d2d2d !important" }}>
      <div className="container py-5">
        <div className="row gy-4 align-items-center justify-content-between">
          
          {/* Brand & Nome */}
          <div className="col-12 col-md-4 text-center text-md-start">
            <a className="d-inline-flex align-items-center gap-3 text-decoration-none" href="#home">
              <div className="js-logo">
                EC
              </div>
              <span className="fw-bold text-light fs-5">Ernesto Costanzo</span>
            </a>
            <p className="text-secondary small mt-2 mb-0" style={{ color: "#adb5bd" }}>
              Junior Full-Stack Developer
            </p>
          </div>

          {/* Link veloci di Navigazione */}
          <div className="col-12 col-md-4 text-center">
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <NavLink to={"/"} className="custom-nav-link text-decoration-none small">
                Home
              </NavLink>
              <NavLink to={"progetti"}href="#progetti" className="custom-nav-link text-decoration-none small">
                Progetti
              </NavLink>
              <a href="#skills" className="custom-nav-link text-decoration-none small">
                Skills
              </a>
              <NavLink to={"contatti"} href="#contatti" className="custom-nav-link text-decoration-none small">
                Contatti
              </NavLink>
            </div>
          </div>

          {/* Link Social / Email */}
          <div className="col-12 col-md-4 text-center text-md-end">
            <div className="d-inline-flex gap-2 flex-wrap justify-content-center justify-content-md-end">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/ernesto-costanzo-9228831b7/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn"
              >
                LinkedIn
              </a>
            </div>
          </div>

        </div>

        {/* Linea sottile e Copyright */}
        <div className="row mt-4 pt-4 border-top" style={{ borderColor: "#2d2d2d !important" }}>
          <div className="col-12 text-center">
            <p className="text-secondary small m-0" style={{ color: "#8a8a8a" }}>
              © {new Date().getFullYear()} Ernesto Costanzo. Sviluppato in React e Bootstrap.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}