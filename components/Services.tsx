const services = [
  {
    title: "Modular Kitchen",
    description: "Modern, stylish and practical modular kitchen designs.",
    icon: "🍽️",
  },
  {
    title: "Wardrobe Design",
    description: "Custom wardrobes designed for maximum storage and elegance.",
    icon: "🚪",
  },
  {
    title: "False Ceiling",
    description: "Premium false ceiling designs with beautiful lighting.",
    icon: "💡",
  },
  {
    title: "TV Unit",
    description: "Elegant TV panels and entertainment units for your home.",
    icon: "📺",
  },
  {
    title: "Civil Construction",
    description: "Complete house construction and civil work solutions.",
    icon: "🏠",
  },
  {
    title: "Painting",
    description: "Professional interior and exterior painting services.",
    icon: "🎨",
  },
  {
    title: "Electrical Work",
    description: "Safe and professional electrical installation and solutions.",
    icon: "⚡",
  },
  {
    title: "Plumbing",
    description: "Reliable plumbing installation, repair and maintenance.",
    icon: "🔧",
  },
  {
    title: "3D Interior Design",
    description: "Realistic 3D designs to visualize your dream space.",
    icon: "✨",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "90px 20px",
        background: "#f8f9fa",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Section Heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "55px",
          }}
        >
          <p
            style={{
              color: "#d4af37",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            What We Do
          </p>

          <h2
            style={{
              fontSize: "42px",
              fontWeight: 700,
              color: "#222",
              margin: "0 0 15px",
            }}
          >
            Our Services
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#666",
              fontSize: "17px",
              lineHeight: 1.7,
            }}
          >
            Complete interior design, construction and turnkey solutions
            designed to transform your house into your dream home.
          </p>
        </div>

        {/* Service Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                background: "#ffffff",
                borderRadius: "18px",
                padding: "32px 25px",
                textAlign: "center",
                border: "1px solid #eeeeee",
                boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
                transition: "all 0.3s ease",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  margin: "0 auto 20px",
                  borderRadius: "50%",
                  background: "#fff8df",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "32px",
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "21px",
                  fontWeight: 700,
                  color: "#222",
                  marginBottom: "12px",
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "15px",
                  color: "#777",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}