import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OldBook({appointments, setAppointments}) {

    let navigate = useNavigate();

  const [dogName, setDogName] = useState("");
  const [dogBreed, setDogBreed] = useState("");
  const [dogImage, setDogImage] = useState("");
  const [service, setService] = useState("");
  const [price, setPrice] = useState();
  const [stylist, setStylist] = useState("");
  const [stylistImage, setStylistImage] = useState("")
  const [intelligence, setIntelligence] = useState("")
  

function handleServiceChange(e){
    const service = (e.target.value);
    setService(service);
    if (service === "Haircut") {
        setPrice(parseFloat(100).toFixed(2))
    } else if(service === "The Works"){
        setPrice(parseFloat(150).toFixed(2))
    } else if(service === "Wash"){
        setPrice(parseFloat(50).toFixed(2))
    } else {
        setPrice("")
    }
}

function handleStylistChange(e){
    const stylist = (e.target.value);
    setStylist(stylist)
    if (stylist === "Lloyd") {
        setStylistImage("https://www.thesun.co.uk/wp-content/uploads/2018/07/NINTCHDBPICT000422933541.jpg")
    }else if(stylist === "Harry"){
        setStylistImage("https://i.pinimg.com/originals/9b/68/c2/9b68c2b595162ee6239212f4edd2a325.jpg")
    }
    else{
        setStylistImage(null)
    }
    // console.log(stylistImage)
}

function handleIntelligenceChange(e){
    setIntelligence(e.target.value)

}

function handleSubmit(e){
    e.preventDefault()
    const formData = {
        dog_image: dogImage,
        dog_name: dogName,
        dog_breed: dogBreed, 
        service_name: service, 
        service_price: price, 
        stylist_image: stylistImage,
        stylist_name: stylist,
        stylist_intelligence: intelligence

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
          <label className="font-bold px-1">
            Dog Name: &nbsp;
            <input
              className="border-2 rounded-md"
              type="text"
              placeholder="Enter Name"
              value={dogName}
              onChange={(e) => setDogName(e.target.value)}
            />
          </label>

          <label className="font-bold px-1">
            Dog Breed: &nbsp;
            <input
              className="border-2 rounded-md"
              type="text"
              placeholder="Enter Breed"
              value={dogBreed}
              onChange={(e) => setDogBreed(e.target.value)}
            />
          </label>

          <label className="font-bold px-1">
            Dog Image: &nbsp;
            <input
              className="border-2 rounded-md"
              type="text"
              placeholder="Enter Image URL"
              value={dogImage}
              onChange={(e) => setDogImage(e.target.value)}
            />
          </label> <br></br> <br></br>

          <label className="font-bold px-1">
            Select Service: &nbsp;
            <select
              className="border-2 rounded-md"
              type="text"
              placeholder="Enter Image URL"
              value={service}
              onChange={handleServiceChange}
            >
              <option value=""> </option>
              <option value="Wash">Wash</option>
              <option value="Haircut">Haircut</option>
              <option value="The Works">The Works</option>
            </select>
          </label>

          <label className="font-bold px-1">
            Price:&nbsp;
            <input
              className="border-2 rounded-md"
              type="text"
              value={price}
              readOnly
            />
          </label> <br></br><br></br>

          <label className="font-bold px-1">
            Select Stylist: &nbsp;
            <select
              className="border-2 rounded-md"
              type="text"
              placeholder="Enter Image URL"
              value={stylist}
              onChange={handleStylistChange}
            >
              <option value=""> </option>
              <option value="Lloyd">Lloyd</option>
              <option value="Harry">Harry</option>
            </select>
          </label>

          <label className="font-bold px-1">
            Stylist Image URL: &nbsp;
            <input
              className="border-2 rounded-md"
              type="text"
              value={stylistImage}
              readOnly
            />
          </label> 
          
          <label className="font-bold px-1">
            Intelligence: &nbsp;
            <select
              className="border-2 rounded-md"
              type="text"
              placeholder="Enter Image URL"
              value={intelligence}
              onChange={handleIntelligenceChange}
            >
              <option value=""> </option>
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
      {dogImage && <img src={dogImage} className='h-20 rounded-xl p-1 w-[150px] object-cover'></img>}
      {dogName && <p className='p-1 col-start-2 col-end-4 self-center'>Name: {dogName} <br></br>Breed: {dogBreed}</p>}
      {service && <p className='p-1 col-start-4 col-end-6 self-center'>Type: {service} <br></br>Cost: ${price}</p>}
      {stylistImage && <img src={stylistImage} 
      className='col-start-6 h-20 rounded-xl p-1 w-[150px] object-cover'></img>}
      {stylist && <p className='p-1 col-start-7 col-end-9 self-center'>Name: {stylist} <br></br>Intelligence: {intelligence}</p>}
      
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

export default OldBook;
