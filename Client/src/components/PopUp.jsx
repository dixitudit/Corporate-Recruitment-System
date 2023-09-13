import React from 'react';
import { useState  } from "react";
import { Link } from 'react-router-dom';

const PopUp = ({ openPopUp, closePopUp }) => {

  const handlelosePopUp = (e) => {
    if (e.target.id === 'ModelContainer') {
      closePopUp();
    }
  }

  if (openPopUp !== true) return null

  return (
    <div
      id='ModelContainer'
      onClick={handlelosePopUp}
      className='fixed inset-0 z-[2] bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm'>
      <div 
        className='p-2 bg-white w-10/12 md:w-1/2 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-5'>
        <div
          className='w-full p-3 justify-center items-center'>
          <h2
            className='font-semibold py-3 text-center text-xl'>
                <Link to={'/register-candidate'} className=' '>
                        <div className='py-1 rounded-2xl px-4  my-4 bg-[#00D8FF] '>Register as Candidate</div>
                </Link>
                <Link to={'/register-recruiter'} className=' '>
                    <div className='py-1 rounded-2xl px-4  my-4 bg-[#00D8FF] '>Register as Recruiter</div>
                </Link>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default PopUp