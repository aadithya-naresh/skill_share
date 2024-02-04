// ProfilePage.js
import React, { useState } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");
  const [knows, setKnows] = useState("React, JavaScript, HTML, CSS");
  const [skills, setSkills] = useState(["Skill 1", "Skill 2"]);

  const skillos = 5;

  const handleEditClick = (field) => {
    const newValue = prompt(`Enter new value for ${field}:`);
    if (newValue !== null) {
      switch (field) {
        case 'name':
          setName(newValue);
          break;
        case 'email':
          setEmail(newValue);
          break;
        case 'phoneNumber':
          setPhoneNumber(newValue);
          break;
        case 'knows':
          setKnows(newValue);
          break;
        default:
          break;
      }
    }
  };

  const handleAddSkill = () => {

  };

  return (
    <div className="profile-container">
      <div className="banner">
        <h1>Skill Share</h1>
      </div>

      <div className="main-content">
        <h1 className="title">Profile</h1>
        <div className="profile-field">
          <label>Name:</label>
          <div className="field-value">
            {name}
            <button className="fieldbtn" onClick={() => handleEditClick('name')}>✏️</button>
          </div>
        </div>

        <div className="profile-field">
          <label>Email:</label>
          <div className="field-value">
            {email}
            <button className="fieldbtn" onClick={() => handleEditClick('email')}>✏️</button>
          </div>
        </div>

        <div className="profile-field">
          <label>Phone Number:</label>
          <div className="field-value">
            {phoneNumber}
            <button className="fieldbtn" onClick={() => handleEditClick('phoneNumber')}>✏️</button>
          </div>
        </div>

        <div className="profile-field">
          <label>Knows:</label>
          <div className="field-value">
            {knows}
            <button className="fieldbtn" onClick={() => handleEditClick('knows')}>✏️</button>
          </div>
        </div>

        <div className="profile-field">
          <label>Skillos:</label>
          <div className="field-value">
            {skillos}
            <button className="addbtn" onClick={handleAddSkill}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
