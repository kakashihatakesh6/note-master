import React from 'react'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";


const Pagination = ({ currentPage, totalPage, onPageChange }) => {
    
    const handlePageChange = (page) => {
        onPageChange(page)
    }
    
    const pages = [];
    const newTotalPage = parseInt(totalPage / 9);
    console.log("new Total page =>", newTotalPage)
    for (let i = 1; i <= totalPage; i++) {
        pages.push(i);
    }
    return (
        <div className='pagination'>
            <ul className='flex flex-wrap space-x-2 md:space-x-5 max-w-full'>
                <li className='flex justify-center items-center cursor-pointer' >
                    <button disabled className='flex' >
                        <SlArrowLeft />
                    </button>
                </li>
                {pages.slice(0, 10).map((page, index) => (
                    <li key={index} onClick={() => { handlePageChange(page) }}
                        className={`${currentPage === page ? 'bg-orange-500 border-amber-400' : ''}
                   hover:bg-orange-800 text-black px-3 py-1 cursor-pointer rounded-full`}>
                        {page}
                    </li>
                ))}
                <li className='flex justify-center items-center cursor-pointer'>
                    <button className='flex' onClick={() => { handlePageChange(currentPage + 1) }}>
                        <SlArrowRight />
                    </button>
                </li>

            </ul>
        </div>
    )
}

export default Pagination