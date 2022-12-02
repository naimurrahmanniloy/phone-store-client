import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';


const MyPosts = () => {
    const { user, logOut } = useContext(AuthContext);
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/allPhones?email=${user?.email}`)

            .then(res => res.json())

            .then(data => {
                setPosts(data);
            })
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(`http://localhost:5000/allPhones/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast('Deleted');
                        const remaining = posts.filter(odr => odr._id !== id);
                        setPosts(remaining);
                    }
                })
        }
    }

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:mx-auto my-10'>
            {posts &&
                posts.map(post => <div >
                    <div className="card w-auto glass bg-base-100 shadow-2xl">
                        <figure><img src={post.image} alt="Shoes" style={{ height: 280, width: 500 }} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{post.deviceName}</h2>
                            <p>Original price: ${post.originalPrice}</p>
                            <p>Resale price: ${post.resalePrice}</p>
                            <p>Year of Use: {post.yearOfPurchase}</p>
                            <p>Location: {post.location}</p>
                            <p>Seller name: {post.sellerName}</p>
                            <div className="card-actions justify-end">
                                <td>{user?.role !== 'seller' && <button onClick={() => handleDelete(post._id)} className='btn btn-primary'>Delete post</button>}</td>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyPosts;



