import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Games extends Component {
    static displayName = "Fichas";

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
    }

    componentDidMount() {
        this.populateGamesData();
    }

    static renderGamesTable(games) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Editor</th>
                        <th>País</th>
                        <th>Desarrollador</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {games.map(game =>
                        <tr key={game.usableUrl}>
                            <td>{game.Name}</td>
                            <td>{game.publishedYear.substring(0, 4)}</td>
                            <td>{game.countries.join(", ")}</td>
                            <td>{game.developers.join(", ")}</td>
                            <td><Link tag={game.usableUrl} to={"/fichas/" + game.usableUrl + ".html"}>Detalles</Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Cargando...</em></p>
            : Games.renderGamesTable(this.state.forecasts);

        return (
            <div>
                <h3><p className="text-right">Fichas</p></h3>
                {contents}
                <br />
                <br />
                <br />
            </div>
        );
    }

    async populateGamesData() {
        const response = await fetch('../Data/ProcesedData.json');
        const data = await response.json();
        this.setState({ forecasts: data.sort((a, b) => (a.Name > b.Name) ? 1 : ((b.Name > a.Name) ? -1 : 0)), loading: false });
    }
}
