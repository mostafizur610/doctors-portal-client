import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOptions from './AppointmentOptions';

const AvailableAppointment = ({ selectedDate }) => {

    const [appointmentOptions, setAppointmentOptions] = useState([]);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])

    return (
        <section className='mt-16'>
            <p className='text-center text-secondary font-bold'>Available Appointment on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-rows-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option => <AppointmentOptions
                        key={option._id}
                        appointmentOption={option}
                    ></AppointmentOptions>)
                }
            </div>
        </section>
    );
};

export default AvailableAppointment;