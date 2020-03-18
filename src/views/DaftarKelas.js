import React, {Component} from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody,Button,InputGroupAddon } from "shards-react";

class DaftarKelas extends Component{

    _toDaftarSiswa = () => {
        document.location.href = "/daftar-siswa"
    }
    render(){
        return(
            <Container className="p-4">
                <Row className="mb-3">
                    <Col>
                        <h4 style={{borderBottomWidth: 4, borderBottomColor: 'black'}}>Kelas X</h4>
                    </Col>
                </Row>
                <Row>
                    <Col lg="4">
                        <Card  className="mb-4">
                            <a href="#" onClick={this._toDaftarSiswa}>
                                <CardBody className="p-3" style={{ background: '#006CFF',borderRadius: 6}}>
                                    <h6 className="mb-4" style={{color: '#fff'}} >X RPL 1</h6>
                                    <p className="m-0" style={{color: '#fff'}} >Yuni Setiani</p>
                                </CardBody>
                            </a>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card  className="mb-4">
                            <a href="#" onClick={this._toDaftarKelas}>
                                <CardBody className="p-3" style={{ background: '#006CFF',borderRadius: 6}}>
                                    <h6 className="mb-4" style={{color: '#fff'}} >X RPL 1</h6>
                                    <p className="m-0" style={{color: '#fff'}} >Yuni Setiani</p>
                                </CardBody>
                            </a>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card  className="mb-4">
                            <a href="#" onClick={this._toDaftarKelas}>
                                <CardBody className="p-3" style={{ background: '#006CFF',borderRadius: 6}}>
                                    <h6 className="mb-4" style={{color: '#fff'}} >X RPL 1</h6>
                                    <p className="m-0" style={{color: '#fff'}} >Yuni Setiani</p>
                                </CardBody>
                            </a>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card  className="mb-4">
                            <a href="#" onClick={this._toDaftarKelas}>
                                <CardBody className="p-3" style={{ background: '#006CFF',borderRadius: 6}}>
                                    <h6 className="mb-4" style={{color: '#fff'}} >X RPL 1</h6>
                                    <p className="m-0" style={{color: '#fff'}} >Yuni Setiani</p>
                                </CardBody>
                            </a>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card  className="mb-4">
                            <a href="#" onClick={this._toDaftarKelas}>
                                <CardBody className="p-3" style={{ background: '#006CFF',borderRadius: 6}}>
                                    <h6 className="mb-4" style={{color: '#fff'}} >X RPL 1</h6>
                                    <p className="m-0" style={{color: '#fff'}} >Yuni Setiani</p>
                                </CardBody>
                            </a>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card  className="mb-4">
                            <a href="#" onClick={this._toDaftarKelas}>
                                <CardBody className="p-3" style={{ background: '#006CFF',borderRadius: 6}}>
                                    <h6 className="mb-4" style={{color: '#fff'}} >X RPL 1</h6>
                                    <p className="m-0" style={{color: '#fff'}} >Yuni Setiani</p>
                                </CardBody>
                            </a>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-3">
                        <Col>
                            <h4 style={{borderBottomWidth: 4, borderBottomColor: 'black'}}>Kelas XI</h4>
                        </Col>
                    </Row>
                <Row>
                    <Col lg="4">
                        <Card  className="mb-4">
                            <a href="#" onClick={this._toDaftarKelas}>
                                <CardBody className="p-3" style={{ background: '#39A4EF',borderRadius: 6}}>
                                    <h6 className="mb-4" style={{color: '#fff'}} >X RPL 1</h6>
                                    <p className="m-0" style={{color: '#fff'}} >Yuni Setiani</p>
                                </CardBody>
                            </a>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card  className="mb-4">
                            <a href="#" onClick={this._toDaftarKelas}>
                                <CardBody className="p-3" style={{ background: '#39A4EF',borderRadius: 6}}>
                                    <h6 className="mb-4" style={{color: '#fff'}} >X RPL 1</h6>
                                    <p className="m-0" style={{color: '#fff'}} >Yuni Setiani</p>
                                </CardBody>
                            </a>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card  className="mb-4">
                            <a href="#" onClick={this._toDaftarKelas}>
                                <CardBody className="p-3" style={{ background: '#39A4EF',borderRadius: 6}}>
                                    <h6 className="mb-4" style={{color: '#fff'}} >X RPL 1</h6>
                                    <p className="m-0" style={{color: '#fff'}} >Yuni Setiani</p>
                                </CardBody>
                            </a>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card  className="mb-4">
                            <a href="#" onClick={this._toDaftarKelas}>
                                <CardBody className="p-3" style={{ background: '#39A4EF',borderRadius: 6}}>
                                    <h6 className="mb-4" style={{color: '#fff'}} >X RPL 1</h6>
                                    <p className="m-0" style={{color: '#fff'}} >Yuni Setiani</p>
                                </CardBody>
                            </a>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card  className="mb-4">
                            <a href="#" onClick={this._toDaftarKelas}>
                                <CardBody className="p-3" style={{ background: '#39A4EF',borderRadius: 6}}>
                                    <h6 className="mb-4" style={{color: '#fff'}} >X RPL 1</h6>
                                    <p className="m-0" style={{color: '#fff'}} >Yuni Setiani</p>
                                </CardBody>
                            </a>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card  className="mb-4">
                            <a href="#" onClick={this._toDaftarKelas}>
                                <CardBody className="p-3" style={{ background: '#39A4EF',borderRadius: 6}}>
                                    <h6 className="mb-4" style={{color: '#fff'}} >X RPL 1</h6>
                                    <p className="m-0" style={{color: '#fff'}} >Yuni Setiani</p>
                                </CardBody>
                            </a>
                        </Card>
                    </Col>
                </Row>
                    <Row className="mb-3">
                        <Col>
                            <h4 style={{borderBottomWidth: 4, borderBottomColor: 'black'}}>Kelas XII</h4>
                        </Col>
                    </Row>
                <Row>
                    <Col lg="4">
                        <Card  className="mb-4">
                            <a href="#" onClick={this._toDaftarKelas}>
                                <CardBody className="p-3" style={{ background: '#376CEF',borderRadius: 6}}>
                                    <h6 className="mb-4" style={{color: '#fff'}} >X RPL 1</h6>
                                    <p className="m-0" style={{color: '#fff'}} >Yuni Setiani</p>
                                </CardBody>
                            </a>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card  className="mb-4">
                            <a href="#" onClick={this._toDaftarKelas}>
                                <CardBody className="p-3" style={{ background: '#376CEF',borderRadius: 6}}>
                                    <h6 className="mb-4" style={{color: '#fff'}} >X RPL 1</h6>
                                    <p className="m-0" style={{color: '#fff'}} >Yuni Setiani</p>
                                </CardBody>
                            </a>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card  className="mb-4">
                            <a href="#" onClick={this._toDaftarKelas}>
                                <CardBody className="p-3" style={{ background: '#376CEF',borderRadius: 6}}>
                                    <h6 className="mb-4" style={{color: '#fff'}} >X RPL 1</h6>
                                    <p className="m-0" style={{color: '#fff'}} >Yuni Setiani</p>
                                </CardBody>
                            </a>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card  className="mb-4">
                            <a href="#" onClick={this._toDaftarKelas}>
                                <CardBody className="p-3" style={{ background: '#376CEF',borderRadius: 6}}>
                                    <h6 className="mb-4" style={{color: '#fff'}} >X RPL 1</h6>
                                    <p className="m-0" style={{color: '#fff'}} >Yuni Setiani</p>
                                </CardBody>
                            </a>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card  className="mb-4">
                            <a href="#" onClick={this._toDaftarKelas}>
                                <CardBody className="p-3" style={{ background: '#376CEF',borderRadius: 6}}>
                                    <h6 className="mb-4" style={{color: '#fff'}} >X RPL 1</h6>
                                    <p className="m-0" style={{color: '#fff'}} >Yuni Setiani</p>
                                </CardBody>
                            </a>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card  className="mb-4">
                            <a href="#" onClick={this._toDaftarKelas}>
                                <CardBody className="p-3" style={{ background: '#376CEF',borderRadius: 6}}>
                                    <h6 className="mb-4" style={{color: '#fff'}} >X RPL 1</h6>
                                    <p className="m-0" style={{color: '#fff'}} >Yuni Setiani</p>
                                </CardBody>
                            </a>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default DaftarKelas;