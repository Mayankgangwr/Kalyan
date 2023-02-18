import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  useEffect(() => {
    if (localStorage.getItem("usermobile") !== null) {
      navigate("/");
    }
  }, []);
  const current = new Date();
  const date = `${current.getFullYear()}/${
    current.getMonth() + 1
  }/${current.getDate()}`;
  const navigate = useNavigate();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [btn, setBtn] = useState("Next");
  const [user, setUser] = useState({
    usermobile: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ usermobile: value });
  };
  const Login = (e) => {
    e.preventDefault();
    axios
      .post(`https://jantrisoftware.in/kalyan/login.php`, user)
      .then(function (response) {
        if (response.data.message == "200") {
          window.localStorage.setItem("userid", response.data.userid);
          window.localStorage.setItem("username", response.data.username);
          window.localStorage.setItem("usermobile", response.data.usermobile);
          navigate("/");
        } else {
          alert("Enter Your Correct Login Details");
        }
      });
  };

  return (
    <>
      <div className="container-fluid mx-0  main-page">
        <div className="row">
          <h1 className="text-center">
            <b>LOGIN</b> / <b className="text-danger">REGISTRATION</b>
          </h1>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 mx-auto">
            <form onSubmit={Login} className="row">
              <div className="col-12 mt-2">
                <label className="form-label text-dark ms-3">
                  Mobile Number
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  name="usermobie"
                  value={user.usermobie}
                  className="form-control"
                  placeholder="Enter Mobile Number"
                />
              </div>
              <div className="col-12  mt-4">
                <button type="submit" className="btn w-100 btn-primary">
                  {btn}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
