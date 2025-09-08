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

  return <div></div>;
}

export default SubmitEvent;
