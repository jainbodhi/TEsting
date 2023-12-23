import React from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Replace 'Logo' with your actual logo component or image */}
        <img src="path_to_your_logo_image.png" alt="Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="user-icon">
        {/* Replace 'UserIcon' with your actual user icon component or image */}
        <img src="path_to_your_user_icon.png" alt="User Icon" />
      </div>
    </header>
  );
};

export default Header;
