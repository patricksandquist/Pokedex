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
    }
  };
})(this);
