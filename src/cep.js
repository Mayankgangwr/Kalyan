import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./master.css";
import TextField from "@material-ui/core/TextField";
import { Link, useNavigate, useParams } from "react-router-dom";
import Spdata from "./spdata";
import Dpdata from "./dpdata";
import Tpdata from "./tpdata";
import Single from "./single";
const CEpanel = () => {
  const inputReference = useRef(null);
  const navigate = useNavigate();
  const params = useParams();
  const [sheetname, setSheetname] = useState("");
  const [boxno, setBoxno] = useState("");
  const [amount, setAmount] = useState("");
  const [pane, setPane] = useState("panel");
  const [client, setClient] = useState("");
  const [disabled, setDisabled] = useState("");
  const [spdata, setSpdata] = useState(Spdata);
  const [dpdata, setDpdata] = useState(Dpdata);
  const [tpdata, setTpdata] = useState(Tpdata);
  const [singledata, setSingledata] = useState(Single);
  const [loginButtonClicked, handleLoginButtonClicked] = React.useState(false);
  const BoxnoRef = React.useRef(null);
  const AmmountRef = React.useRef(null);
  const buttonForRef = React.useRef(null);
  useEffect(() => {
    getSheets();
  }, []);
  function getSheets() {
    axios
      .get(
        `https://jantrisoftware.in/kalyan/sheets/read.php?id=${params.sheetid}`
      )
      .then(function (response) {
        setSheetname(response.data[0].name);
      });
  }
  //Entry By Box
  const handleSp = (e) => {
    e.preventDefault();
    const name = e.target.name;
    let value = e.target.value;
    if (value == "") {
      value = 0;
    }
    const st = spdata.map((el) => {
      if (el.key === name) {
        return { ...el, num: value };
      } else {
        return el;
      }
    });
    setSpdata(st);
  };
  const handleDp = (e) => {
    e.preventDefault();
    const name = e.target.name;
    let value = e.target.value;
    if (value == "") {
      value = 0;
    }
    const dt = dpdata.map((el) => {
      if (el.key === name) {
        return { ...el, num: value };
      } else {
        return el;
      }
    });
    setDpdata(dt);
  };
  const handleTp = (e) => {
    e.preventDefault();
    const name = e.target.name;
    let value = e.target.value;
    if (value == "") {
      value = 0;
    }
    const tt = tpdata.map((el) => {
      if (el.key === name) {
        return { ...el, num: value };
      } else {
        return el;
      }
    });
    setTpdata(tt);
  };
  const handleSSp = (e) => {
    e.preventDefault();
    const name = e.target.name;
    let value = e.target.value;
    if (value == "") {
      value = 0;
    }
    const sst = singledata.map((el) => {
      if (el.key === name) {
        return { ...el, num: value };
      } else {
        return el;
      }
    });
    setSingledata(sst);
  };
  //Close Entry By Boxs
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
    /*setSingledata(Single);
    setSpdata(Spdata);
    setDpdata(Dpdata);
    setTpdata(Tpdata);
    setClient("");
    setDisabled("");
    setBoxno("");
    setAmount("");*/
    location.reload();
  };
  const AddData = (e) => {
    // e.preventDefault();

    /*if (client !== "") {
      if (pane === "panel" && boxno.length % 3 === 0 && amount !== 0) {
        for (let i = 0; i < boxno.length / 3; i++) {
          tpdata.map((obj, index) => {
            if (obj.key == boxno.slice(i * 3, i * 3 + 3)) {
              return (tpdata[index].num =
                JSON.parse(tpdata[index].num) + JSON.parse(amount));
            }
            return obj;
          });
          setTpdata(tpdata);
          spdata.map((obj, index) => {
            if (obj.key == boxno.slice(i * 3, i * 3 + 3)) {
              return (spdata[index].num =
                JSON.parse(spdata[index].num) + JSON.parse(amount));
            }
            return obj;
          });
          setSpdata(spdata);
          dpdata.map((obj, index) => {
            if (obj.key == boxno.slice(i * 3, i * 3 + 3)) {
              return (dpdata[index].num =
                JSON.parse(dpdata[index].num) + JSON.parse(amount));
            }
            return obj;
          });
          setDpdata(dpdata);
        }
      }
      if (pane === "single" && amount !== 0) {
        for (let i = 0; i < boxno.length; i++) {
          singledata.map((obj, index) => {
            if (obj.key == boxno.slice(i, i + 1)) {
              return (singledata[index].num =
                JSON.parse(singledata[index].num) + JSON.parse(amount));
            }
            return obj;
          });
          setSingledata(singledata);
        }
      }
      setAmount("");
    } else {
      alert("No Client Selected");
    }*/
    inputReference.current.focus();
  };

  const handleFocus = (event) => event.target.select();
  const tp = [1, 2];
  const sp = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const dp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top  hide-on-print"
        style={{ backgroundColor: "#ed302f" }}
      >
        <div className="container-fluid">
          <div className="row w-100">
            <div className="col-1">
              <button
                onClick={() => navigate(-1)}
                className="btn btn-sm btn-primary"
              >
                <i class="fas fa-long-arrow-alt-left"></i>
              </button>
            </div>
            <div className="col-11">
              <div className="row">
                <div className="col-4">
                  <h6 className="card-title text-center">E-Panel</h6>
                </div>
                <div className="col-4">
                  <h6 className="card-title text-center">{`${sheetname} Close`}</h6>
                </div>
                <div className="col-4">
                  <h6 className="card-title text-center">22/01/2023</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="container-fluid pb-5" style={{ marginTop: "46px" }}>
        <div className="row">
          {/*Ps Panel Start*/}
          <div className="col-lg-4 col-md-4 col-12 mt-lg-0 mt-md-0 mt-2  mx-0 px-0">
            <h6 className="card-title text-center  bg-info pt-1">SP Panel</h6>
            {/*Box Start */}
            {sp.map((el, i) => (
              <div key={i} className="row box-row">
                {spdata.slice(6 * i, i * 6 + 6).map((item) => (
                  <div
                    key={item.key}
                    className={`master-col d-flex justify-content-center ${
                      item.key === "no" ? "d-hidden" : ""
                    } ${item.key === "na" ? "d-hidden" : ""}`}
                  >
                    <label className="box-no">{item.key}</label>
                    <input
                      type="number"
                      name={item.key}
                      value={item.num < 1 ? "" : item.num}
                      onChange={handleSp}
                      className="form-control amount-box"
                    />
                  </div>
                ))}
                <div className="total-col ps-0">
                  <label className="total-no">
                    <b>
                      {spdata.slice(6 * i, i * 6 + 6).reduce((total, item) => {
                        return total + JSON.parse(item.num);
                      }, 0)}
                    </b>
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
                  <b>
                    {spdata.reduce((total, item) => {
                      return total + JSON.parse(item.num);
                    }, 0)}
                  </b>
                </label>
              </div>
            </div>
            {/*Grand Total Close */}
          </div>
          {/* Ps Panel Close */}
          {/*Dp Panel Start*/}
          <div className="col-lg-4 col-md-4 col-12 mt-lg-0 mt-md-0 mt-2  mx-0 px-0">
            <h6 className="card-title text-center  bg-info pt-1">DP Panel</h6>
            {/*Box Start */}
            {dp.map((el, i) => (
              <div key={i} className="row box-row">
                {dpdata.slice(6 * i, i * 6 + 6).map((item) => (
                  <div
                    key={item.key}
                    className={`master-col d-flex justify-content-center ${
                      item.key === "no" ? "d-hidden" : ""
                    } ${item.key === "na" ? "d-hidden" : ""}`}
                  >
                    <label className="box-no">{item.key}</label>
                    <input
                      type="number"
                      name={item.key}
                      value={item.num < 1 ? "" : item.num}
                      onChange={handleDp}
                      className="form-control amount-box"
                    />
                  </div>
                ))}
                <div className="total-col ps-0">
                  <label className="total-no">
                    <b>
                      {dpdata.slice(6 * i, i * 6 + 6).reduce((total, item) => {
                        return total + JSON.parse(item.num);
                      }, 0)}
                    </b>
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
                  <b>
                    {dpdata.reduce((total, item) => {
                      return total + JSON.parse(item.num);
                    }, 0)}
                  </b>
                </label>
              </div>
            </div>
            {/*Grand Total Close */}
          </div>
          {/* Dp Panel Close */}
          {/*Dp Panel Start*/}
          <div className="col-lg-4 col-md-4 col-12 mt-lg-0 mt-md-0 mt-2  mx-0 px-0">
            <h6 className="card-title text-center  bg-info pt-1">TP Panel</h6>
            {/*Box Start */}
            {tp.map((el, i) => (
              <div key={i} className="row box-row">
                {tpdata.slice(6 * i, i * 6 + 6).map((item) => (
                  <div
                    key={item.key}
                    className={`master-col d-flex justify-content-center ${
                      item.key === "no" ? "d-hidden" : ""
                    } ${item.key === "na" ? "d-hidden" : ""}`}
                  >
                    <label className="box-no">{item.key}</label>
                    <input
                      type="number"
                      name={item.key}
                      value={item.num < 1 ? "" : item.num}
                      onChange={handleTp}
                      className="form-control amount-box"
                    />
                  </div>
                ))}
                <div className="total-col ps-0">
                  <label className="total-no">
                    <b>
                      {tpdata.slice(6 * i, i * 6 + 6).reduce((total, item) => {
                        return total + JSON.parse(item.num);
                      }, 0)}
                    </b>
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
                  <b>
                    {tpdata.reduce((total, item) => {
                      return total + JSON.parse(item.num);
                    }, 0)}
                  </b>
                </label>
              </div>
            </div>
            {/*Grand Total Close */}
            <h6 className="card-title text-center  bg-info pt-1 mt-2">
              Single Close
            </h6>
            {/*Box Start */}
            {tp.map((el, i) => (
              <div key={i} className="row box-row">
                {singledata.slice(6 * i, i * 6 + 6).map((item) => (
                  <div
                    key={item.key}
                    className={`master-col d-flex justify-content-center ${
                      item.key === "no" ? "d-hidden" : ""
                    } ${item.key === "na" ? "d-hidden" : ""}`}
                  >
                    <label className="box-no">{item.key}</label>
                    <input
                      type="number"
                      name={item.key}
                      value={item.num < 1 ? "" : item.num}
                      onChange={handleSSp}
                      className="form-control amount-box"
                    />
                  </div>
                ))}
                <div className="total-col ps-0">
                  <label className="total-no">
                    <b>
                      {singledata
                        .slice(6 * i, i * 6 + 6)
                        .reduce((total, item) => {
                          return total + JSON.parse(item.num);
                        }, 0)}
                    </b>
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
                  <b>
                    {singledata.reduce((total, item) => {
                      return total + JSON.parse(item.num);
                    }, 0)}
                  </b>
                </label>
              </div>
            </div>
            {/*Grand Total Close */}
          </div>
          {/* Dp Panel Close */}
        </div>
        <hr />
        {/*Button Open */}
        <div className="row fixed-bottom">
          <div
            className="col-lg-6 col-md-7 col-sm-8 col-12 mx-auto"
            style={{
              background: "#000",
              borderRadius: "12px",
              paddingBottom: "20px",
            }}
          >
            <div className="row box-row mt-2">
              <div className="col-3 px-1 mt-2 mb-1">
                <label className="text-light">
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
                <label className="text-light">
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
                  autofocus={true}
                  type="number"
                  ref={inputReference}
                  onFocus={handleFocus}
                  name="boxno"
                  onChange={handleBoxno}
                  value={boxno}
                  className="form-control w-100"
                  placeholder="Enter Box Number"
                  inputProps={{
                    onKeyPress: (event) => {
                      const { key } = event;
                      console.log(key);
                      if (key === "Enter") {
                        BoxnoRef.current.focus();
                      }
                    },
                  }}
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

export default CEpanel;
