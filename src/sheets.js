import React from "react";
const Sheets = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div className="container-fluid mx-0  main-page">
        <div className="row">
          <div className="col-8">
            <input
              type="text"
              placeholder="Enter the sheet name"
              class="form-control"
            />
          </div>
          <div className="col-4">
            <input
              type="submit"
              value="Add New"
              class="btn btn-primary w-100"
            />
          </div>
        </div>
        <hr />
        <div className="row">
          {arr.map((el) => (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12 mt-2">
              <div className="card shadow-5">
                <div className="card-header p-2">
                  <div className="d-flex justify-content-between">
                    <div className="ms-2">
                      <h5 className="card-title mb-0">FD</h5>
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
    </>
  );
};
export default Sheets;
