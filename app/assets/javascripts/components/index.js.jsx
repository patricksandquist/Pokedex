/* global PokemonsIndex, React */
(function(root) {
  'use strict';
  root.Index = React.createClass({
    render: function() {
      return (
        <div>
          <div className="pokemon-index"><PokemonsIndex/></div>
        </div>
      );
    }
  });
})(this);
