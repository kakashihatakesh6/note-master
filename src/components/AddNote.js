import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddNote = ({ notes, setNotes }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const authtoken = localStorage.getItem('auth-token')
        const data = { title, description, tags, authtoken };
        console.log("form data =>", data)

        let apiUrl = `${process.env.REACT_APP_PUBLIC_HOST}/api/notes/createnote`;
        console.log(apiUrl)

        let res = await axios.post(apiUrl, data);
        let response = await res.data;
        console.log(response);

        if (response.success === true) {
            setNotes(notes.concat(response.note));
            toast.success("User has been created!", {
                position: "top-left",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });



        } else {
            toast.error("response.error", {
                position: "top-left",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        setTitle("");
        setDescription("");
        setTags("");
    };




    return (
        <div className="flex flex-col w-screen items-center px-2">
            {/* <h2 className="text-xl font-semibold py-2">Add a Note</h2> */}
            <form action="POST" className='w-full md:w-1/3 md:mx-auto space-y-2 px-5 py-8 rounded-md shadow-md border-2 border-dotted bg-slate-300 border-gray-500' onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    <label htmlFor="" className='text-lg'>Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }}
                        className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" required />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='text-lg'>Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={6}
                        placeholder='Write a description'
                        required
                        className='px-2 border-black'
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='text-lg'>Tag</label>
                    <input value={tags} onChange={(e) => setTags(e.target.value)} type="text" className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" required />
                </div>
                <button type="submit" className='bg-black hover:bg-slate-700 text-white py-2 px-3 rounded-md w-full'>Create Note</button>
            </form>

        </div>
    )
}

export default AddNote