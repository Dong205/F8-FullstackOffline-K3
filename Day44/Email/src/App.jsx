import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./Components/Loading";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { useSelector } from "./core/Selector";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { state } = useSelector();
  const { isAuthenticated } = useAuth0();
  return (
    <>
      {state.loading && <Loading />}
      {isAuthenticated ? <Profile /> : <Login />}
      <ToastContainer />
    </>
  );
}

export default App;
