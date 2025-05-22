import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/Routes";

// Layouts
import PublicHeader from "./components/layout/PublicHeader";
import PublicFooter from "./components/layout/PublicFooter";
import PrivateHeader from "./components/layout/PrivateHeader";
import PrivateFooter from "./components/layout/PrivateFooter";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // coloque false para deslogado
  const [userRole, setUserRole] = useState("user"); // "company" ou "user"

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // simulando login enquanto não fizemos o back-end
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
      setUserRole(user.role);
    }
  }, []);

  const isCompany = isLoggedIn && userRole === "company";

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        isCompany ? (
          <>{/* Coloque aqui CompanyHeader e CompanyFooter */}</>
        ) : (
          <>
            <PrivateHeader />
            <AppRoutes />
            <PrivateFooter />
          </>
        )
      ) : (
        <>
          <PublicHeader />
          <AppRoutes />
          <PublicFooter />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
