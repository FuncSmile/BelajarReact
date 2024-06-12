import Button from "../Elements/Button"
import InputFrom from "../Elements/Input"
import React from "react";

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
    </form>
  )
}
export default FromLogin