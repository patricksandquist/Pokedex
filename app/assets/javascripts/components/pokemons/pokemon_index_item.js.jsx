/* global ReactRouter, React */

(function(root) {
  'use strict';
  root.PokemonIndexItem = React.createClass({
    mixins: [ReactRouter.History],

    showDetail: function () {
      var detailURL = 'pokemons/' + this.props.pokemon.id;
      this.history.pushState(null, detailURL);
    },

    render: function () {
      return (
        <li onClick={this.showDetail}>
          {this.props.pokemon.name} [{this.props.pokemon.poke_type}]
        </li>
      );
    }
  });
}(this));
