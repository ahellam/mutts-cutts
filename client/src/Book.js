import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Book({dogs, stylists, services, appointments, setAppointments}) {

    let navigate = useNavigate();

  const [selectedDog, setSelectedDog] = useState();
  const [selectedStylist, setSelectedStylist] = useState();
  const [selectedService, setSelectedService] = useState();
  const [dumbness, setDumbness] = useState();

  
//   const [dogName, setDogName] = useState("");
//   const [dogBreed, setDogBreed] = useState("");
//   const [dogImage, setDogImage] = useState("");
//   const [service, setService] = useState("");
//   const [price, setPrice] = useState();
//   const [stylist, setStylist] = useState("");
//   const [stylistImage, setStylistImage] = useState("")
//   const [intelligence, setIntelligence] = useState("")

  const currentDog = dogs.find((d) => d.id === parseInt(selectedDog))
  const currentStylist = stylists.find((s) => s.id === parseInt(selectedStylist))
  const currentService = services.find((s) => s.id === parseInt(selectedService))
  //   console.log(currentDog)
  
function handleDogChange(e){
    return setSelectedDog(e.target.value)
}
  // console.log(selectedDog)
  
function handleServiceChange(e){
    return setSelectedService(e.target.value);
}

function handleStylistChange(e){
    return setSelectedStylist(e.target.value);
}

function handleDumbnessChange(e){
    return setDumbness(e.target.value)
}

                                                // BOOKING SUBMIT
function handleSubmit(e){
    e.preventDefault()
    const formData = {
        dog_id: currentDog.id,
        stylist_id: currentStylist.id,
        service_id: currentService.id,
        dog_image: currentDog.image_url,
        dog_name: currentDog.name,
        dog_breed: currentDog.breed, 
        service_name: currentService.name, 
        service_price: currentService.price, 
        stylist_image: currentStylist.image_url,
        stylist_name: currentStylist.name,
        is_dumber: dumbness

    };
    fetch ("http://localhost:3000/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
    .then(res => res.json())
    .then((newAppointment) => {setAppointments([...appointments, newAppointment])})
    .then(navigate("/appointments"))
}



  return (
    <div className=" border-2 p-1 shadow-xl">
      <div className="border-2 bg-slate-600">
        <h1 className="p-1 text-3xl text-white text-center">Book An Appointment</h1>
      </div>
      <div className="grid grid-rows-1 p-4">
        <form className="p-1 text-center" onSubmit={handleSubmit}>

                                            {/* SELECT DOG */}
          <label className="font-bold px-8">
          Select Dog: &nbsp;
            <select
            className="border-2 rounded-md"
            type="text"
            value={selectedDog}
            onChange={handleDogChange}
            >
            <option value=""> </option>
            {dogs.map((d) => (
                <option key={d.id} value={d.id}>
                    {d.name}
                </option>
            ))}
            </select>
          </label>

          {/* <br></br> <br></br> */}


                                            {/* SELECT SERVICE */}
        <label className="font-bold px-8">
          Select Service: &nbsp;
            <select
            className="border-2 rounded-md"
            type="text"
            value={selectedService}
            onChange={handleServiceChange}
            >
            <option value=""> </option>
            {services.map((ser) => (
                <option key={ser.id} value={ser.id}>
                    {ser.name}
                </option>
            ))}
            </select>
          </label>

                                                      {/* SELECT STYLIST */}
        <label className="font-bold px-8">
          Select Stylist: &nbsp;
            <select
            className="border-2 rounded-md"
            type="text"
            value={selectedStylist}
            onChange={handleStylistChange}
            >
            <option value=""> </option>
            {stylists.map((sty) => (
                <option key={sty.id} value={sty.id}>
                    {sty.name}
                </option>
            ))}
            </select>
          </label>
                                                      {/* SELECT INTELLIGENCE */}
        <label className="font-bold px-8">
          Stylist Intelligence: &nbsp;
          <select
          className="border-2 rounded-md"
          type="text"
          value={dumbness}
          onChange={handleDumbnessChange}
          >
            <option value=" "> </option>
            <option value="Dumb">Dumb</option>
            <option value="Dumber">Dumber</option>

          </select>
        </label>

          <br></br><br></br>


          <BookButton></BookButton>

        </form>

    
        {/* <div className="row-start-2">
            <img src={dogImage} className=" h-40 rounded-xl p-1 w-[150px] object-cover float-left">
            </img>
            <img src={stylistImage} className="h-40 rounded-xl p-1 w-[150px] object-cover float-right">
            </img>
        </div> */}
      </div>
      <div className='grid grid-cols-8 bg-slate-600 text-white border-2'>
        <p className='col-start-1 col-end-3 px-7'>Doggo</p>
        <p className='col-start-4 px-1'>Service </p>
        <p className='col-start-6 px-1'>Stylist </p>
      </div>

      <div className='border-2 grid grid-cols-8 shadow-md'>
      {currentDog && <img src={currentDog.image_url} className='h-20 rounded-xl p-1 w-[150px] object-cover border-2'></img>}
      {currentDog && <p className='p-1 col-start-2 col-end-4 self-center'><span className="font-semibold">Name:</span> {currentDog.name} <br></br><span className="font-semibold">Breed:</span> {currentDog.breed}</p>}
      {currentService && <p className='p-1 col-start-4 col-end-6 self-center'><span className="font-semibold">Type:</span> {currentService.name} <br></br><span className="font-semibold">Price:</span> {currentService.price}</p>}
      {currentStylist && <img src={currentStylist.image_url} 
      className='col-start-6 h-20 rounded-xl p-1 w-[150px] object-cover border-2'></img>}
      {currentStylist && <p className='p-1 col-start-7 col-end-9 self-center'><span className="font-semibold">Name:</span> {currentStylist.name} <br></br><span className="font-semibold">Intelligence:</span> {dumbness}</p>}
      
    </div>

    </div>
  );
}

function BookButton(props){
    return (
      <input className="
      bg-slate-600
      text-white 
      
      px-3
      py-1
      rounded
      hover:bg-blue-600
      " type="submit" value="Book Appointment">{props.children}</input>
    )
  }

export default Book;
