import React from 'react'
import './RowPost.css'
import YouTube from 'react-youtube';
import { useEffect, useState } from 'react'
import axios from '../../axios'
import { imageUrl } from '../../Constants/constants'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(props.url).then(response => {
      console.log(response.data)
      setMovies(response.data.results)
    })
  }, [props.url])

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.slice(0, 10).map((obj) =>

          <img className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt='poster' />
        )}
        <YouTube opts={opts} videoId="I9B6rwW35GQ" />
      </div>
    </div>
  )
}

export default RowPost
