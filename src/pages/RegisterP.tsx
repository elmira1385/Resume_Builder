
import Register from '../Components/Register'
import Login from '../Components/Login'
import useTrueOrFalse from '../store/useTrueOrFalse'

const RegisterP = () => {
    const {isOpen} = useTrueOrFalse()
  return (
    <div>
       {isOpen?<Login/>:<Register/>}  
    </div>
  )
}

export default RegisterP