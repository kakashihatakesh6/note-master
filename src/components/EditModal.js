import React, { useState } from 'react'

const EditModal = ({ isOpen, onClose, onSave, initialData }) => {
    if (!isOpen) return null;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formData, setFormData] = React.useState(initialData[0]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

    }

    const handleSave = () => {
        onSave(formData);
        onClose();
    }


    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
                {/* <h2 className="text-xl font-semibold py-2">Add a Note</h2> */}
                <form action="POST" className='w-full md:w-1/3 md:mx-auto space-y-2 px-5 py-8 rounded-md shadow-md border-2 border-dotted bg-slate-300 border-gray-500'>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-lg'>Title</label>
                        <input type="text" name='title' value={formData.title} onChange={handleChange}
                            className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" required />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-lg'>Description</label>
                        <textarea
                            id="description"
                            name='description'
                            value={formData.description}
                            onChange={handleChange}
                            rows={6}
                            placeholder='Write a description'
                            required
                            className='px-2 border-black'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-lg'>Tag</label>
                        <input value={formData.tags} name='tags' onChange={handleChange} type="text" className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" required />
                    </div>
                    <div className="flex justify-end space-x-2">

                        <button onClick={handleSave} type='button'
                            className=" bg-blue-500 hover:bg-blue-800 text-white py-2 px-4 rounded-md w-full">
                            Save
                        </button>
                        <button type='button' onClick={onClose}
                            className=' bg-black hover:bg-slate-700 text-white px-4 py-2 rounded'>
                            Cancel
                        </button>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default EditModal