import React, {Component} from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody,Button,ListGroup,ListGroupItem,Form,FormInput } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import './style/Overlay.css'

class AddSiswa extends Component{

    toDaftarKelas(){
        document.location.href = "/daftar-kelas"
    }
    render(){
        return(
            <Container fluid className="main-content-container">
                <Row noGutters className="page-header py-4">
                    {/* <PageTitle sm="4" title="Tambah Kelas" subtitle="Buku Saku Online" className="text-sm-left" /> */}
                    <Button onClick={this.toDaftarKelas} className="mb-2 btn-back text-primary">
                        <i className="material-icons mr-1">keyboard_arrow_left</i> Kembali
                    </Button>
                </Row>
                <Card small className="mb-4">
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row>
                        <Col>
                            <Form>
                                <Row form>
                                    {/* NIS */}
                                    <Col lg="6" md="8" className="form-group">
                                    <label htmlFor="feFirstName">Kelas</label>
                                    <FormInput
                                        name="name"
                                        placeholder="contoh: XII RPL 2"
                                        // value={this.state.name}
                                        onChange={this.handleChange}
                                    />
                                    </Col>
                                </Row>
                                <Row form>
                                    {/* NAMA */}
                                    <Col lg="6" md="8" className="form-group">
                                    <label htmlFor="feEmail">Wali Kelas</label>
                                    <FormInput
                                        // type="email"
                                        // id="feEmail"
                                        // name="email"
                                        placeholder="Masukan Wali Kelas"
                                        // value={this.state.email}
                                        onChange={this.handleChange}
                                        autoComplete="email"
                                    />
                                    </Col>
                                    {/* Password */}
                                    
                                </Row>
                                <Button  theme="accent">Tambah Kelas</Button>
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

export default AddSiswa;