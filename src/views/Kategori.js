import React, {Component} from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody,Button,ListGroup,ListGroupItem,FormGroup,FormInput } from "shards-react";
import PageTitle from "../components/common/PageTitle";

class Kategori extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            kelas: '',
            wali_kelas: '',
            jurusan: '',
            modalHapus: true,
            modalEdit: true,
            idHapus: ''
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
    
    alertEdit(id){
        if( this.state.modalEdit === true){
          this.setState({
            modalEdit: false
          })
        }else if(this.state.modalEdit == false){
            this.setState({
              modalEdit: true
            })
        }
        
        this.setState({
            idHapus: id
        })
    }

    toDetailKategori(){
        document.location.href= "/detail-kategori"
    }
    
    render(){
        return(
            <Container fluid className="main-content-container">
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Daftar Point" subtitle="Buku Saku Online" className="text-sm-left" />
                 </Row>
                 <Row> 
                    <Col lg="4" md="6">
                        <Card  className="mb-4">
                            <a href="#" onClick={this.toDetailKategori}>
                                <CardBody className="bg-primary"  style={{borderRadius: 6}}>
                                    <h6 className="m-0" style={{color: '#fff', fontWeight: '600'}}>Berpakaian</h6>
                                </CardBody>
                            </a>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Kategori;