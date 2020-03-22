import React, {Component} from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody,Button,ListGroup,ListGroupItem,Form,FormInput, FormSelect } from "shards-react";
import axios from 'axios'

class LaporPrestasi extends Component{
    constructor () {
        super();
        this.state = {
          data: [],
          jenis: [],
          nis: '',
          kategori: '',
          jenis_pelanggaran: ''
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDrop = this.handleDrop.bind(this)
        this.post = this.post.bind(this)
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
        // console.log(this.state.kategori)
    }
    handleDrop = async (event)=> {
        // this.setState({[event.target.name]: event.target.value });
        try {
            const baseUrl = "http://3.91.42.49";
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
            
            await axios.get(
                `${baseUrl}/api/point/kategori?kategori=${event.target.value}`,
                config
            ).then(response => {
                console.log(response)
                this.setState({ jenis: response.data.data })
            })

            console.log(this.state.kategori,['kategori'])
        } catch (error) {
            alert(error)
        }
    }

    post = async () =>{
        try {
            console.log("tryy")
            const baseUrl = "http://3.91.42.49";
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
            
            await axios.post(
                `${baseUrl}/api/lapor/prestasi`,this.state,
                config
            ).then(response => {
                console.log(response)
                if(response.data.code === 200){
                    alert("Sukses")
                }else{
                    alert("error")
                }
                // this.setState({ jenis: response.data.data })
            })

            console.log(this.state.kategori,['kategori'])
        } catch (error) {
            alert(error)
        }
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
                                        <FormSelect id="kategori" onChange={this.handleDrop} name="kategori">
                                            {this.state.data.map((item,key) => {
                                            return(
                                                <option  name="kategori">{item.kategori}</option>
                                                )

                                            })}
                                        </FormSelect>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col lg="6" md="8" className="form-group">
                                    <label htmlFor="jenis">Jenis Prestasi</label>
                                    <FormSelect id="jenis_pelanggaran" onChange={this.handleChange} name="jenis_pelanggaran">
                                        {this.state.jenis.map((item,key) => {
                                            return(
                                                <option  name="kategori">{item.jenis_pelanggaran}</option>
                                                )

                                            })}
                                    </FormSelect>
                                    </Col>
                                </Row>
                                <Button  theme="accent" onClick={this.post}>Submit</Button>
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