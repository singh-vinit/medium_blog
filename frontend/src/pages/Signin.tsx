import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Container from "../components/Container";
import Quote from "../components/Quote";
const Signin = () => {
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
          <InputField label="email" field="email" />
          <InputField label="password" field="password" />
          <Button btnText="signup" />
        </Container>
      </div>
      <Quote />
    </div>
  );
};

export default Signin;
