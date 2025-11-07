import { useState } from "react"

export const useFetch=(cb,options={})=>{
    const [data,setData]=useState(null);
    const [loading ,setloading]=useState(false);
    const [error,setError]=useState(null);

    const fnc=async(...args)=>{
        setloading(true);
        setError(null);
        try {
            const response= await cb(...args)
            setData(response);
        } catch (error) {
         setError(error)   
        }finally{
            setloading(false)
        }
    }
    return {data,loading,error,fnc}
}