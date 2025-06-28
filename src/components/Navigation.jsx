import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { User, Heart, Sun, Moon, Home } from 'lucide-react'

const Navigation = ({ darkMode, setDarkMode }) => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About Me', icon: User },
    { path: '/more', label: 'More About Me', icon: Heart }
  ]

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <nav className={`shadow-soft border-b transition-colors duration-300 ${
      darkMode 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className={`text-xl font-bold transition-colors duration-300 ${
                darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-accent hover:text-accent/80'
              }`}
            >
              Chien's Portfolio
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? darkMode 
                        ? 'text-blue-400 bg-blue-400/10' 
                        : 'text-accent bg-accent/10'
                      : darkMode
                        ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-700'
                        : 'text-gray-600 hover:text-accent hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-200 ${
                darkMode 
                  ? 'text-yellow-400 hover:bg-gray-700' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden py-4 border-t transition-colors duration-300 ${
          darkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className="flex space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? darkMode 
                        ? 'text-blue-400 bg-blue-400/10' 
                        : 'text-accent bg-accent/10'
                      : darkMode
                        ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-700'
                        : 'text-gray-600 hover:text-accent hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 