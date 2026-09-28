
import { NavLink } from "react-router-dom";
import {
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import {
  FaHouse,
  FaBookOpen,
  FaUser,
  FaCamera,
  FaLightbulb,
  FaImage,
  FaMountain,
  FaGear,
} from "react-icons/fa6";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-5">

          {/* Brand */}
          <div className="col-lg-4 col-md-6">
            <NavLink to="/" className="footer-brand">
              <span className="brand-icon">ع</span>
              <span>عدسة</span>
            </NavLink>

            <p className="footer-description">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
              المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>

            <div className="footer-social">
              <a href="https://twitter.com/adasah" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>

              <a href="https://github.com/adasah" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/company/adasah"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://youtube.com/@adasah"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title">استكشف</h5>

            <ul className="footer-links">
              <li>
                <NavLink to="/">
                  <FaHouse />
                  الرئيسية
                </NavLink>
              </li>

              <li>
                <NavLink to="/blog">
                  <FaBookOpen />
                  المدونة
                </NavLink>
              </li>

              <li>
                <NavLink to="/us">
                  <FaUser />
                  من نحن
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">التصنيفات</h5>

            <ul className="footer-links">
              <li>
                <NavLink to="/blog?category=إضاءة">
                  <FaLightbulb />
                  إضاءة
                </NavLink>
              </li>

              <li>
                <NavLink to="/blog?category=بورتريه">
                  <FaUser />
                  بورتريه
                </NavLink>
              </li>

              <li>
                <NavLink to="/blog?category=مناظر طبيعية">
                  <FaMountain />
                  مناظر طبيعية
                </NavLink>
              </li>

              <li>
                <NavLink to="/blog?category=تقنيات">
                  <FaGear />
                  تقنيات
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">ابقَ على اطلاع</h5>

            <p className="newsletter-text">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>

            <form className="newsletter-form">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                aria-label="البريد الإلكتروني"
              />

              <button type="submit">
                اشترك
              </button>
            </form>
          </div>

        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>
            © 2026 عدسة. صنع بكل <span>♥</span> جميع الحقوق محفوظة.
          </p>

          <div className="footer-policy">
            <NavLink to="/privacy">سياسة الخصوصية</NavLink>
            <NavLink to="/terms">شروط الخدمة</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
