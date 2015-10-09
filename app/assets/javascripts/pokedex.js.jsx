/* global PokemonDetail, Index, ReactRouter, React, PokemonsIndex, ToyDetail */
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

$(document).ready(
  function (){
    var routes = (
      <Route path='/' component={Index}>
        <Route path='pokemons/:pokemonId' component={PokemonDetail}/>
        <Route path="/pokemon/:pokemonId/toys/:toyId"
               components={{toyDetail: ToyDetail, pokemonDetail: PokemonDetail}}/>
      </Route>
    );

    React.render(<Router>{routes}</Router>, document.getElementById('pokedex'));
  }
);
