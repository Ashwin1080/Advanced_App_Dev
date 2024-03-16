import React from 'react';

const Contact = () => {
  return (
    <>
    <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center h-screen w-500">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
          <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Your Message"></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-blue-600">Send</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Contact;
