import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Container from "../components/Container";
import Quote from "../components/Quote";
const Signup = () => {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="flex flex-col justify-center items-center">
        <Container>
          <Heading text="create an account" />
          <SubHeading
            text="already have an account?"
            linkText="Login"
            path="/signin"
          />
          <InputField label="name" field="text" />
          <InputField label="email" field="email" />
          <InputField label="password" field="password" />
          <Button btnText="signup" />
        </Container>
      </div>
      <Quote />
    </div>
  );
};

export default Signup;
