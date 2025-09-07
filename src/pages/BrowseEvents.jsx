import React from "react";

const BrowseEvents = () => {
  const [filter, setFilter] = useState(all);
  const [allEvents, setAllEvents] = useState(initialEvents);

  useEffect(() => {
    try {
      const storedEvents = JSON.parse(localStorage.getItem('submittedEvents')) || [];
      const mergedEvents = [...initialEvents, ...storedEvents];
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
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-6 border-b border-gray-700 pb-2">All Local Events</h2>
    </div>
  )
}
export default BrowseEvents
