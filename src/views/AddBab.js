import React, {Component} from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody,Button,ListGroup,ListGroupItem,Form,FormInput } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import axios from 'axios'
import './style/Overlay.css'

class AddSiswa extends Component{
    constructor(props) {
        super(props)
        this.state = {
            kelas: '',
            wali_kelas: '',
            jurusan: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.addKelas = this.addKelas.bind(this);
    }

    handleChange = (event)=> {
        this.setState({[event.target.name]: event.target.value });
        console.log(event)
    }

    async addKelas() {
        try {
            const baseUrl = 'http://3.91.42.49'
            const token = localStorage.getItem('token')
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            let model = {
                kelas: this.state.kelas,
                wali_kelas: this.state.wali_kelas,
                jurusan: this.state.jurusan
            }
            console.log(model)
            const query = await axios.post(`${baseUrl}/api/kelas/create`,model, config)
            console.log(query)
            if(query.data.code <= 200){
                alert('Sukses Tambah Kelas')
                document.location.href = "/data-siswa"                  
            } else {
              alert('ERROR Ada yang salah')
            }
          } catch (error) {
            alert('Ada yang salah')
        }
    }

    toDataPasal(){
        document.location.href = "/data-pasal"
    }
    render(){
        return(
            <Container fluid className="main-content-container">
                <Row noGutters className="page-header py-4">
                    {/* <PageTitle sm="4" title="Tambah Kelas" subtitle="Buku Saku Online" className="text-sm-left" /> */}
                    <Button onClick={this.toDataPasal} className="mb-2 btn-back text-primary">
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
                                    <label htmlFor="feFirstName">Judul</label>
                                    <FormInput
                                        name="kelas"
                                        placeholder="contoh: BAB I Pendahuluan"
                                        // value={this.state.name}
                                        onChange={this.handleChange}
                                    />
                                    </Col>
                                </Row>
                                <Button  theme="accent" onClick={this.addKelas}>Tambah Bab</Button>
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