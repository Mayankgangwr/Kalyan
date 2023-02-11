import React, { useEffect, useState } from "react";
import "./master.css";
import { Link } from "react-router-dom";
import SpPanel from "./EpanelOpen/spepanel";
import DpPanel from "./EpanelOpen/dpepanel";
import SingleClose from "./EpanelOpen/singleclose";
import TpPanel from "./EpanelOpen/tpepanel";
import JodePanel from "./EpanelOpen/jodepanel";
import { useSelector, useDispatch } from "react-redux";

const OpenEpanel = () => {
  const spdata = useSelector((state) => state.OpenSpData);
  const tpdata = useSelector((state) => state.OpenTpData);
  const dpdata = useSelector((state) => state.OpenDpData);
  const Singledata = useSelector((state) => state.OpenSingleData);
  const JodeData = useSelector((state) => state.JodeData);
  const dispatch = useDispatch();
  const [boxno, setBoxno] = useState("");
  const [amount, setAmount] = useState("");
  const [pane, setPane] = useState("panel");
  const [client, setClient] = useState("");
  const [disabled, setDisabled] = useState("");
  const [newspdata, setNewspdata] = useState(spdata);
  const [newdpdata, setNewdpdata] = useState(dpdata);
  const [newtpdata, setNewtpdata] = useState(tpdata);
  const [newjodedata, setNewjodedata] = useState(JodeData);
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
    setDisabled("");
  };
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
      if (pane === "jode" && boxno.length % 2 === 0 && amount !== 0) {
        for (let i = 0; i < boxno.length / 2; i++) {
          newjodedata.map((obj, index) => {
            if (obj.key == boxno.slice(i * 2, i * 2 + 2)) {
              return (newjodedata[index].num =
                JSON.parse(newjodedata[index].num) + JSON.parse(amount));
            }
            return obj;
          });
          console.log(newjodedata);
          setNewjodedata(newjodedata);

          //dispatch(AddSingle(newsingledata));
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
              <div className="col-3 px-1 mt-2">
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
              <div className="col-3 px-1 mt-2">
                <label>
                  <input
                    type="radio"
                    value="jode"
                    checked={pane === "jode"}
                    onChange={handlePanel}
                    name="panel"
                    className="me-1"
                  />
                  Jode
                </label>
              </div>
              <div className="col-3 px-1 mt-2">
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
                    C / P
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
                    className="form-control"
                    placeholder="Amount"
                    style={{ marginRight: "5px", paddingRight: "35px" }}
                  />
                  <button
                    type="submit"
                    onClick={AddData}
                    className="btn btn-success w-100"
                    style={{ borderRadius: "10px" }}
                  >
                    Save
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
      </div>
    </>
  );
};

export default OpenEpanel;
