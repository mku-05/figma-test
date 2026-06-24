function ExamplesPortfolio() {
  return (
    <div className="flex flex-col w-[1200px] bg-white">
      {/* Header */}
      <header className="flex flex-row items-center justify-between gap-6 px-8 py-8 bg-white border-b border-gray-200">
        <div className="flex flex-row items-center gap-6">
          <img
            src="/assets/figma/aa5579d9-84f3-480d-8f1a-ef46e67d5375/I1-3379_189-27030.svg"
            alt="Logo"
            className="h-[35px]"
          />
        </div>

        <nav className="flex flex-row items-center gap-2">
          <button className="px-2 py-2 bg-gray-100 rounded text-sm text-gray-900">Products</button>
          <button className="px-2 py-2 rounded text-sm text-gray-900">Solutions</button>
          <button className="px-2 py-2 rounded text-sm text-gray-900">Community</button>
          <button className="px-2 py-2 rounded text-sm text-gray-900">Resources</button>
          <button className="px-2 py-2 rounded text-sm text-gray-900">Pricing</button>
          <button className="px-2 py-2 rounded text-sm text-gray-900">Contact</button>
        </nav>

        <div className="flex flex-row items-center gap-3">
          <button className="px-2 py-2 bg-gray-200 rounded text-sm text-gray-900">Sign in</button>
          <button className="px-2 py-2 bg-gray-800 text-gray-100 rounded text-sm">Register</button>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col px-16 py-40 bg-gray-100">
        <div className="flex flex-col gap-2 px-0 py-0 bg-rose-400 rounded">
          <h1 className="text-6xl font-bold text-gray-900">Title</h1>
          <p className="text-2xl text-gray-600">Subtitle</p>
        </div>
      </section>

      {/* Card Grid */}
      <section className="flex flex-col gap-12 px-16 py-16 bg-white">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-gray-900">Heading</h2>
          <p className="text-lg text-gray-600">Subheading</p>
        </div>

        <div className="flex flex-col gap-12">
          {/* Row 1 */}
          <div className="flex flex-row gap-12">
            <article className="flex-1 flex flex-col gap-6 p-6 bg-white border border-gray-200 rounded">
              <div className="w-full h-48 bg-gray-200 rounded"></div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-gray-900">Title</h3>
                  <p className="text-sm text-gray-600">
                    Body text for whatever you'd like to say. Add main takeaway points, quotes,
                    anecdotes, or even a very very short story.
                  </p>
                </div>
              </div>
            </article>

            <article className="flex-1 flex flex-col gap-6 p-6 bg-white border border-gray-200 rounded">
              <div className="w-full h-48 bg-gray-200 rounded"></div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-gray-900">Title</h3>
                  <p className="text-sm text-gray-600">
                    Body text for whatever you'd like to say. Add main takeaway points, quotes,
                    anecdotes, or even a very very short story.
                  </p>
                </div>
              </div>
            </article>

            <article className="flex-1 flex flex-col gap-6 p-6 bg-white border border-gray-200 rounded">
              <div className="w-full h-48 bg-gray-200 rounded"></div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-gray-900">Title</h3>
                  <p className="text-sm text-gray-600">
                    Body text for whatever you'd like to say. Add main takeaway points, quotes,
                    anecdotes, or even a very very short story.
                  </p>
                </div>
              </div>
            </article>
          </div>

          {/* Row 2 */}
          <div className="flex flex-row gap-12">
            <article className="flex-1 flex flex-col gap-6 p-6 bg-white border border-gray-200 rounded">
              <div className="w-full h-48 bg-gray-200 rounded"></div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-gray-900">Title</h3>
                  <p className="text-sm text-gray-600">
                    Body text for whatever you'd like to say. Add main takeaway points, quotes,
                    anecdotes, or even a very very short story.
                  </p>
                </div>
              </div>
            </article>

            <article className="flex-1 flex flex-col gap-6 p-6 bg-white border border-gray-200 rounded">
              <div className="w-full h-48 bg-gray-200 rounded"></div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-gray-900">Title</h3>
                  <p className="text-sm text-gray-600">
                    Body text for whatever you'd like to say. Add main takeaway points, quotes,
                    anecdotes, or even a very very short story.
                  </p>
                </div>
              </div>
            </article>

            <article className="flex-1 flex flex-col gap-6 p-6 bg-white border border-gray-200 rounded">
              <div className="w-full h-48 bg-gray-200 rounded"></div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-gray-900">Title</h3>
                  <p className="text-sm text-gray-600">
                    Body text for whatever you'd like to say. Add main takeaway points, quotes,
                    anecdotes, or even a very very short story.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-row gap-4 px-8 pt-8 pb-40 bg-white border-t border-gray-200">
        <div className="flex flex-col gap-6 w-64">
          <img
            src="/assets/figma/aa5579d9-84f3-480d-8f1a-ef46e67d5375/I1-3382_189-27260.svg"
            alt="Logo"
            className="h-[35px] w-auto"
          />
          <div className="flex flex-row gap-4">
            <img src="/assets/figma/aa5579d9-84f3-480d-8f1a-ef46e67d5375/I1-3382_325-12863.svg" alt="X" className="w-6 h-6" />
            <img src="/assets/figma/aa5579d9-84f3-480d-8f1a-ef46e67d5375/I1-3382_325-12999.svg" alt="Instagram" className="w-6 h-6" />
            <img src="/assets/figma/aa5579d9-84f3-480d-8f1a-ef46e67d5375/I1-3382_325-13120.svg" alt="YouTube" className="w-6 h-6" />
            <img src="/assets/figma/aa5579d9-84f3-480d-8f1a-ef46e67d5375/I1-3382_325-12717.svg" alt="LinkedIn" className="w-6 h-6" />
          </div>
        </div>

        <div className="flex flex-row gap-4 flex-1">
          <div className="flex flex-col gap-3 w-64">
            <h3 className="text-sm font-semibold text-gray-900 pb-4">Use cases</h3>
            <a href="#" className="text-sm text-gray-900 hover:underline">UI design</a>
            <a href="#" className="text-sm text-gray-900 hover:underline">UX design</a>
            <a href="#" className="text-sm text-gray-900 hover:underline">Wireframing</a>
            <a href="#" className="text-sm text-gray-900 hover:underline">Diagramming</a>
            <a href="#" className="text-sm text-gray-900 hover:underline">Brainstorming</a>
            <a href="#" className="text-sm text-gray-900 hover:underline">Online whiteboard</a>
            <a href="#" className="text-sm text-gray-900 hover:underline">Team collaboration</a>
          </div>

          <div className="flex flex-col gap-3 w-64">
            <h3 className="text-sm font-semibold text-gray-900 pb-4">Explore</h3>
            <a href="#" className="text-sm text-gray-900 hover:underline">Design</a>
            <a href="#" className="text-sm text-gray-900 hover:underline">Prototyping</a>
            <a href="#" className="text-sm text-gray-900 hover:underline">Development features</a>
            <a href="#" className="text-sm text-gray-900 hover:underline">Design systems</a>
            <a href="#" className="text-sm text-gray-900 hover:underline">Collaboration features</a>
            <a href="#" className="text-sm text-gray-900 hover:underline">Design process</a>
            <a href="#" className="text-sm text-gray-900 hover:underline">FigJam</a>
          </div>

          <div className="flex flex-col gap-3 w-64">
            <h3 className="text-sm font-semibold text-gray-900 pb-4">Resources</h3>
            <a href="#" className="text-sm text-gray-900 hover:underline">Blog</a>
            <a href="#" className="text-sm text-gray-900 hover:underline">Best practices</a>
            <a href="#" className="text-sm text-gray-900 hover:underline">Colors</a>
            <a href="#" className="text-sm text-gray-900 hover:underline">Color wheel</a>
            <a href="#" className="text-sm text-gray-900 hover:underline">Support</a>
            <a href="#" className="text-sm text-gray-900 hover:underline">Developers</a>
            <a href="#" className="text-sm text-gray-900 hover:underline">Resource library</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ExamplesPortfolio
