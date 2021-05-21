import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class GamesCompany extends Component {
    static displayName = "Fichas";

    constructor(props) {
        super(props);
        const { params } = props.match;
        this.state = { gamesDeveloped: [], gamesEdited: [], loading: true, Input: params.CompanyID, CompanyID: params.CompanyID.replaceAll("-", " ") };
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
                        <th>Año</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {games.map(game =>
                        <tr key={game.url}>
                            <td>{game.Name}</td>
                            <td>{game.Published != null ? game.Published.substring(0, 4) : " "}</td>
                            <td><Link tag={Link} to={"/fichas/" + game.url + ".html"}>Detalles</Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contentsDev = this.state.loading
            ? <p><em>Cargando...</em></p>
            : GamesCompany.renderGamesTable(this.state.gamesDeveloped);

        let contentsPub = this.state.loading
            ? <p><em>Cargando...</em></p>
            : GamesCompany.renderGamesTable(this.state.gamesEdited);

        return (
            <div>
                <h3><p className="text-right">Fichas</p></h3>
                <hr />
                <h1>Compañía: {this.state.CompanyID}</h1>
                <br />
                <h3><p className="text-right">Juegos desarrollados</p></h3>
                {contentsDev}
                <br />
                <h3><p className="text-right">Juegos publicados</p></h3>
                {contentsPub}
                <br />
                <br />
                <br />
            </div>
        );
    }

    async populateGamesData() {

        axios.get('/api/games/?developer=' + this.state.Input).then(response => {
            this.setState({ gamesDeveloped: response.data.games.sort((a, b) => (a.Name > b.Name) ? 1 : ((b.Name > a.Name) ? -1 : 0)), loading: false });
        });

        axios.get('/api/games/?publisher=' + this.state.Input).then(response => {
            this.setState({ gamesEdited: response.data.games.sort((a, b) => (a.Name > b.Name) ? 1 : ((b.Name > a.Name) ? -1 : 0)), loading: false });
        });


    }
}
