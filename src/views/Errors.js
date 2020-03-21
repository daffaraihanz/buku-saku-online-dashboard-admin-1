import React,{Component} from "react";
import { Container, Row, Col, Card, Button, CardBody, ButtonGroup, FormInput, FormGroup, CardFooter } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import axios from 'axios'
// import ReactModal from 'react-modal';
import  { Redirect } from 'react-router-dom'

import './style/Overlay.css'
import './style/CardHover.css'

class Errors extends Component {
  constructor () {
    super();
    this.state = {
      modalHapus: true,
      modalEdit: true,
      data: [],
      idHapus: '',
      bab: ''
    };
    this.alertHapus = this.alertHapus.bind(this);
    this.alertEdit = this.alertEdit.bind(this);
    this.hapus = this.alertHapus.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.deleteBab = this.deleteBab.bind(this);
    this.updateBab = this.updateBab.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toDetail = this.toDetail.bind(this);
  }

  toDataLala = () => {
    document.location.href = "/data-lala"
    //  return <Redirect to='/data-lala'  />
  }

  toAddBab (){
    document.location.href = "/add-bab"
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

  async componentDidMount() {
    try {
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const baseUrl = 'http://3.91.42.49'

        await axios.get(`${baseUrl}/api/peraturan/all`, config).then(response => {
            console.log(response)
            this.setState({ data: response.data.data })
        })
    } catch (error) {
        console.log(error)
        alert(error)
    }
  }

  async deleteBab() {
    try {
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const baseUrl = 'http://3.91.42.49'

        await axios.delete(`${baseUrl}/api/peraturan/delete?id=${this.state.idHapus}`, config).then(response => {
            if(response.data.code === 200) {
                alert("Berhasil Hapus Admin");
                window.location.reload()
            }
        })
    } catch (error) {
        alert(error)
    }
  }

  async updateBab() {
    try {
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        let data = {
          bab: this.state.bab
        }
        const baseUrl = 'http://3.91.42.49'
        console.log(this.state)

        await axios.put(`${baseUrl}/api/peraturan/edit/bab?id=${this.state.idHapus}`,data, config).then(response => {
            if(response.data.code === 200) {
                alert("Berhasil Edit Admin");
                window.location.reload()
            }
        })
    } catch (error) {
        alert(error)
    }
  }
  
  handleChange = (event)=> {
    this.setState({[event.target.name]: event.target.value });
    console.log(event)
  }

  async toDetail(id) {
    await this.setState({
      idHapus: id
    })

    this.props.history.push({
      pathname: '/data-lala',
      state: this.state.idHapus
    })
  }


  render(){
    return(
      <>
        <Container fluid className="main-content-container px-4">
          <Row noGutters className="page-header py-4">
            <PageTitle sm="4" title="Data Pasal" subtitle="Buku Saku Online" className="text-sm-left" />
          </Row>
          <Row className="mb-2">
                <Col>
                    <div className="d-flex justify-content-end">
                        <Button theme="primary"  onClick={this.toAddBab} className="mb-2">
                            <i className="material-icons mr-1">add</i> Tambah Bab
                        </Button>
                    </div>
                </Col>
            </Row>
          <Row>
              {this.state.data.map((item,key) => {
                return(
                <Col lg="4" md="6">
                  <Card className="mb-4 nana" >
                      <CardBody  className="border-bottom" style={{ padding: 24,borderRadius: 6}}>
                        <div className="d-flex justify-content-between" style={{alignItems: 'center'}}>
                            <h6 className="mb-0 " style={{color: '#3d5170', fontWeight: '600'}}>{item.bab}</h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-5">
                          <a cl onClick={() => this.toDetail(item._id)} href="#">
                              Lihat Detail
                          </a>
                          <div>
                              <a  href="#" className="text-white" onClick={this.handleOpenModal}>
                                <Button  theme="primary" className="mr-1 mb-1 mt-1" onClick={() => this.alertEdit(item._id)}>
                                    Edit
                                </Button>
                              </a>
                              <a href="#" className="text-white">
                                <Button theme="danger" onClick={() => this.alertHapus(item._id)}>
                                Hapus
                                </Button>
                              </a>
                        </div>
                        </div>
                      </CardBody>
                  </Card>
                </Col>
                )
              })}
          </Row>
          {/* Alert */}
          <Row form className="justify-content-center">
            <Col md="6" style={{display: this.state.modalHapus ? 'none' : 'block', zIndex: 9999, position: 'fixed', top: '50%', transform: [{translateY: '-50%'}]}}>
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
                <label htmlFor="bab">Masukkan Judul Baru</label>
                <FormInput id="bab" placeholder="Judul Baru" name="bab" onChange={this.handleChange}></FormInput>
              </FormGroup>
            <Button className="btn btn-primary mr-2" onClick={this.updateBab}>Simpan</Button>
            <Button className="btn btn-danger" onClick={this.alertEdit}>Batal</Button>
            </CardBody>
              </Card>
            </Col>
          </Row>
          <div className="overlay" style={{display: this.state.modalEdit ? 'none' : 'block'}}></div>
        </Container>
        </>
    )
  }
}

export default Errors;
