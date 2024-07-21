import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../constants/index.js";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("jwt");
  console.log(token, "JWT TOKEN");
  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    const getUser = async () => {
      try {
        const resposne = await axios.get(`${API_URL}/auth/me?token=${token}`);
        const user = resposne.data;
        console.log(user);

        setAuth(user);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [token]);

  const values = {
    auth,
    loading,
    setAuth
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};


export const useAuth = ()=>{
    return useContext(AuthContext)
}