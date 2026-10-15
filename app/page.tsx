
"use client";

import { FormEvent, useState } from "react";

const WHATSAPP_NUMBER = "91+7534005812"; // Yahan apna asli number daalein

const services = [
  {
    number: "01",
    title: "Modular Kitchen",
    text: "Beautiful, functional kitchens designed around your lifestyle.",
  },
  {
    number: "02",
    title: "Bedroom Interiors",
    text: "Calm, comfortable bedrooms with refined finishes and lighting.",
  },
  {
    number: "03",
    title: "Wardrobes",
    text: "Elegant storage solutions designed for your space.",
  },
  {
    number: "04",
    title: "False Ceiling",
    text: "Sophisticated ceiling designs with warm ambient lighting.",
  },
  {
    number: "05",
    title: "TV Units",
    text: "Contemporary entertainment walls with smart storage.",
  },
  {
    number: "06",
    title: "Civil & 3D Design",
    text: "Thoughtful planning, detailed design and execution support.",
  },
];

const projects = [
  {
    title: "Living Room",
    category: "Modern living spaces",
    image: "/images/living-room.jpeg",
  },
  {
    title: "Modular Kitchen",
    category: "Designed for everyday living",
    image: "/images/kitchen.jpg.jpeg",
  },
  {
    title: "Luxury Bedroom",
    category: "Comfort meets elegance",
    image: "/images/bedroom.jpg.jpeg",
  },
  {
    title: "Designer TV Unit",
    category: "A beautiful focal point",
    image: "/images/tv-unit.jpg.jpeg",
  },
  {
    title: "Custom Wardrobe",
    category: "Storage with style",
    image: "/images/wardrobe.jpeg",
  },
  {
    title: "False Ceiling",
    category: "Lighting and architectural detail",
    image: "/images/false-ceiling.jpeg",
  },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "").trim();

    if (!name || !phone || !service) {
      return;
    }

    const text = [
      "Hello AM Dream House Interiors!",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      `Project details: ${message || "Please contact me."}`,
    ].join("\n");

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    form.reset();
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home">
          AM <span>DREAM HOUSE</span>
          <br />
          <span>INTERIORS.</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#gallery">Our Work</a>
          <a href="#about">About</a>
          <a className="gold-button" href="#contact">
            Let&apos;s Talk
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div>
          <p className="eyebrow">Thoughtful Design · Timeless Living</p>
          <h1>
            Spaces that
            <br />
            tell your <span className="gold">story.</span>
          </h1>

          <p className="hero-copy">
            We transform houses into beautiful homes through thoughtful
            interior design, refined details and spaces made around you.
          </p>

          <div className="hero-actions">
            <a className="gold-button" href="#gallery">
              Explore Our Work ↗
            </a>
            <a className="outline-button" href="#contact">
              Get a Consultation
            </a>
          </div>

          <p className="eyebrow" style={{ marginTop: 35 }}>
            Modular Kitchens · Bedrooms · Complete Interiors
          </p>
        </div>

        <div className="hero-photo">
          <img
            src="/images/living-room.jpeg"
            alt="Interior design by AM Dream House Interiors"
            fetchPriority="high"
          />
          <div className="photo-frame" />
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow">What We Do</p>
          <h2>Designed with purpose. Finished with elegance.</h2>
          <p className="section-copy">
            From one beautiful room to your entire home, we bring your vision
            to life with carefully considered design.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a className="text-link gold" href="#contact">
                Discuss your project ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="gallery">
        <div className="section-heading">
          <p className="eyebrow">Selected Spaces</p>
          <h2>A glimpse of beautiful living.</h2>
          <p className="section-copy">
            Explore our interior categories and discover inspiration for
            your dream home.
          </p>
        </div>

        <div className="gallery-grid">
          {projects.map((project) => (
            <article className="gallery-card" key={project.title}>
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="gallery-info">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="about">
        <div className="about-grid">
          <img
            src="/images/bedroom.jpg.jpeg"
            alt="Elegant bedroom interior"
            loading="lazy"
          />

          <div className="about-copy">
            <p className="eyebrow">About AM Dream House</p>
            <h2>Your dream home deserves thoughtful design.</h2>
            <p className="section-copy">
              We believe great interiors should be beautiful, practical and
              personal. Our approach brings together thoughtful layouts,
              quality finishes and details that make a house feel like home.
            </p>

            <div className="feature-list">
              <div className="feature">✦ Design tailored to you</div>
              <div className="feature">✦ Functional spaces</div>
              <div className="feature">✦ Attention to detail</div>
              <div className="feature">✦ Style with purpose</div>
            </div>

            <a className="gold-button" href="#contact">
              Tell Us Your Vision
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="contact-grid">
          <div className="contact-copy">
            <p className="eyebrow">Let&apos;s Create Together</p>
            <h2>Have a space in mind? Let&apos;s talk.</h2>
            <p className="section-copy">
              Tell us a little about your project. Fill in the form and
              continue on WhatsApp to send your enquiry directly.
            </p>

            <p className="gold">AM Dream House Interiors</p>
            <a
              className="outline-button"
              href={`https://wa.me/${7534005812}?text=${encodeURIComponent(
                "Hello AM Dream House Interiors! I would like to discuss an interior design project."
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp ↗
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <p className="eyebrow">Project Enquiry</p>

            <label>
              Your Name *
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                autoComplete="name"
                required
              />
            </label>

            <label>
              Phone Number *
              <input
                name="phone"
                type="tel"
                placeholder="Your contact number"
                autoComplete="tel"
                required
              />
            </label>

            <label>
              Service Required *
              <select name="service" defaultValue="" required>
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service.number} value={service.title}>
                    {service.title}
                  </option>
                ))}
                <option value="Complete Home Interior">
                  Complete Home Interior
                </option>
              </select>
            </label>

            <label>
              Tell Us About Your Project
              <textarea
                name="message"
                placeholder="Your ideas, requirements or budget..."
              />
            </label>

            <button className="gold-button" type="submit">
              Send Enquiry on WhatsApp ↗
            </button>

            {submitted && (
              <p className="form-note" role="status">
                WhatsApp has been opened. Please send the pre-filled message
                there to complete your enquiry.
              </p>
            )}

            <p className="form-note">
              Your details are placed into a WhatsApp message. This form
              does not store submissions in a database.
            </p>
          </form>
        </div>
      </section>

      <section className="cta-strip">
        <div>
          <p className="eyebrow">Your Home. Your Story.</p>
          <h2>Let&apos;s design something extraordinary.</h2>
        </div>
        <a className="gold-button" href="#contact">
          Start Your Project ↗
        </a>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#home">
          AM <span>DREAM HOUSE</span>
          <br />
          <span>INTERIORS.</span>
        </a>
        <p>Thoughtful spaces. Timeless interiors.</p>
        <p>© {new Date().getFullYear()} AM Dream House Interiors.</p>
      </footer>

      <a
        className="whatsapp-float"
        href={`https://wa.me/${7534005812}?text=${encodeURIComponent(
          "Hello! I am interested in your interior design services."
        )}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact us on WhatsApp"
        title="Chat on WhatsApp"
      >
        WA
      </a>
    </main>
  );
}