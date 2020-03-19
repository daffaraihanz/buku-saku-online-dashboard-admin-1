import React,{Component} from "react";
import { Container, Row, Col, Card, Button, CardBody, ButtonGroup, FormInput } from "shards-react";
import PageTitle from "../components/common/PageTitle";
// import ReactModal from 'react-modal';
import  { Redirect } from 'react-router-dom'

class Errors extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    // this.toDataLala();
  }

  toDataLala = () => {
    document.location.href = "/data-lala"
    //  return <Redirect to='/data-lala'  />
  }


  render(){
    return(
        <Container>
          <Row noGutters className="page-header py-4">
            <PageTitle sm="4" title="Data Pasal" subtitle="Buku Saku Online" className="text-sm-left" />
          </Row>
          <Row>
            <Col lg="4" md="6">
              <Card className="mb-4">
                <a href="">
                  <CardBody  className="border-bottom" style={{ padding: 20,background: 'white',borderRadius: 6}}>
                    <div className="d-flex justify-content-between" style={{alignItems: 'center'}}>
                      <a onClick={this.toDataLala} href="#">
                        <h6   className="mb-0" style={{color: '#08022A', fontWeight: '600'}}>BAB I <br/> Pendahuluan</h6>
                      </a>
                        <div>
                            <a href="#" className="text-white" onClick={this.handleOpenModal}>
                              <Button  theme="primary" className="mr-1">
                                  Edit
                              </Button>
                            </a>
                            <a href="#" className="text-white">
                              <Button theme="danger">
                              Hapus
                              </Button>
                            </a>
                      </div>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
          </Row>
        </Container>
    )
  }
}

export default Errors;
