// MatchedPage.js
import React from 'react';
import './MatchedPage.css';

const MatchedPage = () => {
  const matchedItems = ["User 1", "User 2", "User 3", "User 4", "User 5"];

  return (
    <div className="matched-container">
      <div className="banner">
        <h1>Skill Share</h1>
      </div>

      <div className="top-nav">
        <ul>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#chat">Chat</a></li>
          <li><a href="#requests">Requests</a></li>
        </ul>
      </div>

      <div className="main-content">
        <h1 className="title">Matched Users</h1>
        <div className="item-list">
          {matchedItems.map((item, index) => (
            <div key={index} className="item-tile">
              <a href={`#matchedItem${index + 1}`}>{item}</a>
              <br />
              <p className="desc">Description</p>
              <br />
              <button onClick={() => handleChatButtonClick(`#matchedItem${index + 1}`)}>Chat</button>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const handleChatButtonClick = (itemLink) => {
  // Handle chat button click, you can navigate to a chat page or perform other actions
  console.log(`Clicked Chat button for ${itemLink}`);
};

export default MatchedPage;
