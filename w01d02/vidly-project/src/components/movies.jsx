import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';


class Movies extends Component {

  state = {
    movies: getMovies()
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.movies.map(item =>
            <li key={item._id}>{item.title}
              <button onClick={() => this.deleteMovie(item)}>Button</button>
            </li>)}
          </ul>
          <React.Fragment>{ this.getAll() }</React.Fragment>
        </div>
      )
    }

    getAll() {
      // const films = this.state.movies;
      // console.log(films);
    }

    deleteMovie = (item) => {
      var index = this.state.movies.indexOf(item);
      console.log(index);
    }



  }

export default Movies;
