import React from 'react'
import Appointment from './Appointment'

function AppointmentContainer({appointments}) {
  return (
    <div>

      <div className='grid grid-cols-10 bg-slate-600 text-white border-2'>
        <p className='col-start-1 col-end-3 px-7'>Doggo</p>
        <p className='col-start-4 px-1'>Service </p>
        <p className='col-start-6 px-1'>Stylist </p>
        <p className='col-start-9 px-1'>Edit App</p>
        <p className='col-start-10 px-1'>Delete App</p>

      </div>
        {
          appointments.map((appointment) => 
          <Appointment 
          key={appointment.id}
          appointment={appointment}
          />
          )
        }
    </div>
  )
}

export default AppointmentContainer