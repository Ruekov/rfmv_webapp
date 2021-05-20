import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Games extends Component {
    static displayName = "Fichas";

    constructor(props) {
        super(props);
        this.state = { games: [], loading: true };
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
                        <tr key={game.url}>
                            <td>{game.Name}</td>
                            <td>{game.Published === null ?  " 0 " : game.Published.substring(0, 4) }</td>
                            <td>{game.Countries}</td>
                            <td>{game.Developers}</td>
                            <td><Link tag={game.url} to={"/fichas/" + game.url + ".html"}>Detalles</Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Cargando...</em></p>
            : Games.renderGamesTable(this.state.games);

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

        axios.get('http://rfmv.hypercompumega.net/api/games/').then(response => {
            this.setState({ games: response.data.games.sort((a, b) => (a.Name > b.Name) ? 1 : ((b.Name > a.Name) ? -1 : 0)), loading: false });
            });

    }
}
