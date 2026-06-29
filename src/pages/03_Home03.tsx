import React from 'react';

const Home03: React.FC = () => {
  return (
    <div className="relative w-[1920px] h-[1290px] bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-full">
          {/* Decorative dots pattern top left */}
          <div className="absolute left-8 top-40 grid grid-cols-4 gap-3 opacity-30">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-red-300 rounded-full" />
            ))}
          </div>
          {/* Decorative dots pattern mid left */}
          <div className="absolute left-16 top-[500px] grid grid-cols-2 gap-3 opacity-30">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-pink-300 rounded-full" />
            ))}
          </div>
          {/* Decorative dots pattern right side */}
          <div className="absolute right-[200px] top-[200px] grid grid-cols-3 gap-3 opacity-30">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-blue-300 rounded-full" />
            ))}
          </div>
          {/* Decorative dots pattern bottom right */}
          <div className="absolute right-[250px] bottom-[150px] grid grid-cols-3 gap-3 opacity-30">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-purple-300 rounded-full" />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative flex items-center justify-between px-20 py-8">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-gray-900">SaaSto</span>
        </div>

        <div className="flex items-center gap-8">
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Services</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Features</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-gray-600 font-medium hover:text-gray-900">Login</button>
          <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-shadow">
            Sign-up
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative px-20 py-12">
        <div className="flex items-center justify-between gap-20">
          {/* Left Column - Hero Text */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-7xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Manage Your</span>
              <br />
              <span className="text-gray-900">Business </span>
              <span className="relative inline-block">
                <span className="text-gray-900">Finance</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 20" preserveAspectRatio="none">
                  <path
                    d="M0 10 Q 50 0, 100 10 T 200 10"
                    fill="none"
                    stroke="#FCD34D"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              <span className="text-gray-900">Easily</span>
            </h1>

            <p className="text-lg text-gray-500 mb-8 max-w-md">
              An enim nullam tempor sapien gravida donec enim ipsum porta justo congue purus pretium ligula
            </p>

            <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-shadow">
              Get Start Now
            </button>

            {/* Statistics Row */}
            <div className="flex items-center gap-12 mt-16">
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-1">115k+</div>
                <div className="text-sm text-gray-500">Active user</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-1">88k</div>
                <div className="text-sm text-gray-500">User</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-1">30%</div>
                <div className="text-sm text-gray-500">Growth</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-1">&gt;10k</div>
                <div className="text-sm text-gray-500">Downloads</div>
              </div>
            </div>
          </div>

          {/* Right Column - Phone Mockups */}
          <div className="flex-1 relative flex items-center justify-center">
            <div className="relative w-[600px] h-[700px]">
              {/* Back Phone - Slightly left and rotated */}
              <div className="absolute left-0 top-[50px] w-[340px] h-[680px] transform -rotate-6">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-[45px] shadow-2xl border-8 border-gray-800 overflow-hidden">
                  <div className="w-full h-full bg-white p-6">
                    {/* Phone Content - Analytics Dashboard */}
                    <div className="flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-emerald-500 rounded-lg"></div>
                          <span className="font-semibold text-gray-900">Wallet</span>
                        </div>
                        <div className="w-6 h-6 bg-gray-200 rounded"></div>
                      </div>

                      {/* Balance Card */}
                      <div className="bg-gradient-to-br from-emerald-400 to-green-600 rounded-3xl p-6 mb-6 shadow-lg">
                        <div className="text-white text-sm mb-2">Total Balance</div>
                        <div className="text-white text-4xl font-bold mb-4">$25,685</div>
                        <div className="flex items-center gap-2">
                          <div className="flex -space-x-2">
                            <div className="w-6 h-6 bg-pink-400 rounded-full border-2 border-white"></div>
                            <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-white"></div>
                            <div className="w-6 h-6 bg-purple-400 rounded-full border-2 border-white"></div>
                          </div>
                        </div>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="bg-pink-100 rounded-2xl p-4">
                          <div className="w-10 h-10 bg-pink-400 rounded-xl mb-2"></div>
                        </div>
                        <div className="bg-blue-100 rounded-2xl p-4">
                          <div className="w-10 h-10 bg-blue-400 rounded-xl mb-2"></div>
                        </div>
                      </div>

                      {/* Chart */}
                      <div className="flex-1 bg-gray-50 rounded-2xl p-4">
                        <div className="flex items-end justify-between h-24 gap-2">
                          {[40, 65, 45, 75, 55, 85, 60].map((height, i) => (
                            <div
                              key={i}
                              className="flex-1 bg-gradient-to-t from-emerald-400 to-green-500 rounded-t-lg"
                              style={{ height: `${height}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Front Phone - Slightly right and forward */}
              <div className="absolute right-0 top-0 w-[340px] h-[680px] transform rotate-6 z-10">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-[45px] shadow-2xl border-8 border-gray-800 overflow-hidden">
                  <div className="w-full h-full bg-white p-6">
                    {/* Phone Content - Transaction List */}
                    <div className="flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-semibold text-gray-900">Expense</span>
                        <div className="w-6 h-6 bg-gray-200 rounded"></div>
                      </div>

                      {/* Balance Display */}
                      <div className="text-center mb-8">
                        <div className="text-gray-500 text-sm mb-2">Total Balance</div>
                        <div className="text-5xl font-bold text-gray-900">$25,685</div>
                        <div className="text-green-500 text-sm mt-2">+12.5%</div>
                      </div>

                      {/* Transaction List */}
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-pink-400 rounded-xl"></div>
                            <div>
                              <div className="font-medium text-gray-900 text-sm">Shopping</div>
                              <div className="text-xs text-gray-500">Today</div>
                            </div>
                          </div>
                          <div className="font-semibold text-gray-900">-$120</div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-400 rounded-xl"></div>
                            <div>
                              <div className="font-medium text-gray-900 text-sm">Transport</div>
                              <div className="text-xs text-gray-500">Yesterday</div>
                            </div>
                          </div>
                          <div className="font-semibold text-gray-900">-$45</div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-400 rounded-xl"></div>
                            <div>
                              <div className="font-medium text-gray-900 text-sm">Food</div>
                              <div className="text-xs text-gray-500">2 days ago</div>
                            </div>
                          </div>
                          <div className="font-semibold text-gray-900">-$85</div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-emerald-400 rounded-xl"></div>
                            <div>
                              <div className="font-medium text-gray-900 text-sm">Income</div>
                              <div className="text-xs text-gray-500">3 days ago</div>
                            </div>
                          </div>
                          <div className="font-semibold text-emerald-600">+$2,500</div>
                        </div>
                      </div>

                      {/* Bottom Navigation */}
                      <div className="flex items-center justify-around pt-4 border-t">
                        <div className="w-8 h-8 bg-emerald-500 rounded-xl"></div>
                        <div className="w-8 h-8 bg-gray-200 rounded-xl"></div>
                        <div className="w-8 h-8 bg-gray-200 rounded-xl"></div>
                        <div className="w-8 h-8 bg-gray-200 rounded-xl"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home03;
