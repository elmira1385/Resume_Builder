import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import logo1 from "../images/logo.svg"
import { useQuery } from '@tanstack/react-query'
import axios from '../api/axios'
import Modal from './Modal'

interface Itype{
createdAt:string,
email:string,
name:string,
updatedAt:string,
__v:number,
_id:string,
}
interface Api{
  user:Itype,
}
const Dashboard = () => {
  const changePage=useNavigate()

  const token=localStorage.getItem("token")

  const{data}=useQuery<Api>({
    queryKey:["getthem"],
    queryFn:async()=>{
      const {data}=await axios.get<Api>("/api/users/data",{
        headers:{
          Authorization:token
        }
      })
      return data
    },
  })
  useEffect(()=>{
    if(localStorage.getItem("token")===null){
      changePage("/login")
    }
  })
 
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-around items-center py-4">
          <img src={logo1} alt="" />
          <div className="flex gap-4 items-center">
            <p>
              Hi <span>{data?.user.name}</span>
            </p>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                changePage("/");
              }}
              className="px-6 py-2 rounded-full border border-gray-400"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <Modal/>
    </>
  );
}

export default Dashboard