import { createContext, useContext, useState, useEffect } from 'react';
import { account } from '../../utils/appwrite';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
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
    localStorage.setItem('user', JSON.stringify(userDetails));
  };
  const logout = () => {
    try {
      account.deleteSession('current');
      setUser(null);
      localStorage.removeItem('user');
      router.push('/');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const fetchUser = async () => {
    try {
      const user = await account.get();
      login(user);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  const contextValue = {
    user,
    login,
    logout,
    fetchUser,
    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(AuthContext);
  return context;
};
