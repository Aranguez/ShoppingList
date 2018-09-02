import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Container,
    NavbarBrand
} from 'reactstrap'

class AppNav extends Component {

    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState(prevState => {
            prevState.isOpen = !prevState.isOpen
        })
    }

    render() {
        return (
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">ShoppingList</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}></NavbarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/Aranguez">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        )
    }
}

export default AppNav
