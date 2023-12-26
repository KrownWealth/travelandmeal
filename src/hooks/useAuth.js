"use client"
import { useState } from "react";
import { account,ID } from "../../utils/appwrite";
import { useRouter } from "next/router";


export default function useAuth () {
  const [showPassword, setShowPassword] = useState(false);

 
const [showSuccessModal, setShowSuccessModal] = useState(false);
const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    checkbox: true,
  });


  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    checkbox: true,
  });

const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newFormData = { ...userDetails };
    const newErrors = { ...errors };

    if (name === "name") {
      newFormData[name] = value;
      newErrors[name] = value.length < 3 ? "Name is too short" : "";
    } else  if (name === "phone") {
      const phoneRegex = /^\+234[789]\d{9}$/;
      const cleanedValue = value.replace(/\D/g, "");
      newFormData[name] =
        cleanedValue.length === 10 ? `+234${cleanedValue}` : value;
      newErrors[name] = !phoneRegex.test(newFormData[name])
        ? "Do not include the first 0 digit"
        : "";
    } else if (name === "email") {
      newFormData[name] = value;
      newErrors[name] = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? "Enter a valid email"
        : "";
    } else if (name === "password") {
      newFormData[name] = value;
      newErrors[name] = value.length < 8 ? "Password must be 8 characters" : "";
    } else if (name === "checkbox") {
      newFormData[name] = checked;
      newErrors[name] = !checked
        ? "Please agree to the terms and conditions"
        : "";
    }

    setUserDetails(newFormData);
    setErrors(newErrors);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
  const { email, password, phone, name } = userDetails;
    
 };
  
  
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
   
  };

  return {
    userDetails,
    handleChange,
    handleSignUpSubmit,
    handleLoginSubmit,
    errors,
    showSuccessModal,
    setShowSuccessModal,
    showPassword,
    togglePasswordVisibility,
  };
};
