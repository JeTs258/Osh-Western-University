import { Hero, Section, Grid } from '@/components/layout'

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About University Portal"
        subtitle="Leading the way in higher education since our founding"
        size="medium"
        align="center"
      />

      <Section
        title="Our Mission"
        spacing="large"
        background="white"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At University Portal, we are committed to fostering excellence in
            teaching, research, and service. Our mission is to prepare the next
            generation of leaders, innovators, and global citizens through
            transformative educational experiences.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe in the power of knowledge to change lives and
            communities, and we strive to create an inclusive environment where
            all students can thrive and reach their full potential.
          </p>
        </div>
      </Section>

      <Section
        title="Our Values"
        spacing="large"
        background="gray"
      >
        <Grid cols={{ mobile: 1, tablet: 2, desktop: 3 }} gap="large">
          <div className="text-center">
            <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="h-8 w-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">
              Pushing boundaries and exploring new frontiers in education and
              research.
            </p>
          </div>

          <div className="text-center">
            <div className="h-16 w-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="h-8 w-8 text-secondary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Diversity</h3>
            <p className="text-gray-600">
              Celebrating and embracing diverse perspectives and backgrounds in
              our community.
            </p>
          </div>

          <div className="text-center">
            <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="h-8 w-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
            <p className="text-gray-600">
              Striving for the highest standards in all that we do, from
              teaching to research.
            </p>
          </div>
        </Grid>
      </Section>
    </>
  )
}
