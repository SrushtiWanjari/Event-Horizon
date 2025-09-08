import React from "react";
import { useNavigate } from "react-router";

function SubmitEvent() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    category: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const newId = Date.now();
      const today = new Date().toISOString().split("T")[0];
      const day = formData.date === today ? "today" : "this-week";

      const newEvent = { ...formData, id: newId, day: day };

      const storedEvents =
        JSON.parse(localStorage.getItem("submittedEvents")) || [];
      const updatedEvents = [...storedEvents, newEvent];
      localStorage.setItem("submittedEvents", JSON.stringify(updatedEvents));
      toast.success("Event submitted successfully!");

      navigate("/browse");
    } catch (error) {
      toast.error("Failed to submit event. Please try again.");
      console.error("Failed to save event to local storage:", error);
    }
  };

  return(
  <div>
    <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-6 border-b border-gray-700 pb-2">Submit Your Event</h2>
      <div className="max-w-xl mx-auto bg-gray-800 rounded-lg p-8 shadow-lg"></div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label  className="block text-gray-300 font-bold mb-2">Event Title</label>
            <input type="text"  name="title" value={formData.title} onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all" required />
          </div>
           <div className="mb-4">
            <label className="block text-gray-300 font-bold mb-2">Description</label>
            <textarea  name="description" value={formData.description} onChange={handleChange} rows="4" className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all" required></textarea>
          </div>
        </form>
  </div>
);

}

export default SubmitEvent;
