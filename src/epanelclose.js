import React, { useEffect, useReducer, useState } from "react";
import "./master.css";
import { Link } from "react-router-dom";
import SpPanel from "./CloseEpanel/spepanel";
import DpPanel from "./CloseEpanel/dpepanel";
import SingleClose from "./CloseEpanel/singleclose";
import TpPanel from "./CloseEpanel/tpepanel";
import { useSelector, useDispatch } from "react-redux";
import { AddSp, AddDp, AddTp, AddSingle } from "./action/index";

const CloseEpanel = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const spdata = useSelector((state) => state.SpData);
  const tpdata = useSelector((state) => state.TpData);
  const dpdata = useSelector((state) => state.DpData);
  const Singledata = useSelector((state) => state.SingleData);
  const dispatch = useDispatch();
  const [boxno, setBoxno] = useState("");
  const [amount, setAmount] = useState("");
  const [pane, setPane] = useState("panel");
  const [client, setClient] = useState("");
  const [disabled, setDisabled] = useState("");
  const [newspdata, setNewspdata] = useState(spdata);
  const [newdpdata, setNewdpdata] = useState(dpdata);
  const [newtpdata, setNewtpdata] = useState(tpdata);
  const [newsingledata, setNewsingledata] = useState(Singledata);

  const handleBoxno = (e) => {
    const value = e.target.value;
    setBoxno(value);
  };
  const handleAmmount = (e) => {
    const value = e.target.value;
    setAmount(value);
  };
  const handlePanel = (e) => {
    setPane(e.target.value);
  };
  const handleClient = (e) => {
    setClient(e.target.value);
    if (e.target.value !== "") {
      setDisabled("disabled");
    }
  };
  const Enable = () => {
    location.reload();
  };
  const printReceipt = () => {
    window.print();
    //alert("printed");
  };
  let oldpane = pane;
  const AddData = (e) => {
    // e.preventDefault();
    if (client !== "") {
      if (pane === "panel" && boxno.length % 3 === 0 && amount !== 0) {
        for (let i = 0; i < boxno.length / 3; i++) {
          newspdata.map((obj, index) => {
            if (obj.key == boxno.slice(i * 3, i * 3 + 3)) {
              return (newspdata[index].num =
                JSON.parse(newspdata[index].num) + JSON.parse(amount));
            }
            return obj;
          });
          setNewspdata(newspdata);
          newdpdata.map((obj, index) => {
            if (obj.key == boxno.slice(i * 3, i * 3 + 3)) {
              return (newdpdata[index].num =
                JSON.parse(newdpdata[index].num) + JSON.parse(amount));
            }
            return obj;
          });
          setNewdpdata(newdpdata);
          //dispatch(AddDp(newdpdata));
          newtpdata.map((obj, index) => {
            if (obj.key == boxno.slice(i * 3, i * 3 + 3)) {
              return (newtpdata[index].num =
                JSON.parse(newtpdata[index].num) + JSON.parse(amount));
            }
            return obj;
          });
          setNewtpdata(newtpdata);
          //dispatch(AddTp(newtpdata));
        }
      }
      if (pane === "single" && boxno.length % 1 === 0 && amount !== 0) {
        for (let i = 0; i < boxno.length; i++) {
          newsingledata.map((obj, index) => {
            if (obj.key == boxno.slice(i, i + 1)) {
              return (newsingledata[index].num =
                JSON.parse(newsingledata[index].num) + JSON.parse(amount));
            }
            return obj;
          });
          setNewsingledata(newsingledata);
          //dispatch(AddSingle(newsingledata));
        }
      }

      setAmount("");
    } else {
      alert("No Client Selected");
    }
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
              <h6 className="card-title text-center">FD Close</h6>
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
          </div>
          {/* Dp Panel Close */}
          {/*Dp Panel Start*/}
          <div className="col-lg-4 col-md-4 col-12 mt-lg-0 mt-md-0 mt-2  mx-0 px-0">
            <h6 className="card-title text-center  bg-info pt-1">TP Panel</h6>
            <TpPanel />
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
              <div className="col-3 px-1 mt-2 mb-1">
                <label>
                  <input
                    type="radio"
                    value="panel"
                    checked={pane === "panel"}
                    onChange={handlePanel}
                    name="panel"
                    className="me-1"
                  />
                  Panel
                </label>
              </div>
              <div className="col-3 px-1 mt-2 mb-1">
                <label>
                  <input
                    type="radio"
                    value="single"
                    checked={pane === "single"}
                    onChange={handlePanel}
                    name="panel"
                    className="me-1"
                  />
                  Single
                </label>
              </div>
              <div className="col-12 px-1 mt-2">
                <div className="d-flex justify-content-between">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 mx-1"
                    style={{ borderRadius: "10px" }}
                  >
                    Family
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary w-100 mx-1"
                    style={{ borderRadius: "10px" }}
                  >
                    Moter
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary w-100 mx-1"
                    style={{ borderRadius: "10px" }}
                  >
                    C/P
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary w-100 ms-1"
                    style={{ borderRadius: "10px" }}
                  >
                    Master
                  </button>
                </div>
              </div>
              <div className="col-7 px-1 mt-2">
                <input
                  type="number"
                  name="boxno"
                  onChange={handleBoxno}
                  value={boxno}
                  className="form-control w-100"
                  placeholder="Enter Box Number"
                />
              </div>
              <div className="col-5 px-1 mt-2">
                <div className="d-flex justify-content-between">
                  <input
                    type="number"
                    name="amount"
                    onChange={handleAmmount}
                    value={amount}
                    className="form-control Amount-box"
                    placeholder="Amount"
                  />
                  <button
                    type="submit"
                    onClick={AddData}
                    className="btn btn-info w-100"
                    style={{ borderRadius: "10px" }}
                  >
                    Enter
                  </button>
                </div>
              </div>
              <div className="col-6 px-1 mt-2">
                <select
                  name="client"
                  onChange={handleClient}
                  className="form-select select-box"
                  disabled={disabled}
                >
                  <option value="">Select Client</option>
                  <option value="Prince Kurmi">Prince Kurmi</option>
                  <option value="Mayank Gangwar">Mayank Gangwar</option>
                </select>
              </div>
              <div className="col-6 px-1 mt-2">
                <div className="d-flex justify-content-between">
                  <button
                    to="../master"
                    type="submit"
                    onClick={Enable}
                    className="btn btn-danger w-100 me-1"
                    style={{ borderRadius: "10px" }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-success w-100"
                    style={{ borderRadius: "10px" }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Button Close */}
        {/*Open Client  */}
        <div className="row mt-3">
          {arr.map((el) => (
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mt-2">
              <div className="card shadows">
                <div className="card-header p-2">
                  <div className="d-flex justify-content-between">
                    <div className="ms-2 my-auto">
                      <h5 className="card-title mb-0">Prince Kurmi</h5>
                    </div>

                    <div className="d-flex justify-content-between">
                      <button className="btn text-white btn-lg btn-floating btn-parple me-1">
                        <i class="fas fa-edit"></i>
                      </button>
                      <button className="btn text-white btn-lg btn-danger btn-floating">
                        <i class="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*Close Client  */}
      </div>
    </>
  );
};

export default CloseEpanel;
