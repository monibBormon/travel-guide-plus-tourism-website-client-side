import React from 'react';
import { useForm } from "react-hook-form";

const AddTours = () => {
    // book confirmation
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://tranquil-eyrie-48733.herokuapp.com/addTourPlaces', {
            method: 'POST',
            headers: { 'content-type': "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the tourist place.')
                    reset()
                }
            })
    }
    return (
        <div>
            <div className='text-center bg-green-400 py-10'>
                <h3 className='md:text-5xl text-3xl font-semibold text-white underline'>Add Your Favourite Tourist Place</h3>
            </div>
            <div className="container mx-auto px-5 py-10">
                <div className="add-tour-form mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className='font-semibold' htmlFor="title">Place Name</label><br />
                        <input className='w-3/4 h-10 border-2 rounded-full pl-5 pr-3 border-red-300 mb-5 mt-2' placeholder='type the tourist place name' {...register("title", { required: true })} /> <br />
                        <label className='font-semibold' htmlFor="description">Description</label><br />
                        <textarea className='w-3/4 h-20 border-2 rounded-full pl-5 pr-3 border-red-300 mb-5 mt-2 py-2' placeholder='type your description' {...register("description", { required: true })} /> <br />
                        <label className='font-semibold' htmlFor="price">Tour Package Price</label> <br />
                        <input className='w-3/4 h-10 border-2 rounded-full pl-5 pr-3 border-red-300 mb-5 mt-2' type='number' placeholder='type package price' {...register("price", { required: true })} /> <br />
                        <label className='font-semibold' htmlFor="day">Tour Duration / perday</label> <br />
                        <input className='w-3/4 h-10 border-2 rounded-full pl-5 pr-3 border-red-300 mb-5 mt-2' type='number' placeholder='type tour day' {...register("day", { required: true })} /> <br />
                        <label className='font-semibold' htmlFor="image">Image Url</label> <br />
                        <input className='w-3/4 h-10 border-2 rounded-full pl-5 pr-3 border-red-300 mb-5 mt-2' type='url' placeholder='type image url' {...register("image", { required: true })} /> <br />
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}

                        <input className='bg-red-400 text-white w-3/4 py-2 font-semibold text-xl cursor-pointer' type="submit" value='Add Tour Place' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTours;