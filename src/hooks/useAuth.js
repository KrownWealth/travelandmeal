"use client"
import React, { useState, useEffect } from "react";
import { account, ID } from "../../utils/appwrite";
import { useRouter } from "next/router";
import { useUser } from "@/contexts/AuthContext";

export default function useAuth() {
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { loginUser} = useUser();
  const navigate = useRouter();

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
      setLoading(true);
      const { email, password, name } = userDetails;
      console.log("Submitting SignUp Form:", { email, password, name });
    
      await account.create(
        ID.unique(),
        email,
        password,
        name
      );
      await account.createVerification(email, "http://localhost:3000/verification");

       loginUser({ email, name });
      setShowSuccessModal(true);
      onSuccess();
  console.log(userDetails)
  }catch(error){
console.log("Error signup", error)
  } finally {
    setLoading(false); 
   
  }

  };
  const handleLoginSubmit = async (e, closeModalCallback) => {
    e.preventDefault();
    try {
      const loggedIn = await account.createEmailSession(
        userDetails.email,
        userDetails.password
      );
     
      loginUser(loggedIn);
      setUserDetails(loggedIn);
      closeModalCallback();
      onSuccess();
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
    loading,
  };
}