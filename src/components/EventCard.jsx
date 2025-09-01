import React from "react";
import { MapPin, Calendar } from "lucide-react";
import { Link } from "react-router";

function EventCard({ event }) {
  return (
    <div className="bg-gray-800 rounded-lg  shadow-lg transform hover:scale-105 transition-transform duration-300 ">
      <div className="p-5 w-105">
        <h3 className="text-xl  font-semibold text-sky-400">{event.title}</h3>
        <p className="text-gray-400 text-sm mt-1 flex items-center">
          <Calendar size={14} className="mr-2" />
          {event.date} | <MapPin size={14} className="ml-2 mr-1" />
          {event.location}
        </p>
        <p className="text-md mt-3 pr-17">{event.description}</p>
        <Link
          to={`/events/${event.id}`}
          className="mt-4 block w-50 text-center bg-teal-500 text-white font-bold py-2 rounded-full hover:bg-teal-600 transition-colors text-lg"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default EventCard;
