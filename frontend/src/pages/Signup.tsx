import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Container from "../components/Container";
import Quote from "../components/Quote";
import { useAuth } from "../hooks/Auth";

import { useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const { login, logout, isAuthenticated } = useAuth();
  const token = localStorage.getItem("token");
  if (token) {
    login();
  } else {
    logout();
  }

  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function signupHandler() {
    const data = { name, email, password };
    try {
      const res = await axios.post(`${BACKEND_URL}/user/signup`, data);
      const jwt = res.data.jwt;
      localStorage.setItem("token", jwt);
      localStorage.setItem("user", res.data.name);
      login();
      navigate("/blogs");
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return (
    <div className="grid grid-cols-2 h-screen">
      {isAuthenticated ? <Navigate to="/blogs" /> : null}
      <div className="flex flex-col justify-center items-center">
        <Container>
          <Heading text="create an account" />
          <SubHeading
            text="already have an account?"
            linkText="Login"
            path="/signin"
          />
          <InputField label="name" field="text" setValue={setName} />
          <InputField label="email" field="email" setValue={setEmail} />
          <InputField
            label="password"
            field="password"
            setValue={setPassword}
          />
          <Button btnText="signup" handler={signupHandler} />
        </Container>
      </div>
      <Quote />
    </div>
  );
};

export default Signup;
