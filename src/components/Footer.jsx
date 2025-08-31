import React from "react";

function Footer() {
  return (
    <div>
    <footer className="bg-gray-950 text-gray-400 py-6 mt-8 ">
      <div className="text-center">
        <p>&copy; 2024 Event Horizon. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
