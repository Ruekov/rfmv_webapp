import React, { Component } from 'react';

export class ConsoleDetails extends Component {
    static displayName = "MMC";

    constructor(props) {
        super(props);
        const { params } = props.match;
        this.state = {
            console: {}, loading: true, ConsoleID: params.ConsoleID
        };
    }

    componentDidMount() {
        this.populateConsolesData();
    }

    static renderConsolesTable(console) {
        return (
            <div>
                <h1> {console.Name}</h1>
                <br />
                <div className="card">
                    <div className="card-header">
                        Datos generales
                        </div>
                    <div className="card-body">
                        <label>Nombre:</label> <i>{console.Name}</i><br />
                        <label>Fabricantes:</label> <i>{console.Manufacturers.join(", ")}</i><br />
                        <label>Lanzamiento:</label> <i>{console.Relase && console.Relase}</i><br />
                        <label>Precio de lanzamiento:</label> <i>{console.LunchPrice && console.LunchPrice}</i><br />
                        <label>Accesorios:</label> <i>{console.Accesories && console.Accesories.join(", ")}</i><br />
                    </div>
                </div>

                <br />

                {console.CPU ? (
                    <div className="card">
                        <div className="card-header">
                            CPU
                        </div>
                        <div className="card-body">
                            <label>Distribución:</label> <i>{console.CPU.Dist}</i><br />
                            <label>Fabricante:</label> <i>{console.CPU.Manufacturer}</i><br />
                            <label>Tipo:</label> <i>{console.CPU.Type}</i><br />
                            <label>Código:</label> <i>{console.CPU.Code}</i><br />
                        </div>
                    </div>
                ) : (<span />)}
                <br />
                {console.Sound ? (
                    <div className="card">
                        <div className="card-header">
                            Sistema de audio
                        </div>
                        <div className="card-body">
                            <label>Nombre:</label> <i>{console.Sound.Name}</i><br />
                            <label>Máxima frecuencia de reloj (Hz):</label> <i>{console.Sound.MaximumClockFrequency}</i><br />
                            <label>Pins del DIP:</label> <i>{console.Sound.Pins}</i><br />
                            <label>Tecnología del DIP:</label> <i>{console.Sound.Technology}</i><br />
                            <label>Otros:</label> <i>{console.Sound.Others && console.Sound.Others.join(", ")}</i><br />
                        </div>
                    </div>
                ) : (<span />)}
                <br />
                {console.OperativeSystem ? (
                    <div className="card">
                        <div className="card-header">
                            Sistema operativo
                        </div>
                        <div className="card-body">
                            <label>Nombre:</label> <i>{console.OperativeSystem.Name}</i><br />
                            <label>Compatibilidad:</label> <i>{console.OperativeSystem.Compatibility.join(", ")}</i><br />
                        </div>
                    </div>

                ) : (<span />)}
                <br />
                {console.ListOfReleases ? (
                    <div className="card">
                        <div className="card-header">
                            Juegos publicados
                        </div>
                        <div className="card-body">
                            <ul>
                                {console.ListOfReleases.map(item => {
                                    return <li key ={item}>{item}</li>;
                                })}
                            </ul>
                        </div>
                    </div>

                ) : (<span />)}
                <br />
                <br />
                <br />
            </div>

        );
    }



    render() {
        let contents = this.state.loading
            ? <p><em>Cargando...</em></p>
            : (ConsoleDetails.renderConsolesTable(this.state.console));

        return (
            <div>
                <h3><p className="text-right">Consolas multimedia</p></h3>
                <hr />
                { contents}
            </div >
        );
    }

    async populateConsolesData() {
        const response = await fetch('../Data/Consoles.json');
        const data = await response.json();
        this.setState({ console: data.find(x => x.usableUrl === this.state.ConsoleID), loading: false });
    }
}
