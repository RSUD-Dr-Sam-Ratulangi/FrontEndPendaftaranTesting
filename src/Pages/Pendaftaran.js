import React from 'react';
import RegisterList from '../Service/RegisterList';
import { Link } from 'react-router-dom';

const Pendaftaran = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1 className="mt-4">Pendaftaran Pasien</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="mt-4">
            <Link to="/pendaftaran-bpjs" className="btn btn-primary mr-2">BPJS</Link>
            <Link to="/pendaftaran-umum" className="btn btn-primary">UMUM</Link>
          </div>
          <div className="mt-4">
  <RegisterList />
</div>

        </div>
      </div>
    </div>
  );
};

export default Pendaftaran;
