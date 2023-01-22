import React, { useEffect, useState } from "react";
import "./master.css";
const Master = () => {
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="row w-100">
            <div className="col-4">
              <h6 className="card-title text-center">Master Open</h6>
            </div>
            <div className="col-4">
              <h6 className="card-title text-center">Milan Night</h6>
            </div>
            <div className="col-4">
              <h6 className="card-title text-center">22/01/2023</h6>
            </div>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row mt-1">
          {/*Ps Panel Start*/}
          <div className="col-lg-4 col-md-4 col-12">
            <h6 className="card-title text-center">SP Panel</h6>
            {/*Box Start */}
            {data.map((el) => (
              <div key={el} className="row box-row">
                <div className="master-col d-flex justify-content-center">
                  <label className="box-no">000</label>
                  <input
                    type="text"
                    value={10000}
                    className="form-control amount-box"
                  />
                </div>
                <div className="master-col d-flex justify-content-center">
                  <label className="box-no">000</label>
                  <input
                    type="text"
                    value={10000}
                    className="form-control amount-box"
                  />
                </div>
                <div className="master-col d-flex justify-content-center">
                  <label className="box-no">000</label>
                  <input
                    type="text"
                    value={10000}
                    className="form-control amount-box"
                  />
                </div>
                <div className="master-col d-flex justify-content-center">
                  <label className="box-no">000</label>
                  <input
                    type="text"
                    value={10000}
                    className="form-control amount-box"
                  />
                </div>
                <div className="master-col d-flex justify-content-center">
                  <label className="box-no">000</label>
                  <input
                    type="text"
                    value={10000}
                    className="form-control amount-box"
                  />
                </div>
                <div className="master-col d-flex justify-content-center">
                  <label className="box-no">000</label>
                  <input
                    type="text"
                    value={10000}
                    className="form-control amount-box"
                  />
                </div>
                <div className="total-col ps-0">
                  <label className="total-no">
                    <b>10000</b>
                  </label>
                </div>
              </div>
            ))}
            {/*Box Close */}
          </div>
          {/* Ps Panel Close */}
          <div className="col-lg-4 col-md-4 col-12">
            <h6 className="card-title text-center">DP Panel</h6>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <h6 className="card-title text-center">JODE Panel</h6>
          </div>
        </div>
      </div>
    </>
  );
};
export default Master;
