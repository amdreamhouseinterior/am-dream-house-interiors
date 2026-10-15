const projects = [
  {
    title: "Luxury Modular Kitchen",
    category: "Modular Kitchen",
    image: "/images/kitchen.jpg.jpeg",
  },
  {
    title: "Modern Bedroom",
    category: "Bedroom Interior",
    image: "/images/bedroom.jpg.jpeg",
  },
  {
    title: "Elegant Living Room",
    category: "Living Room",
    image: "/images/living-room.jpeg",
  },
  {
    title: "Premium Wardrobe",
    category: "Wardrobe Design",
    image: "/images/wardrobe.jpeg",
  },
  {
    title: "Designer TV Unit",
    category: "TV Unit",
    image: "/images/tv-unit.jpg.jpeg",
  },
  {
    title: "Modern False Ceiling",
    category: "False Ceiling",
    image: "/images/false-ceiling.jpeg",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      style={{
        padding: "100px 20px",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
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
            Our Portfolio
          </p>

          <h2
            style={{
              fontSize: "42px",
              color: "#222",
              margin: "0 0 15px",
              fontWeight: 700,
            }}
          >
            Our Projects
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
            Explore our interior design concepts and discover how we transform
            ordinary spaces into beautiful dream homes.
          </p>
        </div>

        {/* Project Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.title}
              style={{
                background: "#f8f9fa",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid #eeeeee",
                boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
              }}
            >
              {/* Project Image */}
              <div
                style={{
                  width: "100%",
                  height: "260px",
                  overflow: "hidden",
                  background: "#eeeeee",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              {/* Project Details */}
              <div
                style={{
                  padding: "25px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    color: "#d4af37",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    margin: "0 0 8px",
                  }}
                >
                  {project.category}
                </p>

                <h3
                  style={{
                    margin: 0,
                    fontSize: "21px",
                    color: "#222",
                    lineHeight: 1.4,
                  }}
                >
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <style>{`
        @media (max-width: 768px) {
          #gallery {
            padding: 70px 16px !important;
          }

          #gallery h2 {
            font-size: 34px !important;
          }

          #gallery img {
            height: 230px !important;
          }
        }
      `}</style>
    </section>
  );
}