import React from 'react'
import Appointment from './Appointment'

function AppointmentContainer({appointments, handleDeleteAppointment, handleHowDumb}) {
  return (
    <div>

      <div className='grid grid-cols-10 bg-slate-600 text-white border-2'>
        <p className='col-start-1 col-end-3 px-7'>Doggo</p>
        <p className='col-start-4 px-1'>Service </p>
        <p className='col-start-6 px-5'>Stylist </p>
        <p className='col-start-9'>How Dumb</p>
        <p className='col-start-10 px-1'>Delete Appt</p>

      </div>
        {
          appointments.map((appointment) => 
          <Appointment 
          key={appointment.id}
          appointment={appointment} handleDeleteAppointment={handleDeleteAppointment} handleHowDumb={handleHowDumb}
          />
          )
        }
    </div>
  )
}

export default AppointmentContainer