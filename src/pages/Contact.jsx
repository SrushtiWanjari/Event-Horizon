import React from "react";

function Contact() {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-15 border-b border-gray-700 pb-2 pl-10 mt-10">
        Get in Touch
      </h2>
      <div className="flex">
        <div className="mt-10 border-1  p-5 w-100 rounded-lg ml-10 h-fit static ">
          <div className="bg-sky-800 w-7 h-7 rounded-3xl absolute top-65 right-266 animate-ping"></div>
          <div className="bg-sky-800 w-5 h-5 rounded-3xl absolute top-66 right-267 "></div>
          <div className="text-center text-gray-400  ">
            <p className="pb-3 font-bold text-2xl text-sky-500">
              You can also reach us directly:
            </p>
            <p className="text-lg mt-3">
              <b>Email:</b> &nbsp; contact@eventhorizon.com
            </p>
            <p className="mr-27">
              <b className="text-lg ">Phone:</b> &nbsp; (555) 123-4567
            </p>
            <p className="text-lg mt-5 text-teal-400">
              We're dedicated to helping you find the best events in your
              community.
            </p>
          </div>
        </div>

        <div className="max-w-xl mx-auto bg-gray-800 rounded-lg p-8 shadow-lg">
          <p className="text-gray-300 mb-4">
            Have questions, suggestions, or feedback about Event Horizon? We'd
            love to hear from you!
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-300 font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="contactName"
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700  focus:ring-2 focus:ring-sky-500 transition-all"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 font-bold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="contactEmail"
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 font-bold mb-2">
                Message
              </label>
              <textarea
                id="contactMessage"
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white font-bold py-3 rounded-full hover:bg-teal-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
