import React from "react";
import AuthContext from "../Context/AuthContext";

const AuthProvider = ({ children }) => {
  const authInfo = {
    user: null,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
