import React, {Component} from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody,Button,ListGroup,ListGroupItem,Form,FormInput } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import axios from 'axios'
import './style/Overlay.css'

class AddDetailKategori extends Component{
    constructor(props) {
        super(props)
        this.state = {
            kode: '',
            jenis_pelanggaran: '',
            point: '',
            kategori: '',
            tag: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.addPoint = this.addPoint.bind(this);
    }

    handleChange = (event)=> {
        this.setState({[event.target.name]: event.target.value });
        console.log(event)
    }

    async addPoint() {
        try {
            const baseUrl = 'http://3.91.42.49'
            const token = localStorage.getItem('token')
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            const query = await axios.post(`${baseUrl}/api/point/create`,this.state, config)
            console.log(query)
            if(query.data.code <= 200){
                alert('Sukses Tambah Kelas')
                document.location.href = "/daftar-point"                  
            } else {
              alert('ERROR Ada yang salah')
            }
          } catch (error) {
            alert('Ada yang salah')
        }
    }

    toDetailKategori(){
        document.location.href = "/daftar-point"
    }
    render(){
        return(
            <Container fluid className="main-content-container">
                <Row noGutters className="page-header py-4">
                    {/* <PageTitle sm="4" title="Tambah Kelas" subtitle="Buku Saku Online" className="text-sm-left" /> */}
                    <Button onClick={this.toDetailKategori} className="mb-2 btn-back text-primary">
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
                                        <label htmlFor="feFirstName">Kode</label>
                                        <FormInput
                                            className="mb-3"
                                            name="kode"
                                            placeholder="Masukan Kode"
                                            // value={this.state.name}
                                            onChange={this.handleChange}
                                        />

                                        <label htmlFor="feFirstName">Jenis Pelanggaran</label>
                                        <FormInput
                                            className="mb-3"
                                            name="jenis_pelanggaran"
                                            placeholder="Masukan Jenis Pelanggaran"
                                            // value={this.state.name}
                                            onChange={this.handleChange}
                                        />

                                        <label htmlFor="feFirstName">Point</label>
                                        <FormInput
                                            className="mb-3"
                                            name="point"
                                            placeholder="Masukan Point"
                                            // value={this.state.name}
                                            onChange={this.handleChange}
                                        />

                                        <label htmlFor="feFirstName">Kategori</label>
                                        <FormInput
                                            className="mb-3"
                                            name="kategori"
                                            placeholder="Masukan Kategori"
                                            // value={this.state.name}
                                            onChange={this.handleChange}
                                        />

                                        <label htmlFor="feFirstName">Tag</label>
                                        <FormInput
                                            className="mb-3"
                                            name="tag"
                                            placeholder="Pilih pelanggaran atau prestasi"
                                            // value={this.state.name}
                                            onChange={this.handleChange}
                                        />
                                    </Col>
                                </Row>
                                <Button  theme="accent" onClick={this.addPoint}>Tambah Daftar Point</Button>
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

export default AddDetailKategori;