import React from "react";
import EventCard from "../components/EventCard.jsx";

function Home() {
  return (
    <div>
      <h1 className="text-5xl md:text-7xl font-extrabold  text-sky-500 animate-pulse text-center mt-50">
        Discover Your Next Adventure
      </h1>

      <p className="mt-10 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-50">
        Find and explore local events happening right in your area.
      </p>

      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-6 border-b border-gray-700 pb-2 pl-10">
          Featured Events
        </h2>

        <div className="flex flex-col justify-around sm:flex-col lg:flex-row gap-8">
          {InitialEvents.slice(0, 3).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      <div className="mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-6 border-b border-gray-700 pb-2 pl-10">Event Distribution</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <p className="text-lg text-gray-300 mb-2">Current events are distributed as follows:</p>
        <ul className="list-disc list-inside space-y-1 text-left inline-block">
          <li className="text-gray-400">2 Music events</li>
          <li className="text-gray-400">2 Food events</li>
          <li className="text-gray-400">1 Workshop event</li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Home;
