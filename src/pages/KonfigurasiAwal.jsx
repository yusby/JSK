import React from "react";
import KonfigurasiAwalComponent from "../components/KonfigurasiAwalComponent";
import ScrollToTop from "../components/ScrollToTop"

const KonfigurasiAwal = () => {
  return (
    <div>
      <ScrollToTop />
      <div style={{ paddingTop: "100px" }}>
        <KonfigurasiAwalComponent/>
      </div>
    </div>
  );
};

export default KonfigurasiAwal;
