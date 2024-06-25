import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Container from "../components/Container";
import Quote from "../components/Quote";

import { useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  async function signinHandler() {
    const data = { email, password };
    try {
      const res = await axios.post(`${BACKEND_URL}/user/signin`, data);
      const jwt = res.data.jwt;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error: any) {
      console.log(error.message);
    }
  }
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="flex flex-col justify-center items-center">
        <Container>
          <Heading text="log in to account" />
          <SubHeading
            text="don't have an account?"
            linkText="Create"
            path="/signup"
          />
          <InputField label="email" field="email" setValue={setEmail} />
          <InputField
            label="password"
            field="password"
            setValue={setPassword}
          />
          <Button btnText="signup" handler={signinHandler} />
        </Container>
      </div>
      <Quote />
    </div>
  );
};

export default Signin;
