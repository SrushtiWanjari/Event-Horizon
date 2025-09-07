import React from 'react'
import { useParams, Link } from 'react-router';
import { MapPin, Calendar, Award } from 'lucide-react';
import InitialEvents  from '../data/InitialEvents.js';

function DetailedEventPage() {
  const { id } = useParams();
  const event = InitialEvents.find(e => e.id === parseInt(id));

  if (!event) {
    return (
      <div className="py-8 text-center">
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-8 shadow-lg">
          <h2 className="text-4xl font-bold text-red-500 mb-4">Event Not Found</h2>
          <p className="text-gray-300">The event you are looking for does not exist.</p>
          <Link to="/browse" className="mt-6 inline-flex items-center text-gray-400 hover:text-sky-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Browse
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      
    </div>
  )
}

export default DetailedEventPage
