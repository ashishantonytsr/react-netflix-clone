import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import axiosInstance from '../../axios'
import { API_KEY, imgUrl } from '../../constants/constants'
import classes from './PostsRow.module.css'

function PostRow(props) {
	const [Movies, setMovies] = useState([])
	const [UrlId, setUrlId] = useState('')

	useEffect(() => {
		axiosInstance.get(props.url)
		.then( (response)=>{
			console.log(response.data)
			setMovies(response.data.results)
		} )
		.catch( err=>{
			alert('Network Error');
		} )
	}, [props.url])

	const handleMovieTrailer = (movieId)=> {
		console.log(movieId)
		axiosInstance.get(`/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`)
		.then(response =>{
			if (response.data.results.length !== 0) setUrlId(response.data.results[0]) 
			else console.log("Trailer not found")
			console.log(response.data.results)
		})
		.catch(err=>{
			console.log(err)
			setUrlId('')
		})
	}
	// params for youtube trailer
	const youtubeOpts = {
		height : "400",
		width : "100%",
		playVars : {
			autoplay : 1,
		},
	};
	return (
		<div className={classes.row} >
			<h2>{props.title}</h2>
			<div className={classes.posters}>
				{Movies.map(movie=>
						movie.poster_path ? 
							<img className={props.isSmall ? classes.smallPoster : classes.poster} 
							src={`${imgUrl+movie.backdrop_path}`} 
							// passing id from the array fetched for images
							onClick={ ()=> handleMovieTrailer(movie.id) }
							alt="Images" />
						: ''
				)}
			</div>
			<div className={classes.youtubeTrailer} > 
				{UrlId && <YouTube opts={youtubeOpts} videoId={UrlId.key} /> } 
			</div>
		</div>
	)
}

export default PostRow
