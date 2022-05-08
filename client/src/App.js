import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

// import Signup from "./Signup";
// import ClientContainer from "./ClientContainer";
import AppointmentContainer from "./AppointmentContainer"

function App() {

  const appointmentAPI = "http://localhost:3000/appointments" 

  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    fetch(appointmentAPI)
    .then(res => res.json())
    .then(setAppointments)
  },[])


  return (
    
    <div className="container p-4">
        <AppointmentContainer appointments={appointments}/>
    </div>
  );
}

function TailwindCSSButton(props){
  return (
    <button className="
    bg-blue-500 
    text-white 
    font-medium
    px-4
    py-2
    rounded
    hover:bg-blue-600
    ">{props.children}</button>
  )
}

export default App;