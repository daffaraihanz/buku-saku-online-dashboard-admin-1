/* eslint-disable no-unused-expressions */
import React, { useEffect,useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import axios from 'axios';

const Errors = () => {
    const [data, setData] = useState({data :[]})
    useEffect( async()=>{
        const token = await window.localStorage.getItem('token')
        console.log(token)
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        const get =await  axios.get('http://3.91.42.49/api/users/admin/all',config)
        setData(get.data)
        console.log(data);
    },[])
    const deleteData = async id => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        const deleteID = await axios.delete(`http://3.91.42.49/api/users/remove?id=${id}`,config)
        if(deleteID.data === 200){
            console.log("OK")
        }
        console.log(id)
    }
    return(
        <Container fluid className="main-content-container px-4 pb-4">
            <Row className="mt-4">
                <Col>
                    <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Pasal</h6>
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
                            {data.data.map((val,index)=>(
                                <tr>
                                <td>{index + 1}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.role}</td>
                                <td>
                                    <a>Edit</a>
                                    <a onClick={()=>deleteData(val._id)}>Delete</a>

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
    )
}

export default Errors;
