import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';




const AllPost = () => {

    const { data: posts = [], refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allphones');
            const data = await res.json();
            return data;
        }
    });

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this sell post');
        if (proceed) {
            fetch(`http://localhost:5000/allphones/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast('deleted successfully');
                        refetch()
                    }
                })
        }
    }

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:mx-auto my-10'>
            {
                posts.map(post => <div key={post._id}>
                    <div className="card w-auto glass bg-base-100 shadow-2xl">
                        <figure><img src={post.image} alt="Shoes" style={{ height: 280, width: 500 }} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{post.productName}</h2>
                            <p>Original price: ${post.originalPrice}</p>
                            <p>Resale price: ${post.resalePrice}</p>
                            <p>Years of use: {post.yearsOfUse}</p>
                            <p>Location: {post.location}</p>
                            <p>Seller name: {post.sellerName}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={() => handleDelete(post._id)} >Delete post</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AllPost;