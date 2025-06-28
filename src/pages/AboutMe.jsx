import React, { useState, useEffect } from 'react'
import { Mail, MapPin, Github, Linkedin, Twitter, Calendar, Building, GraduationCap, Award } from 'lucide-react'
import profileData from '../../content/about/profile.json'

const AboutMe = ({ darkMode }) => {
  const [profile, setProfile] = useState(profileData)

  const renderSkills = () => {
    return (
      <div className="flex flex-wrap gap-2">
        {profile.skills.map((skill, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
              darkMode 
                ? 'bg-blue-400/20 text-blue-300' 
                : 'bg-accent/10 text-accent'
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    )
  }

  const renderExperience = () => {
    return (
      <div className="space-y-6">
        {profile.experience.map((exp, index) => (
          <div key={index} className={`rounded-2xl shadow-soft p-6 card-hover transition-colors duration-200 ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
          }`}>
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className={`text-lg font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>{exp.title}</h3>
                <p className={`font-medium ${
                  darkMode ? 'text-blue-400' : 'text-accent'
                }`}>{exp.company}</p>
              </div>
              <div className={`flex items-center text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                <Calendar className="h-4 w-4 mr-1" />
                {exp.period}
              </div>
            </div>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{exp.description}</p>
          </div>
        ))}
      </div>
    )
  }

  const renderEducation = () => {
    return (
      <div className="space-y-6">
        {profile.education.map((edu, index) => (
          <div key={index} className={`rounded-2xl shadow-soft p-6 card-hover transition-colors duration-200 ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
          }`}>
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className={`text-lg font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>{edu.degree}</h3>
                <p className={`font-medium ${
                  darkMode ? 'text-blue-400' : 'text-accent'
                }`}>{edu.institution}</p>
              </div>
              <div className={`flex items-center text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                <Calendar className="h-4 w-4 mr-1" />
                {edu.period}
              </div>
            </div>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{edu.description}</p>
          </div>
        ))}
      </div>
    )
  }

  const renderCertifications = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {profile.certifications.map((cert, index) => (
          <div key={index} className={`rounded-2xl shadow-soft p-6 card-hover transition-colors duration-200 ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
          }`}>
            <div className="flex items-start space-x-3">
              <Award className={`h-6 w-6 mt-1 ${
                darkMode ? 'text-blue-400' : 'text-accent'
              }`} />
              <div>
                <h3 className={`font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>{cert.name}</h3>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>{cert.issuer}</p>
                <p className={`text-sm ${
                  darkMode ? 'text-blue-400' : 'text-accent'
                }`}>{cert.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header Section */}
      <div className={`rounded-2xl shadow-soft p-8 transition-colors duration-200 ${
        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
      }`}>
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
            {profile.profileImage ? (
              <img
                src={profile.profileImage}
                alt={profile.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              profile.name.charAt(0)
            )}
          </div>
          <div className="flex-1">
            <h1 className={`text-3xl font-bold mb-2 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>{profile.name}</h1>
            <p className={`text-xl font-medium mb-4 ${
              darkMode ? 'text-blue-400' : 'text-accent'
            }`}>{profile.title}</p>
            <p className={`mb-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>{profile.summary}</p>
            
            {/* Contact Info */}
            <div className={`flex flex-wrap items-center space-x-6 text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                {profile.email}
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                {profile.location}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              {profile.social.github && (
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-200 ${
                    darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-accent'
                  }`}
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
              {profile.social.linkedin && (
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-200 ${
                    darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-accent'
                  }`}
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {profile.social.twitter && (
                <a
                  href={profile.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors duration-200 ${
                    darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-accent'
                  }`}
                >
                  <Twitter className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className={`rounded-2xl shadow-soft p-8 transition-colors duration-200 ${
        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
      }`}>
        <h2 className={`text-2xl font-bold mb-6 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>Skills</h2>
        {renderSkills()}
      </div>

      {/* Experience Section */}
      <div className={`rounded-2xl shadow-soft p-8 transition-colors duration-200 ${
        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
      }`}>
        <h2 className={`text-2xl font-bold mb-6 flex items-center ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          <Building className={`h-6 w-6 mr-2 ${
            darkMode ? 'text-blue-400' : 'text-accent'
          }`} />
          Experience
        </h2>
        {renderExperience()}
      </div>

      {/* Education Section */}
      <div className={`rounded-2xl shadow-soft p-8 transition-colors duration-200 ${
        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
      }`}>
        <h2 className={`text-2xl font-bold mb-6 flex items-center ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          <GraduationCap className={`h-6 w-6 mr-2 ${
            darkMode ? 'text-blue-400' : 'text-accent'
          }`} />
          Education
        </h2>
        {renderEducation()}
      </div>

      {/* Certifications Section */}
      <div className={`rounded-2xl shadow-soft p-8 transition-colors duration-200 ${
        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
      }`}>
        <h2 className={`text-2xl font-bold mb-6 flex items-center ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          <Award className={`h-6 w-6 mr-2 ${
            darkMode ? 'text-blue-400' : 'text-accent'
          }`} />
          Certifications
        </h2>
        {renderCertifications()}
      </div>
    </div>
  )
}

export default AboutMe 