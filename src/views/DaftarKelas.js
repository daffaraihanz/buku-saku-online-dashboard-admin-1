import React, {Component} from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody,Button,InputGroupAddon } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import axios from 'axios';

class DaftarKelas extends Component{
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            kelas: ''
        }

        this.componentDidMount = this.componentDidMount.bind(this)
        this.setKelas = this.setKelas.bind(this)
    }

    async componentDidMount() {
        try {
            const baseUrl = "http://3.91.42.49";
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
            let jurusan = this.props.location.state
            
            await axios.get(
                `${baseUrl}/api/kelas/all?jurusan=${jurusan}`,
                config
            ).then(response => {
                this.setState({ data: response.data.data})
            })
        } catch (error) {
            alert(error)
        }
    }

    async setKelas(kelas) {
        await this.setState({ kelas: kelas})

        this.props.history.push({
          pathname: '/daftar-siswa',
          state: this.state.kelas
        })
    }
    render(){
        return(
            <Container fluid className="main-content-container px-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Daftar Siswa" subtitle="Buku Saku Online" className="text-sm-left" />
                </Row>
                <Row>
                    {this.state.data.map((item,key) => {
                        return(
                            <Col lg="4">
                                <Card  className="mb-5">
                                    <a href="#" onClick={() => this.setKelas(item.kelas)}>
                                        <CardBody className="p-4" style={{ background: '#006CFF',borderRadius: 6}}>
                                            <h6 className="mb-4" style={{color: '#fff', fontSize: '1.4rem', fontWeight: 'bold'}} >{item.kelas}</h6>
                                            <p className="" style={{color: '#fff', fontWeight: '500'}} >{item.wali_kelas}</p>
                                        </CardBody>
                                    </a>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        )
    }
}

export default DaftarKelas;