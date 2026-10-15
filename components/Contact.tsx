export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "90px 20px",
        background: "#f7f7f7",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <p
            style={{
              color: "#D4AF37",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Get In Touch
          </p>

          <h2
            style={{
              fontSize: "42px",
              color: "#222",
              marginBottom: "15px",
            }}
          >
            Let's Build Your Dream Home
          </h2>

          <p
            style={{
              color: "#666",
              fontSize: "17px",
              maxWidth: "650px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Have an interior design or construction project in mind?
            Contact AM Dream House Interiors and let's discuss your
            requirements.
          </p>
        </div>

        {/* Contact Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "22px",
          }}
        >
          {/* Phone */}
          <a
            href="tel:+917534005812"
            style={{
              background: "#ffffff",
              padding: "30px 20px",
              borderRadius: "16px",
              textAlign: "center",
              textDecoration: "none",
              color: "#222",
              boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ fontSize: "35px", marginBottom: "12px" }}>
              📞
            </div>

            <h3 style={{ marginBottom: "8px" }}>Call Us</h3>

            <p style={{ color: "#666", margin: 0 }}>
              +91 7534005812
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917534005812"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#ffffff",
              padding: "30px 20px",
              borderRadius: "16px",
              textAlign: "center",
              textDecoration: "none",
              color: "#222",
              boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ fontSize: "35px", marginBottom: "12px" }}>
              💬
            </div>

            <h3 style={{ marginBottom: "8px" }}>WhatsApp</h3>

            <p style={{ color: "#666", margin: 0 }}>
              Chat With Us
            </p>
          </a>

          {/* Email */}
          <a
            href="mailto:amdreamhouseinteriors@gmail.com"
            style={{
              background: "#ffffff",
              padding: "30px 20px",
              borderRadius: "16px",
              textAlign: "center",
              textDecoration: "none",
              color: "#222",
              boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ fontSize: "35px", marginBottom: "12px" }}>
              📧
            </div>

            <h3 style={{ marginBottom: "8px" }}>Email Us</h3>

            <p
              style={{
                color: "#666",
                margin: 0,
                wordBreak: "break-word",
              }}
            >
              amdreamhouseinteriors@gmail.com
            </p>
          </a>

          {/* Location */}
          <div
            style={{
              background: "#ffffff",
              padding: "30px 20px",
              borderRadius: "16px",
              textAlign: "center",
              boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ fontSize: "35px", marginBottom: "12px" }}>
              📍
            </div>

            <h3 style={{ marginBottom: "8px" }}>Our Service Area</h3>

            <p style={{ color: "#666", margin: 0 }}>
              Serving Across India
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: "45px",
            textAlign: "center",
          }}
        >
          <a
            href="https://wa.me/917534005812?text=Hello%20AM%20Dream%20House%20Interiors%2C%20I%20want%20to%20discuss%20an%20interior%20project."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#D4AF37",
              color: "#111",
              padding: "16px 32px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Start Your Project →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #contact {
            padding: 70px 16px !important;
          }

          #contact h2 {
            font-size: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
