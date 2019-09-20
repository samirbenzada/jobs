import React, { Component } from 'react';
import styles from  './Navbar.module.css';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class NavSharesensation extends Component {

constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        isOpen: false
    };
    }
    toggle() {
    this.setState({
        isOpen: !this.state.isOpen
    });
    }

render() {
  return (

    <Navbar className={styles.Navbar} color="light" light expand="md">
          <NavbarBrand href="/">Jobs</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/About">About</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/Careers">Careers</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/Contact">Contact</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/Donations">Donations</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

        );
    }
}

export default NavSharesensation;
