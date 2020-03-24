import React, { Component } from "react";
import {
  Card,
  CardHeader,
  Row,
  Col,
  Form,
  FormInput,
  Button
} from "shards-react";
import  { Redirect } from 'react-router-dom'
import axios from 'axios';

class Login extends Component {
constructor(props) {
    super(props)
    this.state = {
        email : '',
        password : '',
        isLogin : false,
        login : false
    }
    this.login = this.login.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
}

handleInputChange = (event) => {
    let key = event.target.name;
    let value = event.target.value;
    let model = {
      [key] : value,
      "isLogin" : true
    }
    this.setState(model)
}

login = (e) => {
    const baseUrl = "http://3.91.42.49/api/users/admin/login";
    
    axios.post(baseUrl, this.state)
    .then(function (response) {
      console.log(response.data)
        if(response.data.code === 200) {
        window.localStorage.setItem('isLogin', true)
        window.localStorage.setItem('token', response.data.token)
        document.location.href = "/dashboard"
        return <Redirect to='/dashboard'  />
      } else {
        alert("GAGAL LOGIN")
      }
    }).then(this.setState({ login : true}))
}


render(){
return(
    <Row className="py-5 justify-content-center m-0">
        <Col lg="4" md="7" style={{ marginTop:100 }}>
            <Card small className="mb-4">
                <CardHeader className="border-bottom text-center">
                    <h6 className="m-0">Login</h6>
                </CardHeader>
                <Col>
                    <Form className="p-2 py-4" onSubmit={this.login}>
                            <label htmlFor="feEmail">Email</label>
                            <FormInput
                            style={{ width: "100%",height: 50,fontSize:14 }}
                                type="email"
                                id="feEmail"
                                placeholder="Email Address"
                                onChange={() => {}}
                                autoComplete="email"
                                name="email"
                                onChange={this.handleInputChange}
                                className="mb-4"
                            />
                            <label htmlFor="fePassword">Password</label>
                            <FormInput
                            style={{ width: "100%",height: 50,fontSize:14 }}
                                type="password"
                                id="fePassword"
                                name="password"
                                placeholder="Password"
                                // onChange={() => {}}
                                autoComplete="current-password"
                                onChange={this.handleInputChange} 
                                className="mb-4"
                            />
                        <Button 
                            onClick={this.login}
                            className="mt-2"
                            style={{ width: "100%",height: 50,fontSize:14 }}
                        >Login</Button>
                    </Form>
                </Col>
            </Card>
        </Col>
    </Row>

    )
}
}

export default Login;
