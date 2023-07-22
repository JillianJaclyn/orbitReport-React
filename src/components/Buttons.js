import React from "react";
import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
      {displaySats.map((satType, index) => (
        <button onClick={() => filterByType(satType)} key={index}>
          {satType} Orbit
        </button>
      ))}
      <button onClick={() => setSat(satData)}>All Orbits</button> 
    </div>
  );
};

export default Buttons;