/* global React */

(function(root) {
  'use strict';
  root.PokemonIndexItem = React.createClass({
    render: function () {
      return (
        <li>
          {this.props.pokemon.name} [{this.props.pokemon.poke_type}]
        </li>
      );
    }
  });
}(this));
