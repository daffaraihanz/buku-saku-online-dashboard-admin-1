import React, {Component} from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody,Button,ListGroup,ListGroupItem,Form,FormInput, FormSelect } from "shards-react";
import axios from 'axios'

class LaporPrestasi extends Component{
    constructor () {
        super();
        this.state = {
          data: [],
          nis: '',
          kategori: '',
          jenis_pelanggaran: ''
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
                `${baseUrl}/api/point/kategori/prestasi/list`,
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

    handleChange = (event)=> {
        this.setState({[event.target.name]: event.target.value });
        console.log(event)
    }

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
                                            {this.state.data.map((item,key) => {
                                            return(
                                                <option onChange={this.handleChange} name="kategori">{item.kategori}</option>
                                                )

                                            })}
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