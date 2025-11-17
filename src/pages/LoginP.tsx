import React from 'react'
import Login from '../Components/Login'
import Register from '../Components/Register'
import useTrueOrFalse from '../store/useTrueOrFalse'

const LoginP = () => {
    const {isOpenLogin} = useTrueOrFalse()
  return (
    <div>
        {isOpenLogin?<Register/>:<Login/>}  
    </div>
  )
}

export default LoginP