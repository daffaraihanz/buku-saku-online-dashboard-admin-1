/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import axios from 'axios';

class DataAdmin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
  
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

    async delete(id) {
        try {
            const token = localStorage.getItem('token')
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const baseUrl = 'http://3.91.42.49'

            await axios.delete(`${baseUrl}/api/users/remove?id=${id}`, config).then(response => {
                if(response.data.code === 200) {
                    alert("Berhasil Hapus Admin")
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

    render() {
        return(
            <Container fluid className="main-content-container px-4 pb-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Daftar Admin" subtitle="Buku Saku Online" className="text-sm-left" />
                </Row>
                <Row className="mt-4">
                    <Col>
                        <Card small className="mb-4">
                        <CardHeader className="border-bottom">
                            <div className="d-flex justify-content-between">
                                <h6 className="m-0">Admin</h6>
                                <Button onClick={this.moveToAdd} pill outline size="sm" className="mb-2">
                                    <i className="material-icons mr-1">person_add</i> Add
                                </Button>
                            </div>
                            
                        </CardHeader>

                        <CardBody className="p-0 pb-3">
                            <table className="table mb-0">
                            <thead className="bg-light">
                                <tr>
                                <th scope="col" className="border-0">
                                    No.
                                </th>
                                <th scope="col" className="border-0">
                                    Nama
                                </th>
                                <th scope="col" className="border-0">
                                    Email
                                </th>
                                <th scope="col" className="border-0">
                                    Role
                                </th>
                                <th scope="col" className="border-0">
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
                                        <Button onClick={() => this.moveToEdit(val._id)} pill outline size="sm" className="mb-2">
                                            <i className="material-icons mr-1">create</i> Edit
                                        </Button>
                                        <Button onClick={() => this.delete(val._id)} pill outline size="sm" className="mb-2">
                                            <i className="material-icons mr-1">delete</i> Delete
                                        </Button>
                                    </td>
                                    </tr>
                                ))}
                            </tbody>
                            </table>
                        </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )}
}

export default DataAdmin;
