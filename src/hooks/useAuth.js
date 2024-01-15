'use client';
import { useState } from 'react';
import { account, ID } from '../../utils/appwrite';
import { useRouter } from 'next/router';
import { useUser } from '@/contexts/AuthContext';
import { AppwriteException } from 'appwrite';

export default function useAuth() {
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loginError, setLoginError] = useState('');
  const router = useRouter();
  const { user, login, loading, setLoading } = useUser();

  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
    username: '',
    checkbox: false,
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    username: '',
    checkbox: false,
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    const newFormData = { ...userDetails };
    const newErrors = { ...errors };

    if (name === 'username') {
      newFormData[name] = value;
      newErrors[name] = value.length < 3 ? 'Name is too short' : '';
    } else if (name === 'email') {
      newFormData[name] = value;
      newErrors[name] = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? 'Enter a valid email'
        : '';
    } else if (name === 'password') {
      newFormData[name] = value;
      newErrors[name] = value.length < 8 ? 'Password must be 8 characters' : '';
      newErrors[name] = value.length < 3 ? `${name} is too short` : '';
    } else if (name === 'checkbox') {
      newFormData[name] = checked;
      newErrors[name] = !checked
        ? 'Please agree to the terms and conditions'
        : '';
      newErrors[name] = !checked
        ? 'Please agree to the terms and conditions'
        : '';
    }

    setUserDetails(newFormData);
    setErrors(newErrors);
    setLoginError('');
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { email, password, username } = userDetails;
      const signupResponse = await account.create(
        ID.unique(),
        email,
        password,
        username
      );

      if (signupResponse) {
        setShowSuccessModal(true);
      } else {
        alert('Signup failed');
      }
    } catch (error) {
      console.log('Error signup', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = async (e, onSuccess) => {
    e.preventDefault();
    try {
      const { email, password } = userDetails;
      if (!email || !password) {
        setLoginError('Email and password are required for login');
        return;
      }

      const loggedIn = await account.createEmailSession(email, password);
      if (!loggedIn.name) {
        loggedIn.name = email.slice(0, 5).toLowerCase();
      }
      login(loggedIn);
      console.log('User logged in:', loggedIn);
      setLoginError('');
      setShowSuccessModal(true);
      onSuccess();

      // await fetchUser();
      router.push('/');
    } catch (error) {
      console.error('Error Signin', error);
      if (error instanceof AppwriteException) {
        setLoginError(
          'Invalid credentials. Please check the email and password.'
        );
      } else {
        setLoginError('An error occurred during login.');
      }
    }
  };

  return {
    user,
    login,
    userDetails,
    handleChange,
    errors,
    loginError,
    setLoginError,
    showModal,
    setShowModal,
    showSuccessModal,
    setShowSuccessModal,
    showPassword,
    handleButtonClick,
    handleCloseModal,
    loading,
    setLoading,
    handleSignUpSubmit,
    handleLoginSubmit,
    togglePasswordVisibility,
  };
}
