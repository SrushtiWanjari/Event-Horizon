import React from "react";
import EventCard from "../components/EventCard.jsx";
import InitialEvents from "../data/InitialEvents.js"

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
    </div>
  );
}

export default Home;
