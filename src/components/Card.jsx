import React from "react";

export default function Card({ image, name, email, username, id }) {
  return (
    <div className="card">
      <strong>{id}</strong>
      <img src={image} alt={name} />
      <div className="cardData">
        <p>{name}</p>
        <p>{username}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}
