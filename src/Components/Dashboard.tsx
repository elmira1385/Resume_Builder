import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import logo1 from "../images/logo.svg"

const Dashboard = () => {
  const changePage=useNavigate()
  useEffect(()=>{
    if(localStorage.getItem("token")===null){
      changePage("/login")
    }
  })
  return (

    <div className='flex flex-col'>
         <div className='flex justify-around items-center py-4'>
            <img src={logo1} alt="" />
            <div className='flex gap-4 items-center'>
              <p>Hi <span></span></p>
              <button onClick={()=>{
                localStorage.removeItem("token")
                changePage("/")
              }} className='px-6 py-2 rounded-full border border-gray-400'>Logout</button>
            </div>
         </div>
    </div>
  )
}

export default Dashboard