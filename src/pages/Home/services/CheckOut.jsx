import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { contextProvider } from '../../../AuthProvider';
import Swal from 'sweetalert2';

const CheckOut = () => {
    const service = useLoaderData();
    console.log('service', service)
    const {user} = useContext(contextProvider);
    const { title, img, _id, price  } = service;

    const handleBookNow = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email =  form.email.value;
        const price = form.price.value;
        const date = form.date.value;

        const order = {
            customerName: name,
            email, price, date, img, 
            service_id: _id,
            service_name: title,
        }
        console.log(order)
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Successful create account!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    return (
        <div className='my-5'>
            <div className='relative h-[300px]'>
                <img src={img} alt="" className='w-full  h-full ' />
                <p className='absolute top-1/4 ms-72 text-7xl font-bold text-orange-300 '>{title}</p>
            </div>

            <div className='w-full shadow-xl p-10 mt-4 bg-orange-50'>
                <form  onSubmit={handleBookNow}>
                   
                    <div className=" grid md:grid-cols-2 gap-6 mt-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' defaultValue={user?.email} required  placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={user?.displayName} required  placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Data</span>
                            </label>
                            <input type="date" name='date'  required placeholder="date" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" name='price' defaultValue={price} required  placeholder="due amount" className="input input-bordered" />                           
                        </div>
                        <div className="form-control mt-6">
                            
                            <input type="submit" value="Book Now" className="ms-56 btn btn-block bg-orange-600"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;