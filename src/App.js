import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header';
import Pendaftaran from './Pages/Pendaftaran';
import Pasien from './Pages/Pasien';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import SideNavBar from './Components/SideNavBar';
import PendaftaranUmum from './Pages/PendaftaranUmum';
import PendaftaranBpjs from './Pages/PendaftaranBpjs';
import PasienOlah from './Pages/PasienOlah';

function App() {
  const [mainWidth, setMainWidth] = useState(0);

  return (
    <BrowserRouter>
      <div className="App d-flex flex-column">
        <Header />
        <div className="d-flex flex-grow-1">
          <div className="col-md-2 p-0">
            <SideNavBar mainWidth={mainWidth} />
          </div>
          <div className="col-md-10 d-flex flex-column">
            <div className="flex-grow-1 mb-5">
              <Route exact path="/" />
              <Route path="/Pendaftaran" component={Pendaftaran} />
              <Route path="/PasienOlah" component={PasienOlah} />
              <Route path="/pendaftaran-umum" component={PendaftaranUmum} />
              <Route path="/pendaftaran-bpjs" component={PendaftaranBpjs} />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
