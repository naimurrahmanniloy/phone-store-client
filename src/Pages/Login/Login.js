import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';



const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, googleSignIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'


    const handleLogin = data => {
        console.log(data);
        setLoginError('')
        signIn(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                navigate(from, { replace: true })
                toast.success("Sign In Successful")

            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message)
            })
    }
    const handleGoogleSignIN = () => {
        googleSignIn()
            .then(res => {
                const user = res.user;
                console.log(user)
                navigate(from, { replace: true })
                toast.success("Sign In Successful")

            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)
            })
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
                        <input type="text" className="input input-bordered w-full max-w-xs"  {...register("email", { required: "Email is required" })} />

                        {errors.email && <p className='text-warning mt-2' role="alert">{errors.email?.message}</p>}


                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <input type="password" className="input input-bordered w-full max-w-xs"  {...register("password", { required: "Password is required" })} />
                        {errors.password && <p className='text-warning mt-2' role="alert">{errors.password?.message}</p>}

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">TIN Number</span>

                            </label>

                            <input {...register("number", {
                                required: "TIN number is required",
                            })} type="number" className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-warning'>{errors.password.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">National ID Card Number</span>

                            </label>


                            <input {...register("number", {
                                required: "National Id Card Number is required",

                            })} type="number" className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-warning'>{errors.password.message}</p>}
                        </div>




                        <label className="label">
                            <span className="label-text">Forget Password?</span>
                        </label>

                    </div>
                    <input value='Login' className='btn btn-primary w-full' type="submit" />
                    <div>
                        {loginError && <p>{loginError}</p>}
                    </div>
                </form>
                <p className='mt-7'>New to Phone Store? <Link to='/signup'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIN} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE <FcGoogle className='ml-4 text-xl'></FcGoogle></button>
            </div>
        </div>
    );
};

export default Login;