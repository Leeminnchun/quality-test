import React from "react";
import "./App.css";
import DoctorScreen from "./components/DoctorScreen";
import doctorImg from "./common/image/doctorImg.png";
import stethoscopeImg from "./common/image/stethoscopeImg.png";

function App() {
  return <DoctorScreen picFirst={doctorImg} picSecond={stethoscopeImg} />;
}

export default App;
