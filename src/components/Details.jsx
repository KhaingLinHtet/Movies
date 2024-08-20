import React, { useEffect } from "react";
import { Card, Spinner } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import { api, api_key } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { selectedMovie } from "../redux/action/Movies";
const Details = () => {
  const { movieId } = useParams();

  const dispatch = useDispatch();

  const movieDetail = async () => {
    const res = await api.get(`/movie/${movieId}?api_key=${api_key}`);

    dispatch(selectedMovie(res.data));
  };

  useEffect(() => {
    movieDetail();
  }, []);

  // useEffect(() => {
  //   if (movieId){
  //     movieDetail();
  //   }
  //   return ()=> dispatch(removeSelectedMovie({}))
  // }, []);

  let movie = useSelector((state) => state.movies.movie);
  const navigate = useNavigate();
  return (
    <div>
      <div className=" max-w-sm mx-auto">
        <span className="my-2" onClick={() => navigate("/")}>
          <i class="fa-solid fa-circle-left"></i> Back
        
        </span>

        {JSON.stringify(movie) == {} ? (
          <div className="flex flex-wrap gap-2">
            <Spinner color="purple" aria-label="Purple spinner example" />
          </div>
        ) : (
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {movie.overview}
            </p>
            <div className="">
              <span className="">
                <i class="fa-regular fa-face-kiss-beam"></i>{" "}
                {movie.vote_average}
              </span>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Details;
