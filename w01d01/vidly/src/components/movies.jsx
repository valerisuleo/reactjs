import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movie extends Component {
  state = {
    movies: getMovies()
  };

  render() {
    const { movies } = this.state;

    return (
      <main className="container">
        <h1>Vidly Project</h1>

        {movies.length ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((item, index) => (
                <tr key={item._id}>
                  <td>{item.title}</td>
                  <td>{item.genre.name}</td>
                  <td>{item.numberInStock}</td>
                  <td>{item.dailyRentalRate}</td>
                  <td>
                    <button
                      onClick={() => this.movieDelete(index)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">No movies left!</h4>
            <hr />
            <button onClick={this.reload} className="btn btn-primary">
              Reload
            </button>
          </div>
        )}
      </main>
    );
  }

  movieDelete = item => {
    const { movies } = this.state;
    const currentIndex = item;
    movies.splice(currentIndex, 1);
    this.setState(movies);
  };
}

export default Movie;
