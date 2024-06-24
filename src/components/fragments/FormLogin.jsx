import Button from "../Elements/Button"
import InputFrom from "../Elements/Input"
import React from "react";

const FromLogin = () => {
const handleLogin = (event)=> {
 localStorage.setItem('email', event.target.email.value )
 localStorage.setItem('password', event.target.password.value)
 event.preventDefault()
 window.location.href = '/admin'
}
  return (
    <form onSubmit={handleLogin}>
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
      <Button 
	classname="bg-blue-600 w-full"
	type= 'submit'
	>LOGIN</Button>
    </form>
  )
}
export default FromLogin
