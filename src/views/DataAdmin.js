/* eslint-disable no-unused-expressions */
import React, { useEffect,useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import axios from 'axios';

const Errors = () => {
    const [data, setData] = useState({data :[]})
    const [ID,setID] = useState();
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
                            </tr>
                        </thead>
                        <tbody>
                            {data.data.map((val,index)=>(
                                <tr>
                                <td>{index + 1}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
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
