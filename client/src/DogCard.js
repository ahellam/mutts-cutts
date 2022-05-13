
import React, { useState } from 'react';

function DogCard({dog, handleDeleteDog}) {
    const [isShown, setIsShown] = useState(false);

  return (
      
    <div className="grid grid-cols-6 border-2 p-1 shadow-xl">
        <img src={dog.image_url} className='rounded-xl p-1 w-[300px] object-cover border-2'></img>
        <h1 className="pl-5 text-3xl font-bold self-center col-span-2">Name:&nbsp; <span className=" font-light">{dog.name}</span></h1>
        <h1 className="text-3xl font-bold self-center col-span-3 pl-7">Breed:&nbsp; <span className=" font-light">{dog.breed}</span></h1>
        <div className='pr-5 self-center col-start-10 '><button className="
    bg-slate-600
    text-white 
    
    px-6
    py-2
    rounded
    hover:bg-red-600
    " 
    onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)}
    onClick={() => handleDeleteDog(dog)}>{isShown ? <span> &nbsp; &nbsp; &nbsp; &nbsp; Don't Do It &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span> : "Do Something Dumb"}</button></div>
    </div>
    
  )
}


export default DogCard