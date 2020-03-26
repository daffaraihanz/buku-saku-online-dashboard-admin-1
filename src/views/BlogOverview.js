import React,{Component} from "react";
import PropTypes from "prop-types";
import { Container, Row, Col ,Card,CardBody,} from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";
import UsersOverview from "./../components/blog/UsersOverview";
import UsersByDevice from "./../components/blog/UsersByDevice";
import NewDraft from "./../components/blog/NewDraft";
import Discussions from "./../components/blog/Discussions";
import Activity from "./../components/blog/Activity";
import TopReferrals from "./../components/common/TopReferrals";
import axios from 'axios'
import IMAGES from "../images/images";

class BlogOverview extends Component {
  constructor(props) {
    super(props)
    this.state = {
        email : '',
        password : '',
        isLogin : false,
        login : false,
        data: [],
        countPelanggaran: '',
        countSiswa: ''

    }
    this.componentDidMount = this.componentDidMount.bind(this);

  }
  async componentDidMount(){
    const iniLogin = await window.localStorage.getItem('isLogin')
    const token = await window.localStorage.getItem('token')

    console.log('iniLogin', iniLogin)
    console.log('iniLogin', token)
    
    if(iniLogin !== "true") {
      console.log(iniLogin)
      console.log(typeof iniLogin)
      window.location.href = "/login"
    }

    try {
      const baseUrl = "http://3.91.42.49";
      const config = {
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
          }
      }
      
      await axios.get(
          `${baseUrl}/api/dashboard/all`,
          config
      ).then(response => {
          this.setState({ 
            countSiswa: response.data.data.countSiswa,
            countPelanggaran: response.data.data.countPelanggaran
          })
      })
    } catch (error) {
      // console.log(error)
        // alert(error)
    }
  }

  render(){
    return(
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle title="Dashboard Overview" subtitle="Dashboard" className="text-sm-left mb-3" />
      </Row>
        <Card className="card-welcome mb-4">
          <CardBody className="px-3">
            <Row className="align-items-center p-3">
                  <Col lg="6" sm="12">
                    <div>
                        <h4 style={{fontWeight: 'bold', color: '#fff'}}>Hallo Nana! <br/> Selamat Datang di Dashboard Buku Online</h4>
                        <p style={{fontWeight: 300, color: '#656478'}}>Lorem ipsum dolor sit amet consectetur adipisicing  elit. <br/> Excepturi assumenda perspiciatis nam ea hic nesciunt, <br/>veritatis cumque corporis porro velit.</p>
                      </div>
                  </Col>
                  <Col className="test">
                      <img
                          className="ilus img-fluid"
                          // style={{ maxWidth: "25px" }}
                          src={IMAGES.welcome2}
                          alt="Bukusaku Dashboard"
                        />
                  </Col>
            </Row>
          </CardBody>
        </Card>
      <Row>
        <Col>
            <Card  className="mb-4" style={{backgroundColor: '#543EB2', borderRadius: 20,}}>
                  <CardBody style={{borderRadius: 6}} className="d-flex align-items-center">
                    <h3 className="number-box">01</h3>
                    <div>
                      <p className="mb-2" style={{fontWeight: '600',color: '#CDCBDD'}}>Jumlah Siswa</p>
                      <h5 className="text-white mb-0" style={{}}>{this.state.countSiswa}</h5>
                    </div>
                  </CardBody>
            </Card>
        </Col>
        <Col>
            <Card  className="mb-4" style={{backgroundColor: '#9992DB', borderRadius: 20}}>
                  <CardBody style={{borderRadius: 6}} className="d-flex align-items-center">
                    <h3 className="number-box">02</h3>
                    <div>
                      <p className="mb-2" style={{fontWeight: '600',color: '#CDCBDD'}}>Jumlah Kelas</p>
                      <h5 className="text-white mb-0" style={{}}>369</h5>
                    </div>
                  </CardBody>
            </Card>
        </Col>
        <Col>
            <Card  className="mb-4" style={{backgroundColor: '#FF7484', borderRadius: 20}}>
                  <CardBody style={{borderRadius: 6}} className="d-flex align-items-center">
                    <h3 className="number-box">03</h3>
                    <div>
                      <p className="mb-2" style={{fontWeight: '600',color: '#CDCBDD'}}>Jumlah Pelanggaran</p>
                      <h5 className="text-white mb-0" style={{}}>{this.state.countPelanggaran}</h5>
                    </div>
                  </CardBody>
            </Card>
        </Col>
      </Row>
      

      {/* Small Stats Blocks */}
      {/* <Row>
        {smallStats.map((stats, idx) => (
          <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
            <SmallStats
              id={`small-stats-${idx}`}
              variation="1"
              chartData={stats.datasets}
              chartLabels={stats.chartLabels}
              label={stats.label}
              value={stats.value}
              percentage={stats.percentage}
              increase={stats.increase}
              decrease={stats.decrease}
            />
          </Col>
        ))}
      </Row> */}

      <Row>
        {/* Users by Device */}
        {/* <Col lg="4" md="6" sm="12" className="mb-4">
          <UsersByDevice />
        </Col> */}

        {/* Discussions */}
        <Col className="mb-4">
          <Activity />
        </Col>
        <Col lg="6" md="12" sm="12" className="mb-4">
          <Discussions />
        </Col>

      </Row>
    </Container>
    )
  }
}

BlogOverview.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array
};

// BlogOverview.defaultProps = {
//   smallStats: [
//     {
//       label: "Posts",
//       value: "2,390",
//       percentage: "4.7%",
//       increase: true,
//       chartLabels: [null, null, null, null, null, null, null],
//       attrs: { md: "6", sm: "6" },
//       datasets: [
//         {
//           label: "Today",
//           fill: "start",
//           borderWidth: 1.5,
//           backgroundColor: "rgba(0, 184, 216, 0.1)",
//           borderColor: "rgb(0, 184, 216)",
//           data: [1, 2, 1, 3, 5, 4, 7]
//         }
//       ]
//     },
//     {
//       label: "Pages",
//       value: "182",
//       percentage: "12.4",
//       increase: true,
//       chartLabels: [null, null, null, null, null, null, null],
//       attrs: { md: "6", sm: "6" },
//       datasets: [
//         {
//           label: "Today",
//           fill: "start",
//           borderWidth: 1.5,
//           backgroundColor: "rgba(23,198,113,0.1)",
//           borderColor: "rgb(23,198,113)",
//           data: [1, 2, 3, 3, 3, 4, 4]
//         }
//       ]
//     },
//     {
//       label: "Comments",
//       value: "8,147",
//       percentage: "3.8%",
//       increase: false,
//       decrease: true,
//       chartLabels: [null, null, null, null, null, null, null],
//       attrs: { md: "4", sm: "6" },
//       datasets: [
//         {
//           label: "Today",
//           fill: "start",
//           borderWidth: 1.5,
//           backgroundColor: "rgba(255,180,0,0.1)",
//           borderColor: "rgb(255,180,0)",
//           data: [2, 3, 3, 3, 4, 3, 3]
//         }
//       ]
//     },
//     {
//       label: "New Customers",
//       value: "29",
//       percentage: "2.71%",
//       increase: false,
//       decrease: true,
//       chartLabels: [null, null, null, null, null, null, null],
//       attrs: { md: "4", sm: "6" },
//       datasets: [
//         {
//           label: "Today",
//           fill: "start",
//           borderWidth: 1.5,
//           backgroundColor: "rgba(255,65,105,0.1)",
//           borderColor: "rgb(255,65,105)",
//           data: [1, 7, 1, 3, 1, 4, 8]
//         }
//       ]
//     },
//     {
//       label: "Subscribers",
//       value: "17,281",
//       percentage: "2.4%",
//       increase: false,
//       decrease: true,
//       chartLabels: [null, null, null, null, null, null, null],
//       attrs: { md: "4", sm: "6" },
//       datasets: [
//         {
//           label: "Today",
//           fill: "start",
//           borderWidth: 1.5,
//           backgroundColor: "rgb(0,123,255,0.1)",
//           borderColor: "rgb(0,123,255)",
//           data: [3, 2, 3, 2, 4, 5, 4]
//         }
//       ]
//     }
//   ]
// };

export default BlogOverview;
