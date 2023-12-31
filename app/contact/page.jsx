'use client';

import React from 'react';
import { ChevronRightCircle } from 'lucide-react';
import { useTheme } from 'next-themes';

const Contact = () => {
  const contactItems = [
    {
      title: 'Email',
      link: 'mailto:nwb6za@virginia.edu',
      icon: '✉️', 
      target: '_self',
    },
    {
      title: 'Phone Number',
      link: 'tel:+15712964933',
      icon: '📞', 
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/vincentsong/',
      icon: '🔗', 
      target: '_blank',
    },
    {
      title: 'GitHub',
      link: 'https://github.com/vsong15',
      icon: '🌐', 
      target: '_blank',
    },
  ];

   const handleClick = (event) => {
    event.preventDefault(); 
  };

  const { theme } = useTheme();

  return (
    <section style={{ paddingTop: '100px' }} className='min-h-screen'>
      <div className="app__contact text-center mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-sm lg:max-w-screen-sm xl:max-w-screen-sm">
        <h2 className="h2 mx-auto section-title text-align-center mb-8">
          <ChevronRightCircle /> Contact Information
        </h2>

        <div className="space-y-4">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-md border border-gray-200 shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            >
              {item.title === 'Phone Number' ? (
                <a href={item.link}
                  className="flex items-center justify-center space-x-2 text-lg font-bold text-gray-800 hover:text-indigo-600"
                  rel="noopener noreferrer"
                  style={{pointerEvents: 'hover'}}
                  onClick={handleClick}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className={`${theme === 'dark' ? 'white-text' : ''}`}>{item.title}</span>
                </a>
              ) : (
                <a
                  href={item.link}
                  className="flex items-center justify-center space-x-2 text-lg font-bold text-gray-800 hover:text-indigo-600"
                  target={item.target || '_blank'} 
                  rel="noopener noreferrer"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className={`${theme === 'dark' ? 'white-text' : ''}`}>{item.title}</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
