import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button'
import { BeatLoader } from 'react-spinners'
import { Input } from './ui/input'

const Login = () => {
  return (
    <div>
<Card>
  <CardHeader>
    <CardTitle>Login</CardTitle>
    <CardDescription> to your account if you alrerady have one</CardDescription>
  </CardHeader>
  <CardContent className='space-y-2'>
    <div className='space-y-1'>
        <Input type='email' placeholder='Enter your Email.....'></Input>
      </div>
      <div className='space-y-1'>
        <Input type='password' placeholder='Enter your Password.....'></Input>
      </div>
  </CardContent>
  <CardFooter>
   <Button>{true ? <BeatLoader size={10} color='red'/> : "Login"}</Button>
  </CardFooter>
</Card>
    </div>
  )
}

export default Login