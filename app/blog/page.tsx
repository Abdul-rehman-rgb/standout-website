import PageLayout from "../components/PageLayout";
import { Plane, ArrowRight } from "lucide-react";
import AnimatedButton from "../components/ui/AnimatedButton";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Design in 2025",
    excerpt: "Exploring the latest trends and innovations that are shaping the future of web design and user experience.",
    image: "/images/1.jpg",
    date: "January 15, 2025",
    category: "Design",
  },
  {
    id: 2,
    title: "How to Build a Successful Brand Identity",
    excerpt: "Learn the essential steps to create a compelling brand identity that resonates with your target audience.",
    image: "/images/1.jpg",
    date: "January 10, 2025",
    category: "Branding",
  },
  {
    id: 3,
    title: "Best Practices for Mobile-First Development",
    excerpt: "Discover the key principles and techniques for building responsive, mobile-first web applications.",
    image: "/images/1.jpg",
    date: "January 5, 2025",
    category: "Development",
  },
  {
    id: 4,
    title: "The Power of User-Centered Design",
    excerpt: "Understanding how focusing on user needs can transform your digital products and improve engagement.",
    image: "/images/1.jpg",
    date: "December 28, 2024",
    category: "UX/UI",
  },
  {
    id: 5,
    title: "SEO Strategies for Modern Websites",
    excerpt: "Essential SEO techniques to improve your website&apos;s visibility and ranking in search engines.",
    image: "/images/1.jpg",
    date: "December 20, 2024",
    category: "Marketing",
  },
  {
    id: 6,
    title: "Creating Engaging Content for Digital Platforms",
    excerpt: "Tips and strategies for creating content that captivates your audience and drives conversions.",
    image: "/images/1.jpg",
    date: "December 15, 2024",
    category: "Content",
  },
];

export default function BlogPage() {
  return (
    <PageLayout>
      <section className="py-20 px-4 md:px-10 lg:px-16 bg-white">
        <div className="max-w-[1390px] mx-auto">
          <div className="flex flex-col items-center text-center mb-16 gap-6">
            <AnimatedButton text="Blog" Icon={Plane} />
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight max-w-3xl text-[#171717]">
              Latest Insights & Stories
            </h1>
            <p className="text-[#5D5D5D] max-w-lg text-lg">
              Discover the latest trends, tips, and insights from our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-[24px] overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-[#171717] px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#8e8e8e] text-sm mb-3">{post.date}</p>
                  <h2 className="text-2xl font-semibold text-[#171717] mb-3 group-hover:text-gray-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#5D5D5D] text-base leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-[#171717] font-medium hover:gap-4 transition-all group/link"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

