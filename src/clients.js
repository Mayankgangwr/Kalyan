import React, { useEffect, useState } from "react";
import axios from "axios";

const Clients = () => {
  const current = new Date();
  const date = `${current.getFullYear()}/${
    current.getMonth() + 1
  }/${current.getDate()}`;

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [clientdata, setClientdata] = useState([]);
  const [btn, setBtn] = useState("Add New");
  const [client, setClient] = useState({
    id: "",
    name: "",
    number: "",
    sprate: "",
    dprate: "",
    tprate: "",
    singlerate: "",
    joderate: "",
    spcomission: "",
    dpcomission: "",
    tpcomission: "",
    singlecomission: "",
    jodecomission: "",
  });
  const [editsheet, setEditsheet] = useState({
    id: "",
    name: "",
  });
  useEffect(() => {
    getClients();
  }, []);
  function getClients() {
    axios
      .get(`https://jantrisoftware.in/kalyan/clients/read.php`)
      .then(function (response) {
        setClientdata(response.data);
      });
  }
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setClient({ ...client, [name]: value });
  };
  const AddClient = (e) => {
    e.preventDefault();
    if (btn === "Add New") {
      if (client.name !==  "") {
        const inputs = {
          user_id: 1,
          name: client.name,
          number: client.number,
          sprate: client.sprate,
          dprate: client.dprate,
          tprate: client.tprate,
          singlerate: client.singlerate,
          joderate: client.joderate,
          spcomission: client.spcomission,
          dpcomission: client.dpcomission,
          tpcomission: client.tpcomission,
          singlecomission: client.singlecomission,
          jodecomission: client.jodecomission,
          date: date,
        };
        axios
          .post(`https://jantrisoftware.in/kalyan/clients/create.php`, inputs)
          .then(function (response) {
            alert(response.data.message);
            getClients();
            setClient({
              id: "",
              name: "",
              number: "",
              sprate: "",
              dprate: "",
              tprate: "",
              singlerate: "",
              joderate: "",
              spcomission: "",
              dpcomission: "",
              tpcomission: "",
              singlecomission: "",
              jodecomission: "",
            });
          });
      }
    } else {
      if (client.id !== "" && client.name !== "") {
        setBtn("Add New");
        const inputs = {
          id: client.id,
          user_id: client.user_id,
          name: client.name,
          number: client.number,
          sprate: client.sprate,
          dprate: client.dprate,
          tprate: client.tprate,
          singlerate: client.singlerate,
          joderate: client.joderate,
          spcomission: client.spcomission,
          dpcomission: client.dpcomission,
          tpcomission: client.tpcomission,
          singlecomission: client.singlecomission,
          jodecomission: client.jodecomission,
          date: date,
        };
        axios
          .post(`https://jantrisoftware.in/kalyan/clients/update.php`, inputs)
          .then(function (response) {
            alert(response.data.message);
            getClients();
            setClient({
              id: "",
              name: "",
              number: "",
              sprate: "",
              dprate: "",
              tprate: "",
              singlerate: "",
              joderate: "",
              spcomission: "",
              dpcomission: "",
              tpcomission: "",
              singlecomission: "",
              jodecomission: "",
            });
          });
      }
    }
  };
  const EditClients = (dataid) => {
    axios
      .get(`https://jantrisoftware.in/kalyan/clients/read.php?id=${dataid}`)
      .then(function (response) {
        setClient(response.data[0]);
        setBtn("Edit Sheet");
      });
  };
  const DeleteClients = (dataid) => {
    //e.preventDefault();
    const inputs = {
      dataid: dataid,
    };
    axios
      .post(`https://jantrisoftware.in/kalyan/clients/delete.php`, inputs)
      .then(function (response) {
        alert(response.data.message);
        getClients();
      });
  };
  return (
    <>
      <div className="container-fluid mx-0  main-page">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <form onSubmit={AddClient} className="row">
              <div className="col-6 mt-2">
                <input
                  type="text"
                  onChange={handleChange}
                  name="name"
                  value={client.name}
                  className="form-control"
                  placeholder="Enter Client Name"
                />
              </div>
              <div className="col-6 mt-2">
                <input
                  type="text"
                  onChange={handleChange}
                  name="number"
                  value={client.number}
                  className="form-control"
                  placeholder="Enter Client Number"
                />
              </div>
              <div className="col-6 mt-2">
                <input
                  type="number"
                  onChange={handleChange}
                  name="sprate"
                  value={client.sprate}
                  className="form-control"
                  placeholder="Sp Rate"
                />
              </div>
              <div className="col-6 mt-2">
                <input
                  type="number"
                  onChange={handleChange}
                  name="spcomission"
                  value={client.spcomission}
                  className="form-control"
                  placeholder="Sp Comission"
                />
              </div>

              <div className="col-6 mt-2">
                <input
                  type="number"
                  onChange={handleChange}
                  name="dprate"
                  value={client.dprate}
                  className="form-control"
                  placeholder="Dp Rate"
                />
              </div>
              <div className="col-6 mt-2">
                <input
                  type="number"
                  onChange={handleChange}
                  name="dpcomission"
                  value={client.dpcomission}
                  className="form-control"
                  placeholder="Dp Comission"
                />
              </div>

              <div className="col-6 mt-2">
                <input
                  type="number"
                  onChange={handleChange}
                  name="tprate"
                  value={client.tprate}
                  className="form-control"
                  placeholder="Tp Rate"
                />
              </div>
              <div className="col-6 mt-2">
                <input
                  type="number"
                  onChange={handleChange}
                  name="tpcomission"
                  value={client.tpcomission}
                  className="form-control"
                  placeholder="Tp Comission"
                />
              </div>
              <div className="col-6 mt-2">
                <input
                  type="number"
                  onChange={handleChange}
                  name="singlerate"
                  value={client.singlerate}
                  className="form-control"
                  placeholder="Single Rate"
                />
              </div>
              <div className="col-6 mt-2">
                <input
                  type="number"
                  onChange={handleChange}
                  name="singlecomission"
                  value={client.singlecomission}
                  className="form-control"
                  placeholder="Single Comission"
                />
              </div>

              <div className="col-6 mt-2">
                <input
                  type="number"
                  onChange={handleChange}
                  name="joderate"
                  value={client.joderate}
                  className="form-control"
                  placeholder="Jode Rate"
                />
              </div>
              <div className="col-6 mt-2">
                <input
                  type="number"
                  onChange={handleChange}
                  name="jodecomission"
                  value={client.jodecomission}
                  className="form-control"
                  placeholder="Jode Comission"
                />
              </div>
              <div className="col-12 mt-2">
                <div className="d-flex  justify-content-end">
                  <button type="submit" className="btn w-50 btn-primary">
                    {btn}
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-lg-0 mt-md-0 mt-sm-0 mt-3 ">
            <div className="row">
              {clientdata.length !== 0 &&
                clientdata.map((el) => (
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12 mt-2">
                    <div className="card shadow-5">
                      <div className="card-header p-2">
                        <div className="d-flex justify-content-between">
                          <div className="ms-2">
                            <h5 className="card-title mb-0">{el.name}</h5>
                            <small className="text-muted">{el.date}</small>
                          </div>
                          <div className="d-flex justify-content-between">
                            <button
                              onClick={() => EditClients(el.id)}
                              className="btn text-white btn-lg btn-floating btn-parple me-1"
                            >
                              <i class="fas fa-edit"></i>
                            </button>
                            <button
                              onClick={() => DeleteClients(el.id)}
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
        </div>
      </div>
    </>
  );
};
export default Clients;
