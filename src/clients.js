import React from "react";
const Clients = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div className="container-fluid mx-0  main-page">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <form className="row">
              <div className="col-6 mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Client Name"
                />
              </div>
              <div className="col-6 mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Client Number"
                />
              </div>
              <div className="col-6 mt-2">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Sp Rate"
                />
              </div>
              <div className="col-6 mt-2">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Sp Commition"
                />
              </div>

              <div className="col-6 mt-2">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Dp Rate"
                />
              </div>
              <div className="col-6 mt-2">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Dp Commition"
                />
              </div>

              <div className="col-6 mt-2">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Tp Rate"
                />
              </div>
              <div className="col-6 mt-2">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Tp Commition"
                />
              </div>
              <div className="col-6 mt-2">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Single Rate"
                />
              </div>
              <div className="col-6 mt-2">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Single Commition"
                />
              </div>

              <div className="col-6 mt-2">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Jode Rate"
                />
              </div>
              <div className="col-6 mt-2">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Jode Commition"
                />
              </div>
              <div className="col-12 mt-2">
                <div className="d-flex  justify-content-end">
                  <button className="btn w-50 btn-primary">Save</button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-lg-0 mt-md-0 mt-sm-0 mt-3 ">
            <div className="row">
              {arr.map((el) => (
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12 mt-2">
                  <div className="card shadow-5">
                    <div className="card-header p-2">
                      <div className="d-flex justify-content-between">
                        <div className="ms-2">
                          <h5 className="card-title mb-0">Prince Kurmi</h5>
                          <small className="text-muted">2023-01-29</small>
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
          </div>
        </div>
      </div>
    </>
  );
};
export default Clients;
