(function(root) {
  'use strict';

  root.ApiUtil = {
    fetchAllPokemons: function() {
      $.ajax({
        url: 'api/pokemon',
        type: 'GET',
        dataType: 'json',
        success: function(response) {
          ApiActions.receiveAllPokemons(response);
        }
      });
    },

    fetchSinglePokemon: function(id) {
      $.ajax({
        url: 'api/pokemon/' + id,
        type: 'GET',
        dataType: 'json',
        success: function(response) {
          ApiActions.receiveSinglePokemon(response);
        }
      });
    }
  };
})(this);
