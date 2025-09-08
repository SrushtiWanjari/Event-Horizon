import React from "react";
import { useParams, Link } from "react-router";
import { MapPin, Calendar, Award, UtensilsCrossed, Music } from "lucide-react";
import InitialEvents from "../data/InitialEvents.js";

function DetailedEventPage() {
  const { id } = useParams();
  const event = InitialEvents.find((e) => e.id === parseInt(id));

  if (!event) {
    return (
      <div className="py-8 text-center">
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-8 shadow-lg">
          <h2 className="text-4xl font-bold text-red-500 mb-4">
            Event Not Found
          </h2>
          <p className="text-gray-300">
            The event you are looking for does not exist.
          </p>
          <Link
            to="/browse"
            className="mt-6 inline-flex items-center text-gray-400 hover:text-sky-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Browse
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case "music":
        return <Music  className="h-4"/>;
      case "food":
        return <UtensilsCrossed  className="h-4"/>;
      case "workshops":
        return <Award  className="h-4" />;
      default:
        return null;
    }
  };
  return (
    <div className="py-8">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-8 shadow-lg">
        <Link
          to="/browse"
          className="flex items-center text-gray-400 hover:text-sky-400 transition-colors mb-6"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/8213/8213587.png"
            className="h-5 mr-3"
          />
          Back to Browse
        </Link>
        <img
          src={`https://placehold.co/800x500/1a1a2e/ffffff?text=${event.title.replace(
            /\s/g,
            "+"
          )}`}
          alt={event.title}
          className="w-full rounded-lg mb-6 object-cover h-64"
        />
        <h2 className="text-4xl font-bold text-sky-400 mb-2">{event.title}</h2>
        <p className="text-gray-400 text-lg mb-4 flex items-center">
          <Calendar size={18} className="mr-2" />
          {event.date} | <MapPin size={18} className="ml-4 mr-1" />
          {event.location}
        </p>
        <p className="text-gray-200 leading-relaxed text-lg">
          {event.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-2 text-sm">
          <span className="bg-sky-500 text-white px-3 py-1 gap-1 rounded-full flex items-center">
            {getCategoryIcon(event.category)}
            {event.category}
          </span>
          <span className="bg-gray-600 text-white px-3 py-1 rounded-full">
            {event.day}
          </span>
        </div>
      </div>
    </div>
  );
}

export default DetailedEventPage;
