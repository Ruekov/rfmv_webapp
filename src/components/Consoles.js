import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Consoles extends Component {
    static displayName = "MMC";

    constructor(props) {
        super(props);
        this.state = { consoles: [], loading: true };
    }

    componentDidMount() {
        this.populateConsolesData();
    }

    static renderConsolesTable(consoles) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {consoles.map(console =>
                        <tr key={console.usableUrl}>
                            <td>{console.Name}</td>
                            <td><Link tag={console.usableUrl} to={"/mmc/" + console.usableUrl}>Detalles</Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Cargando...</em></p>
            : Consoles.renderConsolesTable(this.state.consoles);

        return (
            <div>
                <h3><p className="text-right">Consolas multimedia</p></h3>
                {contents}
            </div>
        );
    }

    async populateConsolesData() {
        const response = await fetch('../Data/Consoles.json');
        const data = await response.json();
        this.setState({ consoles: data, loading: false });
    }
}
