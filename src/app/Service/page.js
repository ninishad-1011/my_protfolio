import React from 'react'

const Page = () => {
  return (
    <div>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">My Services</h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              I offer high-quality web development services to help businesses grow online.
            </p>
          </div>

          {/* Services Flex */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 w-80">
              <div className="text-purple-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6M5 10v10h14V10"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">Web Development</h3>
              <p className="text-gray-600 text-center">Creating responsive and modern websites using HTML, CSS, JavaScript, and React.js.</p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 w-80">
              <div className="text-purple-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V5a2 2 0 00-2-2H6a2 2 0 00-2 2v8m16 0H4m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">Backend Development</h3>
              <p className="text-gray-600 text-center">Building scalable APIs and server-side logic with Node.js, Express, and MongoDB.</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a href="#contact" className="inline-block bg-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-purple-700 transition duration-300">
              Hire Me
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
