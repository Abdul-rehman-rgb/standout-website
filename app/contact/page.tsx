"use client";
import PageLayout from "../components/PageLayout";
import { Plane, Mail, Phone, MapPin, Send } from "lucide-react";
import AnimatedButton from "../components/ui/AnimatedButton";
import { useState } from "react";
import ContactFAQ from "../components/ContactFAQ";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <PageLayout>
      <section className="py-20 px-4 md:px-10 lg:px-16 bg-white">
        <div className="max-w-[1390px] mx-auto">
          <div className="flex flex-col items-center text-center mb-16 gap-6">
            <AnimatedButton text="Contact" Icon={Plane} />
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight max-w-3xl text-[#171717]">
              Let&apos;s Work Together
            </h1>
            <p className="text-[#5D5D5D] max-w-lg text-lg">
              Have a project in mind? We&apos;d love to hear from you. Send us a
              message and we&apos;ll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-semibold text-[#171717] mb-6">
                  Get in Touch
                </h2>
                <p className="text-[#5D5D5D] text-base leading-relaxed mb-8">
                  We&apos;re here to help and answer any question you might have.
                  We look forward to hearing from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F7F8F9] rounded-[12px] flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#171717]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#171717] mb-1">
                      Email
                    </h3>
                    <p className="text-[#5D5D5D]">hello@standoutstudioz.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F7F8F9] rounded-[12px] flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#171717]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#171717] mb-1">
                      Phone
                    </h3>
                    <p className="text-[#5D5D5D]">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F7F8F9] rounded-[12px] flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#171717]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#171717] mb-1">
                      Address
                    </h3>
                    <p className="text-[#5D5D5D]">
                      123 Design Street
                      <br />
                      Creative City, CC 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#F7F8F9] rounded-[24px] p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#171717] mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white rounded-[12px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#171717]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#171717] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white rounded-[12px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#171717]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#171717] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white rounded-[12px] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#171717] resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group relative inline-flex items-center justify-center gap-4 px-8 py-4 bg-black border border-black text-white rounded-full transition-colors duration-500 hover:bg-white hover:text-black [perspective:1000px]"
                >
                  <div className="relative h-6 w-32 [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateX(-90deg)]">
                    <span className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden]">
                      Send Message
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center [transform:rotateX(90deg)translateZ(12px)] [backface-visibility:hidden]">
                      Send Message
                    </span>
                  </div>
                  <div className="relative z-10 p-2 rounded-full bg-white text-black transition-all duration-500 group-hover:bg-black group-hover:text-white group-hover:rotate-[360deg]">
                    <Send className="w-4 h-4" />
                  </div>
                </button>
              </form>
            </div>
          </div>
          <ContactFAQ />
        </div>
      </section>
    </PageLayout>
  );
}

