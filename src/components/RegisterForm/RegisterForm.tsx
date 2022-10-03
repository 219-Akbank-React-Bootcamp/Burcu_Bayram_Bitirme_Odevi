import React, { FC, useState } from "react";
import Card from "../Card";
import { Styled } from "./RegisterForm.styled";
import { RegisterFormProps } from "./RegisterForm.types";
import Input from "../Input";
import Checkbox from "../Checkbox";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { RegisterFormValuesProps } from "./RegisterForm.types";
import { InputProps } from "../Input/Input.types";

const RegisterForm: FC<RegisterFormProps> = (props) => {
  const [formValues, setFormValues] = useState<RegisterFormValuesProps>({
    username: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange: InputProps["onChange"] = (e, v) => {
    const name = e.target.name;
    setFormValues((prev) => ({ ...prev, [name]: v }));
  };

  const handleSubmit = () => {
    props.onRegister?.(formValues);
  };

  const navigate = useNavigate();

  return (
    <Styled>
      <Card title="Register">
        <Input
          onChange={handleChange}
          value={formValues.username}
          icon="mail"
          type="text"
          name="username"
          placeholder="Enter your username"
          style={{ marginBottom: "15px" }}
        />
        <Input
          onChange={handleChange}
          name="password"
          value={formValues.password}
          icon="key"
          type="password"
          placeholder="Create a password"
          style={{ marginBottom: "15px" }}
        />
        <Input
          onChange={handleChange}
          value={formValues.passwordConfirm}
          name="passwordConfirm"
          icon="key"
          type="password"
          placeholder="Confirm your password"
          style={{ marginBottom: "15px" }}
        />

        <div className="remember-forgot">
          <Checkbox label="I accept all terms" />
        </div>

        <Button onClick={handleSubmit}>Register Now</Button>
        <p className="register-links">
          Already have an account?
          <Link to="/login" className="link">
            Sign in!
          </Link>
        </p>
      </Card>
    </Styled>
  );
};

export default RegisterForm;
