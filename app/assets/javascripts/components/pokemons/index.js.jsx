/* global ApiUtil, React, PokemonsStore, PokemonIndexItem */

(function(root) {
  'use strict';

  root.PokemonsIndex = React.createClass({
    getInitialState: function() {
      return {pokemons: []};
    },

    _onChange: function () {
      this.setState({pokemons: PokemonsStore.all()});
    },

    componentDidMount: function () {
      PokemonsStore.addPokemonsIndexChangeListener(this._onChange);
      ApiUtil.fetchAllPokemons();
    },

    componentWillUnmount: function () {
      PokemonsStore.removePokemonsIndexChangeListener(this._onChange);
    },

    render: function () {
      return(
        <ul>
          {this.state.pokemons.map(function (poke) {
            return <PokemonIndexItem pokemon={poke}
                                     key={poke.id}
                                     className="poke-list-item"/>;
          })}
        </ul>
      );
    }
  });
}(this));
