import React from 'react'

function Appointment({appointment}) {
  // console.log(appointment)
  return (
    <div className='border-2 grid grid-cols-10'>
      <img src={appointment.dog_image} className='h-20 rounded-xl p-1'></img>
      <p className='p-1 col-start-2 col-end-4 self-center'>Name: {appointment.dog_name} <br></br>Breed: {appointment.dog_breed}</p>
      <p className='p-1 col-start-4 col-end-6 self-center'>Type: {appointment.service_name} <br></br>Cost: ${appointment.service_price}</p>
      <img src={appointment.stylist_name === "Lloyd" ? 
      "https://www.thesun.co.uk/wp-content/uploads/2018/07/NINTCHDBPICT000422933541.jpg" : "https://i.pinimg.com/originals/9b/68/c2/9b68c2b595162ee6239212f4edd2a325.jpg"} 
      className='col-start-6 h-20 rounded-xl p-1 w-[100px] object-cover'></img>
      <p className='p-1 col-start-7 col-end-9 self-center'>Name: {appointment.stylist_name} <br></br>Intelligence: {appointment.stylist_intelligence}</p>
      <div className='p-1 self-center col-start-9'><EditButton>Edit</EditButton></div>
      <div className='pl-2 self-center col-start-10'><DeleteButton>Delete</DeleteButton></div>
    </div>
  )
}
function EditButton(props){
  return (
    <button className="
    bg-slate-600
    text-white 
    
    px-3
    py-1
    rounded
    hover:bg-blue-600
    ">{props.children}</button>
  )
}

function DeleteButton(props){
  return (
    <button className="
    bg-slate-600
    text-white 
    
    px-3
    py-1
    rounded
    hover:bg-red-600
    ">{props.children}</button>
  )
}

export default Appointment

// max-w-sm p-1