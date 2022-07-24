import React, { useState } from "react";

export const AppContext = React.createContext();


function AppContextProvider({ children }) {
  const [state, setState] = useState({
    isAuth: false,
    token: null
  });
  const handleLogin = (token) => {
    setState({
      ...state,
      isAuth: true,
      token: token
    });
  };
  const handleLogout = () => {
    setState({
      ...state,
      isAuth: false,
      token: null
    });
    console.log(2)
  };
  return (
    <>
      <AppContext.Provider value={{ state, handleLogin, handleLogout }}>
        {children}
      </AppContext.Provider>
    </>
  );
}

export default AppContextProvider;