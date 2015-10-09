/* global React, ReactRouter */

(function(root) {
  'use strict';
  root.ToysIndexItem = React.createClass({
    mixin: [ReactRouter.History],

    render: function () {
      return (
        <li onClick={this.toggleDetail()}>
          Name: {this.props.toy.name}
        </li>
      );
    },

    toggleDetail: function() {
      var toyDetailURL = '/pokemon/' + this.props.toy.pokemon_id + '/toys/' + this.props.toy.id;
      this.history.pushState(null, toyDetailURL);
    }
  });
}(this));
