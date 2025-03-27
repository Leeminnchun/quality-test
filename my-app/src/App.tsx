import React from "react";
import "./App.css";
import DoctorScreen from "./components/DoctorScreen";
import doctorImg from "./common/image/doctorImg.png";
import stethoscopeImg from "./common/image/stethoscopeImg.png";

function App() {
  return (
    <DoctorScreen
      picFirst={
        <img
          src={doctorImg}
          alt="Doctor"
          className="w-full h-full object-cover"
        />
      }
      picSecond={
        <img
          src={stethoscopeImg}
          alt="Stethoscope"
          className="w-full h-full object-cover"
        />
      }
    />
  );
}

export default App;
