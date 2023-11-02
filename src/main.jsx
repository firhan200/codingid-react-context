import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import AuthWrapper from "./AuthWrapper";
import GuestWrapper from "./GuestWrapper";
import TodoPage from "./pages/TodoPage";
import InvoicePage from "./pages/InvoicePage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* umum */}
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/todo" element={<TodoPage />} />

          {/* belum login / guest */}
          <Route
            path="/login"
            element={
              <GuestWrapper>
                <Login />
              </GuestWrapper>
            }
          />

          {/* sudah login / authenticated */}
          <Route
            path="/invoices/:productId"
            element={
              <AuthWrapper>
                <InvoicePage />
              </AuthWrapper>
            }
          />
          <Route
            path="/orders"
            element={<AuthWrapper>My Orders</AuthWrapper>}
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
