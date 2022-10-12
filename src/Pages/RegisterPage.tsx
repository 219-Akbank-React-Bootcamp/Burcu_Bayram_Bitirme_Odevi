import React from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import { RegisterFormProps } from "../components/RegisterForm/RegisterForm.types";
import { useLoginContext } from "../contexts/LoginContext/LoginContext";
import auth from "../services/http/patika/endpoints/auth";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { login } = useLoginContext(); //register sonrasında bir daha login işlemleri ile uğraşılmasın direk login olunsun

  const handleRegister: RegisterFormProps["onRegister"] = (values) => {
    auth.register(values).then((data) => {
      login(data.data.token, data.data.username);
      navigate("/addboard");
    });
  };

  return <RegisterForm onRegister={handleRegister} />;
};

export default RegisterPage;
