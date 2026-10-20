import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          setLoading(false);
          setStatusMessage({ type: "success", text: "Messaggio inviato con successo! Ti risponderò al più presto." });
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatusMessage({ type: "danger", text: "Errore nell'invio del messaggio. Riprova più tardi." });
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section id="contatti" className="container section-padding">
      {/* Titolo con linea orizzontale scura */}
      <div className="d-flex align-items-center gap-3 mb-5">
        <h2 className="fw-bold m-0 text-light">Contatti</h2>
        <div className="flex-grow-1" style={{ height: "1px", backgroundColor: "#2d2d2d" }}></div>
      </div>

      <div className="row g-4">
        {/* Info di contatto e Social */}
        <div className="col-12 col-lg-4">
          <div className="custom-card p-4 p-md-5 h-100 d-flex flex-column justify-content-between">
            <div>
              <h3 className="h4 fw-bold text-light mb-3">Parliamo del tuo progetto</h3>
              <p className="text-secondary small mb-4" style={{ color: "#adb5bd" }}>
                Sono sempre aperto a nuove opportunità professionali, collaborazioni o una semplice chiacchierata su sviluppo e tecnologia.
              </p>

              {/* Informazioni dirette */}
              <div className="d-flex flex-column gap-3 mb-4">
                <div>
                  <span className="text-uppercase small fw-bold d-block mb-1" style={{ color: "#d4af37" }}>
                    Telefono
                  </span>
                  <a href="tel:+393000000000" className="text-light text-decoration-none fw-semibold">
                    +39 339 653 3795
                  </a>
                </div>

                <div>
                  <span className="text-uppercase small fw-bold d-block mb-1" style={{ color: "#d4af37" }}>
                    Email
                  </span>
                  <a href="mailto:ernesto@example.com" className="text-light text-decoration-none fw-semibold">
                    ernestanzo51@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Link Social / Network */}
            <div className="pt-3" style={{ borderTop: "1px solid #2d2d2d" }}>
              <span className="text-uppercase small fw-bold d-block mb-3" style={{ color: "#d4af37" }}>
                Network
              </span>
              <div className="d-flex gap-2">
                <a
                  href="https://github.com/tuo-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-gold btn-sm flex-grow-1"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ernesto-costanzo-9228831b7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-gold btn-sm flex-grow-1"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form di invio messaggio */}
        <div className="col-12 col-lg-8">
          <div className="custom-card p-4 p-md-5">
            <h3 className="h4 fw-bold text-light mb-2">Invia un messaggio</h3>
            <p className="text-secondary small mb-4" style={{ color: "#adb5bd" }}>
              Compila il form sottostante per inviarmi una mail direttamente.
            </p>

            {statusMessage && (
              <div className={`alert alert-${statusMessage.type} bg-transparent border-${statusMessage.type} text-light small mb-4`}>
                {statusMessage.text}
              </div>
            )}

            <form ref={formRef} onSubmit={sendEmail}>
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <label className="form-label text-light small fw-semibold">Nome</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="form-control bg-dark text-light border-secondary shadow-none"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label text-light small fw-semibold">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="form-control bg-dark text-light border-secondary shadow-none"
                    placeholder="nome@esempio.com"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label text-light small fw-semibold">Messaggio</label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    className="form-control bg-dark text-light border-secondary shadow-none"
                    placeholder="Scrivi qui il tuo messaggio..."
                  ></textarea>
                </div>
                <div className="col-12 mt-4">
                  <button type="submit" className="btn btn-gold w-100 py-2 fw-semibold" disabled={loading}>
                    {loading ? "Invio in corso..." : "Invia Messaggio"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}