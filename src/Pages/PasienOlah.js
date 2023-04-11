import React, { useState } from 'react';
import PasienList from '../Service/PasienList';
import { Container, Row, Col } from 'react-bootstrap';

const PasienOlah = () => {
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Container>
      <Row className="mt-3">
        <Col md={6}>
          <h2 className="mb-4">Daftar Pasien</h2>
        </Col>
        <Col md={6} className="text-right">
        </Col>
      </Row>
      <PasienList search={search} />
    </Container>
  );
};

export default PasienOlah;
