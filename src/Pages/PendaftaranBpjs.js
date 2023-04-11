import React from 'react';
import { useHistory } from 'react-router-dom';


const PendaftaranBpjs = () => {
  const history = useHistory();

  const handleUmumClick = () => {
    history.push('/pendaftaran-umum');
  };

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
            <button className="btn btn-primary mr-2">BPJS</button>
            <button className="btn btn-primary" onClick={handleUmumClick}>UMUM</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendaftaranBpjs;
