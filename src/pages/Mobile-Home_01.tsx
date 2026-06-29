import React from 'react';

const MobileHome01: React.FC = () => {
  return (
    <div className="relative w-[375px] h-[1598px] bg-white overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 w-[683px] h-[683px] rounded-full bg-purple-400 opacity-20 blur-[400px]" />
        <div className="absolute -left-20 top-32 w-[647px] h-[647px] rounded-full bg-blue-400 opacity-19 blur-[200px]" />
        <div className="absolute left-32 top-96 w-[498px] h-[498px] rounded-full bg-indigo-500 opacity-18 blur-[300px]" />
        <div className="absolute left-28 bottom-32 w-[486px] h-[486px] rounded-full bg-purple-400 opacity-27 blur-[500px]" />
        <div className="absolute -left-24 bottom-0 w-[499px] h-[499px] rounded-full bg-yellow-400 opacity-20 blur-[500px]" />
      </div>

      {/* Header */}
      <div className="relative pt-12 px-8">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-900">SaaSto</span>
        </div>

        <div className="space-y-6 mb-12">
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Committed to
              <br />
              People Committed
              <br />
              To The Future
            </h1>
            <p className="text-sm text-gray-600 mb-6">
              An enim nullam tempor sapien gravida
              <br />
              donec enim ipsum porta justo  congue
              <br />
              purus pretium
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-3 rounded-full text-sm font-semibold hover:shadow-lg transition-shadow">
              Get Started Now
            </button>
          </div>

          {/* Chart Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm text-gray-500">Total Received</div>
                <div className="text-2xl font-bold text-gray-900">256.18k</div>
              </div>
              <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
            </div>
            <div className="flex items-end gap-1 h-24">
              {[40, 55, 35, 65, 45, 75, 50, 85, 60, 70, 55].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-purple-500 to-indigo-600 rounded-t"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="relative px-8 space-y-6">
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div className="text-4xl font-bold text-gray-900 mb-1">15k+</div>
          <div className="text-sm text-gray-600">Active User</div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-amber-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </div>
          <div className="text-4xl font-bold text-gray-900 mb-1">30k</div>
          <div className="text-sm text-gray-600">Total Download</div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-emerald-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className="text-4xl font-bold text-gray-900 mb-1">10k</div>
          <div className="text-sm text-gray-600">Regular Customer</div>
        </div>
      </div>
    </div>
  );
};

export default MobileHome01;
