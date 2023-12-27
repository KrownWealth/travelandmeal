"use client"
import { createContext, useContext, useEffect, useState } from "react";
//import { account } from "../lib/appwrite"
//import { account } from "../../utils/appwrite";
import { account } from "@/lib/appwrite";


const AuthContext = createContext();

export function AuthProvider(props) {
  const [user, setUser] = useState(null);

  async function signin(userDetails) {
   
    try {
      const loggedIn = await account.createEmailSession(userDetails.email, userDetails.password);
      setUser(loggedIn)
    } catch (error) {
      alert("Error signing in!");
    }
  }

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
  }

  async function signup(userDetails) {
    try {
      await account.create(
        ID.unique(),
        userDetails.email,
        userDetails.password,
        userDetails.name
      );
      await signin(email, password);
    } catch (error) {
      console.error("Something went wrong in AuthContext!", error);
    }
  }
  

  async function init() {
    try {
      const loggedIn = await account.get();
      setUser(loggedIn);
    } catch (err) {
      setUser(null);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <AuthContext.Provider value={{ current: user, signin, logout, signup }}>
      {props.children}
    </AuthContext.Provider>
  );
}
export function useUser() {
  return useContext(AuthContext);
}
