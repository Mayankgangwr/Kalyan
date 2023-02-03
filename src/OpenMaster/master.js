import React, { useEffect, useState } from "react";
import "../master.css";
import Sp from "./sp";
import Dp from "./dp";
import SingleClose from "./singleclose";
import Tp from "./tp";
import JodePanel from "./jodepanel";
import Draggable from "react-draggable";

const Master = () => {
  const printReceipt = () => {
    window.print();
    //alert("printed");
  };
  return (
    <>
      <div className="fixed-bottom ms-2 mb-2 hide-on-print">
        <button
          type="submit"
          onClick={printReceipt}
          className="btn btn-primary invoice-btn"
        >
          <i class="fas fa-print"></i>
        </button>
      </div>
      <nav
        className="navbar navbar-expand-lg  hide-on-print"
        style={{ backgroundColor: "#ed302f" }}
      >
        <div className="container-fluid">
          <div className="row w-100">
            <div className="col-4">
              <h6 className="card-title text-center">Master</h6>
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
      <div className="container-fluid pb-5">
        <div className="row">
          {/*Ps Panel Start*/}
          <div className="col-lg-4 col-md-4 col-12 height-on-print mx-0 px-0">
            <h6 className="card-title text-center bg-info pt-1">SP Panel</h6>
            <Sp />
          </div>
          {/* Ps Panel Close */}
          {/*Dp Panel Start*/}
          <div className="col-lg-4 col-md-4 col-12 mt-lg-0 mt-md-0 mt-2 height-on-print mx-0 px-0">
            <h6 className="card-title text-center bg-info pt-1">DP Panel</h6>
            <Dp />
            <h6 className="card-title text-center  bg-info pt-1 mt-2">
              TP Panel
            </h6>
            <Tp />
          </div>
          {/* Dp Panel Close */}
          {/*Dp Panel Start*/}
          <div className="col-lg-4 col-md-4 col-12 mt-lg-0 mt-md-0 mt-2 height-on-print  mx-0 px-0">
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
      </div>
    </>
  );
};
export default Master;
