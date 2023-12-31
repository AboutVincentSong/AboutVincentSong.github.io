"use client";
import React, { useState, useEffect } from 'react';
import { ChevronRightCircle } from 'lucide-react';
import axios from 'axios';
import { useTheme } from 'next-themes';
import { FileText, Send } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { theme } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://api.web3forms.com/submit', {
        access_key: '9d9b1321-3fd3-400d-9645-bbb54f209e36',
        name,
        email,
        message,
      });

      setName('');
      setEmail('');
      setMessage('');
      setSuccessMessage('Message sent successfully!');

      setTimeout(() => {
        setSuccessMessage('');
      }, 15000);

    } catch (error) {
      console.error('Error submitting the form: ', error);
    }
  };

  useEffect(() => {
    setName('');
    setEmail('');
    setMessage('');
  }, []);

  return (
    <section style={{ paddingTop: '70px' }} className='min-h-screen'>
      <div className="app__contact text-center mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-sm lg:max-w-screen-sm xl:max-w-screen-sm">
        {successMessage && (
          <div className="bg-green-200 text-green-800 rounded-md p-3 mb-4">
            {successMessage}
          </div>
        )}

        <h2 className="h2 mx-auto section-title text-align-center mb-8">
          <ChevronRightCircle /> Contact Me
        </h2>

        <form onSubmit={handleSubmit} action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="9d9b1321-3fd3-400d-9645-bbb54f209e36" />
          <div className="space-y-4">
          <div className="p-4 rounded-md border dark:bg-[#1e293b] dark:border-gray-600 shadow-md">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                style={{backgroundColor: theme === 'dark' ? '#1e293b' : ''}}
              />
            </div>
            <div className="p-4 rounded-md border dark:bg-[#1e293b] dark:border-gray-600 shadow-md">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                style={{backgroundColor: theme === 'dark' ? '#1e293b' : ''}}
              />
            </div>
            <div className="p-4 rounded-md border dark:bg-[#1e293b] dark:border-gray-600 shadow-md">
              <textarea
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full p-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                style={{backgroundColor: theme === 'dark' ? '#1e293b' : ''}}
              />
            </div>
            <div className="p-4">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center mx-auto"
              >
                Send Message <Send size={18} className="ml-1"/>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
