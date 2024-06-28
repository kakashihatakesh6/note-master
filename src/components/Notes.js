/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import EditModal from './EditModal';




const Notes = ({ notes, setNotes, fetchNotes }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [data, setData] = useState({ title: "Hello Nikhill", description: "Good Morning ", tags: "Health" })

    const handleEditNote = async (id) => {
        // TODO: API Call
        const reqNote = notes.filter((note) => { return note?._id === id });
        // console.log("req note", id, reqNote)
        if (reqNote) {
            setData(reqNote)
        }
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    const handleSaveData = async (newData) => {
        // setData(newData)
        let authtoken = localStorage.getItem('auth-token');
        try {
            let apiUrl = `${process.env.REACT_APP_PUBLIC_HOST}/api/notes/updatenote/${newData?._id}`;
            const res = await axios.put(apiUrl, { newData, authtoken });
            const response = await res.data;
            console.log("res =>", response);
            fetchNotes();
        } catch (error) {
            console.log("Some Error Occurred!", error)
        }

    }

    const handleDeleteNote = async (id) => {
        // TODO: API Call
        try {
            let apiUrl = `${process.env.REACT_APP_PUBLIC_HOST}/api/notes/deletenote/${id}`;
            const res = await axios.delete(apiUrl);
            const response = await res.data;
            console.log("res =>", id, response.message);
            // console.log("Deleting the note with id" + id);
            const newNotes = notes.filter((note) => { return note._id !== id });
            setNotes(newNotes);
            // fetchNotes();

        } catch (error) {
            console.log("Some Eror Occurred!", error)
        }

    }



    return (
        <div className="flex flex-wrap mx-4 my-8">

            {notes.map((note, index) => (

                <div key={index} className="py-8 px-4 lg:w-1/3">
                    <div className="h-full flex items-start  shadow-md">
                        <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">{note?.timeStamps?.createdAt.split(" ")[1] || 'Jul'}</span>
                            <span className="font-medium text-lg text-gray-800 title-font leading-none">{note?.timeStamps?.createdAt.split(" ")[2] || '18'}</span>
                        </div>
                        <div className="flex-grow pl-6">
                            <div className="flex flex-row w-full justify-between">
                                <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">{note?.tags || 'Personal'}</h2>
                                <div className='flex space-x-5 text-xl pr-4'>
                                    <FaRegEdit onClick={() => { handleEditNote(note?._id) }}
                                        className={`cursor-pointer  hover:animate-bounce`} />
                                    <RiDeleteBin6Line onClick={() => { handleDeleteNote(note?._id) }}
                                        className={`cursor-pointer transition-all hover:animate-shake`}
                                    />
                                </div>
                            </div>
                            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">{note?.title || 'The 400 Blows'}</h1>
                            <p className="leading-relaxed mb-5">{note?.description || 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.'}</p>
                            <a className="flex items-center justify-end w-full pr-4">
                                {/* <img alt="blog" src="https://dummyimage.com/103x103" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" /> */}
                                <span className=" flex flex-row pl-3">
                                    {/* <span className="title-font font-medium text-gray-900">Alper Kamu</span> */}
                                    Updated :  <span className='text-orange-300 ml-3'>   {note?.timeStamps?.updatedAt.split("2024")[0]}</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

            ))}

            <EditModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSave={handleSaveData}
                initialData={data}

            />


        </div>
    )
}

export default Notes