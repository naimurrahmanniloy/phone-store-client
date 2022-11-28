import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './Login.css';
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    const handleLogin = data => {
        console.log(data);

    }

    return (
        <div className='h-[800px]  flex justify-center items-center '>
            <div className='w-96 p-10 login-form'>
                <h2 className='text-2xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input type="text" className="input input-bordered w-full max-w-xs"  {...register("email")} />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <input type="password" className="input input-bordered w-full max-w-xs"  {...register("password")} />
                        <label className="label">
                            <span className="label-text">Forget Password?</span>
                        </label>
                    </div>
                    <input value='Login' className='btn btn-primary w-full' type="submit" />
                </form>
                <p className='mt-7'>New to Phone Store? <Link to='/signup'>Create new account</Link></p>
                <div className="divider text-white">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE <FcGoogle className='ml-4 text-xl'></FcGoogle></button>
            </div>
        </div>
    );
};

export default Login;