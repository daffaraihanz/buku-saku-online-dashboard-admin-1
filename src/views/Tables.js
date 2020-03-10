import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody,Button,InputGroupAddon } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const Tables = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Data Pasal" subtitle="Buku Saku Online" className="text-sm-left" />
    </Row>
    <InputGroupAddon type="append" className="mb-4">
        <Button theme="white"  className="bg-primary text-white px-3 py-3">
            <i className="material-icons mr-1">add</i>
            Tambah Pasal
        </Button>
    </InputGroupAddon>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Pasal</h6>
          </CardHeader>

          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    No.
                  </th>
                  <th scope="col" className="border-0">
                    Kategori
                  </th>
                  <th scope="col" className="border-0">
                    Kode
                  </th>
                  <th scope="col" className="border-0">
                    Poin
                  </th>
                  <th scope="col" className="border-0">
                    Keterangan
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>KEIKUTSERTAAN DALAM KEJUARAAN</td>
                  <td>T-404</td>
                  <td>75</td>
                  <td>Peserta lomba tingkat Internasional</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>KEIKUTSERTAAN DALAM KEJUARAAN</td>
                  <td>T-403</td>
                  <td>50</td>
                  <td>Peserta lomba tingkat Nasional</td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

    {/* Default Dark Table */}
  </Container>
);

export default Tables;
