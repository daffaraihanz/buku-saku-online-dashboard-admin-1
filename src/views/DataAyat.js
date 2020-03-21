import React, {Component} from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody,Button,InputGroupAddon,FormGroup,FormInput } from "shards-react";
import PageTitle from "../components/common/PageTitle";

class DataAyat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalHapus: true,
            modalEdit: true,
        }
        this.hapus = this.alertHapus.bind(this);
        this.alertHapus = this.alertHapus.bind(this);
        this.alertEdit = this.alertEdit.bind(this);
    }

    alertHapus(id){
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

      hapus() {
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

      toAddAyat(){
        document.location.href = "/add-ayat"
    }
    render(){
        return(
            <Container fluid className="main-content-container px-4">
                 <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Daftar Ayat" subtitle="Buku Saku Online" className="text-sm-left" />
                </Row>
                <Row className="mb-2">
                    <Col>
                        <div className="d-flex justify-content-end">
                            <Button theme="primary"  onClick={this.toAddAyat} className="mb-2">
                                <i className="material-icons mr-1">add</i> Tambah Ayat
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row className="px-3">
                    <table className="table mb-0">
                    <thead className="bg-primary">
                    <tr>
                        <th scope="col" className="border-0 text-white">
                            No.
                        </th>
                        <th scope="col" className="border-0 text-white">
                            Isi Ayat
                        </th>
                        <th scope="col" className="border-0 text-white">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia similique non ipsam est doloribus adipisci esse. </td>
                        <td>
                        <Button onClick={this.alertEdit} theme="primary" className="mb-2 mr-2">
                            Edit
                        </Button>
                        <Button onClick={this.alertHapus}theme="danger" className="mb-2">
                            Delete
                        </Button>
                        </td>
                    </tr>
                </tbody>
                </table>
            </Row>
             {/* Alert */}
             <Row form className="justify-content-center">
                <Col md="6" style={{display: this.state.modalHapus ? 'none' : 'block', zIndex: 9999, position: 'fixed', top: '30%', transform: [{translateY: '-50%'}]}}>>
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
                <Col lg="6" md="6" style={{display: this.state.modalEdit ? 'none' : 'block', zIndex: 9999, position: 'relative',position: 'fixed', top: '30%', transform: [{translateY: '-50%'}]}}>
                    <Card>
                    <CardBody>
                    <FormGroup>
                        <label htmlFor="judul">Masukkan Ayat Baru</label>
                        <textarea style={{width: '100%'}} className="mb-3" id="judul" placeholder="Ayat Baru"></textarea>
                    </FormGroup>
                    <div className="mt-2">
                        <Button className="btn btn-primary mr-2" onClick={this.alertEdit}>Simpan</Button>
                        <Button className="btn btn-danger" onClick={this.alertEdit}>Batal</Button>
                    </div>
                </CardBody>
                    </Card>
                </Col>
            </Row>
            <div className="overlay" style={{display: this.state.modalEdit ? 'none' : 'block'}}></div>
            </Container>
        )
    }
}

export default DataAyat;