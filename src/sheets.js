import React, { useEffect, useState } from "react";
import axios from "axios";
const Sheets = () => {
  const current = new Date();
  const date = `${current.getFullYear()}/${
    current.getMonth() + 1
  }/${current.getDate()}`;

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [sheetdata, setSheetdata] = useState([""]);
  const [btn, setBtn] = useState("Add New");
  const [name, setName] = useState("");
  const [editsheet, setEditsheet] = useState({
    id: "",
    name: "",
  });
  useEffect(() => {
    getUsers();
  }, []);
  function getUsers() {
    axios
      .get(`https://jantrisoftware.in/kalyan/sheets/read.php`)
      .then(function (response) {
        setSheetdata(response.data);
      });
  }
  const handleName = (e) => {
    setName(e.target.value);
  };
  const AddSheets = (e) => {
    e.preventDefault();
    if (btn === "Add New") {
      if (name !== "") {
        const inputs = {
          name: name,
          user_id: 1,
          date: date,
        };
        axios
          .post(`https://jantrisoftware.in/kalyan/sheets/create.php`, inputs)
          .then(function (response) {
            alert(response.data.message);
            getUsers();
            setName("");
          });
      }
    } else {
      if (editsheet.id !== "" && name !== "") {
        const inputs = {
          name: name,
          id: editsheet.id,
        };
        axios
          .post(`https://jantrisoftware.in/kalyan/sheets/update.php`, inputs)
          .then(function (response) {
            alert(response.data.message);
            getUsers();
            setEditsheet({ id: "", name: "" });
            setName("");
          });
      }
    }
  };
  const EditSheets = (dataid) => {
    axios
      .get(`https://jantrisoftware.in/kalyan/sheets/read.php?id=${dataid}`)
      .then(function (response) {
        setEditsheet(response.data[0]);
        setName(response.data[0].name);
        setBtn("Edit Sheet");
      });
  };
  const DeleteSheets = (dataid) => {
    //e.preventDefault();
    const inputs = {
      dataid: dataid,
    };
    axios
      .post(`https://jantrisoftware.in/kalyan/sheets/delete.php`, inputs)
      .then(function (response) {
        alert(response.data.message);
        getUsers();
      });
  };
  return (
    <>
      <div className="container-fluid mx-0  main-page">
        <form onSubmit={AddSheets} className="row">
          <div className="col-8">
            <input
              type="text"
              onChange={handleName}
              value={name}
              placeholder="Enter the sheet name"
              class="form-control"
            />
          </div>
          <div className="col-4">
            <button type="submit" class="btn btn-primary w-100">
              {btn}
            </button>
          </div>
        </form>
        <hr />
        <div className="row">
          {sheetdata.map((el) => (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12 mt-2">
              <div className="card shadow-5">
                <div className="card-header p-2">
                  <div className="d-flex justify-content-between">
                    <div className="ms-2">
                      <h5 className="card-title mb-0">{el.name}</h5>
                      <small className="text-muted">{el.date}</small>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button
                        onClick={() => EditSheets(el.id)}
                        className="btn text-white btn-lg btn-floating btn-parple me-1"
                      >
                        <i class="fas fa-edit"></i>
                      </button>
                      <button
                        onClick={() => DeleteSheets(el.id)}
                        className="btn text-white btn-lg btn-danger btn-floating"
                      >
                        <i class="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Sheets;
