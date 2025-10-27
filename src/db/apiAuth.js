import supabase from "./supabase";

export async function LogIn({Email,Password}){
const {data,error}=await supabase.auth.signInWithPassword({
    Email,Password
});
if(error) throw new Error(error.message);
    return data;
}