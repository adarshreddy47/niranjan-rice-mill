
"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Menu,
  X,
  MapPin,
  Phone,
  MessageCircle,
  Factory,
  Package,
  ChevronLeft,
  ChevronRight,
  Send,
  Check,
} from "lucide-react";

const BASE = "/niranjan-rice-mill";
const photo = (name) => `${BASE}/images/${name}`;

const PHONE = "919346364338";
const MAP =
  "https://www.google.com/maps/dir/?api=1&destination=14.0559599,78.7551455";

const links = [
  "Home",
  "About",
  "Facilities",
  "Products",
  "Gallery",
  "Contact",
];

const facilities = [
  {
    title: "Rice Processing Machinery",
    image: photo("machinery1.jpg"),
    description:
      "Explore the industrial machinery installed at Niranjan Rice Mill.",
  },
  {
    title: "Inside Our Processing Unit",
    image: photo("machinery2.jpg"),
    description:
      "Discover the equipment and processing infrastructure inside our mill.",
  },
  {
    title: "Rice Bags & Storage",
    image: photo("ricebags.jpg"),
    description:
      "Take a closer look at our rice bags and storage facilities.",
  },
];

const gallery = [
  {
    title: "Our Rice Mill Premises",
    image: photo("mill.jpg"),
  },
  {
    title: "Rice Processing Machinery",
    image: photo("machinery1.jpg"),
  },
  {
    title: "Inside Our Processing Unit",
    image: photo("machinery2.jpg"),
  },
  {
    title: "Rice Bags & Storage",
    image: photo("ricebags.jpg"),
  },
];

function Heading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-4 text-xs font-extrabold uppercase tracking-[4px] text-[#B18A38] sm:text-sm">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-extrabold leading-tight text-[#123D2A] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setSelectedImage(null);
      if (selectedImage === null) return;

      if (event.key === "ArrowRight") {
        setSelectedImage((i) => (i + 1) % gallery.length);
      }
      if (event.key === "ArrowLeft") {
        setSelectedImage(
          (i) => (i - 1 + gallery.length) % gallery.length
        );
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedImage]);

  function sendEnquiry(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);

    const message = [
      "Hello Niranjan Rice Mill,",
      "",
      "I would like to make an enquiry.",
      "",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Enquiry: ${data.get("type")}`,
      `Message: ${data.get("message")}`,
    ].join("\n");

    window.location.href =
      `https://wa.me/${PHONE}?text=` +
      encodeURIComponent(message);
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAF8F2] text-[#202820]">
      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#123D2A] text-white shadow-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a
            href="#home"
            className="flex items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4A84B]/50 bg-white/10">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D4A84B"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8"
                aria-hidden="true"
              >
                <path d="M12 22V12" />
                <path d="M12 12C7 12 4 9 4 5c5 0 8 3 8 7Z" />
                <path d="M12 16c0-5 3-8 8-8 0 5-3 8-8 8Z" />
                <path d="M5 22h14" />
              </svg>
            </div>
            <div>
              <div className="text-xl font-black leading-tight tracking-wide">
                NIRANJAN
              </div>
              <div className="text-xs font-bold tracking-[3px] text-[#D4A84B]">
                RICE MILL
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold transition hover:text-[#D4A84B]"
              >
                {item}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#D4A84B] text-[#123D2A] lg:hidden"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#123D2A] px-6 py-4 shadow-xl lg:hidden">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/10 py-3 font-semibold hover:text-[#D4A84B]"
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-[700px] items-center bg-[#123D2A] px-6 pb-24 pt-40 text-white sm:px-10 lg:min-h-[790px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(5,35,23,.96),rgba(9,43,29,.83) 55%,rgba(9,43,29,.48)),url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-6 text-xs font-extrabold uppercase tracking-[4px] text-[#D4A84B] sm:text-sm">
              Welcome to Niranjan Rice Mill
            </p>

            <h1 className="text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-[70px]">
              Quality Rice.
              <span className="mt-3 block text-[#D4A84B]">
                Trusted Processing.
              </span>
              <span className="mt-3 block">
                Strong Relationships.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
              Niranjan Rice Mill, also known as Adhireddy Rice
              Mill, is located near Rayachoty, Andhra Pradesh.
              Explore our rice mill, processing machinery, and
              rice storage facilities.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#D4A84B] px-7 py-4 font-bold text-[#123D2A] shadow-lg transition hover:-translate-y-1 hover:bg-[#E5BC61]"
              >
                Explore Our Mill <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/70 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#123D2A]"
              >
                Contact Us
              </a>
              <a
                href={MAP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/70 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#123D2A]"
              >
                <MapPin size={19} /> Get Directions
              </a>
            </div>

            <p className="mt-10 flex items-center gap-2 text-sm text-gray-200">
              <MapPin size={17} className="text-[#D4A84B]" />
              Near Rayachoty, Andhra Pradesh, India
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24 sm:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[4px] text-[#B18A38]">
              About Our Mill
            </p>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#123D2A] sm:text-4xl lg:text-5xl">
              Welcome to Niranjan Rice Mill
            </h2>
            <div className="mt-5 h-1 w-20 rounded-full bg-[#D4A84B]" />
            <p className="mt-7 text-base leading-8 text-gray-600">
              Niranjan Rice Mill (Adhireddy Rice Mill) is
              located near Rayachoty in Andhra Pradesh.
              Our premises include industrial rice-processing
              machinery and storage areas with rice bags.
            </p>
            <p className="mt-5 text-base leading-8 text-gray-600">
              Discover our facilities, explore our photographs,
              and contact our team for information about rice
              products, processing, and business enquiries.
            </p>
            <a
              href="#facilities"
              className="mt-8 inline-flex items-center gap-3 font-bold text-[#123D2A] hover:text-[#B18A38]"
            >
              Explore Our Facilities <ArrowRight size={20} />
            </a>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={photo("mill.jpg")}
              alt="Niranjan Rice Mill premises"
              className="h-[350px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[440px]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-8">
              <p className="text-sm font-bold uppercase tracking-[3px] text-[#D4A84B]">
                Our Facilities
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Niranjan Rice Mill
              </h3>
              <p className="mt-2 text-sm text-gray-200">
                Adhireddy Rice Mill, Andhra Pradesh
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section
        id="facilities"
        className="bg-[#F0F1E9] px-6 py-24 sm:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <Heading
            eyebrow="Our Infrastructure"
            title="Our Rice Mill Facilities"
            description="Explore the machinery, processing areas, and rice storage facilities at Niranjan Rice Mill."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-5 h-1 w-14 rounded-full bg-[#D4A84B]" />
                  <h3 className="text-2xl font-bold text-[#123D2A]">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-gray-600">
                    {item.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-2 font-bold text-[#123D2A] hover:text-[#B18A38]"
                  >
                    Contact Our Mill <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <Heading
            eyebrow="Explore Our Rice"
            title="Our Rice Products"
            description="Discover the packaged rice products pictured at our mill. Contact us for information about available varieties, packaging sizes, and business enquiries."
          />

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="group overflow-hidden rounded-2xl bg-[#F0F1E9] shadow-xl">
              <img
                src={photo("ricebags.jpg")}
                alt="Rice bags at Niranjan Rice Mill"
                loading="lazy"
                className="h-[300px] w-full object-cover object-center transition duration-700 group-hover:scale-105 sm:h-[430px]"
              />
            </div>

            <div>
              <p className="text-sm font-extrabold uppercase tracking-[3px] text-[#B18A38]">
                Rice & Packaging
              </p>
              <h3 className="mt-4 text-3xl font-extrabold leading-tight text-[#123D2A] sm:text-4xl">
                Explore Rice Products at Our Mill
              </h3>
              <p className="mt-6 leading-8 text-gray-600">
                Our photographs show packaged rice bags stored
                at our premises. For details about rice
                varieties, packaging options, and current
                availability, please contact our team directly.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Rice variety enquiries",
                  "Packaging and bag size enquiries",
                  "Availability and business enquiries",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#123D2A] text-white">
                      <Check size={16} />
                    </span>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-10 inline-flex items-center gap-3 rounded-lg bg-[#D4A84B] px-8 py-4 font-bold text-[#123D2A] transition hover:bg-[#E5BC61]"
              >
                Enquire About Rice <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="bg-[#F0F1E9] px-6 py-24 sm:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <Heading
            eyebrow="A Glimpse Inside"
            title="Our Photo Gallery"
            description="Explore actual photographs of our rice mill premises, machinery, and rice storage facilities."
          />

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setSelectedImage(index)}
                aria-label={`View ${item.title}`}
                className="group overflow-hidden rounded-2xl bg-white text-left shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/50">
                    <span className="rounded-full border border-white px-5 py-2 text-sm font-bold text-white opacity-0 transition group-hover:opacity-100">
                      View Photo
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#123D2A]">
                    {item.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <Heading
            eyebrow="Get In Touch"
            title="Contact Niranjan Rice Mill"
            description="Have questions about rice products, processing, or business enquiries? Contact our mill directly."
          />

          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <Phone size={32} className="text-[#B18A38]" />
                <h3 className="mt-5 text-2xl font-bold text-[#123D2A]">
                  Call Our Rice Mill
                </h3>
                <p className="mt-3 text-gray-600">
                  Speak with us for rice and business enquiries.
                </p>
                <p className="mt-4 text-xl font-extrabold text-[#123D2A]">
                  +91 9346364338
                </p>
                <a
                  href={`tel:+${PHONE}`}
                  className="mt-6 inline-flex rounded-lg bg-[#123D2A] px-6 py-3 font-bold text-white hover:bg-[#20583D]"
                >
                  Call Now
                </a>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <MessageCircle size={34} className="text-[#25D366]" />
                <h3 className="mt-5 text-2xl font-bold text-[#123D2A]">
                  WhatsApp Enquiries
                </h3>
                <p className="mt-3 leading-7 text-gray-600">
                  Send us a message about rice products,
                  availability, or other enquiries.
                </p>
                <a
                  href={`https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Niranjan Rice Mill, I would like to enquire about rice products.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-bold text-white hover:bg-[#1DA851]"
                >
                  Chat on WhatsApp <ArrowRight size={18} />
                </a>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <MapPin size={34} className="text-[#B18A38]" />
                <h3 className="mt-5 text-2xl font-bold text-[#123D2A]">
                  Visit Our Rice Mill
                </h3>
                <p className="mt-3 leading-7 text-gray-600">
                  Niranjan Rice Mill (Adhireddy Rice Mill)
                  <br />
                  Near Rayachoty, Andhra Pradesh, India
                </p>
                <a
                  href={MAP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#D4A84B] px-6 py-3 font-bold text-[#123D2A] hover:bg-[#E5BC61]"
                >
                  Get Directions <ArrowRight size={18} />
                </a>
              </div>
            </div>

            {/* ENQUIRY FORM */}
            <div className="rounded-3xl bg-white p-7 shadow-xl sm:p-10">
              <h3 className="text-3xl font-extrabold text-[#123D2A]">
                Send an Enquiry
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Fill out the form and continue to WhatsApp
                to send your enquiry directly to our mill.
              </p>

              <form onSubmit={sendEnquiry} className="mt-8 space-y-6">
                <div>
                  <label
                    htmlFor="customer-name"
                    className="mb-2 block font-bold text-[#123D2A]"
                  >
                    Your Name *
                  </label>
                  <input
                    id="customer-name"
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    maxLength={100}
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-4 text-[#202820] outline-none focus:border-[#D4A84B]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="customer-phone"
                    className="mb-2 block font-bold text-[#123D2A]"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="customer-phone"
                    name="phone"
                    type="tel"
                    required
                    pattern="[6-9][0-9]{9}"
                    maxLength={10}
                    title="Enter a valid 10-digit Indian mobile number"
                    placeholder="Enter 10-digit mobile number"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-4 text-[#202820] outline-none focus:border-[#D4A84B]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="enquiry-type"
                    className="mb-2 block font-bold text-[#123D2A]"
                  >
                    Enquiry Type *
                  </label>
                  <select
                    id="enquiry-type"
                    name="type"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-4 text-[#202820] outline-none focus:border-[#D4A84B]"
                  >
                    <option value="" disabled>
                      Select an enquiry
                    </option>
                    <option>Rice Products</option>
                    <option>Rice Availability</option>
                    <option>Rice Processing</option>
                    <option>Business Enquiry</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="customer-message"
                    className="mb-2 block font-bold text-[#123D2A]"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="customer-message"
                    name="message"
                    required
                    minLength={5}
                    maxLength={1000}
                    rows={5}
                    placeholder="Tell us what you are looking for..."
                    className="w-full resize-y rounded-lg border border-gray-300 bg-white px-4 py-4 text-[#202820] outline-none focus:border-[#D4A84B]"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#123D2A] px-6 py-4 text-lg font-bold text-white transition hover:bg-[#20583D]"
                >
                  Continue to WhatsApp <Send size={19} />
                </button>

                <p className="text-center text-xs leading-5 text-gray-500">
                  WhatsApp will open with your enquiry.
                  Press Send in WhatsApp to deliver it.
                </p>
              </form>
            </div>
          </div>

          {/* MAP */}
          <div className="mt-14 overflow-hidden rounded-3xl bg-white shadow-xl">
            <iframe
              title="Niranjan Rice Mill Location"
              src="https://maps.google.com/maps?q=14.0559599,78.7551455&z=16&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href={`https://wa.me/${PHONE}?text=${encodeURIComponent("Hello Niranjan Rice Mill, I would like to enquire about rice.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110"
      >
        
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 32"
  fill="currentColor"
  className="h-9 w-9"
  aria-hidden="true"
>
  <path d="M16 .8A15.1 15.1 0 0 0 3 23.6L.9 31l7.6-2A15.2 15.2 0 1 0 16 .8Zm0 27.5a12.3 12.3 0 0 1-6.3-1.7l-.5-.3-4.5 1.2 1.2-4.4-.3-.5A12.4 12.4 0 1 1 16 28.3Zm6.8-9.3c-.4-.2-2.2-1.1-2.6-1.2-.3-.1-.6-.2-.8.2-.3.4-1 1.2-1.2 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7.4-.6c.1-.2 0-.5 0-.7l-1.2-2.9c-.3-.7-.6-.6-.8-.6h-.7c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.2s1.4 3.7 1.6 3.9c.2.3 2.7 4.1 6.5 5.6.9.4 1.6.6 2.1.7.9.3 1.8.2 2.5.1.8-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5Z" />
</svg>

      </a>

      {/* FOOTER */}
      <footer className="bg-[#0B281B] px-6 py-12 text-center text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-extrabold">
            NIRANJAN RICE MILL
          </h2>
          <p className="mt-3 text-[#D4A84B]">
            Adhireddy Rice Mill | Andhra Pradesh
          </p>
          <p className="mt-6 text-sm text-gray-400">
            © 2026 Niranjan Rice Mill. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* FULLSCREEN PHOTO VIEWER */}
      {selectedImage !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo gallery"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery"
            className="absolute right-5 top-5 z-20 rounded-full bg-white/20 p-3 text-white"
          >
            <X size={25} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(
                (selectedImage - 1 + gallery.length) %
                  gallery.length
              );
            }}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white sm:left-8"
          >
            <ChevronLeft size={28} />
          </button>

          <div
            className="flex max-w-5xl flex-col items-center px-10"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery[selectedImage].image}
              alt={gallery[selectedImage].title}
              className="max-h-[75vh] max-w-full rounded-xl object-contain shadow-2xl"
            />
            <p className="mt-5 text-center text-lg font-bold text-white">
              {gallery[selectedImage].title}
            </p>
            <p className="mt-2 text-sm text-gray-400">
              {selectedImage + 1} / {gallery.length}
            </p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(
                (selectedImage + 1) % gallery.length
              );
            }}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white sm:right-8"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </main>
  );
}
