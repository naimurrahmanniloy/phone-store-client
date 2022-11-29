import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()

    const handleSignUp = data => {
        console.log(data)
    }

    return (
        <div className='h-[800px]  flex justify-center items-center '>
            <div className='w-96 p-10 login-form'>
                <h2 className='text-2xl text-center'>Signup</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name", { required: "Name is required" })} type="text" className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-warning'>{errors.name.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", { required: "Email is required" })} type="text" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-warning'>{errors.email.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>

                        {/* pattern for the password is : Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character */}
                        <input {...register("password", {
                            required: "Password is required",
                            pattern: { value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/, message: 'Password must be strong' }
                        })} type="password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-warning'>{errors.password.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs mt-2 mb-2">
                        <select className='py-2' {...register("role", { required: "Selecting role is required" })}>
                            <option value="">Select Role</option>
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                        </select>
                    </div>
                    <input value='Signup' className='btn btn-primary w-full' type="submit" />
                </form>
                <p className='mt-7'>Already have an account? <Link to='/Login'>Please Login</Link></p>

            </div>
        </div >
    );
};

export default Signup;