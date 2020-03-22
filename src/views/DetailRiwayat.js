import React, {Component} from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody,Button,ListGroup,ListGroupItem,Form,FormInput,CardHeadr } from "shards-react";

class DetailRiwayat extends Component{

    toRiwayat(){
        document.location.href = "/riwayat"
    }
    render(){
        return(
            <Container fluid className="main-content-container">
                <Row noGutters className="page-header py-4">
                    {/* <PageTitle sm="4" title="Tambah Kelas" subtitle="Buku Saku Online" className="text-sm-left" /> */}
                    <Button onClick={this.toRiwayat} className="mb-2 btn-back text-primary">
                        <i className="material-icons mr-1">keyboard_arrow_left</i> Kembali
                    </Button>
                </Row>
                <Card small className="mb-4">
                    <CardHeader className="border-bottom" >
                        <h5 className="m-0">Detail Pelanggaran</h5>
                    </CardHeader>
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row>
                        <Col>
                            <Form className>
                                <div className="">
                                    <img className="rounded mb-3" src="https://placeimg.com/322/187/any"></img>
                                    <div>
                                        <Row >
                                            {/* NIS */}
                                            <Col lg="3" md="8">
                                                <h6 className="mb-1" htmlFor="feFirstName">Nama Lengkap</h6>
                                                <p>Fiony Alveria</p>
                                            </Col>
                                            <Col lg="3" md="8">
                                                <h6 className="mb-1" htmlFor="feFirstName">Kelas</h6>
                                                <p>XII RPL 7</p>
                                            </Col>
                                        </Row>
                                        <Row >
                                            {/* NIS */}
                                            <Col lg="3" md="8">
                                                <h6 className="mb-1" htmlFor="feFirstName">Kategori Pelanggaran</h6>
                                                <p>Rambut</p>
                                            </Col>
                                            <Col lg="3" md="8">
                                                <h6 className="mb-1" htmlFor="feFirstName">Poin Pelanggaran</h6>
                                                <p>5</p>
                                            </Col>
                                        </Row>
                                        <Row >
                                            {/* NIS */}
                                            <Col lg="3" md="8">
                                                <h6 className="mb-1" htmlFor="feFirstName">Aturan yang dilanggar</h6>
                                                <p>Rambut lebih dari 3cm</p>
                                            </Col>
                                            <Col lg="3" md="8">
                                                <h6 className="mb-1" htmlFor="feFirstName">Pelapor</h6>
                                                <p>Bayu Aji Sukma</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                {/* <Button  theme="accent" onClick={this.addKelas}>Tambah Kelas</Button> */}
                            </Form>
                        </Col>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
            </Card>
            </Container>
        )
    }
}

export default DetailRiwayat;