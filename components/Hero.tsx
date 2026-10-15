export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "650px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "90px 20px",
        textAlign: "center",
        background:
          "linear-gradient(135deg, #fffdf5 0%, #ffffff 50%, #f7f7f7 100%)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "950px",
          margin: "0 auto",
        }}
      >
        {/* Small Heading */}
        <p
          style={{
            color: "#D4AF37",
            fontSize: "15px",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "18px",
          }}
        >
          Welcome to AM Dream House Interiors
        </p>

        {/* Main Heading */}
        <h1
          style={{
            fontSize: "clamp(42px, 7vw, 72px)",
            lineHeight: 1.1,
            fontWeight: 800,
            color: "#1f1f1f",
            margin: "0 0 22px",
          }}
        >
          We Design Your
          <span
            style={{
              display: "block",
              color: "#D4AF37",
            }}
          >
            Dream Home
          </span>
        </h1>

        {/* Subtitle */}
        <h2
          style={{
            fontSize: "clamp(22px, 3vw, 32px)",
            fontWeight: 600,
            color: "#333",
            margin: "0 0 20px",
          }}
        >
          Premium Interior & Construction Services
        </h2>

        {/* Description */}
        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: 1.8,
            color: "#666",
          }}
        >
          Modular Kitchen • Wardrobe • False Ceiling • TV Unit • Furniture
          • 3D Design • Civil Construction • Complete Turnkey Interior
          Solutions
        </p>

        <p
          style={{
            marginTop: "12px",
            fontSize: "16px",
            fontWeight: 600,
            color: "#555",
          }}
        >
          ✨ Serving Across India
        </p>

        {/* Buttons */}
        <div
          style={{
            marginTop: "38px",
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="tel:+917534005812"
            style={{
              display: "inline-block",
              background: "#D4AF37",
              color: "#111",
              padding: "16px 32px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "16px",
              boxShadow: "0 8px 20px rgba(212,175,55,0.25)",
            }}
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/917534005812"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#25D366",
              color: "#fff",
              padding: "16px 32px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "16px",
              boxShadow: "0 8px 20px rgba(37,211,102,0.25)",
            }}
          >
            💬 WhatsApp Us
          </a>
        </div>

        {/* Trust Line */}
        <div
          style={{
            marginTop: "45px",
            paddingTop: "25px",
            borderTop: "1px solid #e5e5e5",
            color: "#777",
            fontSize: "14px",
          }}
        >
          Quality Design • Modern Concepts • Professional Execution
        </div>
      </div>

      {/* Mobile */}
      <style>{`
        @media (max-width: 600px) {
          #home {
            min-height: auto !important;
            padding: 70px 18px !important;
          }

          #home a {
            width: 100%;
            max-width: 300px;
            box-sizing: border-box;
          }
        }
      `}</style>
    </section>
  );
}