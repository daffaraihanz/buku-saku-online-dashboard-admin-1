import React, {Component} from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody,Button,InputGroupAddon,FormGroup,FormInput } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import axios from 'axios';

class DaftarKelas extends Component{
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
        this.componentDidMount = this.componentDidMount.bind(this)
        this.setKelas = this.setKelas.bind(this)
        this.alertHapus = this.alertHapus.bind(this);
        this.alertEdit = this.alertEdit.bind(this);
        this.updateKelas = this.updateKelas.bind(this);
        this.deleteKelas = this.deleteKelas.bind(this);
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
            const baseUrl = "http://3.91.42.49";
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
            let jurusan = this.props.location.state
            
            await axios.get(
                `${baseUrl}/api/kelas/all?jurusan=${jurusan}`,
                config
            ).then(response => {
                this.setState({ data: response.data.data})
            })
        } catch (error) {
            alert(error)
        }
    }

    async updateKelas() {
        try {
          const baseUrl = 'http://3.91.42.49'
          const token = localStorage.getItem('token')
          const config = {
              headers: {
                  Authorization: `Bearer ${token}`
              }
          }

          let model = {
            kelas: this.state.kelas,
            wali_kelas: this.state.wali_kelas,
            jurusan: this.state.jurusan
          }

          const update = await axios.put(`${baseUrl}/api/kelas/edit?id=${this.state.idHapus}`,model, config)
          console.log(this.state.idHapus,['ID'])
          console.log(update)
          if(update.data.code <= 200){
              alert('Sukses Update Siswa')
              document.location.href = "/data-siswa"                  
          } else {
            alert('ERROR Ada yang salah')
          }
        } catch (error) {
          alert('Ada yang salah')
        }
    } 

    async deleteKelas() {
      try {
          const token = localStorage.getItem('token')
          const config = {
              headers: {
                  Authorization: `Bearer ${token}`
              }
          }
          const baseUrl = 'http://3.91.42.49'
  
          await axios.delete(`${baseUrl}/api/kelas/remove?id=${this.state.idHapus}`, config).then(response => {
              if(response.data.code === 200) {
                  alert("Berhasil Hapus Siswa");
                  document.location.href = "/data-siswa"                  
              }
          })
      } catch (error) {
          alert(error)
      }
    }

    async setKelas(kelas) {
        await this.setState({ kelas: kelas})

        this.props.history.push({
          pathname: '/daftar-siswa',
          state: this.state.kelas
        })
    }

    toAddKelas(){
        document.location.href = '/add-kelas'
    }

    handleChange = (event)=> {
        this.setState({[event.target.name]: event.target.value });
        console.log(event)
    }

    render(){
        return(
            <Container fluid className="main-content-container px-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Daftar Siswa" subtitle="Buku Saku Online" className="text-sm-left" />
                </Row>
                <Row className="mb-2">
                    <Col>
                        <div className="d-flex justify-content-end">
                            <Button theme="primary"  onClick={this.toAddKelas} className="mb-2">
                                <i className="material-icons mr-1">add</i> Tambah Kelas
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {this.state.data.map((item,key) => {
                        return(
                            <Col lg="4" md="6" key={key}>
                                <Card  className="mb-4 nana">
                                        <CardBody className="p-4" style={{ background: 'white',borderRadius: 6}}>
                                            <h6 className="mb-2" style={{color: '#3d5170', fontSize: '1.4rem', fontWeight: 'bold'}} >{item.kelas}</h6>
                                            <p className="" style={{color: '#3d5170', fontWeight: '500'}} >{item.wali_kelas}</p>
                                        </CardBody>

                                    <div className="d-flex justify-content-between align-items-center" style={{padding:24}}>
                                        <a href="#" onClick={() => this.setKelas(item.kelas)}>
                                            <a href="#">Lihat detail</a>
                                        </a>
                                        <div>
                                            <a href="#" className="text-white" onClick={this.handleOpenModal}>
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
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
                {/* Alert */}
                        <Row form className="justify-content-center">
                            <Col md="6" style={{display: this.state.modalHapus ? 'none' : 'block', zIndex: 9999, position: 'fixed', top: '30%', transform: [{translateY: '-50%'}]}}>>
                            <Card>
                                <CardBody className="text-center">
                            <p>Apakah Anda yakin ingin menghapus data?</p>
                            <Button className="btn btn-danger mr-2" onClick={this.deleteKelas}>Yes</Button>
                            <Button className="btn btn-primary" onClick={this.hapus}>No</Button>
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
                                    <label htmlFor="kelas">Masukkan Kelas Baru</label>
                                    <FormInput className="mb-3" id="kelas" name="kelas" placeholder="Kelas Baru" onChange={this.handleChange}></FormInput>

                                    <label htmlFor="wali_kelas">Masukkan Wali Kelas Baru</label>
                                    <FormInput className="mb-3" id="wali_kelas" placeholder="Wali Kelas Baru" name="wali_kelas" onChange={this.handleChange}></FormInput>

                                    <label htmlFor="jurusan">Masukkan Jurusan</label>
                                    <FormInput id="jurusan" placeholder="Pilih Jurusan RPL:TKJ:TJA" name="jurusan" onChange={this.handleChange}></FormInput>
                                </FormGroup>
                                <div className="mt-2">
                                    <Button className="btn btn-primary mr-2" onClick={this.updateKelas}>Simpan</Button>
                                    <Button className="btn btn-danger" nClick={this.alertEdit}>Batal</Button>
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

export default DaftarKelas;