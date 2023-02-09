import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const SpPanel = () => {
  const dispatch = useDispatch();
  const Spdata = useSelector((state) => state.SpData);
  const [spdata, setSpdata] = useState(Spdata);
  useEffect(() => {
    setSpdata(Spdata);
  });
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    const dt = spdata.map((el) => {
      if (el.key === name) {
        return { ...el, num: value };
      } else {
        return el;
      }
    });
    setSpdata(dt);
  };
  const sp = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <>
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
    </>
  );
};
export default SpPanel;
