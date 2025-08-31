import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import BrowseEvents from './pages/BrowseEvents.jsx';
import SubmitEvent from './pages/SubmitEvent.jsx';
import Contact from './pages/Contact.jsx';
import DetailedEventPage from './pages/DetailedEventPage.jsx';

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<BrowseEvents />} />
            <Route path="/submit" element={<SubmitEvent />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events/:id" element={<DetailedEventPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
)
