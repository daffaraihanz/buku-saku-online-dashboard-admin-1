import React, {Component} from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody,Button,ListGroup,ListGroupItem,Form,FormInput,CardFooter } from "shards-react";
import PageTitle from "../components/common/PageTitle";

class RiwayatPelanggaran extends Component{

    toDetailRiwayat(){
        document.location.href = '/detail-riwayat'
    }

    render(){
        return(
            <Container fluid className="main-content-container">
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Riwayat Pelanggaran" subtitle="Buku Saku Online" className="text-sm-left" />
                 </Row>
                    <Row className="mb-4">
                        <Col lg="5" className="mb-4">
                            <Card small className="blog-comments nana">
                                <CardBody className="p-3">
                                    <div className="">
                                        {/* Avatar */}
                                            <div className="blog-comments__avatar d-flex" style={{position: 'relative'}}>
                                                <img className="mr-3" src="https://placeimg.com/50/50/any" alt="" />
                                                <div>
                                                    <h5 className="mb-1">Daffa Raihanz </h5>
                                                    <p style={{fontWeight: 300}} className="mb-4">Rambut lebih dari 3cm</p>
                                                    <div className="d-flex justify-content-between">
                                                        <a onClick={this.toDetailRiwayat} className="mr-3" href="#">Lihat Detail</a>
                                                        <p style={{position: 'absolute',right: 0}} className="mb-1 ">12 Januari 2020</p>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="5">
                        <Card small className="blog-comments nana">
                            <CardBody className="p-3">
                                <div className="">
                                    {/* Avatar */}
                                        <div className="blog-comments__avatar d-flex" style={{position: 'relative'}}>
                                            <img className="mr-3" src="https://placeimg.com/50/50/any" alt="" />
                                            <div>
                                                <h5 className="mb-1">Daffa Raihanz </h5>
                                                <p style={{fontWeight: 300}} className="mb-4">Rambut lebih dari 3cm</p>
                                                <div className="d-flex justify-content-between">
                                                    <a className="mr-3" href="#">Lihat Detail</a>
                                                    <p style={{position: 'absolute',right: 0}} className="mb-1 ">12 Januari 2020</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </CardBody>
                        </Card>
                     </Col>
                    </Row>
            </Container>
        )
    }
}

export default RiwayatPelanggaran;