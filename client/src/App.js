import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react";

import Home from "./Home";
import AppointmentContainer from "./AppointmentContainer"
import Login from "./Login"
import Navigation from "./Navigation";
import Book from "./Book";

function App() {

  const appointmentAPI = "http://localhost:3000/appointments" 

  const [appointments, setAppointments] = useState([])


  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [user, setUser] = useState(null);



  useEffect(() => {
    fetch(`http://localhost:3000/authorised_user`)
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
    });
    fetch(appointmentAPI)
    .then(res => res.json())
    .then(setAppointments)
    // THEN NAVIGATE TO APPOINTMENTS PAGE
  },[])


  // useEffect(() => {
  //   fetch(appointmentAPI)
  //   .then(res => res.json())
  //   .then(setAppointments)
  // },[])

  // Reroute user to <Login /> Component if not authenticated
  if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;

  return (
    
    <div className="scale-95 container p-4 grid gap-4">
      <Router>
        <Navigation setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/appointments" element={<AppointmentContainer appointments={appointments} />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/book" element={<Book />} />

        </Routes>
      </Router>
    </div>
  );
}

// function TailwindCSSButton(props){
//   return (
//     <button className="
//     bg-blue-500 
//     text-white 
//     font-medium
//     px-4
//     py-2
//     rounded
//     hover:bg-blue-600
//     ">{props.children}</button>
//   )
// }

export default App;