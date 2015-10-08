/* global AppDispatcher, EventEmitter, PokemonConstants*/
(function(root) {
  'use strict';

  var _pokemons = [], _selectedPokemon = null;

  var resetPokemons = function (pokemons) {
    _pokemons = pokemons;
    root.PokemonsStore.changed();
  };

  var resetSinglePokemon = function (pokemon) {
    _selectedPokemon = pokemon;
    root.PokemonsStore.detailChanged();
  };

  root.PokemonsStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _pokemons.slice();
    },

    find: function (id) {
      return _pokemons.filter(function(pokemon) {
        return pokemon.id === id;
      })[0];
    },

    addPokemonDetailChangeListener: function (callback) {
      this.on(PokemonConstants.POKEMON_DETAIL_CHANGE_EVENT, callback);
    },

    removePokemonDetailChangeListener: function (callback) {
      this.removeListener(PokemonConstants.POKEMON_DETAIL_CHANGE_EVENT, callback);
    },

    addPokemonsIndexChangeListener: function (callback) {
      this.on(PokemonConstants.POKEMONS_INDEX_CHANGE_EVENT, callback);
    },

    removePokemonsIndexChangeListener: function (callback) {
      this.removeListener(PokemonConstants.POKEMONS_INDEX_CHANGE_EVENT, callback);
    },

    changed: function(){
      this.emit(PokemonConstants.POKEMONS_INDEX_CHANGE_EVENT);
    },

    detailChanged: function(){
      this.emit(PokemonConstants.POKEMON_DETAIL_CHANGE_EVENT);
    }
  });

  AppDispatcher.register(function(action) {
    switch(action.actionType){
      case root.PokemonConstants.POKEMONS_RECEIVED:
        resetPokemons(action.pokemons);
        break;
      case root.PokemonConstants.POKEMON_DETAIL_CHANGE_EVENT:
        resetSinglePokemon(action.pokemon);
        break;
    }
  });
})(this);
