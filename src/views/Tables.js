import React, { Component } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody,Button,InputGroupAddon } from "shards-react";
import  { Redirect } from 'react-router-dom'

import PageTitle from "../components/common/PageTitle";

class Tables extends Component {
  constructor(props) {
    super(props)
    this.state = {
        
    }
  } 

  _toDaftarKelas = () => {
    // <Redirect to='/daftar-kelas' />
    document.location.href = "/daftar-kelas"
  }

  render(){
    return(
      <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Daftar Siswa" subtitle="Buku Saku Online" className="text-sm-left" />
      </Row>
      <Row>
        <Col>
          <Card  className="mb-4">
            <a href="#" onClick={this._toDaftarKelas}>
              <CardBody style={{ background: 'green',borderRadius: 8}}>
                <h6 className="m-0" style={{color: 'white'}} >Rekayasa Perangkat Lunak</h6>
              </CardBody>
            </a>
          </Card>
        </Col>
        <Col>
          <Card  className="mb-4">
            <a href="#">
              <CardBody className="border-bottom" style={{ background: 'red',borderRadius: 8,}}>
                <h6 className="m-0" style={{color: 'white'}}>Tekhnik Jaringan Akses</h6>
              </CardBody>
            </a>
          </Card>
        </Col>
        <Col>
          <Card  className="mb-4">
            <a href="#">
              <CardBody className="border-bottom" style={{ background: 'blue',borderRadius: 8}}>
                <h6 className="m-0" style={{color: 'white'}}>Tekhnik Komputer Jaringan</h6>
              </CardBody>
            </a>
          </Card>
        </Col>
      </Row>
    </Container>
    )
  }
}

export default Tables;

