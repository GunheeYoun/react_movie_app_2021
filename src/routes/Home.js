import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    // console.log("hello");
  }
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    //비동기 함수로 선언
    //fetch()
    //무엇을? ==> await
    // axios : fetch위에 있는 작은 layer ==> npm install 필요
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(movies.data.data.movies);
    // ==> es6 문법에 맞게
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    // console.log(movies);
    // this.setState({ movies: movies });
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    //처음 랜더링 후 알려줌
    console.log("component rendered");
    //delay함수
    //setTimeout(() => this.setState({ isLoading: false }), 2000);
    //fetch()
    //fetch위에 있는 작은 layer ==> npm install 필요
    // const movies = axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.getMovies();
  }
  componentDidUpdate() {
    // state변경 후
    console.log("I'm just upated");
  }

  render() {
    //ES6 문법
    const { isLoading, movies } = this.state;
    console.log("I'm rendering");
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
export default Home;
