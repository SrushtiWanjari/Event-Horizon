import React from "react";
import EventCard from "../components/EventCard.jsx";
import InitialEvents from "../data/InitialEvents.js"

function Home() {
  return (
    <div>
      <h1 className="text-5xl md:text-7xl font-extrabold  text-sky-500 animate-pulse text-center my-10">
        Discover Your Next Adventure
      </h1>

      <p className="mt-5 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
        Find and explore local events happening right in your area.
      </p>

      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-6 border-b border-gray-700 pb-2">
          Featured Events
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {InitialEvents.slice(0, 3).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
