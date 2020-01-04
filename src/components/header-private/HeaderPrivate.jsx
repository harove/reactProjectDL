import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";
import {Button} from "reactstrap";
import { useDispatch } from "react-redux";

import { NavLink as RRNavLink } from "react-router-dom";
import { logoutActionCreator } from "../../store/modules/auth/actions";

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();


  const handlerLogout = () => {
    dispatch(logoutActionCreator());
  };

  return (
    <div className = "mb-4">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">{}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} exact to="/" activeClassName="active">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/private/home/recipe/create" activeClassName="active">
                Create recipe
              </NavLink>
            </NavItem>
          </Nav>
          <Button onClick={handlerLogout}>Cerrar sesión</Button>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
