import React from "react";
import { useState } from "react";
import DogCard from "./DogCard";

function DogsContainer({ dogs, setDogs, handleDeleteDog}) {
  const [dogName, setDogName] = useState("");
  const [dogBreed, setDogBreed] = useState("");
  const [dogImage, setDogImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
    const dogData = {
        user_id: 1,
        name: dogName, 
        breed: dogBreed, 
        image_url: dogImage
    }
    // console.log(dogData)
    fetch("http://localhost:3000/dogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dogData),
    })
    .then(res => res.json())
    .then((newDog) => {setDogs([...dogs, newDog])})
    .then(() => {
      setDogName("");
      setDogBreed("");
      setDogImage("");
    })
  }

  return (
    <div>
      <div className="border-2 p-1 shadow-xl">
        <div className="border-2 bg-slate-600">
          <h1 className="p-1 text-3xl text-white text-center">
            Adopt a New Dog
          </h1>
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
                required
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
                required
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
                required
              />
            </label>
            <br></br> <br></br>
            <AdoptButton></AdoptButton>
          </form>
        </div>
      </div>
      <div>
          {dogs.map((d) => (
              <DogCard key={d.id} dog={d} handleDeleteDog={handleDeleteDog}/>
          ))}
      </div>
    </div>
  );
}

function AdoptButton(props){
    return (
      <input className="
      bg-slate-600
      text-white 
      
      px-3
      py-1
      rounded
      hover:bg-blue-600
      " type="submit" value="Adopt">{props.children}</input>
    )
  }

export default DogsContainer;
