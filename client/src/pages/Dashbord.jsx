import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLock, FaRobot, FaCog } from 'react-icons/fa';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('ai');
  const [interests, setInterests] = useState({
    ai: [],
    cybersecurity: [],
  });

  const handleInterestChange = (category, interest) => {
    setInterests((prev) => {
      const current = prev[category];
      const newInterests = current.includes(interest)
        ? current.filter((item) => item !== interest)
        : [...current, interest];
      return {
        ...prev,
        [category]: newInterests.slice(0, 5),
      };
    });
  };

  const interestOptions = {
    ai: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Robotics', 'AI Ethics', 'Autonomous Vehicles', 'AI Hardware', 'GPT Models', 'AI Startups'],
    cybersecurity: ['Network Security', 'Data Privacy', 'Malware Analysis', 'Cryptography', 'Threat Intelligence', 'Incident Response', 'Cloud Security', 'Penetration Testing', 'Risk Management', 'Cybersecurity Compliance'],
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="hidden md:flex flex-col w-64 bg-gray-800">
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <span className="text-white font-bold uppercase">Gozoom Newsletters</span>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-2 py-4 bg-gray-800">
            <Link
              to="#"
              className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
              onClick={() => setActiveTab('ai')}
            >
              <FaRobot className="h-6 w-6 mr-2" />
              AI News
            </Link>
            <Link
              to="#"
              className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
              onClick={() => setActiveTab('cybersecurity')}
            >
              <FaLock className="h-6 w-6 mr-2" />
              Cybersecurity
            </Link>
            <Link
              to="#"
              className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
              onClick={() => setActiveTab('settings')}
            >
              <FaCog className="h-6 w-6 mr-2" />
              Settings
            </Link>
          </nav>
        </div>
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200 md:hidden">
          <button
            className="text-gray-500 focus:outline-none focus:text-gray-700 ml-4"
            onClick={() => document.getElementById('mobile-nav').classList.toggle('hidden')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <input
            className="mx-4 w-full border rounded-md px-4 py-2"
            type="text"
            placeholder="Search"
          />
        </div>

        <div id="mobile-nav" className="flex flex-col bg-gray-800 md:hidden ">
          <Link
            to="#"
            className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
            onClick={() => { setActiveTab('ai'); document.getElementById('mobile-nav').classList.toggle('hidden'); }}
          >
            <FaRobot className="h-6 w-6 mr-2" />
            AI News
          </Link>
          <Link
            to="#"
            className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
            onClick={() => { setActiveTab('cybersecurity'); document.getElementById('mobile-nav').classList.toggle('hidden'); }}
          >
            <FaLock className="h-6 w-6 mr-2" />
            Cybersecurity
          </Link>
          <Link
            to="#"
            className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
            onClick={() => { setActiveTab('settings'); document.getElementById('mobile-nav').classList.toggle('hidden'); }}
          >
            <FaCog className="h-6 w-6 mr-2" />
            Settings
          </Link>
        </div>

        <div className="p-4">
          {activeTab === 'ai' && (
            <div>
              <h1 className="text-2xl font-bold">Artificial Intelligence News</h1>
              <p className="mt-2 text-gray-600">This is the AI news section.</p>
              {/* AI news content */}
            </div>
          )}
          {activeTab === 'cybersecurity' && (
            <div>
              <h1 className="text-2xl font-bold">Cybersecurity News</h1>
              <p className="mt-2 text-gray-600">This is the Cybersecurity news section.</p>
              {/* Cybersecurity news content */}
            </div>
          )}
          {activeTab === 'settings' && (
            <div>
              <h1 className="text-2xl font-bold">Settings</h1>
              <div className="mt-4">
                <h2 className="text-xl font-semibold">Select Your Interests</h2>
                {Object.keys(interestOptions).map((category) => (
                  <div key={category} className="mt-4">
                    <h3 className="font-bold capitalize">{category}</h3>
                    <div className="flex flex-wrap">
                      {interestOptions[category].map((interest) => (
                        <label key={interest} className="flex items-center mr-4 mt-2">
                          <input
                            type="checkbox"
                            checked={interests[category].includes(interest)}
                            onChange={() => handleInterestChange(category, interest)}
                            className="form-checkbox"
                          />
                          <span className="ml-2">{interest}</span>
                        </label>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">Select up to 5 interests</p>
                  </div>
                ))}
                <div className="mt-6">
                  <Link to="/forgot-password" className="text-blue-500 hover:underline">
                    Forgot Password?
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
