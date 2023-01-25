import React, { useEffect, useState } from "react";
import "./master.css";
const Master = () => {
  const sp = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const dp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const jode = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  const tp = [1, 2];
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
            {sp.map((el) => (
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
            {/*Grand Total Open */}
            <div className="row box-row">
              <div
                className="master-col d-flex justify-content-center"
                style={{ width: "86.4%" }}
              >
                <label className="grand-total-no ms-auto">
                  <b className="text-dark">Total</b>
                </label>
              </div>
              <div className="total-col ps-0">
                <label className="grand-total-no mt-1">
                  <b>10000</b>
                </label>
              </div>
            </div>
            {/*Grand Total Close */}
          </div>
          {/* Ps Panel Close */}
          {/*DP Panel Start */}
          <div className="col-lg-4 col-md-4 col-12">
            <h6 className="card-title text-center">DP Panel</h6>
            {/*DP Box Start */}
            {dp.map((el) => (
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
            {/*TP Box Close */}
            {/*Grand Total Open */}
            <div className="row box-row">
              <div
                className="master-col d-flex justify-content-center"
                style={{ width: "86.4%" }}
              >
                <label className="grand-total-no ms-auto">
                  <b className="text-dark">Total</b>
                </label>
              </div>
              <div className="total-col ps-0">
                <label className="grand-total-no mt-1">
                  <b>10000</b>
                </label>
              </div>
            </div>
            {/*Grand Total Close */}
            <h6 className="card-title text-center mt-1">TP Panel</h6>
            {/*TP Box Start */}
            <div key={`tp1`} className="row box-row">
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
                  readonly
                  className="form-control amount-box"
                />
              </div>
              <div className="total-col ps-0">
                <label className="total-no">
                  <b>10000</b>
                </label>
              </div>
            </div>
            <div key={`tp2`} className="row box-row">
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
                <label className="box-no text-secondary">000</label>
                <input
                  type="text"
                  value={10000}
                  readonly
                  className="form-control amount-box text-secondary"
                />
              </div>
              <div className="master-col d-flex justify-content-center">
                <label className="box-no text-secondary">000</label>
                <input
                  type="text"
                  value={10000}
                  readonly
                  className="form-control amount-box text-secondary"
                />
              </div>
              <div className="total-col ps-0">
                <label className="total-no">
                  <b>10000</b>
                </label>
              </div>
            </div>
            {/*TP Box Close */}
            {/*Grand Total Open */}
            <div className="row box-row">
              <div
                className="master-col d-flex justify-content-center"
                style={{ width: "86.4%" }}
              >
                <label className="grand-total-no ms-auto">
                  <b className="text-dark">Total</b>
                </label>
              </div>
              <div className="total-col ps-0">
                <label className="grand-total-no mt-1">
                  <b>10000</b>
                </label>
              </div>
            </div>
            {/*Grand Total Close */}
          </div>
          {/*DP Panel Close */}
          {/*DP Panel Start */}
          <div className="col-lg-4 col-md-4 col-12">
            <h6 className="card-title text-center">JODE</h6>
            {/*JODE Box Start */}
            {jode.map((el) => (
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
            {/*JODE Box Close */}
            {/*Grand Total Open */}
            <div className="row box-row">
              <div
                className="master-col d-flex justify-content-center"
                style={{ width: "86.4%" }}
              >
                <label className="grand-total-no ms-auto">
                  <b className="text-dark">Total</b>
                </label>
              </div>
              <div className="total-col ps-0">
                <label className="grand-total-no mt-1">
                  <b>10000</b>
                </label>
              </div>
            </div>
            {/*Grand Total Close */}
            <h6 className="card-title text-center mt-1">Single Close</h6>
            {/*Single Close Box Start */}
            <div key={`tp1`} className="row box-row">
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
                  readonly
                  className="form-control amount-box"
                />
              </div>
              <div className="total-col ps-0">
                <label className="total-no">
                  <b>10000</b>
                </label>
              </div>
            </div>
            <div key={`tp2`} className="row box-row">
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
                <label className="box-no text-secondary">000</label>
                <input
                  type="text"
                  value={10000}
                  readonly
                  className="form-control amount-box text-secondary"
                />
              </div>
              <div className="master-col d-flex justify-content-center">
                <label className="box-no text-secondary">000</label>
                <input
                  type="text"
                  value={10000}
                  readonly
                  className="form-control amount-box text-secondary"
                />
              </div>
              <div className="total-col ps-0">
                <label className="total-no">
                  <b>10000</b>
                </label>
              </div>
            </div>
            {/*Single Close Box Close */}
            {/*Grand Total Open */}
            <div className="row box-row">
              <div
                className="master-col d-flex justify-content-center"
                style={{ width: "86.4%" }}
              >
                <label className="grand-total-no ms-auto">
                  <b className="text-dark">Total</b>
                </label>
              </div>
              <div className="total-col ps-0">
                <label className="grand-total-no mt-1">
                  <b>10000</b>
                </label>
              </div>
            </div>
            {/*Grand Total Close */}
          </div>
          {/*JODE Close */}
        </div>
      </div>
    </>
  );
};
export default Master;
