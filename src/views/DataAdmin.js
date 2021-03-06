/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import axios from 'axios';
import './style/Overlay.css'

class DataAdmin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            modalHapus: true,
            idHapus: ''
        };
        this.alertHapus = this.alertHapus.bind(this);
  
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    async componentDidMount() {
        try {
            const token = localStorage.getItem('token')
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const baseUrl = 'http://3.91.42.49'

            await axios.get(`${baseUrl}/api/users/admin/all`, config).then(response => {
                this.setState({ data: response.data.data })
            })
        } catch (error) {
            alert(error)
        }
    }

    async delete() {
        try {
            const token = localStorage.getItem('token')
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const baseUrl = 'http://3.91.42.49'

            await axios.delete(`${baseUrl}/api/users/remove?id=${this.state.idHapus}`, config).then(response => {
                if(response.data.code === 200) {
                    alert("Berhasil Hapus Admin");
                    window.location.reload()
                }
            })
        } catch (error) {
            alert(error)
        }
    }

    moveToAdd = () =>{
        document.location.href = "/add-admin/add"
    }
    
    moveToEdit = id =>{
        document.location.href = `/add-admin/${id}`
    }

    alertHapus (id){
        if( this.state.modalHapus === true){
          this.setState({
            modalHapus: false
          })
        }else if(this.state.modalHapus == false){
            this.setState({
              modalHapus: true
            })
        }

        this.setState({
            idHapus: id
        })
      }

    render() {
        return(
            <Container fluid className="main-content-container px-4">
                <Row noGutters className="page-header pt-4">
                    <PageTitle sm="4" title="Daftar Admin" subtitle="Buku Saku Online" className="text-sm-left" />
                </Row>
                <Row className="mt-4">
                    <Col>
                            <div className="d-flex justify-content-end">
                                <Button theme="primary"  onClick={this.moveToAdd} className="mb-2">
                                    <i className="material-icons mr-1">person_add</i> Tambah Admin
                                </Button>
                            </div>
                            
                            <table className="table mb-0">
                            <thead className="bg-primary">
                                <tr>
                                <th scope="col" className="border-0 text-white">
                                    No.
                                </th>
                                <th scope="col" className="border-0 text-white">
                                    Nama
                                </th>
                                <th scope="col" className="border-0 text-white">
                                    Email
                                </th>
                                <th scope="col" className="border-0 text-white">
                                    Role
                                </th>
                                <th scope="col" className="border-0 text-white">
                                    Action
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map((val,index)=>(
                                    <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.role}</td>
                                    <td>
                                        <Button onClick={() => this.moveToEdit(val._id)} theme="primary" className="mb-2 mr-2">
                                            Edit
                                        </Button>
                                        <Button onClick={() => this.alertHapus(val._id)} theme="danger" className="mb-2">
                                            Delete
                                        </Button>
                                    </td>
                                    </tr>
                                ))}
                            </tbody>
                            </table>
                    </Col>
                </Row>
                {/* Alert */}
          <Row form className="justify-content-center">
            <Col md="6" style={{display: this.state.modalHapus ? 'none' : 'block', zIndex: 9999, position: 'fixed', top: '50%', transform: [{translateY: '-50%'}]}}>
              <Card>

                <CardBody className="text-center">

              <p>Apakah Anda yakin ingin menghapus data?</p>

            <Button className="btn btn-danger mr-2" onClick={() => this.delete()}>Yes</Button>

            <Button className="btn btn-primary" onClick={this.alertHapus}>No</Button>

            </CardBody>

              </Card>
            </Col>
          </Row>
          <div className="overlay" style={{display: this.state.modalHapus ? 'none' : 'block'}}></div>
          {/* End Alert */}
            </Container>
        )}
}

export default DataAdmin;
