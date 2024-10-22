import React from "react";

function FeatureItem(props) {
  const { item } = props;
  return (
    <div className="feature-item">
      <img src={item.image} alt={item.title} className="feature-icon" />
      <h3 className="feature-item-title">{item.title}</h3>
      <p>{item.text}</p>
    </div>
  );
}

export default FeatureItem;
