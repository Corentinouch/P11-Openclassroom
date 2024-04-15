import React, { useState } from 'react';
import './dropdown.css';

function Dropdown({ title, content }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        <span>{title}</span>
        <span className={`arrow ${isDropdownOpen ? 'rotated' : ''}`}>▼</span>
      </button>
      <div className={`dropdown-content ${isDropdownOpen ? 'open' : ''}`}>
        <span className="fade-in">{content}</span>
      </div>
    </div>
  );
}

export default Dropdown;
