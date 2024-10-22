import React from "react";
import FeatureItem from "../../components/feature-item/FeatureItem";
import { featureItemList } from "./featureItemList";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {featureItemList.map((item) => (
          <FeatureItem item={item} key={item.id} />
        ))}
      </section>
    </div>
  );
};

export default Home;