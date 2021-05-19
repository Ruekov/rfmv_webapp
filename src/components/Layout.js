import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div style={{ height: "100%" }}>
                <NavMenu />
                <Container>
                    {this.props.children}
                </Container>
                <nav className="navbar fixed-bottom navbar-dark bg-dark">
                    <span className="navbar-text"> Rincón de las FMV (c) 2005 - {new Date().getFullYear().toString()}</span>
                </nav>
            </div>
        );
    }
}
