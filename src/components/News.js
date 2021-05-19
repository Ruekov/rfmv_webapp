import React, { Component } from 'react';

export class News extends Component {
    static displayName = "Noticias";

    constructor(props) {
        super(props);
        this.state = { news: [], loading: true };
    }

    componentDidMount() {
        this.populateGamesData();
    }

    static renderGamesTable(news) {
        return (
            <div>
                {news.map(news =>
                    <div key={news.Date}  className="panel panel-default">
                        <div className="panel-heading"><b>{news.Date}</b> - <i>{news.Title}</i></div>
                        <div className="panel-body">{news.Text}</div>
                    </div>
                )}
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Cargando...</em></p>
            : News.renderGamesTable(this.state.news);

        return (
            <div>
                <h3><p className="text-right">Noticias</p></h3>
                <hr />
                {contents}
            </div>
        );
    }

    async populateGamesData() {
        const response = await fetch('../Data/News.json');
        const data = await response.json();
        this.setState({ news: data, loading: false });
    }
}
