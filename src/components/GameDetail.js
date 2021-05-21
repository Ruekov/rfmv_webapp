import React, { Component } from 'react';
import axios from 'axios';

export class GameDetail extends Component {
    static displayName = "Fichas";

    constructor(props) {
        super(props);
        const { params } = props.match;
        this.state = {
            games: {}, loading: true, GameID: params.GameID
        };
    }

    componentDidMount() {
        this.populateGamesData();
    }

    static renderGamesTable(game) {

        
        return (
            <div>
                <h1>{game.Name}</h1>
                <br />
                <label>Nombre:</label><i> {game.Name}</i><br />        
                <label>Idioma:</label> {game.Languages && game.Languages.map(function (i) {
                    return <span key={i.Name}>&nbsp;<a href={'./fichas/idioma/' + i.Name.replaceAll(" ", "-") + '.html'}>{i.Name}</a>&nbsp;</span>;
                })}<br />
                <label>País:</label>{game.Countries && game.Countries.map(function (i) {
                    return <span key={i.Name}>&nbsp;<a href={'./fichas/pais/' + i.Name + '.html'}>{i.Name}</a>&nbsp;</span>;
                })}<br />
                <label>Desarrolladores:</label> {game.Developers && game.Developers.map(function (i) {
                    return <span key={i.Name}>&nbsp;<a href={'./fichas/compania/' + i.Name.replaceAll(" ", "-") + '.html'}>{i.Name}</a>&nbsp;</span>;
                })}<br />
                <label>Editores:</label> {game.Publishers && game.Publishers.map(function (i) {
                    return <span key={i.Name}>&nbsp;<a href={'./fichas/compania/' + i.Name.replaceAll(" ", "-") + '.html'}>{i.Name}</a>&nbsp;</span>;
                })}<br />
                <label>Plataformas:</label>{game.Platforms && game.Platforms.map(function (i) {
                    return <span key={i.Name}>&nbsp;<a href={'./fichas/plataforma/' + i.Name.replaceAll(" ", "-") + '.html'}>{i.Name}</a>&nbsp;</span>;
                })}<br />
                <label>Temática:</label> {game.Themes && game.Themes.map(function (i) {
                    return <span key={i.Name}>&nbsp;<a href={'./fichas/tema/' + i.Name.replaceAll(" ", "-") + '.html'}>{i.Name}</a>&nbsp;</span>;
                })}<br />
                <label>Géneros:</label> {game.Generes && game.Generes.map(function (i) {
                    return <span key={i.Name}>&nbsp;<a href={'./fichas/genero/' + i.Name.replaceAll(" ", "-") + '.html'}>{i.Name}</a>&nbsp;</span>;
                })}<br />
                <label>Tipo de FMV:</label>{game.Styles && game.Styles.map(function (i) {
                    return <span key={i.Name}>&nbsp;<a href={'./fichas/tipo/' + i.Name.replaceAll(" ", "-") + '.html'}>{i.Name}</a>&nbsp;</span>;
                })}<br />
                <label>Anotaciones:</label> <i>{game.Remarks}</i><br />
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Cargando...</em></p>
            : GameDetail.renderGamesTable(this.state.games);



        return (
            <div>
                <h3><p className="text-right">Ficha</p></h3>
                <hr />
                {contents}
            </div>
        );
    }

    async populateGamesData() {

        axios.get('/api/games/?url='+ this.state.GameID).then(response => {
            this.setState({ games: response.data.game, loading: false });
            });


    }
}
