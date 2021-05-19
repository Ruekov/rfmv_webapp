import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Consoles } from './components/Consoles';
import { ConsoleDetails } from './components/ConsoleDetails';
import { News } from './components/News';
import { Games } from './components/Games';
import { GameDetail } from './components/GameDetail';
import { GamesSystem } from './components/GamesSystem';
import { Others } from './components/Others';
import { GamesCountry } from './components/GamesCountry'
import { GamesGenere } from './components/GamesGenere'
import { GamesCompany } from './components/GamesCompany'
import { GamesLanguage } from './components/GamesLanguage'
import { GamesTheme } from './components/GamesTheme'
import { GamesType } from './components/GamesType'


import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/mmc/:ConsoleID' component={ConsoleDetails} />
                <Route exact path='/fichas/:GameID.html' component={GameDetail} />
                <Route exact path='/fichas/plataforma/:SystemID.html' component={GamesSystem} />
                <Route exact path='/fichas/pais/:CountryID.html' component={GamesCountry} />
                <Route exact path='/fichas/genero/:GenereID.html' component={GamesGenere} />
                <Route exact path='/fichas/compania/:CompanyID.html' component={GamesCompany} />
                <Route exact path='/fichas/idioma/:LangID.html' component={GamesLanguage} />
                <Route exact path='/fichas/tema/:ThemeID.html' component={GamesTheme} />
                <Route exact path='/fichas/tipo/:TypeID.html' component={GamesType} />
                <Route exact path='/fichas' component={Games} />
                <Route exact path='/mmc' component={Consoles} />
                <Route exact path='/noticias' component={News} />
                <Route exact path='/enlaces' component={Others} />
            </Layout>
        );
    }
}
