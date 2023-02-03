import React, { useEffect, useState } from "react";
import "./master.css";
import { Link } from "react-router-dom";
import SpPanel from "./EpanelOpen/spepanel";
import DpPanel from "./EpanelOpen/dpepanel";
import SingleClose from "./EpanelOpen/singleclose";
import TpPanel from "./EpanelOpen/tpepanel";
import JodePanel from "./EpanelOpen/jodepanel";

const Epanel = () => {
  const printReceipt = () => {
    window.print();
    //alert("printed");
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg  hide-on-print"
        style={{ backgroundColor: "#ed302f" }}
      >
        <div className="container-fluid">
          <div className="row w-100">
            <div className="col-4">
              <h6 className="card-title text-center">E-Panel</h6>
            </div>
            <div className="col-4">
              <h6 className="card-title text-center">FD Open</h6>
            </div>
            <div className="col-4">
              <h6 className="card-title text-center">22/01/2023</h6>
            </div>
          </div>
        </div>
      </nav>
      <div className="container-fluid pb-5">
        <div className="row">
          {/*Ps Panel Start*/}
          <div className="col-lg-4 col-md-4 col-12 height-on-print mx-0 px-0">
            <h6 className="card-title text-center bg-info pt-1">SP Panel</h6>
            <SpPanel />
          </div>
          {/* Ps Panel Close */}
          {/*Dp Panel Start*/}
          <div className="col-lg-4 col-md-4 col-12 mt-lg-0 mt-md-0 mt-2 height-on-print mx-0 px-0">
            <h6 className="card-title text-center bg-info pt-1">DP Panel</h6>
            <DpPanel />
            <h6 className="card-title text-center  bg-info pt-1 mt-2">
              TP Panel
            </h6>
            <TpPanel />
          </div>
          {/* Dp Panel Close */}
          {/*Dp Panel Start*/}
          <div className="col-lg-4 col-md-4 col-12 mt-lg-0 mt-md-0 mt-2  mx-0 px-0">
            <h6 className="card-title text-center   bg-info pt-1">Jode</h6>
            <JodePanel />
            <h6 className="card-title text-center  bg-info pt-1 mt-2">
              Single Close
            </h6>
            <SingleClose />
          </div>
          {/* Dp Panel Close */}
        </div>
        <hr />
        {/*Button Open */}
        <div className="row">
          <div className="col-lg-6 col-md-7 col-sm-8 col-12 mx-auto">
            <div className="row box-row mt-2">
              <div className="col-2 px-1 mt-2">
                <label>
                  <input type="checkbox" className="me-1" />
                  Panel
                </label>
              </div>
              <div className="col-2 px-1 mt-2">
                <label>
                  <input type="checkbox" className="me-1" />
                  Single
                </label>
              </div>
              <div className="col-2 px-1 mt-2">
                <label>
                  <input type="checkbox" className="me-1" />
                  Jode
                </label>
              </div>
              <div className="col-7 px-1 mt-2">
                <input
                  type="number"
                  name="boxno"
                  value={""}
                  className="form-control w-100"
                  placeholder="Enter Box Number"
                />
              </div>
              <div className="col-3 px-1 mt-2">
                <input
                  type="number"
                  name="boxno"
                  value={""}
                  className="form-control w-100"
                  placeholder="Account"
                />
              </div>
              <div
                className="col-2 d-grid mt-2"
                style={{
                  placeItems: "center",
                  borderRadius: "50%",
                  backgroundColor: "black",
                  width: "35px",
                  height: "35px",
                  margin: "auto",
                }}
              >
                <img
                  src="./img/arrow.png"
                  style={{ height: "24px", marginLeft: "-3px" }}
                />
              </div>
              <div className="col-8 px-1 mt-2">
                <select name="client" className="form-select select-box">
                  <option value="Prince Kurmi">Prince Kurmi</option>
                  <option value="Mayank Gangwar">Mayank Gangwar</option>
                </select>
              </div>
              <div className="col-4 px-1 mt-2">
                <Link
                  to="../master"
                  type="submit"
                  className="btn btn-primary w-100"
                  style={{ borderRadius: "10px" }}
                >
                  Master
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/*Button Close */}
      </div>
    </>
  );
};

export default Epanel;
