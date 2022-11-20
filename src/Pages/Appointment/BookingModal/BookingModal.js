import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment; // treatment is appointment option just different name
    const date = format(selectedDate, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const phone = form.phone.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        const booking = {
            appointmentDate: date,
            treatment: name,
            name,
            slot,
            email,
            phone,
        }

        // todo: send data to the server
        //  and once data is saved then close the modal
        // and display success toast

        console.log(booking);
        setTreatment(null);

    }

    return (
        <>
            < input type="checkbox" id="Booking-Modal" className="modal-toggle" />
            <div className="modal">

                <div className="modal-box relative">
                    <label htmlFor="Booking-Modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={handleBooking} className='grid gap-3 grid-cols-1 mt-10'>
                        <input type="text" value={date} disabled className="input w-full" />

                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        <input name='email' type="email" placeholder="Email Address" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />

                        {/* <input type="text" placeholder="Type here" className="input w-full input-bordered" /> */}

                        <br />
                        <input className='btn btn-accent w-full' type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;