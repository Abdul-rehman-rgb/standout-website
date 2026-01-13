import PageLayout from "../components/PageLayout";
import { Plane, Code, Palette, Smartphone, Search, Zap } from "lucide-react";
import AnimatedButton from "../components/ui/AnimatedButton";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful, intuitive interfaces that users love. We focus on user-centered design principles to deliver exceptional experiences.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design",
      "Design Systems",
    ],
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building fast, responsive, and scalable web applications using the latest technologies and best practices.",
    features: [
      "Frontend Development",
      "Backend Development",
      "Full-Stack Solutions",
      "Performance Optimization",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Developing native and cross-platform mobile applications that provide seamless user experiences.",
    features: [
      "iOS Development",
      "Android Development",
      "React Native",
      "App Store Optimization",
    ],
  },
  {
    icon: Search,
    title: "SEO & Marketing",
    description: "Improving your online visibility and driving organic traffic through strategic SEO and marketing campaigns.",
    features: [
      "SEO Optimization",
      "Content Marketing",
      "Social Media Strategy",
      "Analytics & Reporting",
    ],
  },
  {
    icon: Zap,
    title: "Branding",
    description: "Creating compelling brand identities that resonate with your audience and differentiate you from competitors.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity",
      "Brand Strategy",
    ],
  },
];

export default function ServicesPage() {
  return (
    <PageLayout>
      <section className="py-20 px-4 md:px-10 lg:px-16 bg-white">
        <div className="max-w-[1390px] mx-auto">
          <div className="flex flex-col items-center text-center mb-16 gap-6">
            <AnimatedButton text="Services" Icon={Plane} />
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight max-w-3xl text-[#171717]">
              What We Offer
            </h1>
            <p className="text-[#5D5D5D] max-w-lg text-lg">
              Comprehensive solutions to help your business grow and succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-[#F7F8F9] rounded-[24px] p-8 hover:bg-white hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-[#171717] rounded-[12px] flex items-center justify-center group-hover:bg-black transition-colors">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-semibold text-[#171717] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-[#5D5D5D] text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-[#8e8e8e] text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-[#171717] rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

