import React, {Component} from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody,Button,InputGroupAddon,FormGroup,FormInput } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import axios from 'axios'

class DetailKategori extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalHapus: true,
            modalEdit: true,
            data: [],
            idHapus: '',
            kode: '',
            jenis_pelanggaran: '',
            point: '',
            kategori: ''
        }
        this.hapus = this.alertHapus.bind(this);
        this.alertHapus = this.alertHapus.bind(this);
        this.alertEdit = this.alertEdit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.deleteKategori = this.deleteKategori.bind(this);
        this.updateKategori = this.updateKategori.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
    
      alertEdit (id){
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

    toAddAyat(){
        document.location.href = "/add-ayat"
    }

    async componentDidMount() {
        try {
          const baseUrl = "http://3.91.42.49";
          const config = {
              headers: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`
              }
          }
          let kategori = this.props.location.state
          console.log(kategori,['id'])
          
          await axios.get(
              `${baseUrl}/api/point/kategori?kategori=${kategori}`,
              config
          ).then(response => {
              this.setState({ data: response.data.data })
          })
        } catch (error) {
            alert(error)
        }
    }

    toAddKategori(){
        document.location.href = "/add-detail-kategori"
    }

    async updateKategori() {
        try {
          const baseUrl = 'http://3.91.42.49'
          const token = localStorage.getItem('token')
          const config = {
              headers: {
                  Authorization: `Bearer ${token}`
              }
          }
          let data = {
              kode: this.state.kode,
              jenis_pelanggaran: this.state.jenis_pelanggaran,
              point: this.state.point,
              kategori: this.state.kategori
          }
          console.log(data)
          const update = await axios.put(`${baseUrl}/api/point/edit?id=${this.state.idHapus}`,data, config)
          console.log(update)
          if(update.data.code <= 200){
              alert('Sukses Update Kategori Point')
              document.location.href = "/daftar-point"                  
          } else {
            alert('ERROR Ada yang salah')
          }
        } catch (error) {
          alert('Ada yang salah')
        }
    } 

    handleChange = (event)=> {
        this.setState({[event.target.name]: event.target.value });
        console.log(event.target.value)
    }

    async deleteKategori() {
      try {
          const token = localStorage.getItem('token')
          const config = {
              headers: {
                  Authorization: `Bearer ${token}`
              }
          }
          const baseUrl = 'http://3.91.42.49'
  
          await axios.delete(`${baseUrl}/api/point/remove?id=${this.state.idHapus}`, config).then(response => {
              if(response.data.code === 200) {
                  alert("Berhasil Hapus Point Kategori");
                  document.location.href = "/daftar-point"                  
              }
          })
      } catch (error) {
          alert(error)
      }
    }

    render(){
        return(
            <Container fluid className="main-content-container px-4">
                 <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Daftar Point" subtitle="Buku Saku Online" className="text-sm-left" />
                </Row>
                <Row className="px-3">
                    <table className="table mb-0">
                    <thead className="bg-primary">
                    <tr>
                        <th scope="col" className="border-0 text-white">
                            No.
                        </th>
                        <th scope="col" className="border-0 text-white">
                            Detail Kategori
                        </th>
                        <th scope="col" className="border-0 text-white">
                            Kode
                        </th>
                        <th scope="col" className="border-0 text-white">
                            Point
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
                            <tr>
                                <td>{key + 1}</td>
                                <td>{item.jenis_pelanggaran}</td>
                                <td>{item.kode}</td>
                                <td>{item.point}</td>
                                <td>
                                    <Button onClick={() => this.alertEdit(item._id)} theme="primary" className="mb-2 mr-2">
                                        Edit
                                    </Button>
                                    <Button onClick={() => this.alertHapus(item._id)}theme="danger" className="mb-2">
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
                <Col md="6" style={{display: this.state.modalHapus ? 'none' : 'block', zIndex: 9999, position: 'fixed', top: '30%', transform: [{translateY: '-50%'}]}}>>
                    <Card>
                        <CardBody className="text-center">
                    <p>Apakah Anda yakin ingin menghapus data?</p>
                    <Button className="btn btn-danger mr-2" onClick={this.deleteKategori}>Yes</Button>
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
                        <label htmlFor="kode">Kode</label>
                        <input onChange={this.handleChange} style={{width: '100%'}} className="mb-3" id="kode" name="kode" placeholder="Masukan Kode"/>

                        <label htmlFor="jenis_pelanggaran">Jenis Pelanggaran</label>
                        <input onChange={this.handleChange} style={{width: '100%'}} className="mb-3" id="jenis_pelanggaran" name="jenis_pelanggaran" placeholder="Masukan Jenis Pelanggaran"/>

                        <label htmlFor="point">Point</label>
                        <input onChange={this.handleChange} style={{width: '100%'}} className="mb-3" id="point" name="point" placeholder="Masukan Point"/>

                        <label htmlFor="kategori">Kategori</label>
                        <input onChange={this.handleChange} style={{width: '100%'}} className="mb-3" id="kategori" name="kategori" placeholder="Masukan kategori"/>
                    </FormGroup>
                    <div className="mt-2">
                        <Button className="btn btn-primary mr-2" onClick={this.updateKategori}>Simpan</Button>
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

export default DetailKategori;