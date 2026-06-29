import React from 'react';

const MobileHome03: React.FC = () => {
  return (
    <div className="relative w-[375px] h-[1744px] bg-white overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 w-[683px] h-[683px] rounded-full bg-purple-400 opacity-20 blur-[400px]" />
        <div className="absolute -left-20 top-32 w-[647px] h-[647px] rounded-full bg-blue-400 opacity-19 blur-[200px]" />
        <div className="absolute left-32 top-96 w-[498px] h-[498px] rounded-full bg-indigo-500 opacity-18 blur-[300px]" />
        <div className="absolute left-28 bottom-32 w-[486px] h-[486px] rounded-full bg-purple-400 opacity-27 blur-[500px]" />
        <div className="absolute -left-24 bottom-0 w-[499px] h-[499px] rounded-full bg-yellow-400 opacity-20 blur-[500px]" />
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col">
        {/* Header */}
        <div className="pt-12 px-8">
          <div className="flex items-center gap-2 mb-12">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">SaaSto</span>
          </div>

          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Manage Your
              <br />
              Business{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Finance</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-yellow-300 -z-0"></span>
              </span>
              <br />
              Easily
            </h1>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              An enim nullam tempor sapien gravida
              <br />
              donec enim ipsum porta justo congue
              <br />
              purus pretium
            </p>
            <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-3 rounded-full text-sm font-semibold hover:shadow-lg transition-shadow">
              Get Start Now
            </button>
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center mb-16">
            <div className="relative w-[280px] h-[420px]">
              {/* Phone frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[40px] shadow-2xl">
                {/* Screen content */}
                <div className="absolute top-4 left-4 right-4 bottom-4 bg-white rounded-[32px] overflow-hidden">
                  {/* App interface mockup */}
                  <div className="relative w-full h-full bg-gradient-to-b from-purple-50 to-white p-6">
                    {/* Top bar */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="w-16 h-2 bg-gray-300 rounded-full"></div>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg"></div>
                        <div className="w-8 h-8 bg-purple-100 rounded-lg"></div>
                      </div>
                    </div>

                    {/* Card */}
                    <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-4 mb-4 shadow-lg">
                      <div className="h-32 flex flex-col justify-between">
                        <div className="w-12 h-8 bg-white bg-opacity-20 rounded"></div>
                        <div className="space-y-1">
                          <div className="w-20 h-3 bg-white bg-opacity-30 rounded"></div>
                          <div className="w-32 h-4 bg-white bg-opacity-50 rounded"></div>
                        </div>
                      </div>
                    </div>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-green-50 rounded-xl p-3 h-20"></div>
                      <div className="bg-orange-50 rounded-xl p-3 h-20"></div>
                      <div className="bg-blue-50 rounded-xl p-3 h-20"></div>
                      <div className="bg-purple-50 rounded-xl p-3 h-20"></div>
                    </div>
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -right-4 top-24 w-16 h-16 bg-green-400 bg-opacity-30 rounded-2xl backdrop-blur-sm flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="px-8 space-y-12 pb-12">
          {/* Active User */}
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900 mb-2">115k+</div>
            <div className="text-sm text-gray-500">Active User</div>
          </div>

          {/* Total Download */}
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900 mb-2">88k</div>
            <div className="text-sm text-gray-500">Total Download</div>
          </div>

          {/* Regular Customer */}
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900 mb-2">30%</div>
            <div className="text-sm text-gray-500">Regular Customer</div>
          </div>

          {/* Customer */}
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900 mb-2">&gt;10k</div>
            <div className="text-sm text-gray-500">Customer</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHome03;
