import React, { Component } from 'react';

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
                <label>Año:</label> <i>{game.publishedYear.substring(0, 4)}</i><br />
                <label>Idioma:</label> {game.languages && game.languages.map(function (i) {
                    return <span key={i}>&nbsp;<a href={'./fichas/idioma/' + i.replaceAll(" ", "-") + '.html'}>{i}</a>&nbsp;</span>;
                })}<br />
                <label>País:</label>{game.countries && game.countries.map(function (i) {
                    return <span key={i}>&nbsp;<a href={'./fichas/pais/' + i + '.html'}>{i}</a>&nbsp;</span>;
                })}<br />
                <label>Desarrolladores:</label> {game.developers && game.developers.map(function (i) {
                    return <span key={i}>&nbsp;<a href={'./fichas/compania/' + i.replaceAll(" ", "-") + '.html'}>{i}</a>&nbsp;</span>;
                })}<br />
                <label>Editores:</label> {game.publishers && game.publishers.map(function (i) {
                    return <span key={i}>&nbsp;<a href={'./fichas/compania/' + i.replaceAll(" ", "-") + '.html'}>{i}</a>&nbsp;</span>;
                })}<br />
                <label>Plataformas:</label>{game.systems && game.systems.map(function (i) {
                    return <span key={i}>&nbsp;<a href={'./fichas/plataforma/' + i.replaceAll(" ", "-") + '.html'}>{i}</a>&nbsp;</span>;
                })}<br />
                <label>Temática:</label> {game.themes && game.themes.map(function (i) {
                    return <span key={i}>&nbsp;<a href={'./fichas/tema/' + i.replaceAll(" ", "-") + '.html'}>{i}</a>&nbsp;</span>;
                })}<br />
                <label>Géneros:</label> {game.generes && game.generes.map(function (i) {
                    return <span key={i}>&nbsp;<a href={'./fichas/genero/' + i.replaceAll(" ", "-") + '.html'}>{i}</a>&nbsp;</span>;
                })}<br />
                <label>Tipo de FMV:</label>{game.types && game.types.map(function (i) {
                    return <span key={i}>&nbsp;<a href={'./fichas/tipo/' + i.replaceAll(" ", "-") + '.html'}>{i}</a>&nbsp;</span>;
                })}<br />
                <label>Anotaciones:</label> <i>{game.remarks}</i><br />
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
        const response = await fetch('../Data/ProcesedData.json');
        var data = await response.json();

        var game = data.find((x) => x.usableUrl === this.state.GameID);

        this.setState({ games: game, loading: false });

    }
}
