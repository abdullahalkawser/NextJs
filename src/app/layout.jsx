

import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      
      >

<header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
  <nav className="max-w-6xl mx-auto px-4 py-4">
    <div className="flex justify-between items-center">
      <a href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 hover:from-purple-500 hover:to-blue-400 transition-all duration-300">
  Abdullah Lean Next js
      </a>
      
      <div className="flex gap-8 items-center">
        <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 border-b-2 border-transparent hover:border-blue-400">
          Home
        </a>
        <a href="/register" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 border-b-2 border-transparent hover:border-green-400">
        Register
        </a>
        <a href="/post" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 border-b-2 border-transparent hover:border-purple-400">
        Create Post
        </a>
        <button className="ml-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-purple-600 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl">
          Contact
        </button>
      </div>
    </div>
  </nav>
</header>
<main>     
 
    {children}
    </main>


      </body>
    </html>
  );
}
