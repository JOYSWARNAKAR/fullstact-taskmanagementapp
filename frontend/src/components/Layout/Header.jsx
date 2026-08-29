import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Layout.css";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const firstName = user?.name?.split(" ")[0] || "User";
  const isTasksPage = location.pathname === "/tasks";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <h1>Task Manager</h1>
        </Link>
        <nav className="nav">
          {user ? (
            <div className="nav-user">
              <span className="welcome-text">Welcome, {firstName}</span>
              {!isTasksPage && (
                <Link to="/tasks" className="nav-link">
                  Tasks
                </Link>
              )}
              <button className="btn btn-secondary" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="nav-auth">
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;