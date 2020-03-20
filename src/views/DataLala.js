import React, {Component} from 'react';
import { Container, Row, Col, Card, Button, CardBody, ButtonGroup, FormInput, FormGroup, CardFooter } from "shards-react";
import PageTitle from "../components/common/PageTitle";

class DataLala extends Component{
    constructor () {
        super();
        this.state = {
          modalHapus: true,
          modalEdit: true
        };
        this.alertHapus = this.alertHapus.bind(this);
        this.alertEdit = this.alertEdit.bind(this);
      }

    alertHapus (){
        if( this.state.modalHapus === true){
          this.setState({
            modalHapus: false
          })
        }else if(this.state.modalHapus == false){
            this.setState({
              modalHapus: true
            })
        }
      }
    
      alertEdit (){
        if( this.state.modalEdit === true){
          this.setState({
            modalEdit: false
          })
        }else if(this.state.modalEdit == false){
            this.setState({
              modalEdit: true
            })
        }
      }

      toDataAyat(){
        document.location.href = './data-ayat'
      }

    render(){
        return(
            <Container fluid className="main-content-container px-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Data Pasal" subtitle="Buku Saku Online" className="text-sm-left" />
                 </Row>
                 <Row className="mb-2">
                    <Col>
                        <div className="d-flex justify-content-end">
                            <Button theme="primary"  onClick={this.moveToAdd} className="mb-2">
                                <i className="material-icons mr-1">add</i> Tambah Pasal
                            </Button>
                        </div>
                    </Col>
                </Row>
                 <Row>
                    <Col lg="4" md="6">
                    <Card className="mb-4 nana">
                        <CardBody  className="border-bottom" style={{ padding: 24,background: 'white',borderRadius: 6}}>
                            <div className="d-flex justify-content-between" style={{alignItems: 'center'}}>
                              <a onClick={this.toDataLala} href="#">
                                  <h6 className="mb-0" style={{color: '#3d5170', fontWeight: '600'}}>PASAL 1 Tempat Pelaksanaan KBM</h6>
                              </a>
                            </div>
                              <div className="d-flex justify-content-between align-items-center mt-5">
                                <a href="#" onClick={this.toDataAyat}>
                                  Lihat Detail
                                </a>
                                <div>
                                    <a href="#" className="text-white" onClick={this.handleOpenModal}>
                                      <Button  theme="primary" className="mr-1 mb-1 mt-1" onClick={this.alertEdit}>
                                          Edit
                                      </Button>
                                    </a>
                                    <a href="#" className="text-white">
                                      <Button theme="danger" onClick={this.alertHapus}>
                                      Hapus
                                      </Button>
                                    </a>
                                </div>
                              </div>
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
                {/* Alert */}
              <Row form className="justify-content-center" style={{display: this.state.modalHapus ? 'none' : 'flex', zIndex: 9999, position: 'relative'}}>
                <Col md="6">
                  <Card>
                    <CardBody className="text-center">
                  <p>Apakah Anda yakin ingin menghapus data?</p>
                <Button className="btn btn-danger mr-2" onClick={this.hapus}>Yes</Button>
                <Button className="btn btn-primary" onClick={this.alertHapus}>No</Button>
                </CardBody>
                  </Card>
                </Col>
              </Row>
          <div className="overlay" style={{display: this.state.modalHapus ? 'none' : 'block'}}></div>
          {/* End Alert */}
          {/* Alert Edit */}
            <Row form className="justify-content-center">
              <Col lg="4" md="6" style={{display: this.state.modalEdit ? 'none' : 'block', zIndex: 9999, position: 'relative',position: 'fixed', top: '30%', transform: [{translateY: '-50%'}]}}>
                <Card>
                  <CardBody>
                <FormGroup>
                  <label htmlFor="judul">Masukkan Judul Baru</label>
                  <FormInput id="judul" placeholder="Judul Baru"></FormInput>
                </FormGroup>
              <Button className="btn btn-primary mr-2" onClick={this.alertEdit}>Simpan</Button>
              <Button className="btn btn-danger" onClick={this.alertEdit}>Batal</Button>
              </CardBody>
                </Card>
              </Col>
            </Row>
          <div className="overlay" style={{display: this.state.modalEdit ? 'none' : 'block'}}></div>
            </Container>
        )
    }
}

export default DataLala;