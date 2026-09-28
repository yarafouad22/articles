import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
  return (
    <>

<nav className="navbar navbar-expand-lg p-3 bg-body-dark navbar-dark bg-dark">
  <div className="container" >
    <NavLink className="navbar-brand" to="/">
    <div className="m-0 p-0 logo">
      <h5>عدسة</h5>
      <small>
عالم التصوير الفوتوغرافي</small>
    </div>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <div className="m-auto bill ps-4">
      <ul className="navbar-nav m-auto  mb-lg-0  gap-2">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">
            الرئيسية
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/blog">
            المدونة
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/us">
            من نحن
          </NavLink>
        </li>
      
      </ul>
      </div>
    <form className="d-flex align-items-center gap-3">
      <IoSearch size={22} style={{ color: "#fca849" }} />
        <NavLink to="/Blog">

        <button className="btn button" >ابدأ القراءة</button>
        </NavLink>

      </form>
    </div>
  </div>
</nav>

    </>
  )
}
