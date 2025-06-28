import React, { useState } from 'react'
import { Camera, Mountain, ChefHat, Heart, Image as ImageIcon } from 'lucide-react'
import interestsData from '../../content/more/interests.json'

const MoreAboutMe = ({ darkMode }) => {
  const [interests] = useState(interestsData)

  const getIcon = (iconName) => {
    const icons = {
      camera: Camera,
      mountain: Mountain,
      'chef-hat': ChefHat
    }
    return icons[iconName] || Heart
  }

  const renderHobbies = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {interests.hobbies.map((hobby, index) => {
        const Icon = getIcon(hobby.icon)
        return (
          <div key={index} className={`rounded-2xl shadow-soft p-6 card-hover transition-colors duration-200 ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
          }`}>
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-lg ${
                darkMode ? 'bg-blue-400/20' : 'bg-accent/10'
              }`}>
                <Icon className={`h-6 w-6 ${
                  darkMode ? 'text-blue-400' : 'text-accent'
                }`} />
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>{hobby.name}</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{hobby.description}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )

  const renderGallery = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {interests.Gallery.map((item, index) => (
        <div key={index} className={`rounded-2xl shadow-soft overflow-hidden card-hover transition-colors duration-200 ${
          darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
        }`}>
          <div className="h-48 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
            {item.image ? (
              <img
                src={item.image}
                alt={item.destination}
                className="w-full h-full object-cover"
              />
            ) : (
              <ImageIcon className="h-12 w-12 text-gray-400" />
            )}
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className={`text-lg font-semibold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>{item.destination}</h3>
              <span className={`text-sm font-medium ${
                darkMode ? 'text-blue-400' : 'text-accent'
              }`}>{item.year}</span>
            </div>
            <p className={`text-sm ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Hobbies Section */}
      <div className={`rounded-2xl shadow-soft p-8 transition-colors duration-200 ${
        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
      }`}>
        <h2 className={`text-2xl font-bold mb-6 flex items-center ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          <Heart className={`h-6 w-6 mr-2 ${
            darkMode ? 'text-pink-400' : 'text-accent'
          }`} />
          Hobbies & Interests
        </h2>
        {renderHobbies()}
      </div>

      {/* Gallery Section */}
      <div className={`rounded-2xl shadow-soft p-8 transition-colors duration-200 ${
        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
      }`}>
        <h2 className={`text-2xl font-bold mb-6 flex items-center ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          <ImageIcon className={`h-6 w-6 mr-2 ${
            darkMode ? 'text-blue-400' : 'text-accent'
          }`} />
          Gallery
        </h2>
        {renderGallery()}
      </div>
    </div>
  )
}

export default MoreAboutMe 