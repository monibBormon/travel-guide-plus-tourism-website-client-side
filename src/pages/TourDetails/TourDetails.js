import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const TourDetails = () => {
    const { id } = useParams()
    const { user } = useAuth()
    const [tour, setTour] = useState({})
    const history = useHistory()
    useEffect(() => {
        fetch(`https://tranquil-eyrie-48733.herokuapp.com/tourPlaces/${id}`)
            .then(res => res.json())
            .then(data => setTour(data))
    }, [])

    // book confirmation
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const bookingStatus = 'pending'
    const onSubmit = data => {
        data.status = bookingStatus
        fetch(`https://tranquil-eyrie-48733.herokuapp.com/tourBooking`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Your order is processing..')
                    reset()
                    history.push('/myOrders')
                }
            })
    }
    return (
        <div>
            <div className="container mx-auto py-10 px-5 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="tour-details-box mb-10 lg:mb-0">
                        <img style={{ height: '350px', width: '100%' }} src={tour.image} alt="" />
                        <h4 className='font-semibold text-green-400 mb-3 mt-5 text-2xl'><i className="far fa-calendar-alt mr-3"></i>{tour.day} Days</h4>
                        <h2 className='text-2xl font-semibold mb-5'>{tour.title}</h2>
                        <p>{tour.description}</p>
                        <h4 className='my-2 font-semibold text-green-400 text-2xl'>Package Price: ${tour.price}/per</h4>
                        <Link to='/tourPlaces'>
                            <button className='bg-green-400 text-white px-6 py-2 font-semibold mt-5'>Explore More Tours</button>
                        </Link>
                    </div>
                    <div className="tour-confirmation-form">
                        <h2 className='md:text-4xl text-3xl font-semibold
                        mb-6'>Register for tour booking</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="fullName">Full Name</label><br />
                            <input className='w-3/4 h-10 border-2 rounded-full pl-5 pr-3 border-red-300 mb-5 mt-2' {...register("fullName", { required: true })} /> <br />
                            <label htmlFor="email">Email</label><br />
                            <input defaultValue={user.email} className='w-3/4 h-10 border-2 rounded-full pl-5 pr-3 border-red-300 mb-5 mt-2' {...register("email", { required: true })} /> <br />
                            <label htmlFor="title">Tour Title</label> <br />
                            <input className='w-3/4 h-10 border-2 rounded-full pl-5 pr-3 border-red-300 mb-5 mt-2' defaultValue={tour.title} {...register("title", { required: true })} /> <br />
                            <label htmlFor="address">Your Address</label> <br />
                            <input className='w-3/4 h-10 border-2 rounded-full pl-5 pr-3 border-red-300 mb-5 mt-2' {...register("address", { required: true })} /> <br />
                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input className='bg-red-400 text-white w-3/4 py-2 font-semibold text-xl cursor-pointer' type="submit" value='Confirm Booking' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourDetails;