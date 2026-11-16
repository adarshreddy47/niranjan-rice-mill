
"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Sprout,
  ArrowRight,
  MapPin,
  Factory,
  Warehouse,
  Package,
} from "lucide-react";

const mapLink =
  "https://www.google.com/maps/dir/?api=1&destination=14.0559599,78.7551455";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

const [selectedImage, setSelectedImage] = useState(null);


const galleryImages = [
  {
    src: "/niranjan-rice-mill/images/mill.jpg",
    title: "Our Rice Mill Premises",
  },
  {
    src: "/niranjan-rice-mill/images/machinery1.jpg",
    title: "Rice Processing Machinery",
  },
  {
    src: "/niranjan-rice-mill/images/machinery2.jpg",
    title: "Inside Our Processing Unit",
  },
  {
    src: "/niranjan-rice-mill/images/ricebags.jpg",
    title: "Rice Bags & Storage",
  },
];


const nextImage = () => {
  setSelectedImage((current) =>
    (current + 1) % galleryImages.length
  );
};

const previousImage = () => {
  setSelectedImage((current) =>
    (current - 1 + galleryImages.length) % galleryImages.length
  );
};

  

  return (
    <main className="bg-[#FAF8F2] text-[#202820]">
      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full bg-[#123D2A] text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
         


<a href="#home" className="flex shrink-0 items-center gap-3">
  {/* GOLDEN PLANT LOGO */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#D4A84B"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-9 w-9 shrink-0"
    aria-hidden="true"
  >
    <path d="M12 22V12" />
    <path d="M12 12C7 12 4 9 4 5c5 0 8 3 8 7Z" />
    <path d="M12 16c0-5 3-8 8-8 0 5-3 8-8 8Z" />
    <path d="M5 22h14" />
  </svg>

  {/* BUSINESS NAME */}
  <div className="flex flex-col">
    <span className="text-xl font-extrabold leading-tight text-white">
      NIRANJAN
    </span>
    <span className="text-xs font-bold tracking-[3px] text-[#D4A84B]">
      RICE MILL
    </span>
  </div>
</a>





          <nav className="hidden gap-8 lg:flex">
            {[
              "Home",
              "About",
              "Facilities",
              "Products",
              "Gallery",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#D4A84B]"
              >
                {item}
              </a>
            ))}
          </nav>

          
<button
  type="button"
 
onClick={() => setMenuOpen((previous) => !previous)}

  aria-label={menuOpen ? "Close menu" : "Open menu"}
  aria-expanded={menuOpen}
  className="relative z-[9999] flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-[#D4A84B] text-[#123D2A] pointer-events-auto lg:hidden"
>
  {menuOpen ? (
    <span className="text-3xl">×</span>
  ) : (
    <span className="text-2xl">☰</span>
  )}
</button>

        </div>

     
{/* MOBILE NAVIGATION */}
{menuOpen && (
  <div className="fixed left-0 right-0 top-[80px] z-[9999] border-t border-white/10 bg-[#123D2A] px-6 py-6 shadow-2xl lg:hidden">
    <div className="mx-auto flex max-w-7xl flex-col gap-5">
      {[
        "Home",
        "About",
        "Facilities",
        "Products",
        "Gallery",
        "Contact",
      ].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          className="block py-2 text-base font-semibold text-white transition-colors hover:text-[#D4A84B]"
        >
          {item}
        </a>
      ))}
    </div>
  </div>
)}

      </header>

   
{/* HERO */}
<section
  id="home"
  className="relative flex min-h-[620px] scroll-mt-20 items-center overflow-hidden bg-[#123D2A] px-5 py-20 text-white sm:px-8 md:min-h-[760px] md:px-12 lg:px-16"
  style={{
    backgroundImage:
      "linear-gradient(90deg, rgba(5,35,23,0.94) 0%, rgba(9,43,29,0.82) 48%, rgba(9,43,29,0.55) 100%), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=85')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="relative z-10 mx-auto w-full max-w-7xl">
    <div className="max-w-4xl">

      {/* SMALL INTRODUCTION */}
      <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#D4A84B] sm:text-sm md:tracking-[5px]">
        Welcome to Niranjan Rice Mill
      </p>

      {/* MAIN HEADING */}
      <h1 className="max-w-4xl text-[clamp(2.4rem,7vw,4.8rem)] font-extrabold leading-[1.13] tracking-tight">
        Quality Rice.
        <span className="mt-2 block text-[#D4A84B]">
          Trusted Processing.
        </span>
        <span className="mt-2 block">
          Strong Relationships.
        </span>
      </h1>

      {/* DESCRIPTION */}
      <p className="mt-7 max-w-2xl text-sm leading-7 text-gray-200 sm:text-base sm:leading-8 md:text-lg">
        Niranjan Rice Mill, also known as Adhireddy Rice Mill,
        is located near Rayachoty, Andhra Pradesh.
        Explore our mill, processing machinery, and rice
        storage facilities.
      </p>

      {/* ACTION BUTTONS */}
      <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">

        <a
          href="#about"
          className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#D4A84B] px-6 py-3 text-sm font-bold text-[#123D2A] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#E5BC61] sm:text-base"
        >
          Explore Our Mill
          <span aria-hidden="true">→</span>
        </a>

        <a
          href="#contact"
          className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/70 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-[#123D2A] sm:text-base"
        >
          Contact Us
        </a>

        <a
          href="https://www.google.com/maps/dir/?api=1&destination=14.0559599%2C78.7551455"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/70 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-[#123D2A] sm:text-base"
        >
          <span aria-hidden="true">📍</span>
          Get Directions
        </a>
      </div>

      {/* LOCATION */}
      <div className="mt-10 flex items-center gap-2 text-xs text-gray-200 sm:text-sm">
        <span className="text-[#D4A84B]" aria-hidden="true">●</span>
        Near Rayachoty, Andhra Pradesh, India
      </div>
    </div>
  </div>
</section>


      {/* ABOUT */}
      <section id="about" className="scroll-mt-20 px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="font-bold tracking-widest text-[#B18A38]">
              ABOUT OUR MILL
            </p>
            <h2 className="mt-4 text-4xl font-bold text-[#123D2A]">
              Welcome to Niranjan Rice Mill
            </h2>
            <p className="mt-6 leading-8 text-gray-600">
              Niranjan Rice Mill (Adhireddy Rice Mill)
              is located near Rayachoty in Andhra Pradesh.
              Our premises include industrial rice-processing
              machinery and storage areas with rice bags.
            </p>
            <p className="mt-4 leading-8 text-gray-600">
              Discover our facilities and get in touch
              for more information about our business.
            </p>
          </div>

         
<div className="group relative overflow-hidden rounded-2xl shadow-2xl">
  <img
    src="/niranjan-rice-mill/images/mill.jpg"
    alt="Niranjan Rice Mill premises"
    className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
  />

  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8">
    <p className="text-sm font-semibold uppercase tracking-widest text-[#D4A84B]">
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
  className="scroll-mt-20 bg-[#F0F1E9] px-6 py-24"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-14 text-center">
      <p className="font-semibold uppercase tracking-[4px] text-[#B18A38]">
        Our Infrastructure
      </p>

      <h2 className="mt-4 text-4xl font-bold text-[#123D2A] md:text-5xl">
        Our Rice Mill Facilities
      </h2>

      <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
        Explore the machinery, processing areas, and rice
        storage facilities at Niranjan Rice Mill.
      </p>
    </div>

   <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {[
        {
          image: "/niranjan-rice-mill/images/machinery1.jpg",
          title: "Rice Processing Machinery",
          description:
            "A closer look at the industrial machinery installed at our rice mill.",
        },
        {
          image: "/niranjan-rice-mill/images/machinery2.jpg",
          title: "Inside Our Processing Unit",
          description:
            "Explore the equipment and processing infrastructure inside our mill.",
        },
        {
          image: "/niranjan-rice-mill/images/ricebags.jpg",
          title: "Rice Bags & Storage",
          description:
            "View the rice bags and storage areas at our premises.",
        },
      ].map((facility) => (
        <div
          key={facility.title}
          className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
        >
          

<div className="overflow-hidden">
  <img
    src={facility.image}
    alt={facility.title}
    loading="lazy"
    className="facility-image object-center transition-transform duration-700 group-hover:scale-105"
  />
</div>



          <div className="p-8">
            <div className="mb-4 h-1 w-14 rounded-full bg-[#D4A84B]" />

            <h3 className="text-2xl font-bold text-[#123D2A]">
              {facility.title}
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              {facility.description}
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-[#123D2A] transition hover:text-[#B18A38]"
            >
              Contact Our Mill
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


    
{/* PRODUCTS */}
<section
  id="products"
  className="scroll-mt-20 bg-[#FAF8F2] px-6 py-24"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-14 text-center">
      <p className="font-semibold uppercase tracking-[4px] text-[#B18A38]">
        Explore Our Rice
      </p>

      <h2 className="mt-4 text-4xl font-bold text-[#123D2A] md:text-5xl">
        Our Rice Products
      </h2>

      <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
        Discover the packaged rice products pictured at our mill.
        Contact us for information about available varieties,
        packaging sizes, and business enquiries.
      </p>
    </div>

    <div className="grid items-center gap-12 lg:grid-cols-2">
      


<div className="group flex h-[260px] w-full items-center justify-center overflow-hidden rounded-2xl bg-[#F0F1E9] shadow-xl transition-shadow duration-500 hover:shadow-2xl sm:h-[340px] lg:h-[410px]">
  <img
    src="/images/ricebags.jpg"
    alt="Rice bags at Niranjan Rice Mill"
    loading="lazy"
    className="h-full w-full object-cover object-[center_75%] transition-transform duration-700 ease-in-out group-hover:scale-110"
  />
</div>




      <div>
        <p className="font-semibold uppercase tracking-[3px] text-[#B18A38]">
          Rice & Packaging
        </p>

        <h3 className="mt-4 text-3xl font-bold leading-tight text-[#123D2A] md:text-4xl">
          Explore Rice Products at Our Mill
        </h3>

        <p className="mt-6 leading-8 text-gray-600">
          Our photographs show a selection of packaged rice bags
          stored at our premises. For details about rice varieties,
          packaging options, and current availability, please
          contact our team directly.
        </p>

        <div className="mt-8 space-y-4">
          {[
            "Rice variety enquiries",
            "Packaging and bag size enquiries",
            "Availability and business enquiries",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#123D2A] text-sm text-white">
                ✓
              </span>
              <span className="font-medium text-[#202820]">
                {item}
              </span>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-10 inline-flex items-center gap-3 rounded-lg bg-[#D4A84B] px-8 py-4 font-bold text-[#123D2A] transition hover:bg-[#E4BA61]"
        >
          Enquire About Rice
          <ArrowRight size={20} />
        </a>
      </div>
    </div>
  </div>
</section>


    
{/* GALLERY */}
<section
  id="gallery"
  className="scroll-mt-24 bg-[#F0F1E9] px-6 py-24"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-14 text-center">
      <p className="font-semibold uppercase tracking-[4px] text-[#B18A38]">
        A Glimpse Inside
      </p>

      <h2 className="mt-4 text-4xl font-bold text-[#123D2A] md:text-5xl">
        Our Photo Gallery
      </h2>

      <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
        Explore actual photographs of our rice mill premises,
        machinery, and rice storage facilities.
      </p>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {galleryImages.map((photo, index) => (
        <button
          key={photo.src}
          type="button"
          onClick={() => setSelectedImage(index)}
          aria-label={`View ${photo.title} fullscreen`}
          className="group overflow-hidden rounded-2xl bg-white text-left shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4A84B]"
        >
          <div className="relative h-64 overflow-hidden">
            <img
              src={photo.src}
              alt={photo.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/40">
              <span className="rounded-full border border-white px-5 py-2 text-sm font-semibold text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                View Photo
              </span>
            </div>
          </div>

          <div className="p-5">
            <h3 className="font-bold text-[#123D2A]">
              {photo.title}
            </h3>
          </div>
        </button>
      ))}
    </div>
  </div>
</section>


     
{/* CONTACT */}
<section
  id="contact"
  className="scroll-mt-20 bg-[#FAF8F2] px-6 py-24"
>
  <div className="mx-auto max-w-7xl">

    {/* SECTION HEADING */}
    <div className="mb-14 text-center">
      <p className="font-semibold uppercase tracking-[4px] text-[#B18A38]">
        Get In Touch
      </p>

      <h2 className="mt-4 text-4xl font-bold text-[#123D2A] md:text-5xl">
        Contact Niranjan Rice Mill
      </h2>

      <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
        Have questions about rice products, processing,
        or business enquiries? Contact our mill directly.
      </p>
    </div>

    <div className="grid gap-10 lg:grid-cols-2">

      {/* LEFT SIDE - CONTACT DETAILS */}
      <div className="space-y-6">

        {/* PHONE CARD */}
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <div className="mb-4 text-3xl">📞</div>

          <h3 className="text-2xl font-bold text-[#123D2A]">
            Call Our Rice Mill
          </h3>

          <p className="mt-3 text-gray-600">
            Speak with us for rice and business enquiries.
          </p>

          <a
            href="tel:+919346364338"
            className="mt-5 inline-block text-xl font-bold text-[#123D2A] hover:text-[#B18A38]"
          >
            +91 9346364338
          </a>

          <div className="mt-5">
            <a
              href="tel:+919346364338"
              className="inline-flex rounded-lg bg-[#123D2A] px-6 py-3 font-semibold text-white transition hover:bg-[#20583D]"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* WHATSAPP CARD */}
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <div className="mb-4 text-3xl">💬</div>

          <h3 className="text-2xl font-bold text-[#123D2A]">
            WhatsApp Enquiries
          </h3>

          <p className="mt-3 text-gray-600">
            Send us a message about rice products,
            availability, or other enquiries.
          </p>

          <a
            href="https://wa.me/919346364338?text=Hello%20Niranjan%20Rice%20Mill%2C%20I%20would%20like%20to%20know%20more%20about%20your%20rice%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-bold text-white transition hover:bg-[#1DA851]"
          >
            Chat on WhatsApp ↗
          </a>
        </div>

        {/* LOCATION CARD */}
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <div className="mb-4 text-3xl">📍</div>

          <h3 className="text-2xl font-bold text-[#123D2A]">
            Visit Our Rice Mill
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Niranjan Rice Mill (Adhireddy Rice Mill)
            <br />
            Near Rayachoty, Andhra Pradesh, India
          </p>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=14.0559599%2C78.7551455"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-lg bg-[#D4A84B] px-6 py-3 font-bold text-[#123D2A] transition hover:bg-[#E4BA61]"
          >
            Get Directions ↗
          </a>
        </div>
      </div>

      {/* RIGHT SIDE - ENQUIRY FORM */}
      <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
        <h3 className="text-3xl font-bold text-[#123D2A]">
          Send an Enquiry
        </h3>

        <p className="mt-3 text-gray-600">
          Fill out the form and continue to WhatsApp
          to send your enquiry directly to our mill.
        </p>

        <form
          className="mt-8 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();

            const form = e.currentTarget;
            if (!form.reportValidity()) return;

            const data = new FormData(form);

            const name = String(data.get("name") || "").trim();
            const phone = String(data.get("phone") || "").trim();
            const type = String(data.get("type") || "");
            const message = String(data.get("message") || "").trim();

            const text = [
              "Hello Niranjan Rice Mill,",
              "",
              "I would like to make an enquiry.",
              "",
              `Name: ${name}`,
              `Phone: ${phone}`,
              `Enquiry: ${type}`,
              `Message: ${message}`,
            ].join("\n");

            const url =
              "https://wa.me/919346364338?text=" +
              encodeURIComponent(text);

            window.location.href = url;
          }}
        >
          {/* NAME */}
          <div>
            <label
              htmlFor="customer-name"
              className="mb-2 block font-semibold text-[#123D2A]"
            >
              Your Name *
            </label>

            <input
              id="customer-name"
              type="text"
              name="name"
              required
              minLength={2}
              maxLength={100}
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-4 text-[#202820] outline-none focus:border-[#D4A84B]"
            />
          </div>

          {/* PHONE */}
          <div>
            <label
              htmlFor="customer-phone"
              className="mb-2 block font-semibold text-[#123D2A]"
            >
              Phone Number *
            </label>

            <input
              id="customer-phone"
              type="tel"
              name="phone"
              required
              pattern="[6-9][0-9]{9}"
              maxLength={10}
              title="Enter a valid 10-digit Indian mobile number"
              placeholder="Enter 10-digit mobile number"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-4 text-[#202820] outline-none focus:border-[#D4A84B]"
            />
          </div>

          {/* ENQUIRY TYPE */}
          <div>
            <label
              htmlFor="enquiry-type"
              className="mb-2 block font-semibold text-[#123D2A]"
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
              <option value="Rice Products">
                Rice Products
              </option>
              <option value="Rice Availability">
                Rice Availability
              </option>
              <option value="Rice Processing">
                Rice Processing
              </option>
              <option value="Business Enquiry">
                Business Enquiry
              </option>
              <option value="Other">
                Other
              </option>
            </select>
          </div>

          {/* MESSAGE */}
          <div>
            <label
              htmlFor="customer-message"
              className="mb-2 block font-semibold text-[#123D2A]"
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

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full rounded-xl bg-[#123D2A] px-6 py-4 text-lg font-bold text-white transition hover:bg-[#20583D]"
          >
            Continue to WhatsApp ↗
          </button>

          <p className="text-center text-xs leading-5 text-gray-500">
            This opens WhatsApp with your enquiry.
            You must press Send in WhatsApp to deliver
            your message.
          </p>
        </form>
      </div>
    </div>

    {/* GOOGLE MAPS */}
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



{/* FLOATING WHATSAPP BUTTON */}
<a
  href="https://wa.me/919346364338?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20rice."
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with Niranjan Rice Mill on WhatsApp"
  className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#1DA851] hover:shadow-2xl"
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
      <footer className="bg-[#0B281B] px-6 py-10 text-center text-white">
        <h2 className="text-xl font-bold">
          NIRANJAN RICE MILL
        </h2>
        <p className="mt-3 text-gray-300">
          Adhireddy Rice Mill | Andhra Pradesh
        </p>
        
<p className="mt-5 text-sm text-gray-400">
  © 2026 Niranjan Rice Mill. All Rights Reserved.
</p>

      </footer>

{/* FULLSCREEN GALLERY LIGHTBOX */}
{selectedImage !== null && (
  <div
    role="dialog"
    aria-modal="true"
    aria-label="Photo gallery viewer"
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
    onClick={() => setSelectedImage(null)}
  >
    <button
      type="button"
      onClick={() => setSelectedImage(null)}
      aria-label="Close gallery"
      className="absolute right-5 top-5 z-20 rounded-full bg-white/15 px-4 py-2 text-2xl text-white hover:bg-white/30"
    >
      ×
    </button>

    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        previousImage();
      }}
      aria-label="Previous photo"
      className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 px-4 py-3 text-2xl text-white hover:bg-white/40 md:left-8"
    >
      ‹
    </button>

    <div
      className="flex max-w-5xl flex-col items-center"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={galleryImages[selectedImage].src}
        alt={galleryImages[selectedImage].title}
        className="max-h-[75vh] max-w-full rounded-xl object-contain shadow-2xl"
      />

      <p className="mt-5 text-center text-lg font-semibold text-white">
        {galleryImages[selectedImage].title}
      </p>

      <p className="mt-2 text-sm text-gray-400">
        {selectedImage + 1} / {galleryImages.length}
      </p>
    </div>

    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        nextImage();
      }}
      aria-label="Next photo"
      className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 px-4 py-3 text-2xl text-white hover:bg-white/40 md:right-8"
    >
      ›
    </button>
  </div>
)}

    </main>
  );
}

