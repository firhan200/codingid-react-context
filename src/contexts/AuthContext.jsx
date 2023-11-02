import { createContext, useState } from "react";

const isLoggedIn = () => {
  //get from localstorage
  const token = localStorage.getItem("token");
  return token ? true : false;
};

//1. buat context nya
export const AuthContext = createContext(null);

//2. buat provider nya
export const AuthProvider = ({ children }) => {
  //track apakah sudah login atau belum
  const [isAuth, setIsAuth] = useState(isLoggedIn());
  const [token, setToken] = useState("");

  //login function
  const loginUser = (token) => {
    setIsAuth(true);
    //set to localstorage
    localStorage.setItem("token", token);
    setToken(token);
  };

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuth,
        loginUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
