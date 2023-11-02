import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Login() {
  const { loginUser } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      loginUser("randomtoken");
    }, 1000);
  };

  return (
    <form
      onSubmit={submit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        margin: "auto",
        gap: 20,
        marginTop: "50px",
      }}
    >
      <input type="text" placeholder="email" disabled={loading} />
      <input type="password" placeholder="password" disabled={loading} />
      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
