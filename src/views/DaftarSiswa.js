import React, {Component} from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody,Button,InputGroupAddon } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import axios from 'axios';

class DaftarSiswa extends Component{
    constructor(props) {
      super(props)
      this.state = {
          data: []
      }

      this.componentDidMount = this.componentDidMount.bind(this)
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
            <Container className="p-3">
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
                  <tr>
                    <td>1</td>
                    <td>{item.nis}</td>
                    <td>{item.name}</td>
                    <td>{item.point}</td>
                    <td>Hapus</td>
                  </tr>
                  </>
                )
                })}
              </tbody>
            </table>
          </Row>
        </Container>
        )
    }
}

export default DaftarSiswa;