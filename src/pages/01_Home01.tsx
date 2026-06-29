import React from 'react';

const Home01: React.FC = () => {
  return (
    <div className="relative w-[1920px] h-[1288px] bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-full">
          {/* Decorative dots pattern top left */}
          <div className="absolute left-20 top-32 grid grid-cols-8 gap-2 opacity-20">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-purple-300 rounded-full" />
            ))}
          </div>
          {/* Decorative dots pattern bottom right */}
          <div className="absolute right-32 bottom-32 grid grid-cols-8 gap-2 opacity-20">
            {Array.from({ length: 32 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-blue-300 rounded-full" />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative flex items-center justify-between px-20 py-8">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-gray-900">SaaSto</span>
        </div>

        <div className="flex items-center gap-8">
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Home</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">About us</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Services</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Blog</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Contact us</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-purple-600 font-semibold hover:text-purple-700">Login</button>
          <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-shadow">
            Sign up
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative px-20 py-16">
        <div className="flex items-center justify-between gap-16">
          {/* Left Column - Hero Text */}
          <div className="flex-1 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-orange-100 px-4 py-2 rounded-full mb-8">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-700">Committed To People</span>
            </div>

            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Committed To People
              <br />
              Committed To{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                The
                <br />
                Future
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              An enim nullam tempor sapien gravida donec enim
              <br />
              ipsum porta justo  congue purus pretium
            </p>

            <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-shadow">
              Get Started Now
            </button>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Followers Stats Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 ml-auto w-64">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Likes</div>
                  <div className="text-3xl font-bold text-gray-900">15.9k</div>
                </div>
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
              </div>
              <div className="text-xs text-gray-500 mb-2">Followers Stats</div>
              <div className="flex items-end gap-1 h-16">
                {[30, 45, 35, 55, 40, 65, 50, 75, 55, 80, 60].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-purple-400 to-purple-600 rounded-t"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Total Received Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 w-80">
              <div className="flex items-center gap-3 text-sm text-green-600 font-semibold mb-4">
                <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  </svg>
                </div>
                <span>2,938</span>
                <span className="text-gray-400">Today you got more 30% (Upss!)</span>
              </div>
              <div className="mb-4">
                <div className="text-sm text-gray-500 mb-1">Total Received</div>
                <div className="text-4xl font-bold text-gray-900">256.18k</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Row */}
        <div className="flex items-center gap-8 mt-20 justify-center">
          <div className="flex items-center gap-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl px-10 py-6">
            <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900">15k+</div>
              <div className="text-sm text-gray-600">Customers</div>
            </div>
          </div>

          <div className="flex items-center gap-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl px-10 py-6">
            <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900">30k</div>
              <div className="text-sm text-gray-600">Total Download</div>
            </div>
          </div>

          <div className="flex items-center gap-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl px-10 py-6">
            <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900">10k</div>
              <div className="text-sm text-gray-600">Active user</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home01;
