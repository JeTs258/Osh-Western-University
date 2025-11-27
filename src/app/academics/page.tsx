import Link from 'next/link'
import { Hero, Section, Grid } from '@/components/layout'

export default function AcademicsPage() {
  return (
    <>
      <Hero
        title="Academics"
        subtitle="Explore our comprehensive range of programs designed to shape your future"
        size="medium"
        align="center"
      />

      <Section
        title="Our Academic Programs"
        subtitle="Choose from a wide variety of undergraduate and graduate programs"
        spacing="large"
        background="white"
      >
        <Grid cols={{ mobile: 1, tablet: 2, desktop: 3 }} gap="large">
          {[
            {
              title: 'Engineering',
              description: 'Cutting-edge programs in engineering disciplines',
              programs: 15,
              href: '/academics/engineering',
            },
            {
              title: 'Business',
              description: 'Prepare for leadership in the global marketplace',
              programs: 12,
              href: '/academics/business',
            },
            {
              title: 'Arts & Sciences',
              description: 'Explore humanities, social sciences, and natural sciences',
              programs: 25,
              href: '/academics/arts-sciences',
            },
            {
              title: 'Health Sciences',
              description: 'Train for careers in healthcare and medicine',
              programs: 10,
              href: '/academics/health-sciences',
            },
            {
              title: 'Education',
              description: 'Shape the future as an educator',
              programs: 8,
              href: '/academics/education',
            },
            {
              title: 'Technology',
              description: 'Master the digital world and computer science',
              programs: 12,
              href: '/academics/technology',
            },
          ].map((school) => (
            <div
              key={school.title}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all group"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {school.title}
              </h3>
              <p className="text-gray-600 mb-4">{school.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                {school.programs}+ Programs Available
              </p>
              <Link
                href={school.href}
                className="text-primary-600 font-medium flex items-center hover:translate-x-1 transition-transform"
              >
                Explore Programs
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </Grid>
      </Section>

      <Section
        title="Academic Support"
        spacing="large"
        background="gray"
      >
        <Grid cols={{ mobile: 1, tablet: 2, desktop: 4 }} gap="medium">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Academic Advising
            </h3>
            <p className="text-gray-600 text-sm">
              Get personalized guidance to plan your academic journey
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Tutoring Services
            </h3>
            <p className="text-gray-600 text-sm">
              Free tutoring available for most courses
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Writing Center
            </h3>
            <p className="text-gray-600 text-sm">
              Improve your writing skills with expert support
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Career Services
            </h3>
            <p className="text-gray-600 text-sm">
              Prepare for your career with internships and job placement
            </p>
          </div>
        </Grid>
      </Section>
    </>
  )
}
