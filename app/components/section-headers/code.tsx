const SectionHeadersCode = [
    {
      name: 'Section Header with description and button',
      component: (
        <div className="bg-white p-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900">Welcome to our platform</h2>
            <p className="mt-4 text-xl text-gray-600">Discover amazing features and boost your productivity</p>
            <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      ),
      code: `
    <div className="bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">Welcome to our platform</h2>
        <p className="mt-4 text-xl text-gray-600">Discover amazing features and boost your productivity</p>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
        `
    },
    {
      name: 'Section Header with buttons',
      component: (
        <div className="bg-gray-100 p-8">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Our Services</h2>
            <div className="space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
                View All
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition duration-300">
                Filter
              </button>
            </div>
          </div>
        </div>
      ),
      code: `
    <div className="bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Our Services</h2>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
            View All
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition duration-300">
            Filter
          </button>
        </div>
      </div>
    </div>
        `
    },
    {
      name: 'Section Header with navigations',
      component: (
        <div className="bg-white p-6 border-b">
          <div className="max-w-7xl mx-auto">
            <nav className="flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Home</a>
              <a href="#" className="text-gray-900 hover:text-gray-900 px-3 py-2 text-sm font-medium">About</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Services</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Contact</a>
            </nav>
          </div>
        </div>
      ),
      code: `
    <div className="bg-white p-6 border-b">
      <div className="max-w-7xl mx-auto">
        <nav className="flex space-x-8">
          <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Home</a>
          <a href="#" className="text-gray-900 hover:text-gray-900 px-3 py-2 text-sm font-medium">About</a>
          <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Services</a>
          <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Contact</a>
        </nav>
      </div>
    </div>
        `
    },
    {
      name: 'Section Header with buttons and navigations',
      component: (
        <div className="bg-white p-6 border-b">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <nav className="flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Home</a>
              <a href="#" className="text-gray-900 hover:text-gray-900 px-3 py-2 text-sm font-medium">About</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Services</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Contact</a>
            </nav>
            <div className="space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
                Sign Up
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition duration-300">
                Log In
              </button>
            </div>
          </div>
        </div>
      ),
      code: `
    <div className="bg-white p-6 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <nav className="flex space-x-8">
          <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Home</a>
          <a href="#" className="text-gray-900 hover:text-gray-900 px-3 py-2 text-sm font-medium">About</a>
          <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Services</a>
          <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Contact</a>
        </nav>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
            Sign Up
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition duration-300">
            Log In
          </button>
        </div>
      </div>
    </div>
        `
    },
    {
      name: 'Section Header with search box',
      component: (
        <div className="bg-gray-100 p-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Search Products</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      ),
      code: `
    <div className="bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Search Products</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
        `
    },
  ]
  
  export default SectionHeadersCode;