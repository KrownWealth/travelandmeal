import { createContext, useContext, useState, useEffect } from "react";
import { account } from "../../utils/appwrite";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  // useEffect(() => {
  //   const storedUser = JSON.parse(localStorage.getItem("user"));
  //   if (storedUser) {
  //     setUser(storedUser);
  //   }
  // }, []);

  const login = (userDetails) => {
    setUser(userDetails);
    localStorage.setItem("user", JSON.stringify(userDetails));
  };
  const logout = () => {
    try {
      account.deleteSession("current");
      setUser(null);
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  
  const fetchUser = async () => {
    try {
      const user = await account.get();
      setUser(user);
    } catch (error) {
      console.error("Error fetching user:", error);
    }

  // const logout = () => {
  //   account.deleteSession("current");
  //   // setUser(null);
  //   // localStorage.removeItem("user");
    
  // };
  // const fetchUser = async () => {
  //   // You can modify this function to fetch user data from your API or storage
  //   // For example, you might use appwrite to get the user details
  //   try {
  //     const user = await account.get();
  //     setUser(user);
  //   } catch (error) {
  //     console.error("Error fetching user:", error);
  //   }
  // };
  }
  const contextValue = {
    user,
    login,
    logout,
    fetchUser,
    loading,
    setLoading
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};


export const useUser = () => {
  const context = useContext(AuthContext);
  return context;
};
