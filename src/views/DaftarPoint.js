import React, {Component} from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody,Button,ListGroup,ListGroupItem,Form,FormInput } from "shards-react";
import PageTitle from "../components/common/PageTitle";

class DaftarPoint extends Component{
    constructor(props) {
        super(props)
        this.state = {
            kategori: ''
        }

        this.setPelanggaran = this.setPelanggaran.bind(this);
        this.setPrestasi = this.setPrestasi.bind(this);
    }

    toKategori(){
        document.location.href= "/kategori"
    }

    async setPelanggaran() {
        await this.setState({ kategori: 'pelanggaran'})
    
        this.props.history.push({
          pathname: '/kategori',
          state: this.state.kategori
        })
    }

    async setPrestasi() {
        await this.setState({ kategori: 'prestasi'})
    
        this.props.history.push({
          pathname: '/kategori',
          state: this.state.kategori
        })
    }
    
    toAddKategori(){
        document.location.href = "/add-detail-kategori"
    }

    render(){
        return(
            <Container fluid className="main-content-container">
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Daftar Point" subtitle="Buku Saku Online" className="text-sm-left" />
                </Row>
                <Row className="mb-2">
                    <Col>
                        <div className="d-flex justify-content-end">
                            <Button theme="primary"  onClick={this.toAddKategori} className="mb-2">
                                <i className="material-icons mr-1">add</i> Tambah Daftar Point
                            </Button>
                        </div>
                    </Col>
                </Row>
                  <Row>
                    <Col lg="4">
                        <Card  className="mb-4">
                            <a href="#" onClick={this.setPelanggaran}>
                                <CardBody className="bg-primary" style={{borderRadius: 6}}>
                                    <h6 className="m-0" style={{color: '#fff', fontWeight: '600'}} >Pelanggaran</h6>
                                </CardBody>
                            </a>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card  className="mb-4">
                            <a href="" onClick={this.setPrestasi}>
                                <CardBody className="bg-primary"  style={{borderRadius: 6}}>
                                    <h6 className="m-0" style={{color: '#fff', fontWeight: '600'}}>Prestasi</h6>
                                </CardBody>
                            </a>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default DaftarPoint;