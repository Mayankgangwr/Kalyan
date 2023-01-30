import React from "react";
import Layout from "./Layout";
const Home = () => {
  return (
    <>
      <Layout />
      <div className="container-fluid mx-0">
        <div className="row">
          <div className="col-3 mt-1">
            <div className="card shadow-5">
              <div className="card-body py-2">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">FD</h5>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-sm btn-info me-1 px-1 py-0 h-50">
                      ?
                    </button>
                    <button className="btn btn-sm btn-info px-1 py-0 h-50">
                      ?
                    </button>
                  </div>
                </div>
                <div className="d-flex justify-content-between text-muted">
                  <small>2023-01-29</small>
                  <small>10:12 AM</small>
                </div>
                <div className=" d-flex justify-content-between">
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Declare</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Master</small>
                  </button>
                  <button className="btn btn-sm btn-primary rounded-pill">
                    <small>Open</small>
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
