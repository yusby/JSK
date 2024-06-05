import React from "react";
import PortScanningComponnent from "../components/PortScanningComponent";
import ScrollToTop from "../components/ScrollToTop"

const PortScanning = () => {
  return (
    <div>
      <ScrollToTop />
      <div style={{ paddingTop: "100px" }}>
        <PortScanningComponnent/>
      </div>
    </div>
  );
};

export default PortScanning;
