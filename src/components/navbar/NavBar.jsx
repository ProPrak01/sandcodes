import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

export default function NavBar() {
  const { state, dispatch } = useAuth();
  const navigate = useNavigate();
  console.log(state);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <span>Space</span>
          <span className="t">T</span>
          <span>ec</span>
          <div className="bottomLine"></div>
        </Link>
      </div>
      <div className="console">
        <span>CON</span>
        <span className="s">S</span>
        <span>OLE</span>
      </div>
      <div className="buttons">
        <button className="ai-button">A I</button>
        {state.isAuthenticated ? (
          <div style={{display:"flex",gap:"2px"}}>
            <div className="login-button" >{state.user.email}</div>
            <button className="login-button" onClick={handleLogout}>
              LOGOUT
            </button>
          </div>
        ) : (
          <div style={{ display: "flex", gap: "2px" }}>
            <Link to="/signUp">
              <button className="signup-button">SIGN UP</button>
            </Link>
            <Link to="/login">
              <button className="login-button">LOGIN</button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
