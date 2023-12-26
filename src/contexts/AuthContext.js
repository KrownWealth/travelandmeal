"use client"
import { createContext, useContext, useEffect, useState } from "react";
// import { account } from "../lib/appwrite"
import { account } from "../../utils/appwrite";
const AuthContext = createContext();

export function AuthProvider(props) {
  const [user, setUser] = useState(null);

  async function signin(email, password) {
    try {
      const loggedIn = await account.createEmailSession(email, password);
    setUser(loggedIn);
    } catch (error) {
      alert("Error signing in!");
    }
  }

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
  }

  async function signup(email, password, name) {
   try {
    await account.create(email, password, name);
    await signin(email, password);
   } catch (error) {
    alert("Something went wrong in AuthContext!");
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
