import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react";

import Home from "./Home";
import AppointmentContainer from "./AppointmentContainer"
import Login from "./Login"
import Navigation from "./Navigation";
import Book from "./Book";
import DogsContainer from "./DogsContainer";

function App() {

  const appointmentAPI = "http://localhost:3000/appointments" 
  const dogsAPI = "http://localhost:3000/dogs" 
  const stylistsAPI = "http://localhost:3000/stylists" 
  const servicesAPI = "http://localhost:3000/services" 

  const [appointments, setAppointments] = useState([])
  const [dogs, setDogs] = useState([])
  const [stylists, setStylists] =useState([])
  const [services, setServices] =useState([])


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
    
    fetch(dogsAPI)
    .then(res => res.json())
    .then(setDogs)

    fetch(stylistsAPI)
    .then(res => res.json())
    .then(setStylists)

    fetch(servicesAPI)
    .then(res => res.json())
    .then(setServices)

  },[])

  function handleDeleteAppointment(appointment){
    fetch(`${appointmentAPI}/${appointment.id}`,{
      method: "DELETE"
    })
    .then(setAppointments(appointments.filter((appt) => appt.id !== appointment.id)))
  }

  function handleDeleteDog(dog){
    // console.log(dog)
    fetch(`${dogsAPI}/${dog.id}`,{
      method: "DELETE"
    })
    .then(setAppointments(appointments.filter((appt) => appt.dog_id !== dog.id)))
    .then(setDogs(dogs.filter((d) => d.id !== dog.id)))
  }

  function handleHowDumb(appointment){
    console.log(appointment)
    // fetch(`${appointmentAPI}/${appointment.id}`,{
    //   method: "PATCH",
    //   headers: {"Content-Type" : "application/json"},
    //   body: JSON.stringify{"hey"}
    // })

  }

  // Reroute user to <Login /> Component if not authenticated
  if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;

  return (
    
    <div className="scale-95 container p-4 grid gap-4">
      <Router>
        <Navigation setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/appointments" element={<AppointmentContainer appointments={appointments} handleDeleteAppointment={handleDeleteAppointment} handleHowDumb={handleHowDumb}/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/book" element={<Book dogs={dogs} stylists={stylists} services={services} appointments={appointments} setAppointments={setAppointments}/>} />
          <Route path="/dogs" element={<DogsContainer dogs={dogs} setDogs={setDogs} handleDeleteDog={handleDeleteDog}/>} />
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