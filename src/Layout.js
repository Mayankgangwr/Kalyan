import { Outlet, Link } from "react-router-dom";
import "./layout.css";
const Layout = () => {
  return (
    <>
      <div className="container-fluid bg-dark m-nav mx-0 nav-px">
        <div
          className="d-flex justify-content-between"
          style={{ lineHeight: "12px" }}
        >
          <Link className="navbar-brand" to="/">
            <img
              src="./img/logo.png"
              height="30"
              alt="MDB Logo"
              loading="lazy"
              style={{ filter: "hue-rotate(150deg)" }}
            />
          </Link>
          <Link class="text-center mt-1" to="/profile">
            <h6 className="card=title mb-0" style={{ color: "#fff" }}>
              Prince
            </h6>
            <p style={{ color: "rgb(166 166 166)" }}>prince@00</p>
          </Link>
        </div>
        <div className="d-flex justify-content-between pb-2">
          <Link className="btn btn-link-color" to="sheets">
            <i class="fas fa-table"></i> Sheets
          </Link>
          <Link className="btn btn-link-color" to="clients">
            <i class="fas fa-user-friends"></i> Clients
          </Link>
          <Link className="btn btn-link-color" to="account">
            <i class="fas fa-users"></i> Account
          </Link>
          <Link className="btn btn-link-color" to="profile">
            <i class="fas fa-user-alt"></i> Profile
          </Link>
        </div>
      </div>
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark d-nav py-0"
        style={{ hieght: "50px" }}
      >
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link className="navbar-brand mt-2 mt-lg-0" to="/">
              <img
                src="./img/logo.png"
                height="30"
                alt="MDB Logo"
                loading="lazy"
                style={{ filter: "hue-rotate(150deg)" }}
              />
            </Link>
            <ul
              className="navbar-nav ms-auto"
              style={{ display: "-webkit-inline-box" }}
            >
              <li className="nav-item mx-1 my-auto">
                <Link className="btn btn-link-color" to="sheets">
                  <i class="fas fa-table"></i> Sheets
                </Link>
              </li>
              <li className="nav-item mx-1 my-auto">
                <Link className="btn btn-link-color" to="clients">
                  <i class="fas fa-user-friends"></i> Clients
                </Link>
              </li>
              <li className="nav-item mx-1 my-auto">
                <Link className="btn btn-link-color" to="account">
                  <i class="fas fa-users"></i> Account
                </Link>
              </li>
              <li className="nav-item mx-1 my-auto">
                <Link className="btn btn-link-color" to="profile">
                  <i class="fas fa-user-alt"></i> Profile
                </Link>
              </li>
              <li
                style={{ cursor: "pointer" }}
                class="nav-link dropdown-toggle hidden-arrow"
                data-mdb-toggle="dropdown"
              >
                <button className="btn btn-link-color">
                  Prince
                  <i className="fas fa-ellipsis-v ms-1"></i>
                </button>
              </li>
              <ul class="dropdown-menu dropdown-menu-end mx-2 p-2 shadow-5 bg-dark">
                <li>
                  <Link
                    to="profile"
                    className="nav-item btn btn-link-color w-100 my-2"
                  >
                    <i class="fas fa-user-alt me-1"></i>
                    profile
                  </Link>
                </li>

                <li>
                  <Link
                    to="setting"
                    className="nav-item btn btn-link-color w-100 my-2"
                  >
                    <i class="fas fa-cog me-1"></i>
                    Setting
                  </Link>
                </li>
                <li>
                  <Link
                    to="logout"
                    className="nav-item btn btn-link-color w-100 my-2"
                  >
                    <i class="fas fa-sign-in-alt me-1"></i>
                    Logout
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default Layout;
