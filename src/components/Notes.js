/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";



const Notes = ({ notes, setNotes }) => {

    const handleEditNote = async (id) => {
        // TODO: API Call
        try {
            let apiUrl = `${process.env.REACT_APP_PUBLIC_HOST}/api/notes/deletenote/:${id}`;
            const res = await axios.delete(apiUrl);
            const response = await res.data;
            console.log("res =>", response.message)
            console.log("Deleting the note with id" + id);
            const newNotes = notes.filter((note) => { return note._id !== id });
            setNotes(newNotes);
            
        } catch (error) {
            console.log("Some Eror", error)
        }
       
    }

    const handleDeleteNote = async (id) => {
        // TODO: API Call
        try {
            let apiUrl = `${process.env.REACT_APP_PUBLIC_HOST}/api/notes/deletenote/${id}`;
            const res = await axios.delete(apiUrl);
            const response = await res.data;
            console.log("res =>", response.message)
            console.log("Deleting the note with id" + id);
            const newNotes = notes.filter((note) => { return note._id !== id });
            setNotes(newNotes);
            
        } catch (error) {
            console.log("Some Eror", error)
        }
       
    }



    return (
        <div class="flex flex-wrap mx-4 my-8">

            {notes.map((note, index) => (

                <div key={index} class="py-8 px-4 lg:w-1/3">
                    <div class="h-full flex items-start  shadow-md">
                        <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                            <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">{note?.timeStamps?.createdAt.split(" ")[1] || 'Jul'}</span>
                            <span class="font-medium text-lg text-gray-800 title-font leading-none">{note?.timeStamps?.createdAt.split(" ")[2] || '18'}</span>
                        </div>
                        <div class="flex-grow pl-6">
                            <div className="flex flex-row w-full justify-between">
                                <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">{note?.tags || 'Personal'}</h2>
                                <div className='flex space-x-5 text-xl pr-4'>
                                    <FaRegEdit onClick={handleEditNote} className='cursor-pointer' />
                                    <RiDeleteBin6Line onClick={() => {handleDeleteNote(note?._id)}} className='cursor-pointer' />
                                </div>
                            </div>
                            <h1 class="title-font text-xl font-medium text-gray-900 mb-3">{note?.title || 'The 400 Blows'}</h1>
                            <p class="leading-relaxed mb-5">{note?.description || 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.'}</p>
                            <a class="flex items-center justify-end w-full pr-4">
                                {/* <img alt="blog" src="https://dummyimage.com/103x103" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" /> */}
                                <span class=" flex flex-row pl-3">
                                    {/* <span class="title-font font-medium text-gray-900">Alper Kamu</span> */}
                                    Updated :  <span className='text-orange-300 ml-3'>   { note?.timeStamps?.updatedAt.split("2024")[0]}</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

            ))}

            <div class="py-8 px-4 lg:w-1/3">
                <div class="h-full flex items-start">
                    <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                        <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                        <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
                    </div>
                    <div class="flex-grow pl-6">
                        <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">CATEGORY</h2>
                        <h1 class="title-font text-xl font-medium text-gray-900 mb-3">Shooting Stars</h1>
                        <p class="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                        <a class="inline-flex items-center">
                            <img alt="blog" src="https://dummyimage.com/102x102" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
                            <span class="flex-grow flex flex-col pl-3">
                                <span class="title-font font-medium text-gray-900">Holden Caulfield</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="py-8 px-4 lg:w-1/3">
                <div class="h-full flex items-start">
                    <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                        <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                        <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
                    </div>
                    <div class="flex-grow pl-6">
                        <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">CATEGORY</h2>
                        <h1 class="title-font text-xl font-medium text-gray-900 mb-3">Neptune</h1>
                        <p class="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                        <a class="inline-flex items-center">
                            <img alt="blog" src="https://dummyimage.com/101x101" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
                            <span class="flex-grow flex flex-col pl-3">
                                <span class="title-font font-medium text-gray-900">Henry Letham</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Notes