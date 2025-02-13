
import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const  Semaforo = () =>  {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div className= "fondo">
    <div>
      <div className= "stick"></div>
    <div className="traffic-light">
      
      <div
        onClick={() => setSelectedColor("red")}
        className={"light red" + (selectedColor === "red" ? " glowRed" : "")}
      ></div>
      <div
        onClick={() => setSelectedColor("yellow")}
        className={"light yellow" + (selectedColor === "yellow" ? " glowYellow" : "")}
      ></div>
      <div
        onClick={() => setSelectedColor("green")}
        className={"light green" + (selectedColor === "green" ? " glowGreen" : "")}
      ></div>
    </div>
    </div>
    </div>
  );
}

export default Semaforo;
