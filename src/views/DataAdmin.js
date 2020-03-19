/* eslint-disable no-unused-expressions */
import React, { useEffect,useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Alert } from "shards-react";
import axios from 'axios';

const Errors = () => {
    const [data, setData] = useState({data :[]})
    useEffect( async()=>{
        const token = await window.localStorage.getItem('token')
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        const get =await  axios.get('http://3.91.42.49/api/users/admin/all',config)
        if(get.data.code ===200){
            setData(get.data)
        }else{
            alert("Something Went Wrong")
        }        
    },[])
    const deleteData = async id => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        const deleteID = await axios.delete(`http://3.91.42.49/api/users/remove?id=${id}`,config)
        if(deleteID.data.code === 200){
            alert("Sucsess Delete")
        }
        const get =await  axios.get('http://3.91.42.49/api/users/admin/all',config)
        if(get.data.code ===200){
            setData(get.data)
        }else{
            alert("Something Went Wrong")
        }       
    }
    return(
        <Container fluid className="main-content-container px-4 pb-4">
            <Row className="mt-4">
                <Col>
                    <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Admin</h6>
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
                                <tr key={index}>
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
