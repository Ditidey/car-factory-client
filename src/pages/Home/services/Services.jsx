import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleRight, FaCalendarDay, FaLocationArrow, FaPhoneSquareAlt } from 'react-icons/fa';
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center '>
                <p className='text-2xl text-orange-600 font-bold'>Services</p>
                <p className='text-4xl font-bold py-3'>Our Service Area </p>
                <p>Providing employment to millions of people and <br /> producing millions of cars each year that are sold around the world.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-2'>
                {
                    services.map(service => 
                    <div key={service._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={service.img} alt="Shoes" className="rounded-xl h-full w-full" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title font-bold">{service.title}</h2>
                           
                            <div className="card-actions flex justify-between">
                            <p className='text-orange-600 font-serif'>Price: ${service.price}</p>
                                <button className="btn btn-error bg-orange-700"><FaArrowAltCircleRight></FaArrowAltCircleRight></button>
                            </div>
                        </div>
                    </div>)
                }
                 
            </div>
            <p className='text-orange-600 text-xl text-center font-semibold'>More services</p>
            <div className='bg-black text-white grid lg:grid-cols-3 gap-6 py-10 px-20 mx-10 rounded-2xl my-8'>
                    <div className='flex'>
                        <FaCalendarDay className='bg-orange-900 mt-4 me-3 h-6 w-6'></FaCalendarDay>
                        <p><p>We are open from Mon-Fri Day</p>
                        <p className='font-serif font-bold text-xl'>7.00am - 9.00pm</p>
                        </p>
                    </div>
                    <div className='flex'>
                    <FaPhoneSquareAlt className='bg-orange-900 mt-4 me-3 h-6 w-6'></FaPhoneSquareAlt>
                    <p><p>Have a question?</p>
                        <p className='font-serif font-bold text-xl'>+353 2233445</p>
                        </p>
                    </div>
                    <div className='flex'>
                    <FaLocationArrow className='bg-orange-900 mt-4 me-3 h-6 w-6'></FaLocationArrow>
                    <p><p>Need a repair? Our address</p>
                        <p className='font-serif font-bold text-xl'>Dublin 8, Ireland</p>
                        </p>
                    </div>
                     
            </div>
        </div>
    );
};

export default Services;