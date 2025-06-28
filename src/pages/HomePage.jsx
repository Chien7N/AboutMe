import React from 'react'
import { Link } from 'react-router-dom'
import { User, Heart, ArrowRight } from 'lucide-react'

const HomePage = ({ darkMode }) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-10">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
           $whoami:
          </h1>
          <p className={`text-xl md:text-2xl ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Choose a section to explore
          </p>
        </div>

        {/* Two Main Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* About Me Section */}
          <Link 
            to="/about"
            className={`group relative overflow-hidden rounded-3xl shadow-soft transition-all duration-500 transform hover:scale-105 ${
              darkMode 
                ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                : 'bg-white hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <div className="p-12 h-full flex flex-col justify-between">
              <div>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <User className="h-8 w-8 text-white" />
                </div>
                <h2 className={`text-3xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  About Me
                </h2>
                <p className={`text-lg mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Explore my professional journey, skills, experience, and achievements in the tech world.
                </p>
                <ul className={`space-y-2 text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <li>• Professional Experience</li>
                  <li>• Skills & Technologies</li>
                  <li>• Education & Certifications</li>
                  <li>• Career Achievements</li>
                </ul>
              </div>
              <div className="flex items-center mt-8 group-hover:translate-x-2 transition-transform duration-300">
                <span className={`font-semibold ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  Explore Career
                </span>
                <ArrowRight className={`h-5 w-5 ml-2 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`} />
              </div>
            </div>
          </Link>

          {/* More About Me Section */}
          <Link 
            to="/more"
            className={`group relative overflow-hidden rounded-3xl shadow-soft transition-all duration-500 transform hover:scale-105 ${
              darkMode 
                ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                : 'bg-white hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <div className="p-12 h-full flex flex-col justify-between">
              <div>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h2 className={`text-3xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  More About Me
                </h2>
                <p className={`text-lg mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Discover my personal interests, hobbies, travel adventures, and creative projects.
                </p>
                <ul className={`space-y-2 text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <li>• Hobbies & Interests</li>
                  <li>• Travel Adventures</li>
                  <li>• Reading List</li>
                  <li>• Personal Projects</li>
                </ul>
              </div>
              <div className="flex items-center mt-8 group-hover:translate-x-2 transition-transform duration-300">
                <span className={`font-semibold ${
                  darkMode ? 'text-pink-400' : 'text-pink-600'
                }`}>
                  Explore Personal
                </span>
                <ArrowRight className={`h-5 w-5 ml-2 ${
                  darkMode ? 'text-pink-400' : 'text-pink-600'
                }`} />
              </div>
            </div>
          </Link>
        </div>

        {/* Footer */}
        <div className={`text-center mt-16 ${
          darkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          <p>Click on either section to learn more about me</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage 