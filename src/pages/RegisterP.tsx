import React from 'react'
import Register from '../Components/Register'
import Login from '../Components/Login'
import useTrueOrFalse from '../store/useTrueOrFalse'

const RegisterP = () => {
    const {isOpenLogin} = useTrueOrFalse()
  return (
    <div>
       {isOpenLogin?<Login/>:<Register/>}  
    </div>
  )
}

export default RegisterP