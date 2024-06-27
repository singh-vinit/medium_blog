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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function signupHandler() {
    const data = { name, email, password };
    try {
      setIsLoading(true);
      const res = await axios.post(`${BACKEND_URL}/user/signup`, data);
      setIsLoading(false);
      const jwt = res.data.jwt;
      localStorage.setItem("token", jwt);
      localStorage.setItem("user", res.data.name);
      login();
      navigate("/blogs");
    } catch (error: any) {
      alert(error.response.data.message);
      setIsLoading(false);
      setName("");
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div className="grid md:grid-cols-2 h-screen">
      {isAuthenticated ? <Navigate to="/blogs" /> : null}
      <div className="flex flex-col justify-center items-center">
        <Container>
          <Heading text="create an account" />
          <SubHeading
            text="already have an account?"
            linkText="Login"
            path="/signin"
          />
          <InputField
            label="author name"
            field="text"
            setValue={setName}
            inputValue={name}
          />
          <InputField
            label="email"
            field="email"
            setValue={setEmail}
            inputValue={email}
          />
          <InputField
            label="password"
            field="password"
            setValue={setPassword}
            inputValue={password}
          />
          <Button
            btnText="signup"
            handler={signupHandler}
            loading={isLoading}
          />
        </Container>
      </div>
      <Quote />
    </div>
  );
};

export default Signup;
