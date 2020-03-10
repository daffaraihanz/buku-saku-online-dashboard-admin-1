import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

const Errors = () => (
  <Container fluid className="main-content-container px-4 pb-4">
        <Row className="mt-4">
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
  </Container>
);

export default Errors;
