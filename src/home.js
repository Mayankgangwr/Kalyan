import React from "react";
import Layout from "./Layout";
const Home = () => {
  return (
    <>
      <Layout />
      <div className="container-fluid mx-0" style={{ marginTop: "60px" }}>
        <div className="row">
          <div className="col-4 col-lg-4 col-md-10 col-sm-10 mt-2">
            <input
              type="text"
              placeholder="Enter the sheet name"
              class="form-control"
            />
          </div>
          <div className="col-2 col-lg-2 col-md-2 col-sm-2 mt-2">
            <input type="submit" value="Create" class="btn btn-primary" />
          </div>
          <div className="col-4 col-lg-4 col-md-10 col-sm-10 mt-2">
            <input type="date" class="form-control" />
          </div>
          <div className="col-2 col-lg-2 col-md-2 col-sm-2 mt-2">
            <input type="submit" value="Check" class="btn btn-primary" />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12 mt-1">
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
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
              <div
                className="card-footer p-2"
                style={{ backgroundColor: "rgb(206 194 206)" }}
              >
                <div className="d-flex justify-content-between mt-2 mb-1">
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12 mt-1">
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
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
              <div
                className="card-footer p-2"
                style={{ backgroundColor: "rgb(206 194 206)" }}
              >
                <div className="d-flex justify-content-between mt-2 mb-1">
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12 mt-1">
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
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
              <div
                className="card-footer p-2"
                style={{ backgroundColor: "rgb(206 194 206)" }}
              >
                <div className="d-flex justify-content-between mt-2 mb-1">
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12 mt-1">
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
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
              <div
                className="card-footer p-2"
                style={{ backgroundColor: "rgb(206 194 206)" }}
              >
                <div className="d-flex justify-content-between mt-2 mb-1">
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12 mt-1">
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
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
              <div
                className="card-footer p-2"
                style={{ backgroundColor: "rgb(206 194 206)" }}
              >
                <div className="d-flex justify-content-between mt-2 mb-1">
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12 mt-1">
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
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
              <div
                className="card-footer p-2"
                style={{ backgroundColor: "rgb(206 194 206)" }}
              >
                <div className="d-flex justify-content-between mt-2 mb-1">
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12 mt-1">
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
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
              <div
                className="card-footer p-2"
                style={{ backgroundColor: "rgb(206 194 206)" }}
              >
                <div className="d-flex justify-content-between mt-2 mb-1">
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12 mt-1">
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
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
              <div
                className="card-footer p-2"
                style={{ backgroundColor: "rgb(206 194 206)" }}
              >
                <div className="d-flex justify-content-between mt-2 mb-1">
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12 mt-1">
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
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
              <div
                className="card-footer p-2"
                style={{ backgroundColor: "rgb(206 194 206)" }}
              >
                <div className="d-flex justify-content-between mt-2 mb-1">
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12 mt-1">
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
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
              <div
                className="card-footer p-2"
                style={{ backgroundColor: "rgb(206 194 206)" }}
              >
                <div className="d-flex justify-content-between mt-2 mb-1">
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12 mt-1">
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
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
              <div
                className="card-footer p-2"
                style={{ backgroundColor: "rgb(206 194 206)" }}
              >
                <div className="d-flex justify-content-between mt-2 mb-1">
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12 mt-1">
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
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
              <div
                className="card-footer p-2"
                style={{ backgroundColor: "rgb(206 194 206)" }}
              >
                <div className="d-flex justify-content-between mt-2 mb-1">
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12 mt-1">
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
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
              <div
                className="card-footer p-2"
                style={{ backgroundColor: "rgb(206 194 206)" }}
              >
                <div className="d-flex justify-content-between mt-2 mb-1">
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12 mt-1">
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
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
              <div
                className="card-footer p-2"
                style={{ backgroundColor: "rgb(206 194 206)" }}
              >
                <div className="d-flex justify-content-between mt-2 mb-1">
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12 mt-1">
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
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
              <div
                className="card-footer p-2"
                style={{ backgroundColor: "rgb(206 194 206)" }}
              >
                <div className="d-flex justify-content-between mt-2 mb-1">
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12 mt-1">
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
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
              <div
                className="card-footer p-2"
                style={{ backgroundColor: "rgb(206 194 206)" }}
              >
                <div className="d-flex justify-content-between mt-2 mb-1">
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12 mt-1">
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
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
              <div
                className="card-footer p-2"
                style={{ backgroundColor: "rgb(206 194 206)" }}
              >
                <div className="d-flex justify-content-between mt-2 mb-1">
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Close</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>E-Panel</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
