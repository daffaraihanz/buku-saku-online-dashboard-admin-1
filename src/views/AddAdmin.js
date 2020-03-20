import React,{set} from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button,
  Container
} from "shards-react";
import axios from "axios";
import PageTitle from "../components/common/PageTitle";


export default class AddAdmin extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: "",
            email: "",
            password: "",
            update: false,
            id: "",
            role:"admin"
        }
    }
    async componentDidMount(){
        let url = window.location.href;
        let id = url.replace('http://localhost:3000/add-admin/','');
        const baseUrl = 'http://3.91.42.49'
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        if(id !== "add"){
            this.setState({update: true, id: id})    
           const getID= await axios.get(`${baseUrl}/api/users/get?id=${id}`,config)
           console.log(getID)
           if(getID.data.code ===200){
               this.setState({
                   name: getID.data.data.name,
                   email: getID.data.data.email
               })
           }
        }
    }
    handleChange = (event)=> {
        this.setState({[event.target.name]: event.target.value });
        console.log(event)
    }
    UpdateAdd = async () => {
        console.log(this.state)
        const baseUrl = 'http://3.91.42.49'
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        if(this.state.update){
            const update = await axios.put(`${baseUrl}/api/users/admin/edit?id=${this.state.id}`,this.state
            ,config)
            if(update.data.code === 200){
                alert('Succsess')
                document.location.href = "/data-admin"
            }
        }else{
            const add = await axios.post(`${baseUrl}/api/users/admin/register`,this.state,config)
            if(add.data.code === 200){
                alert('Succsess')
                document.location.href = "/data-admin"
            }
        }
    }

    toDataAdmin(){
        document.location.href = "/data-admin"
    }
    render(){
        return(
            <Container fluid className="main-content-container px-4 pb-4">
                 <Row noGutters className="page-header py-4">
                    {/* <PageTitle sm="4" title="Tambah Kelas" subtitle="Buku Saku Online" className="text-sm-left" /> */}
                    <Button onClick={this.toDataAdmin} className="mb-2 btn-back text-primary">
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
                                    {/* First Name */}
                                    <Col md="6" className="form-group">
                                    <label htmlFor="feFirstName">First Name</label>
                                    <FormInput
                                        name="name"
                                        placeholder="First Name"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                    />
                                    </Col>
                                </Row>
                                <Row form>
                                    {/* Email */}
                                    <Col md="6" className="form-group">
                                    <label htmlFor="feEmail">Email</label>
                                    <FormInput
                                        type="email"
                                        id="feEmail"
                                        name="email"
                                        placeholder="Email Address"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        autoComplete="email"
                                    />
                                    </Col>
                                    {/* Password */}
                                    
                                </Row>
                                <Row form>
                                    <Col md="6" className="form-group">
                                    <label htmlFor="fePassword">Password</label>
                                    <FormInput
                                        type="password"
                                        id="fePassword"
                                        name="password"
                                        onChange={this.handleChange}
                                        placeholder="Password"
                                        value={this.state.password}
                                        autoComplete="current-password"
                                    />
                                    </Col>
                                </Row>
                                <Button onClick={this.UpdateAdd} theme="accent">{this.state.update ? "Update Account" : "Add Account"}</Button>
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