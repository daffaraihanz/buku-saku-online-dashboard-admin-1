import React, {Component} from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody,Button,Form, FormInput } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import axios from 'axios';
import './style/Overlay.css'

class DaftarSiswa extends Component{
    constructor(props) {
      super(props)
      this.state = {
          data: [],
          modalHapus: true,
          modalEdit: true,
          idHapus: '',
          name: '',
          nis: '',
          point: ''
      };

      this.componentDidMount = this.componentDidMount.bind(this);
      this.alertHapus = this.alertHapus.bind(this);
      this.deleteSiswa = this.deleteSiswa.bind(this);
      this.alertEdit = this.alertEdit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.updateSiswa = this.updateSiswa.bind(this);
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
      if(this.state.modalEdit === true){
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

    handleChange = (event)=> {
      this.setState({[event.target.name]: event.target.value });
      console.log(event.target.value)
    }

    async updateSiswa() {
        try {
          const baseUrl = 'http://3.91.42.49'
          const token = localStorage.getItem('token')
          const config = {
              headers: {
                  Authorization: `Bearer ${token}`
              }
          }

          const update = await axios.put(`${baseUrl}/api/users/edit?id=${this.state.idHapus}`,this.state, config)
          console.log(this.state.idHapus,['ID'])
          console.log(update)
          if(update.data.code <= 200){
              alert('Succsess')
          } else {
            alert('ERROR Ada yang salah')
          }
        } catch (error) {
          alert('Ada yang salah')
        }
    } 

    async deleteSiswa() {
      try {
          const token = localStorage.getItem('token')
          const config = {
              headers: {
                  Authorization: `Bearer ${token}`
              }
          }
          const baseUrl = 'http://3.91.42.49'
  
          await axios.delete(`${baseUrl}/api/users/remove?id=${this.state.idHapus}`, config).then(response => {
              if(response.data.code === 200) {
                  alert("Berhasil Hapus Siswa");
                  document.location.href = "/data-siswa"                  
              }
          })
      } catch (error) {
          alert(error)
      }
    }

    async componentDidMount() {
      try {
        const baseUrl = "http://3.91.42.49";
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        let kelas = this.props.location.state
        
        await axios.get(
            `${baseUrl}/api/kelas?kelas=${kelas}`,
            config
        ).then(response => {
            this.setState({ data: response.data.data })
            console.log(this.state)
        })
      } catch (error) {
          alert(error)
      }
    }
    render(){
        return(
          <Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Daftar Siswa" subtitle="Buku Saku Online" className="text-sm-left" />
                </Row>
                <Row className="p-3">
                <table className="table mb-0">
                <thead className="bg-primary">
                <tr>
                  <th scope="col" className="border-0 text-white">
                    No.
                  </th>
                  <th scope="col" className="border-0 text-white">
                    NIS
                  </th>
                  <th scope="col" className="border-0 text-white">
                    Nama
                  </th>
                  <th scope="col" className="border-0 text-white">
                    Poin
                  </th>
                  <th scope="col" className="border-0 text-white">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>

              {this.state.data.map((item,key) => {
                return(
                  <>
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{item.nis}</td>
                    <td>{item.name}</td>
                    <td>{item.point}</td>
                    <td>
                      <Button  theme="primary" className="mb-2 mr-2" onClick={() => this.alertEdit(item._id)}>
                          Edit
                      </Button>
                      <Button  theme="danger" className="mb-2" onClick={() => this.alertHapus(item._id)}>
                          Delete
                      </Button>
                    </td>
                  </tr>
                  </>
                )
                })}
              </tbody>
            </table>
          </Row>
          {/* Alert */}
          <Row form className="justify-content-center">
            <Col md="6" style={{display: this.state.modalHapus ? 'none' : 'block', zIndex: 9999, position: 'fixed', top: '50%', transform: [{translateY: '-50%'}]}}>
              <Card>
                <CardBody className="text-center">
              <p>Apakah Anda yakin ingin menghapus data?</p>
            <Button className="btn btn-danger mr-2" onClick={this.deleteSiswa}>Yes</Button>
            <Button className="btn btn-primary" onClick={this.alertHapus}>No</Button>
            </CardBody>
              </Card>
            </Col>
          </Row>
          <div className="overlay" style={{display: this.state.modalHapus ? 'none' : 'block'}}></div>
          {/* End Alert */}

          {/* Alert */}
          <Row form className="justify-content-center">
            <Col md="6" style={{display: this.state.modalEdit ? 'none' : 'block', zIndex: 9999, position: 'fixed', top: '30%', transform: [{translateY: '-50%'}]}}>
              <Button  theme="danger" className="mb-2" onClick={this.alertEdit}>
                Close
              </Button>
              <Card className="p-5">
                <Form>
                <Row form>
                  {/* NIS */}
                  <Col md="6" className="form-group">
                   <label htmlFor="feFirstName">NIS</label>
                   <FormInput
                      name="nis"
                      placeholder="First Name"
                      value={this.state.nis}
                      onChange={this.handleChange}
                    />
                  </Col>
                  </Row>
                    <Row form>
                      {/* NAMA */}
                      <Col md="6" className="form-group">
                      <label htmlFor="feEmail">Nama</label>
                      
                      <FormInput
                        name="name"
                        placeholder="Email Address"
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                      </Col>                                    
                  </Row>
                  <Row>
                    <Col md="6" className="form-group">
                    <label htmlFor="fePassword">Point</label>
                    
                    <FormInput
                      name="point"
                      onChange={this.handleChange}
                      value={this.state.point}
                      />
                    </Col>
                  </Row>
                  <Button onClick={this.updateSiswa} theme="accent">Update</Button>
                </Form>
              </Card>
            </Col>
          </Row>
          <div className="overlay" style={{display: this.state.modalEdit ? 'none' : 'block'}}></div>
          {/* End Alert */}
        </Container>
        )
    }
}

export default DaftarSiswa;