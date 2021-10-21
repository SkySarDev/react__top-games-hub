import React from "react";

import Navbar from "components/sidebar/Navbar";

const Sidebar = () => {
  return (
    <div>
      <div style={{ width: 150, height: 70, fontSize: 30 }}>LOGO</div>
      <div
        style={{
          width: 150,
          height: 100,
          border: "1px solid #d9ebe9",
          borderRadius: 5,
          marginBottom: 30,
        }}
      >
        User Panel
      </div>
      <Navbar />
    </div>
  );
};

export default Sidebar;
