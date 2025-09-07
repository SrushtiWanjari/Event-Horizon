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

  const musicSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4 w-4 mr-2 inline-block fill-current">
      <path d="M492.6 195.4l-118-80c-7.9-5.4-19.3-5.4-27.2 0L229.4 195.4c-7.9 5.4-12.6 14.8-12.6 24.6V432c0 17.7-14.3 32-32 32h-16c-17.7 0-32-14.3-32-32s14.3-32 32-32h16c0-17.7 14.3-32 32-32s32 14.3 32 32v24.6l103.4-70.2c7.9-5.4 12.6-14.8 12.6-24.6V195.4zM32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"/>
    </svg>
  );

  const foodSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4 w-4 mr-2 inline-block fill-current">
      <path d="M224 96c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H224zm-22.6 148.6c-4.2-4.2-11-4.2-15.2 0l-58.6 58.6c-4.2 4.2-4.2 11 0 15.2l20.6 20.6c4.2 4.2 11 4.2 15.2 0l58.6-58.6c4.2-4.2 4.2-11 0-15.2L201.4 244.6zM464 256c-13.2 0-24-10.8-24-24s10.8-24 24-24 24 10.8 24 24-10.8 24-24 24zm-144-48v-32c0-13.2-10.8-24-24-24h-32c-13.2 0-24 10.8-24 24v32c0 13.2 10.8 24 24 24h32c13.2 0 24-10.8 24-24zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.9 0-208-93.1-208-208S141.1 48 256 48s208 93.1 208 208-93.1 208-208 208z"/>
    </svg>
  );

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'music':
        return musicSVG;
      case 'food':
        return foodSVG;
      case 'workshops':
        return <Award size={14} className="mr-2" />;
      default:
        return null;
    }
  };
  return (
    <div>
      
    </div>
  )
}

export default DetailedEventPage
