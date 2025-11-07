import React, { useState } from "react";
import { Button } from "./ui/button";
import { BeatLoader } from "react-spinners";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as Yup from "yup";
import { Input } from "./ui/input";
import { Formik, useFormik } from "formik";
import { LogIn } from "../db/apiAuth";



const initialValues = { email: "", password: "" };
const schema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("required"),
  password: Yup.string()
    .min(6, "minimum 6 characters required")
    .required("required"),
});

const Login = () => {
  const [loading, setLoading]=useState(false);
  const { touched,values, handleBlur, handleChange, handleSubmit, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: schema,
      onSubmit:async (val ) => {
        try {
          setLoading(true)
         const res= await LogIn(val)
          console.log('response',res);
          
        } catch (error) {
          console.log(error.message);
          
        }finally{
          setLoading(false)
        }
      },
    });

  return (
    <div>
        <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Login </CardTitle>
          <CardDescription>to access this website</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Input
              name="email"
              type="email"
              placeholder="Enter Your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? <p>{errors.email}</p> : null}
          </div>
          <div className="space-y-1">
            <Input
              name="password"
              type="password"
              placeholder="Enter Your password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && touched.password ? (
              <p>{errors.password}</p>
            ) : null}
          </div>
        </CardContent>
        <CardFooter>
        
            <Button
              type="submit"
            >
              {loading ? <BeatLoader size={7} color="green" /> : "Login"}
            </Button>
          
        </CardFooter>
      </Card>
      </form>
    </div>
  );
};

export default Login;
