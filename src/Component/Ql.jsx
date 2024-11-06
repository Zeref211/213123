import React from 'react'
import Header from './Header'

function Ql() {
  return (
    <div>
      <Header/>
         <>
  <div className="jumbotron jumbotron-fluid">
    <div className="container text-center">
      <h1 className="display-3">Project quản lý thành viên bằng React JS</h1>
      <p className="lead"> với dữ liệu json</p>
      <hr className="my-2" />
    </div>
  </div>
  <div className="searchForm">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="form-group">
            <div className="btn-group">
              <input
                type="text"
                className="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="Nhập từ khoá  "
                style={{ width: 610 }}
              />
              <div className="btn btn-info"> Tìm</div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <hr />
        </div>
        <div className="col-9">
          <table className="table table-striped table-hover   ">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên </th>
                <th>Điện thoại </th>
                <th>Quyền </th>
                <th>Thao tác </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">1</td>
                <td>Trần Đức Lương</td>
                <td>0988998822</td>
                <td>Moderator</td>
                <td>
                  <div className="btn-group">
                    <div className="btn btn-warning sua">
                      {" "}
                      <i className="fa fa-edit    " /> Sửa{" "}
                    </div>
                    <div className="btn btn-danger btn-block xoa">
                      {" "}
                      <i className="fa fa-delete    " /> Xoá{" "}
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td scope="row">2</td>
                <td>Trần Đức Lương</td>
                <td>0988998822</td>
                <td>Moderator</td>
                <td>
                  <div className="btn-group">
                    <div className="btn btn-warning sua">
                      {" "}
                      <i className="fa fa-edit    " /> Sửa{" "}
                    </div>
                    <div className="btn btn-danger xoa">
                      {" "}
                      <i className="fa fa-delete    " /> Xoá{" "}
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td scope="row">3</td>
                <td>Phan văn tài em</td>
                <td>0988998822</td>
                <td>Moderator</td>
                <td>
                  <div className="btn-group">
                    <div className="btn btn-warning sua">
                      {" "}
                      <i className="fa fa-edit    " /> Sửa{" "}
                    </div>
                    <div className="btn btn-danger xoa">
                      {" "}
                      <i className="fa fa-delete    " /> Xoá{" "}
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td scope="row">4</td>
                <td>Bui Tien Dung</td>
                <td>0988998822</td>
                <td>Moderator</td>
                <td>
                  <div className="btn-group">
                    <div className="btn btn-warning sua">
                      {" "}
                      <i className="fa fa-edit    " /> Sửa{" "}
                    </div>
                    <div className="btn btn-danger xoa">
                      {" "}
                      <i className="fa fa-delete    " /> Xoá{" "}
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td scope="row">5</td>
                <td>Trần Đức Lương</td>
                <td>0988998822</td>
                <td>Moderator</td>
                <td>
                  <div className="btn-group">
                    <div className="btn btn-warning sua">
                      {" "}
                      <i className="fa fa-edit    " /> Sửa{" "}
                    </div>
                    <div className="btn btn-danger xoa">
                      {" "}
                      <i className="fa fa-delete    " /> Xoá{" "}
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td scope="row">6</td>
                <td>Trần Đức Lương</td>
                <td>0988998822</td>
                <td>Moderator</td>
                <td>
                  <div className="btn-group">
                    <div className="btn btn-warning sua">
                      {" "}
                      <i className="fa fa-edit    " /> Sửa{" "}
                    </div>
                    <div className="btn btn-danger xoa">
                      {" "}
                      <i className="fa fa-delete    " /> Xoá{" "}
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* het col 9       */}
        <div className="col-3">
          <div className="">
            <div className="card border-primary mb-3">
              <div className="card-header">Thêm mới user vào hệ thống </div>
              <div className="card-body text-primary">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Tên User"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Điện thoại "
                  />
                </div>
                <div className="form-group">
                  <select className="custom-select" required="">
                    <option value="">Chọn Quyền mặc định </option>
                    <option value={1}>Admin</option>
                    <option value={2}>Modrator</option>
                    <option value={3}>Normal</option>
                  </select>
                </div>
                <div className="form-group">
                  <div className="btn btn-block btn-primary"> Thêm mới </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* het col 3 */}
      </div>
    </div>
  </div>
  {/* end searchForm  */}
</>
    </div>
  )
}

export default Ql