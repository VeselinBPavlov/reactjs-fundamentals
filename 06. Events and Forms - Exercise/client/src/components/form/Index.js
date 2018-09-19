import React, { Component } from 'react';
import PokemonField from './formFields/PokemonField';
import Input from './formFields/Input';

export default class Index extends Component {
    constructor() {
        super();

        this.state = {
            pokemonName: '',
            pokemonImg: '',
            pokemonInfo: '',
            data: { pokemonColection: [] }
        }
    }

    createPokemon(e) {
        e.preventDefault();
        let payload = {
            pokemonName: this.state.pokemonName,
            pokemonImg: this.state.pokemonImg,
            pokemonInfo: this.state.pokemonInfo
        }

        fetch('http://localhost:5000/pokedex/create', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          }).then(res => {
            fetch('http://localhost:5000/pokedex/roster')
                .then(data => {
                  return data.json()
                })
                .then(d => {
                    this.setState({ data: d })
                })
          })
    }

    componentDidMount() {
        fetch('http://localhost:5000/pokedex/pokedex')
            .then(res => {
              return res.json()
            })
            .then(d => {
                this.setState({ data: d })
            })
    }

    render () {
        let validName = this.state.pokemonName != '';
        let validImg = this.state.pokemonImg.startsWith('http');
        let validInfo = this.state.pokemonInfo.length > 3 && this.state.pokemonInfo.length < 50;
        return (
            <form onSubmit={this.createPokemon.bind(this)}>
            <fieldset className='App'>
                <Input
                    data='pokeName'
                    name='Pokemon Name'
                    func={ e => {
                        this.setState({ pokemonName: e.target.value })
                    }}
                    valid={validName}
                    />
                <Input
                    data='pokeImage'
                    name='Pokemon image'
                    func={ e => {
                        this.setState({ pokemonImg: e.target.value })
                    }}
                    valid={validImg}
                    />
                <Input
                    data='pokeBio'
                    name='Pokemon info'
                    func={ e => {
                        this.setState({ pokemonInfo: e.target.value })
                    }}
                    valid={validInfo}
                    />
                <input
                    style={({ "display": (validName && validImg && validInfo) === true ? '' : 'none' })}
                    type='submit'
                    value='Create Pokemon'
                    />
                    <br />
                
                <div style={({display: 'inline-block'})}>
                    {
                        this.state.data.pokemonColection.map((x, index) => {
                            return <PokemonField key={index} data={x} />
                        })
                    }
                </div>
            </fieldset>
            </form>
        )
    }
}
