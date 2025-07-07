import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";    
import { doLogout } from "./services/auth";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    doLogout(() => {
      navigate("/login");
    });
  };

  return (
    <button onClick={handleLogout} className="btn btn-danger">
      Logout
    </button>
  );
}

export default LogoutButton;