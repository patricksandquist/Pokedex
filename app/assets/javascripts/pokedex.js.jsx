/* global Index, ReactRouter, React, PokemonsIndex */
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

$(document).ready(
  function (){
    var routes = (
      <Route path='/' component={Index}/>
    );

    React.render(<Router>{routes}</Router>, document.getElementById('pokedex'));
  }
);
