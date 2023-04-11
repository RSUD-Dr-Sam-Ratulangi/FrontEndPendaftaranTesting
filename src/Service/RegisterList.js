import React, { Component } from 'react';
import axios from 'axios';

class RegisterList extends Component {
  state = {
    data: [],
    currentPage: 1,
    totalItems: 0,
    totalPages: 0,
    pageSize: 20,
    sortProperty: 'tglRegistrasi',
  };

  componentDidMount() {
    this.getDataWithPagination();
  }

  getDataWithPagination = () => {
    const { currentPage, pageSize, sortProperty } = this.state;

    axios
      .get(
        `http://localhost:8080/api/v1/RegPeriksa/getRegPeriksaModelPage/${currentPage}/${pageSize}/${sortProperty}`
      )
      .then((response) => {
        const { content, totalPages, totalElements } = response.data;
        this.setState({
          data: content,
          totalPages: totalPages,
          totalItems: totalElements,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber }, () => {
      this.getDataWithPagination();
    });
  };

  handlePreviousPage = () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.handlePageChange(currentPage - 1);
    }
  };

  handleNextPage = () => {
    const { currentPage, totalPages } = this.state;
    if (currentPage < totalPages) {
      this.handlePageChange(currentPage + 1);
    }
  };

  render() {
    const { data, currentPage, totalPages, selectedData } = this.state;
  
    return (
        <div className="container">
          <h1 className="text-center my-5">Registerasi</h1>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">No Registerasi</th>
                  <th scope="col">No Rawat</th>
                  <th scope="col">Tanggal</th>
                  <th scope="col">Jam Registerasi</th>
                  <th scope="col">Kode Dokter</th>
                  <th scope="col">Kode Poli</th>
                  <th scope="col">No Rekam Medis</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.noRawat}>
                    <td>{item.noReg}</td>
                    <td>{item.noRawat}</td>
                    <td>{item.tglRegistrasi}</td>
                    <td>{item.jamReg}</td>
                    <td>{item.kdDokter}</td>
                    <td>{item.noRkmMedis}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => this.handleDetailClick(item)}
                      >
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-primary mx-3"
              onClick={this.handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="align-self-center">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="btn btn-primary mx-3"
              onClick={this.handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
          {selectedData && (
            <div className="my-5">
              <h2>Detail Pasien</h2>
              <div className="row">
                <div className="col-sm-6">
                  <p><strong>No Rkm Medis:</strong> {selectedData.noRkmMedis}</p>
                  <p><strong>Nama Pasien:</strong> {selectedData.nmPasien}</p>
                  <p><strong>Tanggal Lahir:</strong> {selectedData.tglLahir}</p>
                </div>
                <div className="col-sm-6">
                  <p><strong>Jenis Kelamin:</strong> {selectedData.jk}</p>
                  <p><strong>Alamat:</strong> {selectedData.alamat}</p>
                  <p><strong>No BPJS:</strong> {selectedData.noPeserta}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      );
  }

  
}

export default RegisterList;
     