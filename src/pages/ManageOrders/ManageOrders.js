import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [tours, setTours] = useState([])
    const [isDeleted, setIsDeleted] = useState(null)

    useEffect(() => {
        fetch(`https://tranquil-eyrie-48733.herokuapp.com/manageOrders`)
            .then(res => res.json())
            .then(data => setTours(data))
    }, [isDeleted])
    // handle tour approve
    const handleTourApprove = id => {
        fetch(`https://tranquil-eyrie-48733.herokuapp.com/update/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount) {
                    window.location.reload(true)
                }
            })
    }
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
                <h3 className='text-5xl font-semibold text-white underline'>Manage Orders</h3>
            </div>
            <div className="container mx-auto py-10 px-5 lg:px-0">
                <table className='table-auto border-2 border-green-100 border-collapse mx-auto'>
                    <thead>
                        <tr>
                            <th className='border-2 border-green-300 p-2'>Serial No.</th>
                            <th className='border-2 border-green-300 p-2 hidden lg:table-cell'>Order Email</th>
                            <th className='border-2 border-green-300 p-2'>Order Items</th>
                            <th className='border-2 border-green-300 p-2 hidden md:table-cell'>Location</th>
                            <th className='border-2 border-green-300 p-2'>Order Status</th>
                            <th className='border-2 border-green-300 p-2' colSpan='2'>Options</th>
                        </tr>
                        {
                            tours.map((tour, index) => <tr key={tour._id}>
                                <td className='md:p-3 p-1'>
                                    <h3 className='md:font-semibold md:text-xl'>{index + 1}</h3>
                                </td>
                                <td className='md:p-3 p-1 hidden lg:table-cell'>
                                    <p className=' font-semibold'>{tour.email}</p>
                                </td>
                                <td className='md:p-3 p-1'>
                                    <h2>{tour.title}</h2>
                                </td>
                                <td className='md:p-3 p-1 hidden md:table-cell'>
                                    <p>{tour.address}</p>
                                </td>
                                <td className='md:p-3 p-1'>
                                    <p className='md:font-semibold'>{tour.status}</p>
                                </td>
                                <td className='md:p-3 p-1'>
                                    <button onClick={() => handleTourApprove(tour._id)} className='border-2 border-green-400 md:px-5 md:py-2 md:font-semibold font-medium text-green-400 text-xs md:text-sm'>Approve Booking</button>
                                </td>
                                <td className='md:p-3 p-1'>
                                    <button onClick={() => handleDeleteBooking(tour._id)} className='border-2 border-green-400 md:px-5 md:py-2 md:font-semibold font-medium text-green-400 text-xs md:text-sm'>Cancel Booking</button>
                                </td>
                            </tr>)
                        }
                    </thead>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;