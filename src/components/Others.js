import React, { Component } from 'react';

export class Others extends Component {

    static displayName = "Other sites";

    render() {
        return (
            <div>

                <h3><p className="text-right">Otras webs</p></h3>
                <hr />

                <p><strong>Otras webs de FMV:</strong><br />
                    <a href="http://www.interactivemovies.org/">Interactive Movies</a><br />
                    <a href="http://www.fmvbr.cjb.net/">FMVBR</a><br />
                    <a href="http://www.fmvworld.com/">FMV WORLD</a></p>

                    <p><strong>Aventuras gráficas:</strong><br />
                    <a href="http://la-aventura.eu//">La Aventura Es La Aventura</a><br />
                    <a href="https://www.aventuraycia.com/">Aventura y Cía</a><br />
                    <a href="https://indiefence.miguelrfervenza.com/">Indiefence</a></p>

                <p><strong>Otros enlaces:</strong><br />
                    <a href="http://www.microsoft.com/games/texmurphy">Microsoft Tex Murphy</a><br />
                    <a href="http://www.cdinteractive.co.uk/forum/">CD-interactive</a><br />
                    <a href="http://www.gametronik.com/">Gametronik</a><br />
                    <a href="http://www.daphne-emu.com/">Daphne LaserDisc Emulator</a><br />
                    <a href="http://www.dragons-lair-project.com/">Dragon’s Lair Project</a><br />
                    <a href="http://www.mednafen.com/">Mednafen</a></p>

            </div>
        );
    }
}
