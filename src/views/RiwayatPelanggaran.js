import React, {Component, Fragment} from 'react';
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
                                    <Fragment>
                                        <Col lg="3" className="mb-4" >
                                            <div className="card card-size riwayat-height nana">
                                                <img className="card-img-top card-image" src={`http://${item.image}`}></img>
                                                <div className="card-body">
                                                    <p className="card-name max-length">{item.user.nama}</p>
                                                    <small className="mb-1">{item.createdDate}</small>
                                                    <p className="card-desc max-length">
                                                    {item.pelanggaran.kategori}
                                                    </p>
                                                    <a onClick={() => this.toDetailRiwayat(item._id)} className="mr-3 mb-5" href="#">Lihat Detail</a>
                                                </div>
                                            </div>
                                        </Col>
                                    </Fragment>
                            )
                            })}
                        </Row>
                    <Row>
                </Row>
            </Container>
        )
    }
}

export default RiwayatPelanggaran;