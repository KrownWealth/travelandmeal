"use client"
import React, { useState, useEffect } from "react";
import { account, ID } from "../../utils/appwrite";
//import { useUser } from "@/contexts/AuthContext";
import { useRouter } from "next/router";

export default function useAuth() {
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useRouter()

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    name: "",
    checkbox: false, 
  });

  const [errors, setErrors] = useState({
   email: "",
    password: "",
    name: "",
    checkbox: false, 
  });


  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newFormData = { ...userDetails };
    const newErrors = { ...errors };

    if (name === "name" || name === "email" || name === "password") {
      newFormData[name] = value;
      newErrors[name] = value.length < 3 ? `${name} is too short` : "";
    } else if (name === "checkbox") {
      newFormData[name] = checked;
      newErrors[name] = !checked ? "Please agree to the terms and conditions" : "";
    }

    setUserDetails(newFormData);
    setErrors(newErrors);
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password, name } = userDetails;
      console.log("Submitting SignUp Form:", { email, password, name });
    
      await account.create(
        ID.unique(),
        email,
        password,
        name
      );
      setShowSuccessModal(true);
  console.log(userDetails)
  }catch(error){
console.log("Error signup", error)
  }

  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const loggedIn = await account.createEmailSession(userDetails.email, userDetails.password);
      setUserDetails(loggedIn);
      navigate.replace("/");
    } catch (error) {
      console.error("Error Signin", error);
    }
  };


  return {
    userDetails,
    handleChange,
    errors,
    showSuccessModal,
    setShowSuccessModal,
    showPassword,
    handleSignUpSubmit,
    handleLoginSubmit,
    togglePasswordVisibility,
  };
}
