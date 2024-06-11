import { Link } from "react-router-dom"
import Button from "../Elements/Button"
import InputFrom from "../Elements/Input"

const FromLogin = () => {
    return (
        <form action="">
        <InputFrom 
        labelTitle="Email" 
        typeInput="email" 
        name="email" 
        placeholder="example@gmail.com" 
        />
        <InputFrom 
        labelTitle="Password" 
        typeInput="password" 
        name="password" 
        placeholder="*******" 
        />
        <Button classname="bg-blue-600 w-full">LOGIN</Button>
        <p className="text-center text-sm mt-8">Don't have an account? <Link to="/register" className="font-bold text-blue-700"> Register</Link></p>
      </form>
    )
}

export default FromLogin