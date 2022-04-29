import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const TrainerAuthenticator = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("trainer"))
  );
  console.log(currentUser);

  if (!currentUser) {
    Swal.fire({
      icon: "info",
      title: "OOps!!",
      text: "You should be loggedin as a trainer..",
    });
    return <Navigate to="/main/trainerlogin" />;
  }

  return children;
};

export default TrainerAuthenticator;
