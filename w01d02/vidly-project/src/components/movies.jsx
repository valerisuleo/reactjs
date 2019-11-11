import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class MoviesComponent extends Component {
  state = {
    movies: getMovies(),
    message: ""
  };

  container = {
    width: "90vw",
    height: "90vh",
    margin: "auto",
    marginTop: "50px",
    position: "relative"
  };

  centered = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  };

  render() {
    return (
      <main style={this.container}>
        {!this.state.movies.length ? (
          <h5 style={this.centered}>
            There Are no movies left in the database!
          </h5>
        ) : (
          <table className="table" style={this.centered}>
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">NumberInStock</th>
                <th scope="col">DailyRentalRate</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.getAll().map(item => (
                <tr key={item._id}>
                  <th scope="row">{item.title}</th>
                  <td>{item.genre.name}</td>
                  <td>{item.numberInStock}</td>
                  <td>{item.dailyRentalRate}</td>
                  <td>
                    <button
                      onClick={() => this.movieDelete(item)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    );
  }

  getAll = () => {
    const { movies } = this.state;
    return movies;
  };

  movieDelete = current => {
    const { movies } = this.state;

    let movieIndex = movies.indexOf(current);
    movies.splice(movieIndex, 1);
    // Here we update the view
    this.setState(movies);
  };

  // Alternative synthax:
  //   movieDelete = current => {
  //     const films = this.state.movies;
  //     var index = films.indexOf(item);
  //     films.splice(index, 1);
  //     // Here we update the view
  //     this.setState({ movies: films });
  //   };
}

export default MoviesComponent;
