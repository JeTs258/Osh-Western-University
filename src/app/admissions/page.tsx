import Link from 'next/link'
import { Hero, Section, Grid } from '@/components/layout'

export default function AdmissionsPage() {
  return (
    <>
      <Hero
        title="Admissions"
        subtitle="Start your journey to excellence. We're here to guide you every step of the way."
        size="medium"
        align="center"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            href="/apply"
            className="px-8 py-3 bg-white text-primary-600 rounded-md font-medium hover:bg-gray-50 transition-colors"
          >
            Apply Now
          </Link>
          <Link
            href="/visit"
            className="px-8 py-3 bg-primary-700 text-white rounded-md font-medium hover:bg-primary-800 transition-colors"
          >
            Schedule a Visit
          </Link>
        </div>
      </Hero>

      <Section
        title="Application Process"
        spacing="large"
        background="white"
      >
        <Grid cols={{ mobile: 1, tablet: 2, desktop: 4 }} gap="large">
          {[
            {
              step: '1',
              title: 'Submit Application',
              description: 'Complete and submit your online application',
            },
            {
              step: '2',
              title: 'Required Documents',
              description: 'Upload transcripts, test scores, and essays',
            },
            {
              step: '3',
              title: 'Review Process',
              description: 'Our team carefully reviews your application',
            },
            {
              step: '4',
              title: 'Decision',
              description: 'Receive your admission decision',
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="h-16 w-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">
                  {item.step}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </Grid>
      </Section>

      <Section
        title="Admission Requirements"
        spacing="large"
        background="gray"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Freshman Requirements
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  High school diploma or equivalent with minimum 3.0 GPA
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>SAT or ACT scores (test-optional available)</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Letters of recommendation from teachers or counselors</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Personal statement or essay</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Application fee or fee waiver</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        title="Financial Aid & Scholarships"
        spacing="large"
        background="white"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We believe that financial constraints should never be a barrier to
            education. Over 85% of our students receive some form of financial
            aid, including scholarships, grants, and work-study opportunities.
          </p>
          <Link
            href="/financial-aid"
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white rounded-md font-medium hover:bg-primary-700 transition-colors"
          >
            Explore Financial Aid Options
            <svg
              className="ml-2 h-5 w-5"
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
      </Section>
    </>
  )
}
