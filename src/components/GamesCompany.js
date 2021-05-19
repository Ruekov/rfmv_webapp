import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class GamesCompany extends Component {
    static displayName = "Fichas";

    constructor(props) {
        super(props);
        const { params } = props.match;
        this.state = { gamesDeveloped: [], gamesEdited: [], loading: true, CompanyID: params.CompanyID.replaceAll("-", " ") };
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
                        <tr key={game.usableUrl}>
                            <td>{game.Name}</td>
                            <td>{game.publishedYear.substring(0, 4)}</td>
                            <td><Link tag={Link} to={"/fichas/" + game.usableUrl + ".html"}>Detalles</Link></td>
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
        const response = await fetch('../Data/ProcesedData.json');
        const data = await response.json();
        var gameEd = data.filter((x) => x.publishers.includes(this.state.CompanyID)).sort((a, b) => (a.Name > b.Name) ? 1 : ((b.Name > a.Name) ? -1 : 0));
        var gamePub = data.filter((x) => x.developers.includes(this.state.CompanyID)).sort((a, b) => (a.Name > b.Name) ? 1 : ((b.Name > a.Name) ? -1 : 0));
        this.setState({ gamesDeveloped: gamePub, gamesEdited: gameEd, loading: false });
    }
}
