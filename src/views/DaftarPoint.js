import React, {Component} from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody,Button,ListGroup,ListGroupItem,Form,FormInput } from "shards-react";
import PageTitle from "../components/common/PageTitle";

class DaftarPoint extends Component{

    toKategori(){
        document.location.href= "/kategori"
    }

    render(){
        return(
            <Container fluid className="main-content-container">
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Daftar Point" subtitle="Buku Saku Online" className="text-sm-left" />
                </Row>
                  <Row>
                    <Col lg="4">
                        <Card  className="mb-4">
                            <a href="#" onClick={this.toKategori}>
                                <CardBody className="bg-primary" style={{borderRadius: 6}}>
                                    <h6 className="m-0" style={{color: '#fff', fontWeight: '600'}} >Pelanggaran</h6>
                                </CardBody>
                            </a>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card  className="mb-4">
                            <a href="" onClick={this.toKategori}>
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