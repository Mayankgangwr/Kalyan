import React, { useState, useEffect } from "react";
const TpPanel = () => {
  const [tpdata, setTpdata] = useState([
    { key: "111", num: 0 },
    { key: "222", num: 0 },
    { key: "333", num: 0 },
    { key: "444", num: 0 },
    { key: "555", num: 0 },
    { key: "666", num: 0 },
    { key: "777", num: 0 },
    { key: "888", num: 0 },
    { key: "999", num: 0 },
    { key: "000", num: 0 },
    { key: "na", num: 0 },
    { key: "no", num: 0 },
  ]);
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    const dt = tpdata.map((el) => {
      if (el.key === name) {
        return { ...el, num: value };
      } else {
        return el;
      }
    });
    setTpdata(dt);
  };
  const dp = [1, 2];
  return (
    <>
      {/*Box Start */}
      {dp.map((el, i) => (
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
                name={item.key}
                value={item.num < 1 ? "" : item.num}
                onChange={handleChange}
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
    </>
  );
};
export default TpPanel;
