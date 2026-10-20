import { NavLink } from "react-router-dom";

export default function AppHeader() {
  return (
    <header className="sticky-top border-bottom border-dark" style={{ backgroundColor: "#121212" }}>
      <nav className="navbar navbar-expand-lg navbar-dark py-2" style={{ backgroundColor: "#121212" }}>
        <div className="container-fluid px-4">
          
          {/* Brand con Logo stile JS e Nome */}
          <a className="navbar-brand d-flex align-items-center gap-3 text-decoration-none" href="#home">
            <div className="js-logo">
              EC.
            </div>
            <span className="fw-semibold text-light fs-5">Ernesto Costanzo</span>
          </a>

          {/* Toggler mobile */}
          <button
            className="navbar-toggler border-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu di Navigazione */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-3 align-items-center">
              <li className="nav-item">
                <NavLink to={"/"} className="nav-link custom-nav-link" href="#home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/progetti"} className="nav-link custom-nav-link" href="#progetti">
                  Progetti
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/skills"} className="nav-link custom-nav-link" href="#skills">
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/contatti"} className="nav-link custom-nav-link" href="#contatti">
                  Contatti
                </NavLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}