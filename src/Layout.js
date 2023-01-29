import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ hieght: "50px" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mt-lg-0 mt-md-0 mt-2 mx-1">
                <Link className="btn btn-link-color" to="sheets">
                  <i class="fas fa-table"></i> Sheets
                </Link>
              </li>
              <li className="nav-item mt-lg-0 mt-md-0 mt-2 mx-1">
                <Link className="btn btn-link-color" to="clients">
                  <i class="fas fa-user-friends"></i> Clients
                </Link>
              </li>
              <li className="nav-item mt-lg-0 mt-md-0 mt-2 mx-1">
                <Link className="btn btn-link-color" to="account">
                  <i class="fas fa-users"></i> Account
                </Link>
              </li>
              <li className="nav-item mt-lg-0 mt-md-0 mt-2 mx-1">
                <Link className="btn btn-link-color" to="profile">
                  <i class="fas fa-user-alt"></i> Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};
export default Layout;
