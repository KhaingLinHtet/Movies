import React from 'react'
import { Card } from "flowbite-react";
import {Link} from "react-router-dom"
const MovieCard = ({movie}) => {
    console.log (movie)
  return (
    <div>
      <Link to={`/movies/details/${movie.id}`}>
           {/* <div classname="max-w-sm"> */}
           <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {movie.overview.slice(0,100)}
            </p>
            <div className=''>
              <span>
                {movie.vote_average}
              </span>
            </div>
          </Card>
      </Link>
    </div>
  )
}

export default MovieCard
