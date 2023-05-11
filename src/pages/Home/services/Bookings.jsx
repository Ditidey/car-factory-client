import React, { useContext, useEffect, useState } from 'react';
import { contextProvider } from '../../../AuthProvider';
import Swal from 'sweetalert2';

const Bookings = () => {
    const { user } = useContext(contextProvider);
    const [bookings, setBookings] = useState([]);
    const { _id, customerName, service_name, img, date, price } = bookings
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBookings(data)
            })
    }, [])

    const handleDelete = id =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {

            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'delete'
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    Swal.fire(
                      'Deleted!',
                      'Your booking has been deleted.',                     
                    )                    
                  }
                  const remaining = bookings.filter(book => book._id !== id);
                    setBookings(remaining)
              })
           
          })

         
    }

    const handleConfirm = id =>{
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({status: 'confirm'})
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data)
            if (data.matchedCount > 0) {
                Swal.fire(
                  'Confirm!',
                  'Your booking has been confirmed.',                     
                )                    
              }
          })
    }
    return (
        <div>
            <p className='text-center text-3xl font-bold'>Total bookings: {bookings.length}</p>

            <table className="table w-full my-5">
                <tbody>
                    {
                        bookings.map(booking =>
                            <tr key={booking._id}>
                                <th>
                                    <button onClick={()=>handleDelete(booking._id)} className="btn btn-square btn-sm bg-orange-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="rounded-xl w-24 h-24">
                                                <img src={booking.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div className="font-bold text-2xl">{booking.customerName}</div>
                                    </div>
                                </td>
                                <td className='font-bold'>
                                    {booking.service_name}
                                </td>
                                <td>{booking.price}</td>
                                <td>{booking.date}</td>
                                <th>
                                    <button onClick={()=>handleConfirm(booking._id)} className="btn btn-primary bg-orange-600 btn-xs">Confirm</button>
                                </th>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Bookings;