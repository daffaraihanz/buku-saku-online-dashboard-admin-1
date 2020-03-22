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

class Discussions extends Component {

  toRiwayat(){
    document.location.href= "/riwayat"
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
                    <div className="blog-comments__avatar d-flex" style={{position: 'relative'}}>
                        <img className="mr-3" src="https://placeimg.com/50/50/any" alt="" />
                        <div>
                            <h5 className="mb-1">Daffa Raihanz </h5>
                            <p style={{fontWeight: 300}} className="mb-4">Rambut lebih dari 3cm</p>
                            <div className="d-flex justify-content-between">
                                <a  className="mr-3" href="#">Lihat Detail</a>
                                <p style={{position: 'absolute',right: 0}} className="mb-1 ">12 Januari 2020</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-4 border-bottom pb-3">
                    {/* Avatar */}
                    <div className="blog-comments__avatar d-flex" style={{position: 'relative'}}>
                        <img className="mr-3" src="https://placeimg.com/50/50/any" alt="" />
                        <div>
                            <h5 className="mb-1">Daffa Raihanz </h5>
                            <p style={{fontWeight: 300}} className="mb-4">Rambut lebih dari 3cm</p>
                            <div className="d-flex justify-content-between">
                                <a  className="mr-3" href="#">Lihat Detail</a>
                                <p style={{position: 'absolute',right: 0}} className="mb-1 ">12 Januari 2020</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-4 border-bottom pb-3">
                    {/* Avatar */}
                    <div className="blog-comments__avatar d-flex" style={{position: 'relative'}}>
                        <img className="mr-3" src="https://placeimg.com/50/50/any" alt="" />
                        <div>
                            <h5 className="mb-1">Daffa Raihanz </h5>
                            <p style={{fontWeight: 300}} className="mb-4">Rambut lebih dari 3cm</p>
                            <div className="d-flex justify-content-between">
                                <a  className="mr-3" href="#">Lihat Detail</a>
                                <p style={{position: 'absolute',right: 0}} className="mb-1 ">12 Januari 2020</p>
                            </div>
                        </div>
                    </div>
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
