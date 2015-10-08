/* global AppDispatcher, PokemonConstants*/
(function(root) {
  'use strict';
  root.ApiActions = {
    receiveAllPokemons: function (pokemons) {
      AppDispatcher.dispatch({
        actionType: PokemonConstants.POKEMONS_RECEIVED,
        pokemons: pokemons
      });
    },

    receiveSinglePokemon: function (pokemon) {
      AppDispatcher.dispatch({
        actionType: PokemonConstants.POKEMON_DETAIL_CHANGE_EVENT,
        pokemon: pokemon
      });
    }
  };

}(this));
