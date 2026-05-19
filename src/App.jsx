import React, { useState } from "react";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return isAuthenticated ? (
    <DashboardPage />
  ) : (
    <LoginPage onLoginSuccess={() => setIsAuthenticated(true)} />
  );
}
