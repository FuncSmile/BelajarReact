import { Link } from "react-router-dom"
import Button from "../Elements/Button"
import InputFrom from "../Elements/Input"

const FormRegister = () => {
    return (
        <form action="">
        <InputFrom 
        labelTitle="Full Name" 
        typeInput="text" 
        name="fullName" 
        placeholder="John Doe" 
        />
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
        <InputFrom 
        labelTitle="Confirm Password" 
        typeInput="password" 
        name="confirmPassword" 
        placeholder="*******" 
        />
        <Button classname="bg-blue-600 w-full">Register</Button>
      </form>
    )
}

export default FormRegister