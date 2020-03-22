import React,{Component} from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Row,
  Col
} from "shards-react";
import axios from 'axios'


class Discussions extends Component {
  constructor(props) {
    super(props)
    this.state = {
        data: [],
        id: ''
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.toDetailRiwayat = this.toDetailRiwayat.bind(this);
  }

  async componentDidMount() {
    try {
      const baseUrl = "http://3.91.42.49";
      const config = {
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
          }
      }

      await axios.get(
          `${baseUrl}/api/lapor/all`,
          config
      ).then(response => {
          let array = []
          for(let i = 0; i<4; i++) {
            let data = response.data.data[i]
            array.push(data)
          }
          this.setState({ data: array })
      })
    } catch (error) {
        // alert(error)
    }
  }

  toRiwayat(){
    document.location.href= "/riwayat"
  }

  toDetailRiwayat(id){
    this.props.history.push({
        pathname: '/detail-riwayat',
        state: id
    })
  }
      render(){
        return(
          <Card small className="blog-comments">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Riwayat</h6>
            </CardHeader>
            <CardBody className="p-3">
                <div className="mb-4 border-bottom pb-3">
                    {/* Avatar */}
                    {this.state.data.map((item,key) => {
                      return(
                        <>
                        
                    <div className="blog-comments__avatar d-flex" style={{position: 'relative'}}>
                        <img className="mr-3" src={`http://${item.image}`} alt="" />
                        <div>
                            <h6 className="mb-1">{item.user.nama}</h6>
                            <p style={{fontWeight: 300}} className="mb-4">{item.pelanggaran.kategori}</p>
                            <div className="d-flex justify-content-between mb-3 mt--1">
                                {/* <a  className="mr-3" href="#" onClick={() => this.toDetailRiwayat(item._id)}>Lihat Detail</a> */}
                                <p style={{position: 'absolute',right: 0}} className="mb-1 ">{item.createdDate}</p>
                            </div>
                        </div>
                    </div>
                    <hr></hr>

                      </>
                      )
                    })}
                </div>
            </CardBody>
            <CardFooter>
              <Row>
                <Col className=" view-report">
                  <Button theme="white" type="submit" onClick={this.toRiwayat}>
                    Lihat Semua Riwayat
                  </Button>
                </Col>
              </Row>
            </CardFooter>
          </Card>

        )
      }
}

Discussions.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The discussions dataset.
   */
  discussions: PropTypes.array
};

Discussions.defaultProps = {
  title: "Discussions",
  discussions: [
    {
      id: 1,
      date: "3 days ago",
      author: {
        image: require("../../images/avatars/1.jpg"),
        name: "John Doe",
        url: "#"
      },
      post: {
        title: "Hello World!",
        url: "#"
      },
      body: "Well, the way they make shows is, they make one show ..."
    },
    {
      id: 2,
      date: "4 days ago",
      author: {
        image: require("../../images/avatars/2.jpg"),
        name: "John Doe",
        url: "#"
      },
      post: {
        title: "Hello World!",
        url: "#"
      },
      body: "After the avalanche, it took us a week to climb out. Now..."
    },
    {
      id: 3,
      date: "5 days ago",
      author: {
        image: require("../../images/avatars/3.jpg"),
        name: "John Doe",
        url: "#"
      },
      post: {
        title: "Hello World!",
        url: "#"
      },
      body: "My money's in that office, right? If she start giving me..."
    }
  ]
};

export default Discussions;
