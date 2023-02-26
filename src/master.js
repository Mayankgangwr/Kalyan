import React, { useEffect, useState } from "react";
import axios from "axios";
import "./master.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Spdata from "./spdata";

import { CopyToClipboard } from "react-copy-to-clipboard";
const Master = () => {
  const params = useParams();
  const [numclient, setNumclient] = useState([]);
  const [spdata, setSpdata] = useState(Spdata);
  const [sptempdata, setSptempdata] = useState(Spdata);
  const [sheets, setSheets] = useState("");

  const [sheetsdata, setSheetsdata] = useState([]);
  useEffect(() => {
    getSheetss();
    getSheetsdata();
  }, []);

  function getSheetss() {
    axios
      .get(
        `https://jantrisoftware.in/kalyan/sheets/read.php?id=${params.sheetid}`
      )
      .then(function (response) {
        setSheets(response.data[0]);
      });
  }
  function getSheetsdata() {
    axios
      .get(
        `https://jantrisoftware.in/kalyan/sheetdata/read.php?userid=${localStorage.getItem(
          "userid"
        )}&sheetid=${params.sheetid}`
      )
      .then(function (response) {
        setSheetsdata(response.data);
      });
  }
  const printReceipt = () => {
    window.print();
    //alert("printed");
  };
  function getSheetData(e) {
    const { value, checked } = e.target;
    if (value != "" && checked == true) {
      const newobj = sheetsdata.filter((item) => {
        if (value == item.id) {
          return item;
        }
      });
      setSptempdata(JSON.parse(newobj[0].sp));
      setSpdata(JSON.parse(newobj[0].sp));
    }
    if (value != "" && checked == false) {
      setSpdata(Spdata);
    }
  }
  {
    /* Sp Operations*/
  }
  const [operation, setOperation] = useState({
    cutting: "",
    less: "",
  });
  let copydata = "";
  for (let i = 0; i < spdata.length; i++) {
    const text = `${spdata[i].key}(${spdata[i].num})`;
    if (spdata[i].key !== "no" && spdata[i].key !== "na") {
      copydata = copydata + "" + text;
    }
  }
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setOperation({ ...operation, [name]: value });
  };
  const [ct, setCt] = useState("not");
  const handlecutting = (e) => {
    e.preventDefault();
    if (ct === "not" && operation.cutting !== "") {
      setSpdata(
        spdata.map((obj, i) => {
          if (obj.key == spdata[i].key && obj.num !== 0) {
            const sub = obj.num - operation.cutting;
            if (sub > 0) {
              return { ...obj, num: sub };
            }
            return { ...obj, num: 0 };
          }
          return obj;
        })
      );
      setCt("yes");
    } else {
      setCt("not");
      setLs("not");
      setSpdata(sptempdata);
      setOperation({ ...operation, cutting: "", less: "" });
    }
  };
  const [ls, setLs] = useState("not");
  const handleless = (e) => {
    e.preventDefault();
    if (ls === "not" && operation.less !== "") {
      setSpdata(
        spdata.map((obj, i) => {
          if (obj.key == spdata[i].key && obj.num !== 0) {
            const mul = (obj.num * operation.less) / 100;
            const res = obj.num - mul;
            return { ...obj, num: res };
          }
          return obj;
        })
      );
      setLs("yes");
    } else {
      setSpdata(sptempdata);
      setOperation({ cutting: "", less: "" });
      setLs("not");
      setCt("not");
    }
  };
  const [lss, setLss] = useState("not");
  useEffect(() => {
    if (lss == "not") {
      setLss("yes");
    } else {
      setLss("not");
    }
  });
  const sp = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
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
              <h6 className="card-title text-center">{`${sheets.name} Close`}</h6>
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
            {/*Box Start */}
            {sp.map((el, i) => (
              <div key={el} className="row box-row">
                {spdata.slice(6 * i, i * 6 + 6).map((item) => (
                  <div
                    key={item.key}
                    className={`master-col d-flex justify-content-center ${
                      item.key === "no" ? "d-hidden" : ""
                    } ${item.key === "na" ? "d-hidden" : ""}`}
                  >
                    <label className="box-no">{item.key}</label>
                    <input
                      type="text"
                      value={item.num < 1 ? "" : item.num}
                      className="form-control amount-box"
                    />
                  </div>
                ))}
                <div className="total-col ps-0">
                  <label className="total-no">
                    <b>
                      {spdata.slice(6 * i, i * 6 + 6).reduce((total, item) => {
                        return total + item.num;
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
                      return total + item.num;
                    }, 0)}
                  </b>
                </label>
              </div>
            </div>
            {/*Grand Total Close */}
            {/*Button Open */}
            <div className="row hide-on-print box-row mt-2">
              <div className="col-9">
                <div className="row">
                  <div className="col-6 px-1">
                    <input
                      type="number"
                      name="cutting"
                      value={operation.cutting}
                      onChange={handleChange}
                      className="form-control w-100 box-h"
                      placeholder="Cutting"
                    />
                  </div>
                  <div className="col-6 px-1">
                    <button
                      type="submit"
                      onClick={handlecutting}
                      className="btn btn-primary w-100  buttons px-1"
                    >
                      Cutting
                    </button>
                  </div>
                  <div className="col-6 px-1 mt-2">
                    <input
                      type="number"
                      name="less"
                      value={operation.less}
                      onChange={handleChange}
                      className="form-control w-100 box-h"
                      placeholder="less"
                    />
                  </div>
                  <div className="col-6 px-1 mt-2">
                    <button
                      type="submit"
                      onClick={handleless}
                      className="btn btn-primary w-100 buttons px-1"
                    >
                      Less
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <CopyToClipboard text={copydata}>
                  <button
                    type="submit"
                    onClick={() => alert("Data has been Copy")}
                    className="btn btn-primary w-100 h-100 buttons"
                  >
                    Copy Sheet
                  </button>
                </CopyToClipboard>
              </div>
            </div>
            {/*Button Close */}
          </div>
          {/* Ps Panel Close */}
        </div>
        <hr />
        {/*Open Client  */}
        <div className="row mt-3" style={{ marginBottom: "180px" }}>
          {sheetsdata.map((el, i) => {
            return (
              <div
                key={i}
                className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mt-2"
              >
                <div className="card shadows">
                  <div className="card-header p-2">
                    <div className="d-flex justify-content-between">
                      <div className="ms-2 my-auto">
                        <h5 className="card-title mb-0">{el.clientname}</h5>
                        <p>
                          {JSON.parse(el.sp).reduce((total, item) => {
                            return total + JSON.parse(item.num);
                          }, 0) +
                            JSON.parse(el.dp).reduce((total, item) => {
                              return total + JSON.parse(item.num);
                            }, 0) +
                            JSON.parse(el.tp).reduce((total, item) => {
                              return total + JSON.parse(item.num);
                            }, 0) +
                            JSON.parse(el.single).reduce((total, item) => {
                              return total + JSON.parse(item.num);
                            }, 0)}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <input
                          type="radio"
                          name="sheetnames"
                          value={el.id}
                          onChange={getSheetData}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/*Close Client  */}
      </div>
    </>
  );
};
export default Master;
