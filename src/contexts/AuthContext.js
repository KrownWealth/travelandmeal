import { createContext, useContext, useState, useEffect } from "react";
import { account } from "../../utils/appwrite";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (userDetails) => {
    setUser(userDetails);
    localStorage.setItem("user", JSON.stringify(userDetails));
  };

  const logout = () => {
    account.deleteSession("current");
    // setUser(null);
    // localStorage.removeItem("user");
    
  };
  const fetchUser = async () => {
    // You can modify this function to fetch user data from your API or storage
    // For example, you might use appwrite to get the user details
    try {
      const user = await account.get();
      setUser(user);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const contextValue = {
    user,
    login,
    logout,
    fetchUser
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};


export const useUser = () => {
  const context = useContext(AuthContext);
  // if (!context) {
  //   throw new Error('useUser must be used within an AuthProvider');
  // }
  return context;
};
