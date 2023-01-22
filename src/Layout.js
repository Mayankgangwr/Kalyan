import { Outlet, Link } from "react-router-dom";
 
const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{hieght:'50px'}}>
        <div className="container">
          <button
            className="navbar-toggler"
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
                src="https://www.logo.wine/a/logo/Disney%2B/Disney%2B-Logo.wine.svg"
                height="35"
                alt="MDB Logo"
                loading="lazy"
              />
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="view-product/1">Project Details</Link>
            </li>
            <li className="nav-item">
            <a className="text-dark  nav-link" href="#"><i className="fas fa-search"></i></a>
            </li>
            </ul>
          </div>
        </div>
    </nav>

      <Outlet />
    </>
  )
};
export default Layout;