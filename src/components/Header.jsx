import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext.jsx";
import "../styles/components/Header.css";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const getDashboardPath = () => {
    if (!user) return null;
    return `/${user.role}`;
  };

  return (
    <header className="hd-header">
      <div className="hd-container">
        {/* Logo & Tên web */}
        <Link to="/" className="hd-logo">
          <div className="hd-logo-icon">
            <span>AI</span>
          </div>
          <span className="hd-logo-text">AI Travel Tours</span>
        </Link>

        {/* Navigation */}
        <nav className="hd-nav">
          <Link to="/" className="hd-nav-link">
            Home
          </Link>
          <Link to="/tours" className="hd-nav-link">
            Tours
          </Link>
          {user && (
            <Link to={getDashboardPath()} className="hd-nav-link">
              Dashboard
            </Link>
          )}
        </nav>

        {/* Search Bar */}
        <div className="hd-search-bar">
          <button className="hd-search-btn">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Tìm kiếm điểm đến, hoạt động, mùa vụ..."
            className="hd-search-input"
          />
        </div>

        {/* Right Actions */}
        <div className="hd-actions">
          {user ? (
            <>
              <span className="hd-username">Xin chào, {user.username}</span>
              <button onClick={handleLogout} className="hd-btn-logout">
                Đăng xuất
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hd-login-link">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Đăng nhập
              </Link>
              <Link to="/register" className="hd-btn-register">
                Đăng ký
              </Link>
            </>
          )}
          <Link to="/cart" className="hd-cart-icon">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
