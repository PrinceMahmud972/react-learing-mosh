import React, { Component } from 'react';
import { getMovies } from './fakeMovieService';
import Like from './common/like';

class Vidly extends Component {
  state = {
    movies: getMovies(),
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleDelete = (id) => {
    const newMovies = this.state.movies.filter((movie) => movie._id !== id);
    this.setState({ movies: newMovies });
  };

  renderMovieList = () => {
    const { movies } = this.state;
    return movies.map((movie) => (
      <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <Like liked={movie.liked} onClick={() => this.handleLike(movie)} />
        </td>
        <td>
          <button
            onClick={() => this.handleDelete(movie._id)}
            className="btn btn-sm btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  render() {
    if (this.state.movies.length === 0)
      return (
        <main className="container">
          <h3>NO movies found</h3>
        </main>
      );
    return (
      <main className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Like</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>{this.renderMovieList()}</tbody>
        </table>
      </main>
    );
  }
}

export default Vidly;
