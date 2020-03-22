import React, {Component} from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody,Button,ListGroup,ListGroupItem,Form,FormInput, FormSelect } from "shards-react";

class LaporPrestasi extends Component{
    render(){
        return(
            <Container fluid className="main-content-container">
                <Row noGutters className="page-header py-4">
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
                                        name="nis"
                                        placeholder="Masukan NIS"
                                        // value={this.state.name}
                                        onChange={this.handleChange}
                                    />
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col lg="6" md="8" className="form-group">
                                    <label htmlFor="kategori">Kategori</label>
                                    <FormSelect id="kategori">
                                        <option>Pilih kategori ...</option>
                                        <option>Tata Tertib</option>
                                        <option>Sopan Santun</option>
                                    </FormSelect>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col lg="6" md="8" className="form-group">
                                    <label htmlFor="jenis">Jenis Prestasi</label>
                                    <FormSelect id="jenis">
                                        <option>Pilih jenis prestasi ...</option>
                                        <option>Berpkaian</option>
                                        <option>Blabla</option>
                                    </FormSelect>
                                    </Col>
                                </Row>
                                <Button  theme="accent" onClick={this.registerUser}>Submit</Button>
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

export default LaporPrestasi;