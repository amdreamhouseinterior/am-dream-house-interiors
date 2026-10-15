export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 20px",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* Left Side */}
        <div>
          <p
            style={{
              color: "#d4af37",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            About Our Company
          </p>

          <h2
            style={{
              fontSize: "42px",
              lineHeight: 1.2,
              fontWeight: 700,
              color: "#222",
              marginBottom: "22px",
            }}
          >
            Designing Spaces,
            <br />
            <span style={{ color: "#d4af37" }}>
              Defining Lifestyles.
            </span>
          </h2>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#666",
              marginBottom: "18px",
            }}
          >
            AM Dream House Interiors is a professional interior design and
            construction company dedicated to creating beautiful, comfortable
            and functional spaces.
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#777",
            }}
          >
            From modern modular kitchens and stylish wardrobes to false
            ceilings, TV units, civil construction and complete turnkey
            projects, we provide end-to-end solutions for your dream home.
          </p>
        </div>

        {/* Right Side */}
        <div
          style={{
            background: "#faf8ef",
            borderRadius: "24px",
            padding: "45px",
            border: "1px solid #eee5c8",
            boxShadow: "0 15px 40px rgba(0,0,0,0.07)",
          }}
        >
          <h3
            style={{
              fontSize: "27px",
              fontWeight: 700,
              color: "#222",
              marginBottom: "25px",
            }}
          >
            Why Choose Us?
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div style={{ display: "flex", gap: "15px" }}>
              <span style={{ fontSize: "25px" }}>✓</span>
              <div>
                <h4
                  style={{
                    margin: "0 0 5px",
                    fontSize: "18px",
                    color: "#222",
                  }}
                >
                  Modern & Elegant Designs
                </h4>
                <p
                  style={{
                    margin: 0,
                    color: "#777",
                    lineHeight: 1.5,
                  }}
                >
                  Designs created according to your lifestyle and preferences.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "15px" }}>
              <span style={{ fontSize: "25px" }}>✓</span>
              <div>
                <h4
                  style={{
                    margin: "0 0 5px",
                    fontSize: "18px",
                    color: "#222",
                  }}
                >
                  Complete Solutions
                </h4>
                <p
                  style={{
                    margin: 0,
                    color: "#777",
                    lineHeight: 1.5,
                  }}
                >
                  Interior design, construction and turnkey services under one
                  roof.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "15px" }}>
              <span style={{ fontSize: "25px" }}>✓</span>
              <div>
                <h4
                  style={{
                    margin: "0 0 5px",
                    fontSize: "18px",
                    color: "#222",
                  }}
                >
                  Service Across India
                </h4>
                <p
                  style={{
                    margin: 0,
                    color: "#777",
                    lineHeight: 1.5,
                  }}
                >
                  We take projects across India and can travel to your
                  location.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "15px" }}>
              <span style={{ fontSize: "25px" }}>✓</span>
              <div>
                <h4
                  style={{
                    margin: "0 0 5px",
                    fontSize: "18px",
                    color: "#222",
                  }}
                >
                  Quality & Transparency
                </h4>
                <p
                  style={{
                    margin: 0,
                    color: "#777",
                    lineHeight: 1.5,
                  }}
                >
                  We focus on quality workmanship, clear communication and
                  customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Responsive */}
      <style>{`
        @media (max-width: 768px) {
          #about > div {
            grid-template-columns: 1fr !important;
            gap: 35px !important;
          }

          #about h2 {
            font-size: 34px !important;
          }

          #about > div > div:last-child {
            padding: 30px 25px !important;
          }
        }
      `}</style>
    </section>
  );
}