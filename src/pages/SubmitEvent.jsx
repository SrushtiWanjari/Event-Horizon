import React from 'react'
import {useNavigate} from 'react-router';

function SubmitEvent() {
  const [formData, setFormData] = useState({ title: '', description: '', date: '', location: '', category: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      
    </div>
  )
}

export default SubmitEvent
