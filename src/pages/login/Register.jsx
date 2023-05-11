import React, { useContext, useState } from 'react';
import img from '../../assets/images/login/login.svg';
import { Link, useNavigate } from 'react-router-dom';
import { contextProvider } from '../../AuthProvider';
import Swal from 'sweetalert2';
const Register = () => {
    const {registerUser} = useContext(contextProvider)
     const [error, setError] = useState('');
     const navigate = useNavigate();
    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        registerUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            setError('')
            Swal.fire({
                title: 'Successful create account!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              navigate('/home')
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200 my-5">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 me-36 p-10">
                     <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body py-10">
                    <h1 className="text-3xl text-center font-bold">Register now!</h1>

                         <form  onSubmit={handleRegister}>
                         <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
                        </div>
                         <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">                           
                            <input type="submit" value="Create an account" className="btn btn-primary bg-orange-700"/>
                        </div>
                         </form>

                         <p className='text-center font-serif my-5'>Already have an account? <Link to='/login' className='text-orange-600 font-bold'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;