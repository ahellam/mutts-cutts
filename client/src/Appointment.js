import React, { useState } from 'react'

function Appointment({appointment, handleDeleteAppointment, handleHowDumb}) {

  // const [dumb, setDumb] = useState(appointment.stylist_intelligence)

  // function handleDelete(appointment){
  //   console.log("DELETE", appointment.id)
  // }
  // console.log(appointment)
  return (
    <div className='border-2 grid grid-cols-10 shadow-md'>
      <img src={appointment.dog_image} className='h-20 rounded-xl p-1 w-[150px] object-cover border-2'></img>
      <p className='p-1 col-start-2 col-end-4 self-center'><span className="font-semibold">Name:</span> {appointment.dog_name} <br></br><span className="font-semibold">Breed:</span>  {appointment.dog_breed}</p>
      <p className='p-1 col-start-4 col-end-6 self-center'><span className="font-semibold">Type:</span>  {appointment.service_name} <br></br><span className="font-semibold">Price:</span>  ${appointment.service_price}</p>
      <img src={appointment.stylist_name === "Lloyd" ? 
      "https://www.thesun.co.uk/wp-content/uploads/2018/07/NINTCHDBPICT000422933541.jpg" : "https://i.pinimg.com/originals/9b/68/c2/9b68c2b595162ee6239212f4edd2a325.jpg"} 
      className='col-start-6 h-20 rounded-xl p-1 w-[150px] object-cover border-2'></img>
      <p className='p-1 col-start-7 col-end-9 self-center'><span className="font-semibold">Name:</span>  {appointment.stylist_name} <br></br><span className="font-semibold">Intelligence:</span>  {appointment.stylist_intelligence}</p>
      <div className='p-1 self-center col-start-9 pl-4'><button className="
    bg-slate-600
    text-white 
    
    px-3
    py-1
    rounded
    hover:bg-blue-600
    " onClick={() => handleHowDumb(appointment)}>Edit</button></div>

      <div className='pl-5 self-center col-start-10 '><button className="
    bg-slate-600
    text-white 
    
    px-3
    py-1
    rounded
    hover:bg-red-600
    " onClick={() => handleDeleteAppointment(appointment)}>Delete</button></div>
    </div>
  )
}


// function EditButton(props){
//   return (
//     <button className="
//     bg-slate-600
//     text-white 
    
//     px-3
//     py-1
//     rounded
//     hover:bg-blue-600
//     ">{props.children}</button>
//   )
// }

// function DeleteButton(props){
//   return (
//     <button className="
//     bg-slate-600
//     text-white 
    
//     px-3
//     py-1
//     rounded
//     hover:bg-red-600
//     ">{props.children}</button>
//   )
// }

export default Appointment

// max-w-sm p-1