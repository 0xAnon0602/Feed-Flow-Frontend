import React from 'react';
import '../css/Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-item">
        <label htmlFor="fileName">FILE NAME-</label>
        <input
          id="fileName"
          type="text"
          defaultValue="XYZ SOFTWARE"
        />
      </div>
      
      <div className="navbar-item">
        <label htmlFor="createdBy">CREATED BY-</label>
        <input
          id="createdBy"
          type="text"
          defaultValue="ABC"
        />
      </div>
      
      <div className="navbar-item">
        <label htmlFor="waterType">WATER TYPE:</label>
        <input
          id="waterType"
          type="text"
          defaultValue="Sea Water"
          readOnly
        />
      </div>

      <div className="navbar-item">
        <label htmlFor="preTreatment">Pre-Treatment:</label>
        <input
          id="preTreatment"
          type="text"
          defaultValue="RO Technology"
          readOnly
        />
      </div>
    </nav>
  );
}

export default Navbar;
