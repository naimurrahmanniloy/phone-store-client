import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Loading from '../Shared/Loading/Loading';


const SellPost = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const { data: categories, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/category');
            const data = await res.json();
            return data;
        }
    })

    const handleSellPost = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const sellInfo = {
                        deviceName: data.deviceName,
                        location: data.location,
                        originalPrice: data.originalPrice,
                        resalePrice: data.resalePrice,
                        yearOfPurchase: data.yearOfPurchase,
                        category: data.category,
                        sellerName: data.sellerName,
                        image: imgData.data.url,
                        email: data.email,
                        condition: data.condition,
                        phone: data.phone,
                        description: data.description,
                    }

                    fetch('http://localhost:5000/allPhones', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',

                        },
                        body: JSON.stringify(sellInfo)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`Sell post is added successfully`);
                            navigate('/dashboard/myPosts')
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7 mx-auto'>
            <h2 className="text-4xl">Sell your Phone</h2>
            <form onSubmit={handleSubmit(handleSellPost)} >
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Device name</span></label>
                    <input type="text" {...register("deviceName", {
                        required: "Name is Required"
                    })} className="input input-bordered input-sm w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register("location", {
                        required: "Location is Required"
                    })} className="input input-bordered input-sm w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Original Price</span></label>
                    <input type="number" {...register("originalPrice", {
                        required: "Original price is Required"
                    })} className="input input-bordered input-sm w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Resale Price</span></label>
                    <input type="number" {...register("resalePrice", {
                        required: "Resale Price is Required"
                    })} className="input input-bordered input-sm w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Year of purchase</span></label>
                    <input type="number" {...register("yearOfPurchase", {
                        required: "year of purchase is Required"
                    })} className="input input-bordered input-sm w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Phone</span></label>
                    <input type="number" {...register("phone", {
                        required: "Phone is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Condition Type </span></label>
                    <select className="select select-primary w-full max-w-xs" {...register("condition", {
                    })}>
                        <option selected>Fair</option>
                        <option>Good</option>
                        <option>Excellent</option>
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Description</span></label>
                    <textarea {...register("description", {
                        required: "description is Required"
                    })} className="textarea textarea-bordered" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full  max-w-xs">
                    <label className="label"> <span className="label-text">Category</span></label>
                    <select
                        {...register('category')}
                        className="select input-bordered input-sm w-full max-w-xs">
                        {
                            categories.map(category => <option
                                key={category._id}
                                value={category.name}
                            >{category.name}</option>)
                        }


                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Seller Name</span></label>
                    <input type="text"{...register("sellerName", {
                        required: "Seller name is Required"
                    })} className="input input-bordered input-sm w-full max-w-xs" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" defaultValue={user?.email} {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" readOnly />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered pt-2 " />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>



                <input className='btn btn-accent w-full mt-4' value="POST" type="submit" />
            </form>
        </div>
    );
};


export default SellPost;