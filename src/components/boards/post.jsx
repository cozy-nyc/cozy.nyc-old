import React from 'react';

const Post = (id, user, image, message, date) => (
  <div className="message-wrapper">
    <div className="message-poster">
      <img className="profile-image" src={user.avatarUrl} alt={user.username} />
      <p>{user.username}</p>
    </div>
    <div className="message-bubble">
      (image ?
      <img className="message-image" src={image} alt={user.username} />
      )
      {message}
      {date}
    </div>
  </div>
);

export default (Post);
