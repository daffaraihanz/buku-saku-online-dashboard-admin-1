import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";

export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  toLogin(){
    document.location.href = './login'
  }

  render() {
    return (
      <div tag={Link} to="/login" className="d-flex justify-content-end" style={{position: 'absolute', right: 20,top:17}}>
        <a onClick={this.toLogin} className="text-danger" href="#">Logout</a>
      </div>
      // <NavItem tag={Dropdown} caret toggle={this.toggleUserActions} className="d-flex justify-content-end" >
      //   <DropdownToggle caret tag={NavLink} className="text-nowrap px-3 mt-2">
      //     <span className="d-none d-md-inline-block">Logout</span>
      //   </DropdownToggle>
      //   <Collapse tag={DropdownMenu} right small open={this.state.visible}>
      //     <DropdownItem divider />
      //     <DropdownItem tag={Link} to="/login" className="text-danger">
      //       <i className="material-icons text-danger">&#xE879;</i> Logout
      //     </DropdownItem>
      //   </Collapse>
      // </NavItem>
    );
  }
}
