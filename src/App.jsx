import { useContext } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import { AuthContext } from "./contexts/AuthContext";
import InvoicePage from "./pages/InvoicePage";

export default function App() {
  const { isAuth } = useContext(AuthContext);

  return (
    <>
      <Header />
      {!isAuth ? <Login /> : null}

      <InvoicePage />
    </>
  );
}
