import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class GamesSystem extends Component {
    static displayName = "Fichas";

    constructor(props) {
        super(props);
        const { params } = props.match;
        this.state = { games: [], loading: true, SystemID: params.SystemID.replaceAll("-", " ") };
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
        let contents = this.state.loading
            ? <p><em>Cargando...</em></p>
            : GamesSystem.renderGamesTable(this.state.games);

        return (
            <div>
                <h3><p className="text-right">Fichas</p></h3>
                <hr />
                <h1>Sistema: {this.state.SystemID}</h1>
                <br />
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
        console.log(this.state.SystemID + "HOLA");
        this.setState({ games: data.filter((x) => x.systems.includes(this.state.SystemID)).sort((a, b) => (a.Name > b.Name) ? 1 : ((b.Name > a.Name) ? -1 : 0)), loading: false });
    }
}
