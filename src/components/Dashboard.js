/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import AddNote from './AddNote'
import Notes from './Notes'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {
    const [toggleNoteVariant, setToggleNoteVariant] = useState(false)
    const [notes, setNotes] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
      let authtoken = localStorage.getItem('auth-token');
      if (!authtoken) {
        navigate('/');
      }
    }, [navigate, notes])

    useEffect(() => {
        fetchNotes();
    }, [])

    const fetchNotes = async () => {
        try {
            const authtoken = localStorage.getItem('auth-token')
            let apiUrl = `${process.env.REACT_APP_PUBLIC_HOST}/api/notes/getnotes?authtoken=${authtoken}`;
            console.log(apiUrl)
            let res = await axios.get(apiUrl, {
                header: {
                    'auth-token': authtoken
                }
            });
            let response = await res.data;
            console.log(response);
            setNotes(response.notes)
            
        } catch (error) {
            console.log(error)
        }
    
    }
    
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container py-12 mx-auto">

                    <div className="flex flex-row space-x-14 items-center mb-10">
                        <h1 className='text-3xl text-blue-800 font-semibold'>Dashboard</h1>
                        {toggleNoteVariant ? (
                            <span onClick={() => { setToggleNoteVariant(false) }} className='bg-orange-500 hover:bg-orange-600 h-fit px-3 py-2 text-white rounded-md cursor-pointer'>All Notes</span>
                        ) : (
                            <span onClick={() => { setToggleNoteVariant(true) }} className='bg-orange-500 hover:bg-orange-600 h-fit px-3 py-2 text-white rounded-md cursor-pointer'>Add a Note</span>
                        )
                        }
                    </div>

                    {toggleNoteVariant ? (
                        <AddNote notes={notes} setNotes={setNotes}/>
                    ) : (
                        <Notes notes={notes} setNotes={setNotes}/>
                    )}




                </div>
            </section>
        </div>
    )
}

export default Dashboard