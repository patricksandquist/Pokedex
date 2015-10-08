/* global AppDispatcher, EventEmitter*/
(function(root) {
  'use strict';

  var _pokemons = [], POKEMONS_INDEX_CHANGE_EVENT = 'change';

  var resetPokemons = function (pokemons) {
    _pokemons = pokemons;
    root.PokemonsStore.changed();
  };

  root.PokemonsStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _pokemons.slice();
    },

    addPokemonsIndexChangeListener: function (callback) {
      this.on(POKEMONS_INDEX_CHANGE_EVENT, callback);
    },

    removePokemonsIndexChangeListener: function (callback) {
      this.removeListener(POKEMONS_INDEX_CHANGE_EVENT, callback);
    },

    changed: function(){
      this.emit(POKEMONS_INDEX_CHANGE_EVENT);
    }
  });

  AppDispatcher.register(function(action) {
    switch(action.actionType){
      case root.PokemonConstants.POKEMONS_RECEIVED:
        resetPokemons(action.pokemons);

        break;
    }
  });
})(this);
