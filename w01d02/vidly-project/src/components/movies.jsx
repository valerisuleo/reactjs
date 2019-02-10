import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';


class Movies extends Component {

  state = {
    movies: getMovies(),
    message: ''
  }

  render() {
    return (
      <main className="container">
        <div style={ this.rowStyle } className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <span>{ this.state.message }</span>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">NumberInStock</th>
                  <th scope="col">DailyRentalRate</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.getAll().map(item =>
                  <tr key={item._id}>
                    <th scope="row">{item.title}</th>
                    <td>{item.genre.name}</td>
                    <td>{item.numberInStock}</td>
                    <td>{item.dailyRentalRate}</td>
                    <td><button className="btn btn-danger btn-sm"
                      onClick={() => this.deleteMovie(item)}>Button</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="col-lg-2"></div>
      </div>
      </main>
      )
    }


  // render() {
  //   return (
  //     <div>
  //       <ul>
  //         {this.getAll().map(item =>
  //           <li key={item._id}>{item.title}
  //             <button onClick={() => this.deleteMovie(item)}>Button</button>
  //           </li>)}
  //         </ul>
  //       </div>
  //     )
  //   }


    rowStyle =  {
      marginTop: '5em'
    }

    getAll() {
      const films = this.state.movies;
      return films;
    }

    deleteMovie = (item) => {
      const films = this.state.movies;
      var index = films.indexOf(item);
      films.splice(index, 1);
      // Here we update the view
      this.setState({ movies: films });

      if (films.length === 0) {
        const table = document.getElementsByClassName('table')[0];
        table.style.display = 'none';
        this.setState({ message: 'No movies left, bitch!' })
      }
    }

  }

export default Movies;
