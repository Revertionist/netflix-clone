import React from 'react'
import './RowPost.css'
import YouTube from 'react-youtube';
import { useEffect, useState } from 'react'
import axios from '../../axios'
import { imageUrl, API_KEY } from '../../Constants/constants'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setId] = useState('')
  useEffect(() => {
    axios.get(props.url).then(response => {
      console.log(response.data)
      setMovies(response.data.results)
    })
  }, [props.url])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    console.log(id)
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      if (response.data.results.length !== 0) {
        setId(response.data.results[0])
      } else {
        alert ('Trailer not available')
      }
    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.slice(0, 10).map((obj) =>

          <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt='poster' />
        )}
      </div>
      {
        urlId && <YouTube opts={opts} videoId={urlId.key} />
      }

    </div>
  )
}

export default RowPost
