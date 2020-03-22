import React from "react";
import { Container, Row, Col,Card,CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";

const UserProfileLite = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Profil" subtitle="Buku saku online" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
      <Col lg="4">
        <Card>
          <CardBody>
            <div className="text-center">
                <img className="rounded-circle" src="https://placeimg.com/150/150/any"></img>
                <h4 className="mt-3 mb-0">Lala Rara</h4>
                <p className="m-0" style={{fontWeight: 300}}>lala@gmail.com</p>
            </div>
          </CardBody>
        </Card>
      </Col>
      {/* <Col lg="8">
        <UserAccountDetails />
      </Col> */}
    </Row>
  </Container>
);

export default UserProfileLite;
