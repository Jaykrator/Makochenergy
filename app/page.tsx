export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Company Logo/Name */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              MEKOCHE
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 font-light tracking-wide">
              OIL & GAS COMPANY
            </p>
          </div>

          {/* Under Development Message */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 008 10.172V5L8 4z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                Website Under Development
              </h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
                We're working hard to bring you an exceptional digital experience.
                Our new website will showcase our commitment to excellence in the oil and gas industry.
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex justify-center mb-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
              <p className="text-sm text-blue-200">Coming Soon</p>
            </div>

            {/* Contact Information */}
            <div className="border-t border-white/20 pt-6">
              <p className="text-blue-100 mb-2">
                For inquiries, please contact us:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-blue-200">
                <span>📧 info@mekoche.com</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-blue-300/60 text-sm">
              © 2026 Mekoche Oil & Gas Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
