import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/pages/SignUp.css";

const SignUp = () => {
  return (
    <>
      <Header />

      <main className="su-page">
        <div className="su-container">
          {/* Cột trái: Thông tin + Ảnh thật */}
          <div className="su-info">
            <h1>Tạo tài khoản mới</h1>
            <p>
              Đăng ký ngay để nhận ưu đãi đầu tiên, gợi ý tour cá nhân hóa và
              theo dõi hành trình du lịch của bạn!
            </p>

            <div className="su-image">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Du lịch biển - Phú Quốc"
                className="su-img"
              />
            </div>
          </div>

          {/* Cột phải: Form đăng ký */}
          <div className="su-form">
            <div className="su-card">
              <form>
                <div className="su-input-group">
                  <label>Tên đăng nhập</label>
                  <input type="text" placeholder="your_username" />
                </div>

                <div className="su-input-group">
                  <label>Email</label>
                  <input type="email" placeholder="you@example.com" />
                </div>

                <div className="su-input-group">
                  <label>Mật khẩu</label>
                  <input type="password" placeholder="••••••••" />
                </div>

                <div className="su-input-group">
                  <label>Nhập lại mật khẩu</label>
                  <input type="password" placeholder="••••••••" />
                </div>

                {/* CHECKBOX ĐÃ SỬA – CĂN HÀNG HOÀN HẢO */}
                <div className="su-form-options">
                  <label className="su-checkbox-label">
                    <input type="checkbox" className="su-checkbox-input" />
                    <span className="su-checkmark"></span>
                    <span className="su-checkbox-text">
                      Tôi đồng ý với{" "}
                      <a href="#terms" className="su-terms-link">
                        Điều khoản dịch vụ
                      </a>{" "}
                      và{" "}
                      <a href="#privacy" className="su-terms-link">
                        Chính sách bảo mật
                      </a>
                    </span>
                  </label>
                </div>

                <button type="submit" className="su-btn-signup">
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
                  Đăng ký
                </button>
              </form>

              <p className="su-signin-link">
                Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default SignUp;
