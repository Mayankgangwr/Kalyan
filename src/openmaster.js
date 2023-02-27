import React, { useEffect, useState } from "react";
import axios from "axios";
import "./master.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Spdata from "./spdata";
import Dpdata from "./dpdata";
import Tpdata from "./tpdata";
import Single from "./single";
import Jodes from "./jode";
import { CopyToClipboard } from "react-copy-to-clipboard";
const OpenMaster = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [numclient, setNumclient] = useState([]);
  const [spdata, setSpdata] = useState(Spdata);
  const [sptempdata, setSptempdata] = useState(Spdata);
  const [dpdata, setDpdata] = useState(Dpdata);
  const [dptempdata, setDptempdata] = useState(Dpdata);
  const [tpdata, setTpdata] = useState(Tpdata);
  const [tptempdata, setTptempdata] = useState(Tpdata);
  const [sppdata, setSppdata] = useState(Single);
  const [spptempdata, setSpptempdata] = useState(Single);
  const [jodedata, setJodepdata] = useState(Jodes);
  const [jodetempdata, setJodetempdata] = useState(Jodes);
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
      const sparr = JSON.parse(newobj[0].sp);
      let sp = [];
      for (let i = 0; i < spdata.length; i++) {
        const text = {
          key: spdata[i].key,
          num: spdata[i].num + sparr[i].num,
        };
        sp.push(text);
      }
      const dparr = JSON.parse(newobj[0].dp);
      let dp = [];
      for (let i = 0; i < dpdata.length; i++) {
        const text = {
          key: dpdata[i].key,
          num: dpdata[i].num + dparr[i].num,
        };
        dp.push(text);
      }
      const tparr = JSON.parse(newobj[0].tp);
      let tp = [];
      for (let i = 0; i < tpdata.length; i++) {
        const text = {
          key: tpdata[i].key,
          num: tpdata[i].num + tparr[i].num,
        };
        tp.push(text);
      }
      const singlearr = JSON.parse(newobj[0].single);
      let single = [];
      for (let i = 0; i < sppdata.length; i++) {
        const text = {
          key: sppdata[i].key,
          num: sppdata[i].num + singlearr[i].num,
        };
        single.push(text);
      }
      console.log(newobj);
      setSptempdata(sp);
      setSpdata(sp);
      setDptempdata(dp);
      setDpdata(dp);
      setTptempdata(tp);
      setTpdata(tp);
      setSpptempdata(single);
      setSppdata(single);
    }
    if (value != "" && checked == false) {
      setSpdata(Spdata);
      setDpdata(Dpdata);
      setTpdata(Tpdata);
      setSppdata(Single);
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
  {
    /*Dp Operations */
  }
  const [dpoperation, setDpoperation] = useState({
    cutting: "",
    less: "",
  });
  let dpcopydata = "";
  for (let i = 0; i < dpdata.length; i++) {
    const text = `${dpdata[i].key}(${dpdata[i].num})`;
    if (dpdata[i].key !== "no" && dpdata[i].key !== "na") {
      dpcopydata = dpcopydata + "" + text;
    }
  }
  const dphandleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setDpoperation({ ...dpoperation, [name]: value });
  };
  const [ctdp, setCtdp] = useState("not");
  const dphandlecutting = (e) => {
    e.preventDefault();
    if (ctdp === "not" && dpoperation.cutting !== "") {
      setDpdata(
        dpdata.map((obj, i) => {
          if (obj.key == dpdata[i].key && obj.num !== 0) {
            const sub = obj.num - dpoperation.cutting;
            if (sub > 0) {
              return { ...obj, num: sub };
            }
            return { ...obj, num: 0 };
          }
          return obj;
        })
      );
      setCtdp("yes");
    } else {
      setCtdp("not");
      setLsdp("not");
      setDpdata(dptempdata);
      setDpoperation({ ...dpoperation, cutting: "", less: "" });
    }
  };
  const [lsdp, setLsdp] = useState("not");
  const dphandleless = (e) => {
    e.preventDefault();
    if (lsdp === "not" && dpoperation.less !== "") {
      setDpdata(
        dpdata.map((obj, i) => {
          if (obj.key == dpdata[i].key && obj.num !== 0) {
            const mul = (obj.num * dpoperation.less) / 100;
            const res = obj.num - mul;
            return { ...obj, num: res };
          }
          return obj;
        })
      );
      setLsdp("yes");
    } else {
      setDpdata(dptempdata);
      setDpoperation({ cutting: "", less: "" });
      setLsdp("not");
      setCtdp("not");
    }
  };
  {
    /*Tp Operations */
  }
  const [tpoperation, setTpoperation] = useState({
    cutting: "",
    less: "",
  });
  let tpcopydata = "";
  for (let i = 0; i < tpdata.length; i++) {
    const text = `${tpdata[i].key}(${tpdata[i].num})`;
    if (tpdata[i].key !== "no" && tpdata[i].key !== "na") {
      tpcopydata = tpcopydata + "" + text;
    }
  }
  const tphandleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setTpoperation({ ...tpoperation, [name]: value });
  };
  const [cttp, setCttp] = useState("not");
  const tphandlecutting = (e) => {
    e.preventDefault();
    if (cttp === "not" && tpoperation.cutting !== "") {
      setTpdata(
        tpdata.map((obj, i) => {
          if (obj.key == tpdata[i].key && obj.num !== 0) {
            const sub = obj.num - tpoperation.cutting;
            if (sub > 0) {
              return { ...obj, num: sub };
            }
            return { ...obj, num: 0 };
          }
          return obj;
        })
      );
      setCttp("yes");
    } else {
      setCttp("not");
      setLstp("not");
      setTpdata(tptempdata);
      setTpoperation({ ...tpoperation, cutting: "", less: "" });
    }
  };
  const [lstp, setLstp] = useState("not");
  const tphandleless = (e) => {
    e.preventDefault();
    if (lstp === "not" && tpoperation.less !== "") {
      setTpdata(
        tpdata.map((obj, i) => {
          if (obj.key == tpdata[i].key && obj.num !== 0) {
            const mul = (obj.num * tpoperation.less) / 100;
            const res = obj.num - mul;
            return { ...obj, num: res };
          }
          return obj;
        })
      );
      setLstp("yes");
    } else {
      setTpdata(tptempdata);
      setTpoperation({ cutting: "", less: "" });
      setLstp("not");
      setCttp("not");
    }
  };
  {
    /*Spp Operations */
  }
  const [sppoperation, setSppoperation] = useState({
    cutting: "",
    less: "",
  });
  let sppcopydata = "";
  for (let i = 0; i < sppdata.length; i++) {
    const text = `${sppdata[i].key}(${sppdata[i].num})`;
    if (sppdata[i].key !== "no" && sppdata[i].key !== "na") {
      sppcopydata = sppcopydata + "" + text;
    }
  }
  const spphandleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setsppoperation({ ...sppoperation, [name]: value });
  };
  const [ctspp, setCtspp] = useState("not");
  const spphandlecutting = (e) => {
    e.preventDefault();
    if (ctspp === "not" && sppoperation.cutting !== "") {
      setSppdata(
        sppdata.map((obj, i) => {
          if (obj.key == sppdata[i].key && obj.num !== 0) {
            const sub = obj.num - sppoperation.cutting;
            if (sub > 0) {
              return { ...obj, num: sub };
            }
            return { ...obj, num: 0 };
          }
          return obj;
        })
      );
      setCtspp("yes");
    } else {
      setCtspp("not");
      setLsspp("not");
      setSppdata(spptempdata);
      setSppoperation({ ...sppoperation, cutting: "", less: "" });
    }
  };
  const [lsspp, setLsspp] = useState("not");
  const spphandleless = (e) => {
    e.preventDefault();
    if (lsspp === "not" && sppoperation.less !== "") {
      setsppdata(
        sppdata.map((obj, i) => {
          if (obj.key == sppdata[i].key && obj.num !== 0) {
            const mul = (obj.num * sppoperation.less) / 100;
            const res = obj.num - mul;
            return { ...obj, num: res };
          }
          return obj;
        })
      );
      setLsssp("yes");
    } else {
      setSppdata(spptempdata);
      setSspoperation({ cutting: "", less: "" });
      setLsssp("not");
      setCtssp("not");
    }
  };
  {
    /*Jode Operations */
  }
  const [jodeoperation, setJodeoperation] = useState({
    cutting: "",
    less: "",
  });
  let jodecopydata = "";
  for (let i = 0; i < jodedata.length; i++) {
    const text = `${jodedata[i].key}(${jodedata[i].num})`;
    if (jodedata[i].key !== "no" && jodedata[i].key !== "na") {
      jodecopydata = jodecopydata + "" + text;
    }
  }
  const jodehandleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setjodeoperation({ ...jodeoperation, [name]: value });
  };
  const [ctjode, setCtjode] = useState("not");
  const jodehandlecutting = (e) => {
    e.preventDefault();
    if (ctjode === "not" && jodeoperation.cutting !== "") {
      setJodedata(
        jodedata.map((obj, i) => {
          if (obj.key == jodedata[i].key && obj.num !== 0) {
            const sub = obj.num - jodeoperation.cutting;
            if (sub > 0) {
              return { ...obj, num: sub };
            }
            return { ...obj, num: 0 };
          }
          return obj;
        })
      );
      setCtjode("yes");
    } else {
      setCtjode("not");
      setLsjode("not");
      setJodedata(jodetempdata);
      setJodeoperation({ ...jodeoperation, cutting: "", less: "" });
    }
  };
  const [lsjode, setLsjode] = useState("not");
  const jodehandleless = (e) => {
    e.preventDefault();
    if (lsjode === "not" && jodeoperation.less !== "") {
      setJodedata(
        jodedata.map((obj, i) => {
          if (obj.key == jodedata[i].key && obj.num !== 0) {
            const mul = (obj.num * jodeoperation.less) / 100;
            const res = obj.num - mul;
            return { ...obj, num: res };
          }
          return obj;
        })
      );
      setLsjode("yes");
    } else {
      setJodepdata(jodetempdata);
      setJodeoperation({ cutting: "", less: "" });
      setLsjode("not");
      setCtjode("not");
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
  const dp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const tp = [1, 2];
  const spp = [1, 2];
  const jp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
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
                  <h6 className="card-title text-center">Master</h6>
                </div>
                <div className="col-4">
                  <h6 className="card-title text-center">{`${sheets.name} Open`}</h6>
                </div>
                <div className="col-4">
                  <h6 className="card-title text-center">22/01/2023</h6>
                </div>
              </div>
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
          {/*Dp Panel Start*/}
          <div className="col-lg-4 col-md-4 col-12 mt-lg-0 mt-md-0 mt-2 height-on-print mx-0 px-0">
            <h6 className="card-title text-center bg-info pt-1">DP Panel</h6>
            {/*Box Start */}
            {dp.map((el, i) => (
              <div key={el} className="row box-row">
                {dpdata.slice(6 * i, i * 6 + 6).map((item) => (
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
                      {dpdata.slice(6 * i, i * 6 + 6).reduce((total, item) => {
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
                    {dpdata.reduce((total, item) => {
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
                      value={dpoperation.cutting}
                      onChange={dphandleChange}
                      className="form-control w-100 box-h"
                      placeholder="Cutting"
                    />
                  </div>
                  <div className="col-6 px-1">
                    <button
                      type="submit"
                      onClick={dphandlecutting}
                      className="btn btn-primary w-100  buttons px-1"
                    >
                      Cutting
                    </button>
                  </div>
                  <div className="col-6 px-1 mt-2">
                    <input
                      type="number"
                      name="less"
                      value={dpoperation.less}
                      onChange={dphandleChange}
                      className="form-control w-100 box-h"
                      placeholder="less"
                    />
                  </div>
                  <div className="col-6 px-1 mt-2">
                    <button
                      type="submit"
                      onClick={dphandleless}
                      className="btn btn-primary w-100 buttons px-1"
                    >
                      Less
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <CopyToClipboard text={dpcopydata}>
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
            <h6 className="card-title text-center  bg-info pt-1 mt-2">
              TP Panel
            </h6>
            {/*Box Start */}
            {tp.map((el, i) => (
              <div key={el} className="row box-row">
                {tpdata.slice(6 * i, i * 6 + 6).map((item) => (
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
                      {tpdata.slice(6 * i, i * 6 + 6).reduce((total, item) => {
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
                    {tpdata.reduce((total, item) => {
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
                      value={tpoperation.cutting}
                      onChange={tphandleChange}
                      className="form-control w-100 box-h"
                      placeholder="Cutting"
                    />
                  </div>
                  <div className="col-6 px-1">
                    <button
                      type="submit"
                      onClick={tphandlecutting}
                      className="btn btn-primary w-100  buttons px-1"
                    >
                      Cutting
                    </button>
                  </div>
                  <div className="col-6 px-1 mt-2">
                    <input
                      type="number"
                      name="less"
                      value={tpoperation.less}
                      onChange={tphandleChange}
                      className="form-control w-100 box-h"
                      placeholder="less"
                    />
                  </div>
                  <div className="col-6 px-1 mt-2">
                    <button
                      type="submit"
                      onClick={tphandleless}
                      className="btn btn-primary w-100 buttons px-1"
                    >
                      Less
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <CopyToClipboard text={tpcopydata}>
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
          {/* Dp Panel Close */}
          {/*Dp Panel Start*/}
          <div className="col-lg-4 col-md-4 col-12 mt-lg-0 mt-md-0 mt-2 height-on-print  mx-0 px-0">
            <h6 className="card-title text-center  bg-info pt-1">Jode</h6>
            {/*Box Start */}
            {jp.map((el, i) => (
              <div key={el} className="row box-row">
                {jodedata.slice(6 * i, i * 6 + 6).map((item) => (
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
                      {jodedata
                        .slice(6 * i, i * 6 + 6)
                        .reduce((total, item) => {
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
                    {jodedata.reduce((total, item) => {
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
                      value={jodeoperation.cutting}
                      onChange={jodehandleChange}
                      className="form-control w-100 box-h"
                      placeholder="Cutting"
                    />
                  </div>
                  <div className="col-6 px-1">
                    <button
                      type="submit"
                      onClick={jodehandlecutting}
                      className="btn btn-primary w-100  buttons px-1"
                    >
                      Cutting
                    </button>
                  </div>
                  <div className="col-6 px-1 mt-2">
                    <input
                      type="number"
                      name="less"
                      value={jodeoperation.less}
                      onChange={jodehandleChange}
                      className="form-control w-100 box-h"
                      placeholder="less"
                    />
                  </div>
                  <div className="col-6 px-1 mt-2">
                    <button
                      type="submit"
                      onClick={jodehandleless}
                      className="btn btn-primary w-100 buttons px-1"
                    >
                      Less
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <CopyToClipboard text={jodecopydata}>
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
            <h6 className="card-title text-center  bg-info pt-1 mt-2">
              Single Close
            </h6>
            {/*Box Start */}
            {spp.map((el, i) => (
              <div key={el} className="row box-row">
                {sppdata.slice(6 * i, i * 6 + 6).map((item) => (
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
                      {sppdata.slice(6 * i, i * 6 + 6).reduce((total, item) => {
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
                    {sppdata.reduce((total, item) => {
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
                      value={sppoperation.cutting}
                      onChange={spphandleChange}
                      className="form-control w-100 box-h"
                      placeholder="Cutting"
                    />
                  </div>
                  <div className="col-6 px-1">
                    <button
                      type="submit"
                      onClick={spphandlecutting}
                      className="btn btn-primary w-100  buttons px-1"
                    >
                      Cutting
                    </button>
                  </div>
                  <div className="col-6 px-1 mt-2">
                    <input
                      type="number"
                      name="less"
                      value={sppoperation.less}
                      onChange={spphandleChange}
                      className="form-control w-100 box-h"
                      placeholder="less"
                    />
                  </div>
                  <div className="col-6 px-1 mt-2">
                    <button
                      type="submit"
                      onClick={spphandleless}
                      className="btn btn-primary w-100 buttons px-1"
                    >
                      Less
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <CopyToClipboard text={sppcopydata}>
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
          {/* Dp Panel Close */}
        </div>
        <hr />
        {/*Open Client  */}
        <div className="row mt-3" style={{ marginBottom: "180px" }}>
          {sheetsdata.map((el, i) => {
            return (
              <label
                key={i}
                className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mt-2"
              >
                <input
                  type="checkbox"
                  name="sheetnames"
                  style={{ display: "none" }}
                  value={el.id}
                  onChange={getSheetData}
                />
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
                    </div>
                  </div>
                </div>
              </label>
            );
          })}
        </div>
        {/*Close Client  */}
      </div>
    </>
  );
};
export default OpenMaster;
