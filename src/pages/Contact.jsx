import React from "react";

function Contact() {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-6 border-b border-gray-700 pb-2 pl-10">
        Get in Touch
      </h2>
      <div className="mt-10 border-1  p-5 w-100 rounded-lg ml-10 ">
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
            We're dedicated to helping you find
            the best events in your community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
