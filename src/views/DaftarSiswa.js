import React, {Component} from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody,Button,InputGroupAddon } from "shards-react";

class DaftarSiswa extends Component{
    render(){
        return(
            <Container className="p-3">
                <Row>
                    <Col lg="12">
                        <Card  className="mb-4">
                            <a href="#" onClick={this._toDaftarSiswa}>
                                <CardBody className="p-3" style={{ background: '#006CFF',borderRadius: 6}}>
                                    <h6 className="mb-4" style={{color: '#fff'}} >X RPL 1</h6>
                                    <p className="m-0" style={{color: '#fff'}} >Yuni Setiani</p>
                                </CardBody>
                            </a>
                        </Card>
                    </Col>
                </Row>
                <Row className="p-3">
                <table className="table mb-0">
                <thead className="bg-primary">
                <tr>
                  <th scope="col" className="border-0 text-white">
                    No.
                  </th>
                  <th scope="col" className="border-0 text-white">
                    NIS
                  </th>
                  <th scope="col" className="border-0 text-white">
                    Nama
                  </th>
                  <th scope="col" className="border-0 text-white">
                    kelas
                  </th>
                  <th scope="col" className="border-0 text-white">
                    Poin
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>3103117269</td>
                  <td>Daffa Raihan</td>
                  <td>XII RPL 1</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>3103117269</td>
                  <td>Daffa Raihan </td>
                  <td>XII RPL 1</td>
                  <td>210</td>
                </tr>
              </tbody>
            </table>
                </Row>
            </Container>
        )
    }
}

export default DaftarSiswa;