import React from 'react';
import { ChevronRightCircle } from 'lucide-react';

const Contact = () => {
  const contactItems = [
    {
      title: 'Email',
      link: 'mailto:alexjoonkim02@gmail.com',
      icon: '✉️', // Add an appropriate icon for Email
    },
    {
      title: 'Phone Number',
      link: 'tel:+17033805515',
      icon: '📞', // Add an appropriate icon for Phone Number
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/',
      icon: '🔗', // Add an appropriate icon for LinkedIn
    },
    {
      title: 'GitHub',
      link: 'https://github.com/',
      icon: '🌐', // Add an appropriate icon for GitHub
    },
  ];

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
              <a
                href={item.link}
                className="flex items-center justify-center space-x-2 text-lg font-bold text-gray-800 hover:text-indigo-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.title}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
