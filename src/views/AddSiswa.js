import React, {Component} from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody,Button,ListGroup,ListGroupItem,Form,FormInput } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import axios from 'axios'
import bcrypt from 'bcryptjs'

class AddSiswa extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            nis: '',
            point: '',
            email: '',
            class: '',
            password: '',
            role: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }
    handleChange = (event)=> {
        this.setState({[event.target.name]: event.target.value });
        console.log(event)
    }

    async registerUser() {
        try {
            const baseUrl = 'http://3.91.42.49'
            const token = localStorage.getItem('token')
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            let model = {
                name: this.state.name,
                nis: this.state.nis,
                point: this.state.point,
                email: `${this.state.nis}@student.smktelkom-pwt.sch.id`,
                class: this.state.class,
                password: bcrypt.hashSync(this.state.nis,10)
            }
  
            const query = await axios.post(`${baseUrl}/api/users/register`,model, config)
            console.log(query)
            if(query.data.code <= 200){
                alert('Sukses Register Siswa')
                document.location.href = "/data-siswa"                  
            } else {
              alert('ERROR Ada yang salah')
            }
          } catch (error) {
            alert('Ada yang salah')
        }
    }

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
                                        name="nis"
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
                                        name="name"
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
                                        name="point"
                                        onChange={this.handleChange}
                                        placeholder="Masukan poin"
                                        // value={this.state.password}
                                        // =
                                    />
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col lg="6" md="8" className="form-group">
                                    <label htmlFor="fePassword">Kelas</label>
                                    <FormInput
                                        // type="password"
                                        // id="fePassword"
                                        name="class"
                                        onChange={this.handleChange}
                                        placeholder="Masukan kelas"
                                        // value={this.state.password}
                                        // =
                                    />
                                    </Col>
                                </Row>
                                <Button  theme="accent" onClick={this.registerUser}>Tambah Siswa</Button>
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