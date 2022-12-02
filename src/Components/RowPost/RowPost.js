import React from 'react'
import './RowPost.css'
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
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.slice(0, 10).map((obj) =>
          <img className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt='poster' />
        )}



      </div>
    </div>
  )
}

export default RowPost
