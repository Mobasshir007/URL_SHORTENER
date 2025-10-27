import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSearchParams } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';
const Auth = () => {
  const [searchParams]= useSearchParams();
  return (
    <div className='mt-36 flex flex-col items-center'>
      <h1 className='text-5xl font-extrabold'>
        {searchParams.get("createNew")?"Hold Up! Let's Login first...":"Login / SignUp"}
        </h1>
        <Tabs defaultValue="login" className="mt-5 w-[400px]">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="login">Login</TabsTrigger>
    <TabsTrigger value="signup">SignUp</TabsTrigger>
  </TabsList>
  <TabsContent value="login"><Login/></TabsContent>
  <TabsContent value="signup"><Signup/></TabsContent>
</Tabs>
    </div>
  )
}

export default Auth