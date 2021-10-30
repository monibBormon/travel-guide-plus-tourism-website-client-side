import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const [tours, setTours] = useState([])
    const [isDeleted, setIsDeleted] = useState(null)
    const { user } = useAuth()

    useEffect(() => {
        fetch(`https://tranquil-eyrie-48733.herokuapp.com/myOrders/${user.email}`)
            .then(res => res.json())
            .then(data => setTours(data))
    }, [isDeleted])
    //  handle delete booking
    const handleDeleteBooking = id => {
        const confirmation = window.confirm('Are you sure, you want to cancel booking?')
        if (confirmation) {
            fetch(`https://tranquil-eyrie-48733.herokuapp.com/delete/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setIsDeleted(true)
                        alert('Successfully Deleted')
                    } else {
                        setIsDeleted(false)
                    }
                })
        }
    }
    return (
        <div>
            <div className='text-center bg-green-400 py-10'>
                <h3 className='md:text-5xl text-3xl font-semibold text-white underline'>My Orders</h3>
            </div>
            <div className="md:container md:mx-auto py-10 px-5 lg:px-0">
                <table className='table-auto border-2 border-green-100 md:border-collapse mx-auto'>
                    <thead>
                        <tr>
                            <th className='border-2 border-green-300 p-2 text-sm'>Serial No.</th>
                            <th className='border-2 border-green-300 p-2 text-sm hidden lg:table-cell'>Order Id</th>
                            <th className='border-2 border-green-300 p-2 text-sm'>Order Item</th>
                            <th className='border-2 border-green-300 p-2 text-sm hidden md:table-cell'>Location</th>
                            <th className='border-2 border-green-300 p-2 text-sm'>Order Status</th>
                            <th className='border-2 border-green-300 p-2 text-sm'>Options</th>
                        </tr>
                        {
                            tours.map((tour, index) => <tr key={tour._id}>
                                <td className='p-3'>
                                    <h3 className='font-semibold text-xl'>{index + 1}</h3>
                                </td>
                                <td className='p-3 hidden lg:table-cell'>
                                    <p className=' font-semibold'>{tour._id}</p>
                                </td>
                                <td className='p-3'>
                                    <h2>{tour.title}</h2>
                                </td>
                                <td className='p-3 hidden md:table-cell'>
                                    <p>{tour.address}</p>
                                </td>
                                <td className='p-3'>
                                    <p className='font-semibold'>{tour.status}</p>
                                </td>
                                <td className='p-3'>
                                    <button onClick={() => handleDeleteBooking(tour._id)} className='border-2 border-green-400 px-3 md:px-5 md:py-2 py-1 text-sm font-semibold text-green-400'>Cancel Booking</button>
                                </td>
                            </tr>)
                        }
                    </thead>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;