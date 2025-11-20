import { useMutation } from '@tanstack/react-query'
import axios from '../api/axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
interface Type{
title:string
}
const Modal = () => {
    const[title,setTitle]=useState("")
     const token = localStorage.getItem("token");
     const changePage = useNavigate();
     const { mutate} = useMutation({
        mutationFn:async({title}:Type)=>{
            const { data } = await axios.post(
              "/api/resumes/create",
              {
                title: title,
              },
              {
                headers: {
                  Authorization: token,
                },
              }
            );
            return data
        }
     });
  return (
    <form onSubmit={(e)=>{
    e.preventDefault()
     mutate({title:title})
      changePage("")
    }} className='fixed top-1/2 flex flex-col justify-center items-center gap-4 left-1/2 bg-gray-400 -translate-1/2 w-[300px] p-10'>
    <input value={title} onChange={(e)=>{
      setTitle(e.target.value);
    }} className='border border-black px-2' type="text" />
    <button type='submit'>click</button>
    </form>
  )
}

export default Modal