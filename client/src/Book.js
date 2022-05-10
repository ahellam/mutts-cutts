import React from "react";
import { useState } from "react";

function Book() {
  const [dogName, setDogName] = useState("");
  const [dogBreed, setDogBreed] = useState("");
  const [dogImage, setDogImage] = useState("");
  const [service, setService] = useState("Wash");
  const [price, setPrice] = useState(parseFloat(50).toFixed(2));
  const [stylist, setStylist] = useState("Lloyd");
  const [stylistImage, setStylistImage] = useState("")
  

function handleServiceChange(e){
    const service = (e.target.value);
    setService(service);
    if (service === "Haircut") {
        setPrice(parseFloat(100).toFixed(2))
    } else if(service === "The Works"){
        setPrice(parseFloat(150).toFixed(2))
    }else{
        setPrice(parseFloat(50).toFixed(2))
    }
}

function handleStylistChange(e){
    const stylist = (e.target.value);
    setStylist(stylist)
    if (stylist === "Lloyd") {
        setStylistImage("https://www.thesun.co.uk/wp-content/uploads/2018/07/NINTCHDBPICT000422933541.jpg")
    }else{
        setStylistImage("https://i.pinimg.com/originals/9b/68/c2/9b68c2b595162ee6239212f4edd2a325.jpg")
    }
    // console.log(stylistImage)
}

function handleSubmit(e){
    e.preventDefault()
    console.log(e)
}



  return (
    <div className=" border-4 p-1 shadow-xl">
      <div className="border-2 bg-slate-600">
        <h1 className="p-1 text-3xl text-white text-center">Book An Appointment</h1>
      </div>
      <div className="grid grid-rows-3 p-4">
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
              <option value="Wash">Wash</option>
              <option value="Haircut">Haircut</option>
              <option value="The Works">The Works</option>
            </select>
          </label>

          <label className="font-bold px-1">
            Price:&nbsp;$
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
          </label> <br></br><br></br>

          <BookButton></BookButton>

        </form>
        <div className="row-start-3">
            <img src={dogImage} className=" h-40 rounded-xl p-1 w-[150px] object-cover float-left">
            </img>
            <img src={stylistImage} className="h-40 rounded-xl p-1 w-[150px] object-cover float-right">
            </img>
        </div>
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
