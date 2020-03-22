import React, {Component} from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody,Button,ListGroup,ListGroupItem,Form,FormInput,CardHeadr } from "shards-react";
import axios from 'axios'

class DetailRiwayat extends Component{
    constructor () {
        super();
        this.state = {
            data: '',
            id: '',
            image: '',
            pelanggaran: {
                kategori: '',
                point: '',
                kode: ''
            },
            pelapor: {
                nama: ''
            },
            user: {
                kelas: '',
                nama: '',
                nis: ''
            }
        };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    async componentDidMount() {
        try {
            const baseUrl = "http://3.91.42.49";
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
    
            let id = await this.props.location.state
            
            await axios.get(
                `${baseUrl}/api/lapor?id=${id}`,
                config
            ).then(response => {
                this.setState(response.data.data)
            })
        } catch (error) {
            alert(error)
        }
    }

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
                                    <img className="rounded mb-3" src={`http://${this.state.image}`} style={{maxWidth: "700px"}}></img>
                                    <div>
                                        <Row >
                                            {/* NIS */}
                                            <Col lg="3" md="8">
                                                <h6 className="mb-1" htmlFor="feFirstName">Nama Lengkap</h6>
                                                <p>{this.state.user.nama}</p>
                                            </Col>
                                            <Col lg="3" md="8">
                                                <h6 className="mb-1" htmlFor="feFirstName">Kelas</h6>
                                                <p>{this.state.user.kelas}</p>
                                            </Col>
                                        </Row>
                                        <Row >
                                            {/* NIS */}
                                            <Col lg="3" md="8">
                                                <h6 className="mb-1" htmlFor="feFirstName">Kategori Pelanggaran</h6>
                                                <p>{this.state.pelanggaran.kategori}</p>
                                            </Col>
                                            <Col lg="3" md="8">
                                                <h6 className="mb-1" htmlFor="feFirstName">Poin Pelanggaran</h6>
                                                <p>{this.state.pelanggaran.point}</p>
                                            </Col>
                                        </Row>
                                        <Row >
                                            {/* NIS */}
                                            <Col lg="3" md="8">
                                                <h6 className="mb-1" htmlFor="feFirstName">Kode</h6>
                                                <p>{this.state.pelanggaran.kode}</p>
                                            </Col>
                                            <Col lg="3" md="8">
                                                <h6 className="mb-1" htmlFor="feFirstName">Pelapor</h6>
                                                <p>{this.state.pelapor.nama}</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
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