import React from 'react';
import PasienList from '../Service/PasienList';
import { Route } from 'react-router-dom';

const Pasien = () => {
  return (
    <div>
      <Route exact path="/pasien" component={PasienList} />
    </div>
  );
};

export default Pasien;