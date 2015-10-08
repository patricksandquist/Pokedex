/* global React, ApiUtil, PokemonsStore */

(function(root) {
  'use strict';
  root.PokemonDetail = React.createClass({
    getStateFromStore: function () {
      var id;

      if (this.props.params.pokemonId) {
        id = this.props.params.pokemonId;
      } else {
        id = "1";
      }

      return PokemonsStore.find(parseInt(id));
    },

    getInitialState: function () {
      return {pokemon: this.getStateFromStore()};
    },

    _resetDetail: function () {
      this.setState({pokemon: this.getStateFromStore()});
    },

    componentWillReceiveProps: function () {
      PokemonsStore.addPokemonDetailChangeListener(this._resetDetail);
      ApiUtil.fetchSinglePokemon(this.props.params.pokemonId);
    },

    render: function () {
      var poke = this.state.pokemon;
      if (poke) {
        var klass = 'detail ' + poke.poke_type;
        return (
          <div>
            <div className={klass}>
              <img src={poke.image_url}/>
              <p>Attack: {poke.attack}</p>
              <p>Defense: {poke.defense}</p>
              <ul>Moves: {poke.moves.map(function (move) {
                  return <li> * {move}</li>;
                })}</ul>
            </div>
          </div>
        );
      } else {
        return <div></div>;
      }
    }
  });
}(this));
