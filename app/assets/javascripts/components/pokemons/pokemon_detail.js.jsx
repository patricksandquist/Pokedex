/* global React, PokemonsStore */

(function(root) {
  'use strict';
  root.PokemonDetail = React.createClass({
    getStateFromStore: function () {
      return PokemonsStore.find(parseInt(this.props.params.pokemonId));
    },

    getInitialState: function () {
      return {pokemon: this.getStateFromStore()};
    },

    render: function () {
      var poke = this.state.pokemon;
      if (poke) {
        return (
          <div className='detail'>
            <img src={poke.image_url}/>
            <p>Type: {poke.type}</p>
            <p>Attack: {poke.attack}</p>
            <p>Defense: {poke.defense}</p>
            <p>Moves: {poke.moves}</p>
          </div>
        );
      } else {
        return <div></div>;
      }
    }
  });
}(this));
