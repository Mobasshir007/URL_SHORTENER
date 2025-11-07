import supabase from "./supabase";
// my code
export async function LogIn({email,password}){
const {data,error}=await supabase.auth.signInWithPassword({
    email,password
});
if(error) throw new Error(error.message);
    return data;
}

// claude code
export async function signup({ email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });
  
  if (error) throw new Error(error.message);
  return data;
}