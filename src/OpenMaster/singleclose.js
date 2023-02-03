import React, { useState } from "react";
import Single from "../single";
import { CopyToClipboard } from "react-copy-to-clipboard";
const SingleClose = () => {
  const [singledata, setSingledata] = useState(Single);
  const [operation, setOperation] = useState({
    cutting: "",
    less: "",
  });
  let copydata = "";
  for (let i = 0; i < singledata.length; i++) {
    const text = `${singledata[i].key}(${singledata[i].num})`;
    if (singledata[i].key !== "no" && singledata[i].key !== "na") {
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
      setSingledata(
        singledata.map((obj, i) => {
          if (obj.key == singledata[i].key && obj.num !== 0) {
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
      setSingledata(Single);
      setOperation({ ...operation, cutting: "", less: "" });
    }
  };
  const [ls, setLs] = useState("not");
  const handleless = (e) => {
    e.preventDefault();
    if (ls === "not" && operation.less !== "") {
      setSingledata(
        singledata.map((obj, i) => {
          if (obj.key == singledata[i].key && obj.num !== 0) {
            const mul = (obj.num * operation.less) / 100;
            const res = obj.num - mul;
            return { ...obj, num: res };
          }
          return obj;
        })
      );
      setLs("yes");
    } else {
      setSingledata(Single);
      setOperation({ cutting: "", less: "" });
      setLs("not");
      setCt("not");
    }
  };
  const scp = [1, 2];
  return (
    <>
      {/*Box Start */}
      {scp.map((el, i) => (
        <div key={el} className="row box-row">
          {singledata.slice(6 * i, i * 6 + 6).map((item) => (
            <div
              key={item.key}
              className={`master-col d-flex justify-content-center ${
                item.key === "no" ? "d-hidden" : ""
              } ${item.key === "na" ? "d-hidden" : ""}`}
            >
              <label className="box-no">{item.key}</label>
              <input
                type="text"
                value={item.num}
                className="form-control amount-box"
              />
            </div>
          ))}
          <div className="total-col ps-0">
            <label className="total-no">
              <b>
                {singledata.slice(6 * i, i * 6 + 6).reduce((total, item) => {
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
              {singledata.reduce((total, item) => {
                return total + item.num;
              }, 0)}
            </b>
          </label>
        </div>
      </div>
      {/*Grand Total Close */}
      {/*Button Open */}
      <div className="row box-row mt-2 hide-on-print">
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
    </>
  );
};
export default SingleClose;
