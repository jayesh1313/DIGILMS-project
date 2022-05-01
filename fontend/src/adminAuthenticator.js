import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AdminAuthenticator = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("trainer"))
  );
  console.log(currentUser);

  if (currentUser) {
    if (!currentUser.isAdmin) {
      Swal.fire({
        icon: "error",
        title: "You should be logged in as Admin",
      });
      return <Navigate to="/main/trainerlogin" />;
    }
  } else {
    return <Navigate to="/main/login" />;
  }

  return children;
};

export default AdminAuthenticator;
