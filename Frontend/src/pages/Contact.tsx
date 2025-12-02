import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";

export default function Contact() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleMove = (e) => {
      const { clientX: x, clientY: y } = e;
      const applyParallax = (el, intensity = 12) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const rx = (x - (rect.left + rect.width / 2)) / rect.width;
        const ry = (y - (rect.top + rect.height / 2)) / rect.height;
        const rotX = -ry * intensity;
        const rotY = rx * intensity;
        el.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      };
      applyParallax(leftRef.current, 8);
      applyParallax(rightRef.current, 8);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f7faff] to-[#fff0f8] overflow-hidden py-24">
      {/* Background animated blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-purple-300/40 blur-[150px] top-[-100px] left-[-80px] animate-spin-slow"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-indigo-300/40 blur-[140px] bottom-[-120px] right-[-50px] animate-spin-slow-reverse"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight drop-shadow-lg">
            Get in Touch
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            We’d love to hear from you. Let’s build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT CONTACT INFO CARD */}
          <div
            ref={leftRef}
            className="relative p-12 rounded-3xl bg-white/60 backdrop-blur-3xl border border-white/30 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Gradient border overlay */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-40 blur-xl pointer-events-none animate-gradient-slide"></div>

            <h2 className="text-3xl font-bold text-indigo-700 mb-10 z-10 relative">Contact Info</h2>
            <div className="space-y-8 relative z-10">
              {/** Email */}
              <div className="flex gap-5 items-start group hover:scale-[1.03] transition-transform">
                <div className="p-4 rounded-2xl bg-indigo-100 group-hover:bg-indigo-600 shadow-lg transition-all">
                  <EnvelopeIcon className="h-8 w-8 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-align:left-gray-700 hover:text-indigo-600 cursor-pointer transition-colors">support@caworker.com</p>
                  <p className="text-align:left-gray-700 hover:text-indigo-600 cursor-pointer transition-colors">info@caworker.com</p>
                </div>
              </div>

              {/** Phone */}
              <div className="flex gap-5 items-start group hover:scale-[1.03] transition-transform">
                <div className="p-4 rounded-2xl bg-indigo-100 group-hover:bg-indigo-600 shadow-lg transition-all">
                  <PhoneIcon className="h-8 w-8 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-700">+91 1234567890</p>
                  <p className="text-gray-700">+91 9876543210</p>
                </div>
              </div>

              {/** Address */}
              <div className="flex gap-5 items-start group hover:scale-[1.03] transition-transform">
                <div className="p-4 rounded-2xl bg-indigo-100 group-hover:bg-indigo-600 shadow-lg transition-all">
                  <MapPinIcon className="h-8 w-8 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-align:left-lg font-semibold text-gray-900">Office Address</h3>
                  <p className="text-align:left-gray-700 leading-relaxed">
                    123 Business Park<br />Mumbai, Maharashtra 400001<br />India
                  </p>
                </div>
              </div>

              {/** Hours */}
              <div className="flex gap-5 items-start group hover:scale-[1.03] transition-transform">
                <div className="p-4 rounded-2xl bg-indigo-100 group-hover:bg-indigo-600 shadow-lg transition-all">
                  <ClockIcon className="h-8 w-8 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                  <p className="text-gray-700 mt-1">Mon–Fri: 9 AM – 6 PM</p>
                  <p className="text-gray-700">Saturday: 10 AM – 4 PM</p>
                  <p className="text-gray-700">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM CARD */}
          <div
            ref={rightRef}
            className="relative p-12 rounded-3xl bg-white/70 backdrop-blur-3xl border border-white/30 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 blur-xl pointer-events-none animate-gradient-slide"></div>
            <h2 className="text-3xl font-bold text-indigo-700 mb-10 relative z-10">Send Message</h2>
            <form className="space-y-6 relative z-10">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white/90 shadow-md focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white/90 shadow-md focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white/90 shadow-md focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
              <button className="w-full py-4 text-lg font-semibold rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl hover:opacity-90 hover:scale-[1.03] transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-slide {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-slide {
          background-size: 200% 200%;
          animation: gradient-slide 6s ease infinite;
        }
        .animate-spin-slow {
          animation: spin 120s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-reverse 140s linear infinite;
        }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes spin-reverse { 0% { transform: rotate(360deg); } 100% { transform: rotate(0deg); } }
      `}</style>
    </div>
  );
}
