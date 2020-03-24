import React, {Component} from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody,Button,ListGroup,ListGroupItem,Form,FormInput,CardFooter } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import axios from 'axios'

class RiwayatPelanggaran extends Component{
    constructor () {
        super();
        this.state = {
            data: [],
            id: ''
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.toDetailRiwayat = this.toDetailRiwayat.bind(this);
    }

    async componentDidMount() {
        try {
            const baseUrl = "http://3.91.42.49";
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
            
            await axios.get(
                `${baseUrl}/api/lapor/all`,
                config
            ).then(response => {
                console.log(response)
                this.setState({ data: response.data.data })
            })

            console.log(this.state.kategori,['kategori'])
        } catch (error) {
            alert(error)
        }
    }

    toDetailRiwayat(id){
        this.props.history.push({
            pathname: '/detail-riwayat',
            state: id
        })
    }

    render(){
        return(
            <Container fluid className="main-content-container">
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Riwayat Pelanggaran" subtitle="Buku Saku Online" className="text-sm-left" />
                 </Row>
                    <Row className="mb-4">
                        {this.state.data.map((item,key) => {
                            return(
                        <Col lg="5" className="mb-4">
                            <Card small className="blog-comments nana">
                                <CardBody className="p-3">
                                    <div className="">
                                        {/* Avatar */}
                                            <div className="blog-comments__avatar d-flex" style={{position: 'relative'}}>
                                                <img className="mr-3" src={`http://${item.image}`} alt="" />
                                                <div>
                                                    <h5 className="mb-1">{item.user.nama}</h5>
                                                    <p style={{fontWeight: 300}} className="mb-4">{item.pelanggaran.kategori}</p>
                                                    <div className="d-flex justify-content-between">
                                                        <a onClick={() => this.toDetailRiwayat(item._id)} className="mr-3" href="#">Lihat Detail</a>
                                                        <p style={{position: 'absolute',right: 0}} className="mb-1 ">{item.createdDate}</p>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        )
                        })}

                    </Row>
            </Container>
        )
    }
}

export default RiwayatPelanggaran;