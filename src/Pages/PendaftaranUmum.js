import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./css/PendaftaranUmum.css";

import PasienService from '../Service/PasienService'

const PendaftaranUmum = () => {
  const [patient, setPatient] = useState({
    no_rkm_medis: "",
    nm_pasien: "",
    no_ktp: "",
    jk: "",
    tmp_lahir: "",
    tgl_lahir: "",
    alamat: "",
    no_tlp: "",
    nm_ibu: "",
    gol_darah: "",
    pekerjaan: "",
    stts_nikah: "",
    agama: "",
    tgl_daftar: "",
    umur: "",
    pnd: "",
    keluarga: "",
    namakeluarga: "",
    kd_pj: "",
    no_peserta: "",
    kd_kel: "",
    kd_kec: "",
    kd_kab: "",
    pekerjaanpj: "",
    alamatpj: "",
    kelurahanpj: "",
    kecamatanpj: "",
    kabupatenpj: "",
    perusahaan_pasien: "",
    suku_bangsa: "",
    bahasa_pasien: "",
    cacat_fisik: "",
    email: "",
    nip: "",
    kd_prop: "",
    propinsipj: "",
  });

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (patient.no_rkm_medis) {
      PasienService(patient.no_rkm_medis)
        .then((data) => {
          console.log(data);
          setPatient(data);
        })
        .catch((error) => console.error(error));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPatient((prevPatient) => ({
      ...prevPatient,
      [name]: value,
    }));
  };

  const handleUmumClick = () => {
    history.push("/pendaftaran-umum");
  };

  function handleReset() {
    setPatient({ noRekamMedis: "" });
  }

  return (
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="form-group row">
              <label htmlFor="noRekamMedis" className="col-sm-2 col-form-label">
                No Rekam Medis:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="noRkmMedis"
                  value={patient.no_rkm_medis}
                  onChange={(event) =>
                    setPatient({ ...patient, no_rkm_medis: event.target.value })
                  }
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-2"></div>
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
                <button
                  type="button"
                  className="btn btn-secondary ml-2"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </div>
          </form>

          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="noRekamMedis">No Rekam Medis:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="noRekamMedis"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nmPasien">Nama Pasien:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="namaPasien"
                    value={patient.nm_pasien}
                    
                  />
                  <input type="text" className="form-control" id="nmPasien" />
                </div>
                <div className="form-group">
                  <label htmlFor="noKtp">No KTP:</label>
                  <input type="text" className="form-control" id="noKtp" />
                </div>
                <div className="form-group">
                  <label htmlFor="jk">Jenis Kelamin:</label>
                  <select className="form-control" id="jk">
                    <option value="">-- Pilih Jenis Kelamin --</option>
                    <option value="L">Laki-laki</option>
                    <option value="P">Perempuan</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="tmpLahir">Tempat Lahir:</label>
                  <input type="text" className="form-control" id="tmpLahir" />
                </div>
                <div className="form-group">
                  <label htmlFor="tglLahir">Tanggal Lahir:</label>
                  <input type="text" className="form-control" id="tglLahir" />
                </div>
                <div className="form-group">
                  <label htmlFor="alamat">Alamat:</label>
                  <textarea className="form-control" id="alamat"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="noTlp">Nomor Telepon:</label>
                  <input type="text" className="form-control" id="noTlp" />
                </div>
                <div className="form-group">
                  <label htmlFor="nmIbu">Nama Ibu:</label>
                  <input type="text" className="form-control" id="nmIbu" />
                </div>
                <div className="form-group">
                  <label htmlFor="golDarah">Golongan Darah:</label>
                  <input type="text" className="form-control" id="golDarah" />
                </div>
                <div className="form-group">
                  <label htmlFor="pekerjaan">Pekerjaan:</label>
                  <input type="text" className="form-control" id="pekerjaan" />
                </div>
                <div className="form-group">
                  <label htmlFor="sttsNikah">Status Nikah:</label>
                  <select className="form-control" id="sttsNikah">
                    <option value="">-- Pilih Status Nikah --</option>
                    <option value="Belum Menikah">Belum Menikah</option>
                    <option value="Menikah">Menikah</option>
                    <option value="Cerai Hidup">Cerai Hidup</option>
                    <option value="Cerai Mati">Cerai Mati</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="agama">Agama:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="agama"
                    name="agama"
                    value={patient.agama}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="tgl_daftar">Tanggal Daftar:</label>
                  <input
                    type="date"
                    className="form-control"
                    id="tgl_daftar"
                    name="tgl_daftar"
                    value={patient.tgl_daftar}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="umur">Umur:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="umur"
                    name="umur"
                    value={patient.umur}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="pnd">Pendidikan:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="pnd"
                    name="pnd"
                    value={patient.pnd}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="keluarga">Keluarga:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="keluarga"
                    name="keluarga"
                    value={patient.keluarga}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="namakeluarga">Nama Keluarga:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="namakeluarga"
                    name="namakeluarga"
                    value={patient.namakeluarga}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="kd_pj">Kode PJ:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="kd_pj"
                    name="kd_pj"
                    value={patient.kd_pj}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="no_peserta">Nomor Peserta:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="no_peserta"
                    name="no_peserta"
                    value={patient.no_peserta}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="kd_kel">Kode Kelurahan:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="kd_kel"
                    name="kd_kel"
                    value={patient.kd_kel}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="kd_kec">Kode Kecamatan:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="kd_kec"
                    name="kd_kec"
                    value={patient.kd_kec}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>

            <div className="form-group row">
              <div className="col-sm-10 offset-sm-2">
                <button type="submit" className="btn btn-primary mr-1">
                  Submit
                </button>
                <button type="submit" className="btn btn-primary mr-2">
                  Update
                </button>
                <button type="submit" className="btn btn-primary mr-3">
                  Delete
                </button>
                <button className="btn btn-secondary" onClick={handleUmumClick}>
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PendaftaranUmum;
