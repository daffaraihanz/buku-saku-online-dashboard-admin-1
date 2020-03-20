import React, {Component} from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody,Button,InputGroupAddon } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import axios from 'axios';
import './style/Overlay.css'

class DaftarSiswa extends Component{
    constructor(props) {
      super(props)
      this.state = {
          data: [],
          modalHapus: true,
          idHapus: ''
      };
      this.alertHapus = this.alertHapus.bind(this);

      this.componentDidMount = this.componentDidMount.bind(this);
      this.alertHapus = this.alertHapus.bind(this);
      this.deleteSiswa = this.deleteSiswa.bind(this)
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
                      <Button  theme="primary" className="mb-2 mr-2">
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
        </Container>
        )
    }
}

export default DaftarSiswa;