'use client'
import { useState } from 'react'
import { account, ID } from '../../utils/appwrite'
import { useRouter } from 'next/router'
import { useUser } from '@/contexts/AuthContext'

export default function useAuth() {
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loginError, setLoginError] = useState("");
 const router = useRouter();
 const { user, login, loading, setLoading } = useUser(); 


  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
    username: '',
    checkbox: false,
  })

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    username: '',
    checkbox: false,
  })

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const newFormData = { ...userDetails }
    const newErrors = { ...errors }

    if (name === 'username') {
      newFormData[name] = value
      newErrors[name] = value.length < 3 ? 'Name is too short' : ''
    } else if (name === 'email') {
      newFormData[name] = value
      newErrors[name] = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? 'Enter a valid email'
        : ''
    } else if (name === 'password') {
      newFormData[name] = value
      newErrors[name] = value.length < 8 ? 'Password must be 8 characters' : ''
      newErrors[name] = value.length < 3 ? `${name} is too short` : ''
    } else if (name === 'checkbox') {
      newFormData[name] = checked
      newErrors[name] = !checked
        ? 'Please agree to the terms and conditions'
        : ''
      newErrors[name] = !checked
        ? 'Please agree to the terms and conditions'
        : ''
    }

    setUserDetails(newFormData);
    setErrors(newErrors);
    setLoginError("");
  }

  const handleSignUpSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const { email, password, username } = userDetails
      const signupRes = await account.create(
        ID.unique(),
        email,
        password,
        username,
      )
      // console.log(signupRes)
      setShowSuccessModal(true)
    } catch (error) {
      console.log('Error signup', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    try {
      
        const { email, password } = userDetails;
        if (!email || !password) {
          setLoginError('Email and password are required for login');
          return;
        }

      const loggedIn = await account.createEmailSession(email, password)
      if (!loggedIn.name) {
        loggedIn.name = email.slice(0, 5).toLowerCase();
      }
      setShowSuccessModal(true)
      login(loggedIn);
      router.push("/")

      // console.log(loggedIn)
    } catch (error) {
      console.error('Error Signin', error)
    }
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
  
    try {
      setLoading(true);
      const googleOAuth2URL = process.env.NEXT_APPWRITE_GOOGLE_OAUTH2_URL;
      account.createOAuth2Session(
        'google',
        'http://localhost:3000/', // Redirect URL
        'http://localhost:3000/', // Success URL
        'http://localhost:3000/', // Failure URL
        googleOAuth2URL
      );
  
      window.location.href = 'http://localhost:3000/';
    } catch (err) {
      console.error('Error from useAuth', err);
    } finally {
      setLoading(false);
    }
  };
  
  
  



  return {
    user,
    login,
    userDetails,
    handleChange,
    errors,
    loginError,
    showSuccessModal,
    setShowSuccessModal,
    showPassword,
    loading,
    setLoading,
    handleSignUpSubmit,
    handleLoginSubmit,
    togglePasswordVisibility,
    handleGoogleSignIn,
  }
}
