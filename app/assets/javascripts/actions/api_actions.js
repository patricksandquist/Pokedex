/* global AppDispatcher, PokemonConstants*/
(function(root) {
  'use strict';
  root.ApiActions = {
    receiveAllPokemons: function (pokemons) {
      AppDispatcher.dispatch({
        actionType: PokemonConstants.POKEMONS_RECEIVED,
        pokemons: pokemons
      });
    }
  };

}(this));
