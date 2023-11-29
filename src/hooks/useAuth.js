// useAuth.js
import { useState } from "react";
import { account,ID } from "../../utils/appwrite";

export default function useAuth () {
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newFormData = { ...userDetails };
    const newErrors = { ...errors };

    if (name === "name") {
      newFormData[name] = value;
      newErrors[name] = value.length < 3 ? "Name is too short" : "";
    } else if (name === "phone") {
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

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    if (errors.email || !userDetails.email) {
      console.log("Invalid email. Please correct the email format.");
      return;
    }

    try {
      const { email, password, phone, name } = userDetails;
      const newUser = await account.create(
        ID.unique(),
        email,
        password,
        phone,
        name
      );
      if (newUser) {
      await account.updatePhone(newUser.userId, phone, password);
      await account.updatePassword(newUser.userId, password, "newPassword");
        console.log("User signed up successfully:", newUser);
      } else {
        console.log("Error signing up user:", newUser);
        onSuccess();
      }
    } catch (error) {
      console.error("Error signing up user:", error);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      await account.createSession(email, password);
      // Redirect to home page upon successful login
      window.location.href = "/";
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  

  return {
    userDetails,
    handleChange,
    handleSignUpSubmit,
    handleLoginSubmit,
    errors,
  };
};
