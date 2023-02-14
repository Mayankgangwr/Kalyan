import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  useEffect(() => {
    getUsers();
  });
  function getUsers() {
    axios
      .get(`https://jantrisoftware.in/kalyan/sheets/read.php`)
      .then(function (response) {
        console.log(response.data);
      });
  }
  return (
    <>
      <div className="container-fluid mx-0  main-page">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="row">
              <div className="col-4">
                <h5 className="mt-2" style={{ color: "#ff4500" }}>
                  Today
                </h5>
              </div>
              <div className="col-4">
                <h5 className="mt-2" style={{ color: "#ff4500" }}>
                  {date}
                </h5>
              </div>
              <div className="col-4">
                <h5 className="mt-2" style={{ color: "#ff4500" }}>
                  12:08 AM
                </h5>
              </div>
              {/* <div className="col-8">
                <select className="form-select">
                  <option value="FD">FD</option>
                  <option value="FD">FD</option>
                  <option value="FD">FD</option>
                  <option value="FD">FD</option>
                </select>
              </div>
              <div className="col-4">
                <input
                  type="submit"
                  value="Create"
                  class="btn btn-primary w-100"
                />
              </div>*/}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="row">
              <div className="col-3 mt-lg-0 mt-md-0 mt-sm-0 mt-2">
                <select className="form-select">
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
              </div>
              <div className="col-3 mt-lg-0 mt-md-0 mt-sm-0 mt-2">
                <select className="form-select">
                  <option value="01">Jan</option>
                  <option value="02">Fab</option>
                  <option value="03">Mar</option>
                  <option value="04">Apr</option>
                  <option value="05">May</option>
                  <option value="06">Jun</option>
                  <option value="07">Jul</option>
                  <option value="08">Aug</option>
                  <option value="09">Sep</option>
                  <option value="10">Oct</option>
                  <option value="11">Nov</option>
                  <option value="12">Dec</option>
                </select>
              </div>
              <div className="col-3 mt-lg-0 mt-md-0 mt-sm-0 mt-2">
                <select className="form-select">
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                </select>
              </div>
              <div className="col-3 mt-lg-20 mt-md-0 mt-sm-0 mt-2">
                <input
                  type="submit"
                  value="Check"
                  class="btn btn-primary w-100"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          {arr.map((el) => (
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12 mt-2">
              <div className="card shadow-5">
                <div className="card-header p-2">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h5 className="card-title mb-0">FD</h5>
                      <small className="text-muted">2023-01-29</small>
                    </div>

                    <div className="d-flex justify-content-between">
                      <button className="btn btn-sm btn-info declear-btn me-1 py-1 px-1">
                        Open <br /> 345
                      </button>
                      <button className="btn btn-sm btn-info declear-btn me-1 px-1">
                        Close
                        <br /> 345
                      </button>
                      <button className="btn btn-sm btn-info declear-btn me-1 px-1">
                        Jode
                        <br /> 345
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="card-body p-2"
                  style={{ backgroundColor: "#FDF" }}
                >
                  <div className="d-flex justify-content-between mt-2 mb-1">
                    <div className="">
                      <h4>Open</h4>
                    </div>
                    <button className="btn btn-sm btn-primary rounded-pill">
                      <small>Declare</small>
                    </button>
                    <button className="btn btn-sm btn-primary rounded-pill">
                      <Link className="text-light" to="openmaster">
                        <small>Master</small>
                      </Link>
                    </button>
                    <button className="btn btn-sm btn-primary rounded-pill">
                      <Link className="text-light" to="openepanel">
                        <small>E-Panel</small>
                      </Link>
                    </button>
                  </div>
                </div>
                <div
                  className="card-footer p-2"
                  style={{ backgroundColor: "rgb(206 194 206)" }}
                >
                  <div className="d-flex justify-content-between mt-2 mb-1">
                    <div className="">
                      <h4>Close</h4>
                    </div>
                    <button className="btn btn-sm btn-primary rounded-pill">
                      <small>Declare</small>
                    </button>
                    <button className="btn btn-sm btn-primary rounded-pill">
                      <Link className="text-light" to="closemaster">
                        <small>Master</small>
                      </Link>
                    </button>
                    <button className="btn btn-sm btn-primary rounded-pill">
                      <Link className="text-light" to="closeepanel">
                        <small>E-Panel</small>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
