import React, { Component } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody,Button,InputGroupAddon } from "shards-react";
import  { Redirect } from 'react-router-dom'

import PageTitle from "../components/common/PageTitle";

class Tables extends Component {
  constructor(props) {
    super(props)
    this.state = {
        jurusan: ''
    }
    this.setRPL = this.setRPL.bind(this);
    this.setTKJ = this.setTKJ.bind(this);
    this.setTJA = this.setTJA.bind(this);
  } 

  _toDaftarKelas = () => {
    // <Redirect to='/daftar-kelas' />
    document.location.href = "/daftar-kelas"
  }

  async setRPL() {
    await this.setState({ jurusan: 'RPL'})

    this.props.history.push({
      pathname: '/daftar-kelas',
      state: this.state.jurusan
    })
  }

  async setTKJ() {
    await this.setState({ jurusan: 'TKJ'})

    this.props.history.push({
      pathname: '/daftar-kelas',
      state: this.state.jurusan
    })
  }

  async setTJA() {
    await this.setState({ jurusan: 'TJA'})

    this.props.history.push({
      pathname: '/daftar-kelas',
      state: this.state.jurusan
    })
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
            <a href="" onClick={this.setRPL}>
              <CardBody className="bg-primary" style={{borderRadius: 6}}>
                <h6 className="m-0" style={{color: '#fff', fontWeight: '600'}} >Rekayasa Perangkat Lunak</h6>
              </CardBody>
            </a>
          </Card>
        </Col>
        <Col>
          <Card  className="mb-4">
            <a href="" onClick={this.setTJA}>
              <CardBody className="bg-primary"  style={{borderRadius: 6}}>
                <h6 className="m-0" style={{color: '#fff', fontWeight: '600'}}>Tekhnik Jaringan Akses</h6>
              </CardBody>
            </a>
          </Card>
        </Col>
        <Col>
          <Card  className="mb-4">
            <a href="" onClick={this.setTKJ}>
              <CardBody className="bg-primary"  style={{ borderRadius: 6 }}>
                <h6 className="m-0" style={{color: '#fff', fontWeight: '600'}}>Tekhnik Komputer Jaringan</h6>
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

