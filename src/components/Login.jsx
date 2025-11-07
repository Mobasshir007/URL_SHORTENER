import React, { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { BeatLoader } from "react-spinners";
import { Input } from "./ui/input";
import * as Yup from "yup";
import TError from "./error";

const Login = () => {
  const [loading, setloading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setError] = useState([]);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    setError([]);
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email("Invalid Email").required("*Required"),
        password: Yup.string()
          .min(6, "Minimum 6 character password required")
          .required("*Required"),
      });
      await schema.validate(formData, { abortEarly: false });
    } catch (error) {
      const newErrors = {};
      error?.inner?.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setError(newErrors);
    }
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            {" "}
            to your account if you alrerady have one
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Input
              type="email"
              placeholder="Enter your Email....."
              onChange={handleInput}
            />
            {errors.email && <TError message={errors.email} />}
          </div>
          <div className="space-y-1">
            <Input
              type="password"
              placeholder="Enter your Password....."
              onChange={handleInput}
            ></Input>
            {errors.password && <TError message={errors.password} />}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleLogin}>
            {loading ? <BeatLoader size={10} color="red" /> : "Login"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
