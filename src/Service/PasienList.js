import React, { Component } from 'react';
import axios from 'axios';

class PasienList extends Component {
  state = {
    data: [],
    currentPage: 1,
    totalItems: 0,
    totalPages: 0,
    pageSize: 20,
    sortProperty: 'tglDaftar',
    searchText: ''
  };

  componentDidMount() {
    this.getDataWithPagination();
  }

  getDataWithPagination = () => {
    const { currentPage, pageSize, sortProperty, searchText } = this.state;
    let url;
  
    if (searchText) {
      url = `http://localhost:8080/api/v1/getPasienModelPage/${currentPage}/${pageSize}/${sortProperty}?searchText=${searchText}`;
    } else {
      url = `http://localhost:8080/api/v1/getPasienModelPage/${currentPage}/${pageSize}/${sortProperty}`;
    }
  
    axios
      .get(url)
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

  handleSearchChange = (event) => {
    this.setState({ searchText: event.target.value });
  }

  handleSearch = () => {
    this.getDataWithPagination();
  }

  handleDetailClick = (item) => {
    this.setState({ selectedData: item });
  };

  render() {
    const { data, currentPage, totalPages, selectedData, searchTerm } = this.state;
  
    // Filter the data based on the search term
    const filteredData = data.filter((item) => {
      const searchTerm = this.state.searchTerm;
      return (
        item.noRkmMedis.includes(searchTerm) ||
        item.nmPasien.includes(searchTerm) ||
        item.tglLahir.includes(searchTerm) ||
        item.jk.includes(searchTerm) ||
        item.alamat.includes(searchTerm) ||
        item.noPeserta.includes(searchTerm)
      );
    });
    return (
      <div className="container">
        <h1 className="text-center my-5">Pasien List</h1>
  
        {/* Search Bar */}
        <div className="form-inline justify-content-center mb-4">
          <input
            type="text"
            className="form-control mr-2"
            placeholder="Cari Pasien"
            value={searchTerm}
            onChange={(e) => this.setState({ searchTerm: e.target.value })}
          />
          <button className="btn btn-primary" onClick={this.handleSearch}>
            Cari
          </button>
        </div>
  
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>No Rkm Medis</th>
              <th>Nama Pasien</th>
              <th>Tanggal Lahir</th>
              <th>Jenis Kelamin</th>
              <th>Alamat</th>
              <th>No BPJS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.noRkmMedis}>
                <td>{item.noRkmMedis}</td>
                <td>{item.nmPasien}</td>
                <td>{item.tglLahir}</td>
                <td>{item.jk}</td>
                <td>{item.alamat}</td>
                <td>{item.noPeserta}</td>
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
          <div>
            <h2>Detail Pasien</h2>
            <p>No Rkm Medis: {selectedData.noRkmMedis}</p>
            <p>Nama Pasien: {selectedData.nmPasien}</p>
            <p>Tanggal Lahir: {selectedData.tglLahir}</p>
            <p>Jenis Kelamin: {selectedData.jk}</p>
            <p>Alamat: {selectedData.alamat}</p>
            <p>No BPJS: {selectedData.noPeserta}</p>
          </div>
        )}
      </div>
    );
  }

}

export default PasienList;
     