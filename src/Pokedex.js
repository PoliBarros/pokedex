import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';


class Pokedex extends Component {

    static defaultProps = {
        pokemon: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    };

    render() {
        let title;
        if (this.props.isWinner) {
            title = <h4 className="Pokedex-winner">Winning hand</h4>
        }
        else {
            title = <h4 className="Pokedex-loser">Losing hand</h4>
        }
        return (
            <div className="Pokedex">
                <div className="Pokedex-box-title">
                    <div className="Pokedex-title">
                        <h1 >Pokedex</h1>
                    </div>
                    <div className="Pokedex-sub-title">
                        {title}
                        <p>Total experince: <span>{this.props.exp}</span></p>
                    </div>
                </div>

                <div className="Pokedex-cards">
                    {this.props.pokemon.map(p => (
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Pokedex;