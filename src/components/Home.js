import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <h1 className="entry-title">Bienvenidos al Rincón de las FMV</h1>
                <div className="entry entry-content">
                    <p>Visita el canal youtube del&nbsp;<a href="http://youtube.com/rfmv">Rincón de las FMV</a>.</p>
                    <h2 align="center"><strong>¿Qué es una FMV?</strong></h2>
                    <p align="justify">FMV son las siglas de Full Motion Video, que en castellano viene a significar “vídeo en puro movimiento”.
                    Los críticos y los profesionales nombran así a la técnica de usar un vídeo tipo avi en un juego.
                    Pero también tiene otros usos, y el que corresponde a esta web es la acepción en que FMV significa juego con actores reales.
                        Sí, en vez de usar dibujos o vértices, se usan digitilizaciones de actores de carne y hueso.</p>

                </div>
            </div >
        );
    }
}
