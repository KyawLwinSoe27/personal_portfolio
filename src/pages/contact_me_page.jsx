import React from 'react';
import Footer from './footer_page';

const ContactPage = () => {
  return (
    <section id='contact'>
    <div className="bg-gray-100 h-min-screen pt-16">
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold mb-4">Contact Me</h1>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium">Your Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-300"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Email Address</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-300"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Message</label>
          <textarea
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-300"
            rows="5"
            placeholder="Write your message here"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-primary  text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
    <div className="h-24"></div>
    <Footer />
  </div>
    </section>
  );
};

export default ContactPage;
