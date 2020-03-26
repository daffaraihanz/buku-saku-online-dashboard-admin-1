import React, {Component,Fragment} from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    ButtonGroup,
    Button,
    Row,
    Col
  } from "shards-react";

class Activity extends Component {
    render(){
        return(
            <Card>
                <CardHeader className="border-bottom">
                    <h6 className="m-0">Aktivitas terbaru</h6>
                </CardHeader>
                <CardBody className="pt-0">
                    <div className="mt-3 rara">
                        <div className="d-flex">
                            <h6 className="m-0">Esmeralda</h6>
                            <p className="mx-2 my-0">-</p>
                            <h6 className="m-0" style={{color: "#B1AEBF"}}>Login</h6>
                        </div>
                        <small style={{fontWeight: 300}}>2020-03-17 03:51:11</small>
                    </div>
                    <hr/>
                    <div className="mt-3 rara">
                        <div className="d-flex">
                            <h6 className="m-0">Esmeralda</h6>
                            <p className="mx-2 my-0">-</p>
                            <h6 className="m-0" style={{color: "#B1AEBF"}}>Login</h6>
                        </div>
                        <small style={{fontWeight: 300}}>2020-03-17 03:51:11</small>
                    </div>
                </CardBody>
            </Card>
        )
    }
}

export default Activity;