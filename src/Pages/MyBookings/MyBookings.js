import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';


const MyBookings = () => {
    const { user } = useContext(AuthContext);
    // const [booking, setBooking] = useState([])

    const url = `http://localhost:5000/bookings?email=${user?.email}`;


    const { data: bookings = [] } = useQuery({

        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }

    })

    // useEffect(() => {
    //     fetch(`https://garage-21d76.web.app/sellposts?email=${user?.email}`, {
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => {
    //             if (res.status === 401 || res.status === 403) {
    //                 return
    //             }
    //             return res.json();
    //         })
    //         .then(data => {
    //             setBooking(data);
    //         })
    // }, [user?.email,])

    // const handleDelete = id => {
    //     const proceed = window.confirm('Are you sure');
    //     if (proceed) {
    //         fetch(`http://localhost:5000/bookings/${id}`, {
    //             method: 'DELETE',
    //             headers: {
    //                 authorization: `bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.deletedCount > 0) {
    //                     toast('cancel successfully');
    //                     const remaining = bookings.filter(odr => odr._id !== id);
    //                     setBooking(remaining);
    //                 }
    //             })
    //     }
    // }

    return (
        <div>
            <h2 className="text-3xl">My Bookings</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Device Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings &&
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.name}</td>
                                <td>{booking.email}</td>
                                <td>{booking.phone}</td>
                                <td>{booking.deviceName}</td>
                                <td>{booking.price}</td>
                                <td><button className='btn btn-xs btn-danger'>Pay</button></td>
                                <td> <button className='btn btn-xs btn-primary'>Cancel</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;