import React from 'react'
import Login from '../Components/Login'
import Register from '../Components/Register'
import useTrueOrFalse from '../store/useTrueOrFalse'

const LoginP = () => {
    const {isOpen} = useTrueOrFalse()
  return (
    <div>
        {isOpen?<Register/>:<Login/>}  
    </div>
  )
}

export default LoginP