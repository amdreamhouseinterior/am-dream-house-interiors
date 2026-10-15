export default function Footer() {
  return (
    <footer
      style={{
        background: "#111",
        color: "#fff",
        padding: "50px 20px 25px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#D4AF37",
          fontSize: "28px",
          marginBottom: "10px",
        }}
      >
        AM Dream House Interiors
      </h2>

      <p
        style={{
          color: "#ccc",
          maxWidth: "600px",
          margin: "0 auto 25px",
          lineHeight: 1.7,
        }}
      >
        Premium Interior & Construction Services across India.
        Modular Kitchen, Wardrobe, False Ceiling, TV Unit,
        Furniture and Complete Turnkey Interior Solutions.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        <a
          href="#home"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Home
        </a>

        <a
          href="#services"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Services
        </a>

        <a
          href="#about"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          About
        </a>

        <a
          href="#contact"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Contact
        </a>
      </div>

      <div
        style={{
          borderTop: "1px solid #333",
          paddingTop: "20px",
          color: "#999",
          fontSize: "14px",
        }}
      >
        © {new Date().getFullYear()} AM Dream House Interiors.
        All Rights Reserved.
      </div>
    </footer>
  );
}