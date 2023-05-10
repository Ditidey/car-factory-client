import React from 'react';
import img1 from '../../assets/images/banner/1.jpg';
import img2 from '../../assets/images/banner/2.jpg';
import img3 from '../../assets/images/banner/3.jpg';
import img4 from '../../assets/images/banner/4.jpg';
 

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] mb-3">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={img1} className="w-full rounded-xl" />

                <div className='absolute bg-gradient-to-r from-black opacity-80 to-slate-100 text-white h-full w-full rounded-xl'>
                     <div className='w-1/3 py-10 ps-20 space-y-5'>
                     <p className='text-7xl font-bold'>Affordable Price For Car Servicing</p>
                     <p className='text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                     <div className='p-2'>
                     <button className="btn btn-error mr-5">Discover more</button>
                     <button className="btn btn-outline btn-secondary">Latest Project</button>
                     </div>
                     </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-success mr-5">❮</a>
                    <a href="#slide2" className="btn btn-error ">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className='absolute bg-gradient-to-r from-black opacity-80 to-slate-100 text-white h-full w-full rounded-xl'>
                     <div className='w-1/3 py-10 ps-20 space-y-5'>
                     <p className='text-7xl font-bold'>Affordable Price For Car Servicing</p>
                     <p className='text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                     <div className='p-2'>
                     <button className="btn btn-error mr-5">Discover more</button>
                     <button className="btn btn-outline btn-secondary">Latest Project</button>
                     </div>
                     </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-success mr-5">❮</a>
                    <a href="#slide3" className="btn btn-error ">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className='absolute bg-gradient-to-r from-black opacity-80 to-slate-100 text-white h-full w-full rounded-xl'>
                     <div className='w-1/3 py-10 ps-20 space-y-5  '>
                     <p className='text-7xl font-bold'>Affordable Price For Car Servicing</p>
                     <p className='text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                     <div className='p-2'>
                     <button className="btn btn-error mr-5">Discover more</button>
                     <button className="btn btn-outline btn-secondary">Latest Project</button>
                     </div>
                     </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-success mr-5">❮</a>
                    <a href="#slide4" className="btn btn-error ">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className='absolute bg-gradient-to-r from-black opacity-80 to-slate-100 text-white h-full w-full rounded-xl'>
                     <div className='w-1/3 py-10 ps-20 space-y-5'>
                     <p className='text-7xl font-bold'>Affordable Price For Car Servicing</p>
                     <p className='text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                     <div className='p-2'>
                     <button className="btn btn-error mr-5">Discover more</button>
                     <button className="btn btn-outline btn-secondary">Latest Project</button>
                     </div>
                     </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-success mr-5">❮</a>
                    <a href="#slide1" className="btn btn-error ">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;