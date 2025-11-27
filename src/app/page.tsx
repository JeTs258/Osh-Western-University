import { Hero, Stats, CardGrid } from "@/components/sections";

export default function Home() {
  const stats = [
    { value: "2,500+", label: "Students" },
    { value: "150+", label: "Faculty" },
    { value: "50+", label: "Programs" },
    { value: "95%", label: "Placement Rate" },
  ];

  const cards = [
    {
      title: "Academic Excellence",
      description:
        "World-class programs designed to prepare students for success in their chosen fields with cutting-edge curriculum and experienced faculty.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      link: { label: "Explore Programs", href: "/programs" },
    },
    {
      title: "Global Community",
      description:
        "Join a diverse student body from over 50 countries, creating a rich multicultural learning environment and global networking opportunities.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      link: { label: "Meet Our Community", href: "/about" },
    },
    {
      title: "Research Innovation",
      description:
        "Access state-of-the-art research facilities and collaborate with leading researchers on groundbreaking projects that make a real-world impact.",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      link: { label: "Discover Research", href: "/research" },
    },
  ];

  return (
    <>
      <Hero
        title="Welcome to Osh-Western University"
        subtitle="Empowering minds, shaping futures. Join us in our mission to provide world-class education and foster innovation for tomorrow's leaders."
        primaryCta={{
          label: "Apply Now",
          href: "/admissions",
        }}
        secondaryCta={{
          label: "Learn More",
          href: "/about",
        }}
      />

      <Stats stats={stats} />

      <CardGrid
        title="Why Choose Osh-Western?"
        subtitle="Discover what makes our university a top choice for students worldwide"
        cards={cards}
      />
    </>
  );
}
