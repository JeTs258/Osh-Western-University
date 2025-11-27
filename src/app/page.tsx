import Link from 'next/link'
import { Hero, Section, Grid } from '@/components/layout'

export default function HomePage() {
  return (
    <>
      <Hero
        title="Welcome to University Portal"
        subtitle="Discover excellence in education, research, and innovation. Join our vibrant community of scholars and leaders."
        size="large"
        align="center"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            href="/apply"
            className="px-8 py-3 bg-primary-600 text-white rounded-md font-medium hover:bg-primary-700 transition-colors text-lg"
          >
            Apply Now
          </Link>
          <Link
            href="/visit"
            className="px-8 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-md font-medium hover:bg-primary-50 transition-colors text-lg"
          >
            Schedule a Visit
          </Link>
        </div>
      </Hero>

      <Section
        title="Why Choose Us"
        subtitle="Discover what makes our university stand out"
        spacing="large"
        background="white"
      >
        <Grid cols={{ mobile: 1, tablet: 2, desktop: 3 }} gap="large">
          <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="h-6 w-6 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              World-Class Education
            </h3>
            <p className="text-gray-600">
              Access to top-tier faculty, cutting-edge curriculum, and
              innovative learning environments that prepare you for success.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="h-6 w-6 text-secondary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Research Excellence
            </h3>
            <p className="text-gray-600">
              Engage in groundbreaking research across disciplines with
              state-of-the-art facilities and collaborative opportunities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="h-6 w-6 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Vibrant Community
            </h3>
            <p className="text-gray-600">
              Join a diverse, inclusive community with hundreds of clubs,
              organizations, and activities for every interest.
            </p>
          </div>
        </Grid>
      </Section>

      <Section
        title="Explore Our Programs"
        spacing="large"
        background="gray"
      >
        <Grid cols={{ mobile: 1, tablet: 2, desktop: 4 }} gap="medium">
          {[
            { title: 'Engineering', count: '15+ Programs', href: '/programs/engineering' },
            { title: 'Business', count: '12+ Programs', href: '/programs/business' },
            { title: 'Arts & Sciences', count: '25+ Programs', href: '/programs/arts-sciences' },
            { title: 'Health Sciences', count: '10+ Programs', href: '/programs/health-sciences' },
          ].map((program) => (
            <Link
              key={program.title}
              href={program.href}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {program.title}
              </h3>
              <p className="text-sm text-gray-600">{program.count}</p>
              <div className="mt-4 text-primary-600 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                Learn more
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
              </div>
            </Link>
          ))}
        </Grid>
      </Section>

      <Section
        title="Ready to Start Your Journey?"
        subtitle="Take the first step towards an exceptional education"
        spacing="medium"
        background="primary"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/apply"
            className="px-8 py-3 bg-white text-primary-600 rounded-md font-medium hover:bg-gray-50 transition-colors"
          >
            Apply Today
          </Link>
          <Link
            href="/request-info"
            className="px-8 py-3 bg-primary-700 text-white rounded-md font-medium hover:bg-primary-800 transition-colors"
          >
            Request Information
          </Link>
        </div>
      </Section>
    </>
  )
}
