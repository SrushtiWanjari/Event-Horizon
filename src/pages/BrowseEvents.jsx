import React, { useState, useEffect } from "react";
import EventCard from '../components/EventCard.jsx';
import InitialEvents from '../data/InitialEvents.js'; // Import the InitialEvents data

const BrowseEvents = () => {
  const [filter, setFilter] = useState('all');
  const [allEvents, setAllEvents] = useState(InitialEvents);

  useEffect(() => {
    try {
      const storedEvents = JSON.parse(localStorage.getItem('submittedEvents')) || [];
      const mergedEvents = [...InitialEvents, ...storedEvents];
      setAllEvents(mergedEvents);
    } catch (error) {
      console.error("Failed to load events from local storage:", error);
    }
  }, []);

  const filteredEvents = allEvents.filter(event => {
    if (filter === 'all') return true;
    return event.category === filter || event.day === filter;
  });

  return (
    <div className="ml-10 mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-6 border-b border-gray-700 pb-2">All Local Events</h2>
      <div className="flex flex-wrap gap-4 mb-8 text-sm">
        {['all', 'today', 'this-week', 'music', 'food', 'workshops'].map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full font-semibold transition-colors ${filter === category ? 'bg-sky-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
          </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-col lg:flex-row flex-wrap gap-8">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default BrowseEvents;