export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="mx-auto max-w-5xl px-6 pb-10 pt-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
          Scalic
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
          Scalic IT Services for Growing Businesses
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700">
          Scalic is an IT services company focused on cloud engineering, custom
          software development, DevOps, and technology consulting.
        </p>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-16">
        <section aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-2xl font-semibold">
            IT Services by Scalic
          </h2>
          <ul className="mt-4 grid gap-4 text-gray-800 md:grid-cols-2">
            <li className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-semibold">Cloud Services</h3>
              <p className="mt-2 text-sm text-gray-700">
                Scalic designs and manages scalable cloud infrastructure for
                performance, reliability, and cost optimization.
              </p>
            </li>
            <li className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-semibold">Custom Software Development</h3>
              <p className="mt-2 text-sm text-gray-700">
                Build secure web applications and business platforms with
                Scalic&apos;s experienced engineering team.
              </p>
            </li>
            <li className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-semibold">DevOps & Automation</h3>
              <p className="mt-2 text-sm text-gray-700">
                Scalic helps organizations deploy faster with CI/CD, automation,
                and modern DevOps practices.
              </p>
            </li>
            <li className="rounded-lg border border-gray-200 p-4">
              <h3 className="font-semibold">Technology Consulting</h3>
              <p className="mt-2 text-sm text-gray-700">
                Plan, modernize, and scale digital systems with strategic IT
                consulting from Scalic.
              </p>
            </li>
          </ul>
        </section>

        <section aria-labelledby="why-scalic-heading" className="mt-12">
          <h2 id="why-scalic-heading" className="text-2xl font-semibold">
            Why Choose Scalic
          </h2>
          <p className="mt-4 max-w-3xl text-gray-700">
            Scalic combines engineering quality, business understanding, and a
            delivery-first mindset. We partner with teams to solve real
            operational challenges and deliver measurable technology outcomes.
          </p>
        </section>
      </main>

      <footer className="border-t border-gray-200 px-6 py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Scalic. All rights reserved.
      </footer>
    </div>
  );
}
