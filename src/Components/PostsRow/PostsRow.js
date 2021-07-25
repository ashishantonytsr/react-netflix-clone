import React, { useEffect, useState } from 'react'
import axiosInstance from '../../axios'
import { imgUrl } from '../../constants/constants'
import classes from './PostsRow.module.css'

function PostRow(props) {
	const [Movies, setMovies] = useState([])
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
	return (
		<div className={classes.row} >
			<h2>{props.title}</h2>
			<div className={classes.posters}>
				{Movies.map((movie)=>
					<img className={props.isSmall ? classes.smallPoster : classes.poster} 
					src={`${imgUrl+movie.backdrop_path}`} 
					alt="Images" />
				)}
			</div>
		</div>
	)
}

export default PostRow
