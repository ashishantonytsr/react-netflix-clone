import React, { useEffect, useState } from 'react'
import axiosInstance from '../../axios'
import {imgUrl } from '../../constants/constants'
import classes from './PostsRow.module.css'

function PostRow(props) {
	const [Movies, setMovies] = useState([])
	const [MovieDetail, setMovieDetail] = useState(null)

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

	const showPostDetails = (movie)=>{
		let title = movie.title
		let overview = movie.overview
		let popularity = movie.popularity
		if (popularity === undefined) popularity = "Not available"
		let posterImage = movie.poster_path
		if (posterImage === undefined) posterImage = "https://shenandoahcountyva.us/bos/wp-content/uploads/sites/4/2018/01/picture-not-available-clipart-12.jpg"
		if (title === undefined) title = movie.name
		if (title === undefined) title = movie.original_name
		if (title === undefined) title = movie.original_title
		setMovieDetail(
			{title: title,
			 overview: overview,
			 popularity: popularity, 
			 posterImage: posterImage})
		return null
	}	

	return (
		<div className={classes.row} >
			<h2>{props.title}</h2>
			<div className={classes.posters}>
				{Movies.map(movie=>
						movie.backdrop_path ? 
							<img className={props.isSmall ? classes.smallPoster : classes.poster} 
							src={`${imgUrl+movie.backdrop_path}`} 
							// if we pass the values on calling function, it will be rendered every elements
							// to avoid this we call the function inside an anonymous function and initialize it
							onClick={ ()=> showPostDetails(movie) }
							alt={movie.original_title} />
						: 
							<img 
							src="https://shenandoahcountyva.us/bos/wp-content/uploads/sites/4/2018/01/picture-not-available-clipart-12.jpg" 
							className={props.isSmall ? classes.smallPoster : classes.poster}
							onClick={ ()=> showPostDetails(movie) }
							alt="Img Not Available" />
				)}
			</div>
			{MovieDetail && 
			<div className={classes.detailsContainer} >
				<div className={classes.detailsImage} >
					<img src={`${imgUrl+MovieDetail.posterImage}`} alt="NO Poster Available" />
				</div>
				<div className={classes.details}>
					<h3 className={classes.detailsTitle}> {MovieDetail.title} </h3>
					<p className={classes.detailsContent}> {MovieDetail.overview} </p>
					<span>Popularity: {MovieDetail.popularity}</span> <br />
					<button className={classes.detailsCloseButton} 
						onClick={ ()=>setMovieDetail(null) } >Close</button>
				</div>
			</div>
			}
		</div>
	)
}

export default PostRow
