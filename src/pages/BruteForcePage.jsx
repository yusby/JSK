import React from "react";
import BruteForceComponent from "../components/BruteForceComponent";
import ScrollToTop from "../components/ScrollToTop"

const BruteForce = () => {
  return (
    <div>
      <ScrollToTop />
      <div style={{ paddingTop: "100px" }}>
        <BruteForceComponent/>
      </div>
    </div>
  );
};

export default BruteForce;
