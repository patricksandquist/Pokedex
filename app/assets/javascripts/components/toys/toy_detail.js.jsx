/* global React, PokemonsStore */

(function(root) {
  'use strict';
  root.ToyDetail = React.createClass({
    getStateFromStore: function () {
      var pokemon = PokemonsStore.find(parseInt(this.props.params.pokemonId));
      if (pokemon && pokemon.toys.length !== 0) {
        var toyArray = pokemon.toys.filter(function (toy) {
          return (toy.id === this.props.params.toyId);
        });
        if (toyArray.length === 1) {
          return toyArray[0];
        }
        return null;
      }
    },

    getInitialState: function () {
      return {toy: this.getStateFromStore()};
    },

    componentDidMount: function () {
      PokemonsStore.addPokemonDetailChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
      PokemonsStore.removePokemonDetailChangeListener(this._onChange);
    },

    _onChange: function () {
      this.setState({toy: this.getStateFromStore()});
    },

    componentWillReceiveProps: function () {
      this._onChange();
    },

    render: function () {
      var toy = this.state.toy;
      return (
        <div className='detail'>
          <img src={toy.image_url}/>
          <p>Name: {toy.name}</p>
          <p>Happiness: {toy.happiness}</p>
          <p>Price: {toy.price}</p>
        </div>
      );
    }
  });
}(this));
