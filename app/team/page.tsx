import PageLayout from "../components/PageLayout";
import TeamSlider from "../components/ui/TeamSlider";

export default function TeamPage() {
  return (
    <PageLayout>
      <TeamSlider />
      
      {/* Additional Team Info Section */}
      <section className="py-20 px-4 md:px-10 lg:px-16 bg-[#fafafa]">
        <div className="max-w-[1390px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#171717] mb-6">
                Our Culture
              </h2>
              <p className="text-[#5D5D5D] text-base md:text-lg leading-relaxed mb-4">
                At Standout Studioz, we believe in fostering a creative and
                collaborative environment where every team member can thrive.
                We value innovation, diversity, and continuous learning.
              </p>
              <p className="text-[#5D5D5D] text-base md:text-lg leading-relaxed">
                Our culture is built on trust, transparency, and a shared
                passion for creating exceptional digital experiences.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#171717] mb-6">
                Join Our Team
              </h2>
              <p className="text-[#5D5D5D] text-base md:text-lg leading-relaxed mb-4">
                We&apos;re always looking for talented individuals who share our
                passion for design and technology. If you&apos;re interested in
                joining our team, we&apos;d love to hear from you.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-[#171717] font-semibold hover:gap-4 transition-all group"
              >
                View Open Positions
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

