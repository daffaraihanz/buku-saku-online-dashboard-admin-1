import React, {Component} from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody,Button,ListGroup,ListGroupItem,Form,FormInput } from "shards-react";
import PageTitle from "../components/common/PageTitle";

class AddSiswa extends Component{
    toDaftarSiswa(){
        document.location.href = "/daftar-siswa"
    }
    render(){
        return(
            <Container fluid className="main-content-container">
                <Row noGutters className="page-header py-4">
                    {/* <PageTitle sm="4" title="Tambah Kelas" subtitle="Buku Saku Online" className="text-sm-left" /> */}
                    <Button onClick={this.toDaftarSiswa} className="mb-2 btn-back text-primary">
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
                                    <label htmlFor="feFirstName">NIS</label>
                                    <FormInput
                                        name="name"
                                        placeholder="Masukan NIS"
                                        // value={this.state.name}
                                        onChange={this.handleChange}
                                    />
                                    </Col>
                                </Row>
                                <Row form>
                                    {/* NAMA */}
                                    <Col lg="6" md="8" className="form-group">
                                    <label htmlFor="feEmail">Nama</label>
                                    <FormInput
                                        // type="email"
                                        // id="feEmail"
                                        // name="email"
                                        placeholder="Masukan Nama"
                                        // value={this.state.email}
                                        onChange={this.handleChange}
                                        autoComplete="email"
                                    />
                                    </Col>
                                    {/* Password */}
                                    
                                </Row>
                                <Row form>
                                    <Col lg="6" md="8" className="form-group">
                                    <label htmlFor="fePassword">Point</label>
                                    <FormInput
                                        // type="password"
                                        // id="fePassword"
                                        // name="password"
                                        onChange={this.handleChange}
                                        placeholder="Masukan poin"
                                        // value={this.state.password}
                                        // =
                                    />
                                    </Col>
                                </Row>
                                <Button  theme="accent">Tambah Siswa</Button>
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