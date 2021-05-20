import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class GamesType extends Component {
    static displayName = "Fichas";

    constructor(props) {
        super(props);
        const { params } = props.match;
        this.state = { games: [], loading: true, Input : params.TypeID, TypeID: params.TypeID.replaceAll("-", " ") };
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
        let contents = this.state.loading
            ? <p><em>Cargando...</em></p>
            : GamesType.renderGamesTable(this.state.games);

        return (
            <div>
                <h3><p className="text-right">Fichas</p></h3>
                <hr />
                <h1>Tipo: {this.state.TypeID}</h1>
                <br />
                {contents}
                <br />
                <br />
                <br />
            </div>
        );
    }

    async populateGamesData() {
      
        axios.get('http://rfmv.hypercompumega.net/api/games/?style='+this.state.Input).then(response => {
            this.setState({ games: response.data.games.sort((a, b) => (a.Name > b.Name) ? 1 : ((b.Name > a.Name) ? -1 : 0)), loading: false });
            });



    }
}
