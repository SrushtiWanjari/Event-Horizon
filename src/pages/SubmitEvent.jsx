import React from 'react'
import {useNavigate} from 'react-router';

function SubmitEvent() {
  const [formData, setFormData] = useState({ title: '', description: '', date: '', location: '', category: '' });
  const navigate = useNavigate();
  return (
    <div>
      
    </div>
  )
}

export default SubmitEvent
