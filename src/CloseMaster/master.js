import React, { useEffect, useState } from "react";
import axios from "axios";
import "../master.css";
import Sp from "./sp";
import Dp from "./dp";
import SingleClose from "./singleclose";
import Tp from "./tp";
import JodePanel from "./jodepanel";
import Draggable from "react-draggable";
import Dpdata from "../dpdata";
import { Link, useNavigate, useParams } from "react-router-dom";
const CloseMaster = () => {
  const params = useParams();
  const [dpdt, setDpdt] = useState([
    {
      key: "100",
      num: 0,
    },
    {
      key: "110",
      num: 0,
    },
    {
      key: "166",
      num: 0,
    },
    {
      key: "112",
      num: 0,
    },
    {
      key: "113",
      num: 0,
    },
    {
      key: "114",
      num: 0,
    },
    {
      key: "115",
      num: 0,
    },
    {
      key: "116",
      num: 0,
    },
    {
      key: "117",
      num: 0,
    },
    {
      key: "118",
      num: 0,
    },
    {
      key: "119",
      num: 0,
    },
    {
      key: "200",
      num: 0,
    },
    {
      key: "229",
      num: 0,
    },
    {
      key: "220",
      num: 0,
    },
    {
      key: "122",
      num: 0,
    },
    {
      key: "277",
      num: 0,
    },
    {
      key: "133",
      num: 0,
    },
    {
      key: "224",
      num: 0,
    },
    {
      key: "144",
      num: 0,
    },
    {
      key: "226",
      num: 0,
    },
    {
      key: "155",
      num: 0,
    },
    {
      key: "228",
      num: 0,
    },
    {
      key: "300",
      num: 0,
    },
    {
      key: "266",
      num: 0,
    },
    {
      key: "177",
      num: 0,
    },
    {
      key: "330",
      num: 0,
    },
    {
      key: "188",
      num: 0,
    },
    {
      key: "233",
      num: 0,
    },
    {
      key: "199",
      num: 0,
    },
    {
      key: "244",
      num: 0,
    },
    {
      key: "227",
      num: 0,
    },
    {
      key: "255",
      num: 0,
    },
    {
      key: "337",
      num: 0,
    },
    {
      key: "338",
      num: 0,
    },
    {
      key: "339",
      num: 0,
    },
    {
      key: "448",
      num: 0,
    },
    {
      key: "223",
      num: 0,
    },
    {
      key: "288",
      num: 0,
    },
    {
      key: "225",
      num: 0,
    },
    {
      key: "299",
      num: 0,
    },
    {
      key: "335",
      num: 0,
    },
    {
      key: "336",
      num: 0,
    },
    {
      key: "355",
      num: 0,
    },
    {
      key: "400",
      num: 0,
    },
    {
      key: "366",
      num: 0,
    },
    {
      key: "466",
      num: 0,
    },
    {
      key: "377",
      num: 0,
    },
    {
      key: "440",
      num: 0,
    },
    {
      key: "388",
      num: 0,
    },
    {
      key: "334",
      num: 0,
    },
    {
      key: "344",
      num: 0,
    },
    {
      key: "499",
      num: 0,
    },
    {
      key: "445",
      num: 0,
    },
    {
      key: "446",
      num: 0,
    },
    {
      key: "447",
      num: 0,
    },
    {
      key: "556",
      num: 0,
    },
    {
      key: "449",
      num: 0,
    },
    {
      key: "477",
      num: 0,
    },
    {
      key: "559",
      num: 0,
    },
    {
      key: "488",
      num: 0,
    },
    {
      key: "399",
      num: 0,
    },
    {
      key: "660",
      num: 0,
    },
    {
      key: "599",
      num: 0,
    },
    {
      key: "455",
      num: 0,
    },
    {
      key: "500",
      num: 0,
    },
    {
      key: "600",
      num: 0,
    },
    {
      key: "557",
      num: 0,
    },
    {
      key: "558",
      num: 0,
    },
    {
      key: "577",
      num: 0,
    },
    {
      key: "550",
      num: 0,
    },
    {
      key: "588",
      num: 0,
    },
    {
      key: "688",
      num: 0,
    },
    {
      key: "779",
      num: 0,
    },
    {
      key: "699",
      num: 0,
    },
    {
      key: "799",
      num: 0,
    },
    {
      key: "880",
      num: 0,
    },
    {
      key: "566",
      num: 0,
    },
    {
      key: "800",
      num: 0,
    },
    {
      key: "667",
      num: 0,
    },
    {
      key: "668",
      num: 0,
    },
    {
      key: "669",
      num: 0,
    },
    {
      key: "778",
      num: 0,
    },
    {
      key: "788",
      num: 0,
    },
    {
      key: "770",
      num: 0,
    },
    {
      key: "889",
      num: 0,
    },
    {
      key: "899",
      num: 0,
    },
    {
      key: "700",
      num: 0,
    },
    {
      key: "990",
      num: 0,
    },
    {
      key: "900",
      num: 0,
    },
    {
      key: "677",
      num: 0,
    },
  ]);
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
  let ok = [];

  for (let i = 0; i < dpdt.length; i++) {
    let nums = 0;
    for (let j = 0; j < sheetsdata.length; j++) {
      const dpnew = JSON.parse(sheetsdata[j].dp);
      nums = JSON.parse(nums) + JSON.parse(dpnew[i].num);
    }
    const text = {
      key: dpdt[i].key,
      num: dpdt[i].num + nums,
    };
    ok.push(text);
  }

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
            <Sp />
          </div>
          {/* Ps Panel Close */}
          {/*Dp Panel Start*/}
          <div className="col-lg-4 col-md-4 col-12 mt-lg-0 mt-md-0 mt-2 height-on-print mx-0 px-0">
            <h6 className="card-title text-center bg-info pt-1">DP Panel</h6>
            <Dp Dpdata={ok} />
          </div>
          {/* Dp Panel Close */}
          {/*Dp Panel Start*/}
          <div className="col-lg-4 col-md-4 col-12 mt-lg-0 mt-md-0 mt-2 height-on-print  mx-0 px-0">
            <h6 className="card-title text-center  bg-info pt-1">TP Panel</h6>
            <Tp />
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
export default CloseMaster;
