import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/pages/Login.css";

const Login = () => {
  return (
    <>
      <Header />

      <main className="lg-page">
        <div className="lg-container">
          {/* Cột trái: Thông tin + Ảnh thật */}
          <div className="lg-info">
            <h1>Đăng nhập vào tài khoản</h1>
            <p>
              Truy cập hồ sơ, theo dõi đơn đặt tour, thanh toán nhanh, và nhận
              gợi ý cá nhân hóa.
            </p>

            {/* Ảnh thật thay thế placeholder */}
            <div className="lg-image">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Điểm đến du lịch tuyệt đẹp - Đà Lạt"
                className="lg-img"
              />
            </div>
          </div>

          {/* Cột phải: Form đăng nhập (cao hơn) */}
          <div className="lg-form">
            <div className="lg-card">
              <form>
                <div className="lg-input-group">
                  <label>Tên đăng nhập</label>
                  <input
                    type="text"
                    placeholder="your_username"
                    defaultValue=""
                  />
                </div>

                <div className="lg-input-group">
                  <label>Mật khẩu</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    defaultValue=""
                  />
                </div>

                <div className="lg-form-options">
                  <label className="lg-checkbox-label">
                    <input type="checkbox" defaultChecked />
                    <span className="lg-checkmark"></span>
                    Ghi nhớ
                  </label>
                  <a href="#forgot" className="lg-forgot-link">
                    Quên mật khẩu?
                  </a>
                </div>

                <button type="submit" className="lg-btn-login">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                  Đăng nhập
                </button>
              </form>

              <div className="lg-social-login">
                <button className="lg-btn-social lg-btn-google">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 6.75c1.63 0 3.06.56 4.21 1.65l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Tiếp tục với Google
                </button>

                <button className="lg-btn-social lg-btn-facebook">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Tiếp tục với Facebook
                </button>
              </div>

              <p className="lg-signup-link">
                Chưa có tài khoản? <Link to="/register">Đăng ký</Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Login;
