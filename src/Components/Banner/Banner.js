import React, { useEffect, useState } from 'react'
import axiosInstance from '../../axios'
import {imgUrl} from '../../constants/constants'
import { trending } from '../../urls'
import classes from './Banner.module.css'

function Banner() {
	const [Movie, setMovie] = useState({})
	// function to create random number
	// used to display random data from the json on each refresh
	function random(max) {
    let num = Math.random() * max + 0;
    return Math.floor(num);
	};
	useEffect(() => {
		// calling our axiosInstance and passing rest url with imported API_KEY
		axiosInstance.get(trending)
		.then(response => {
			// calling the function random and store random number in the variable
			const randomNum = random(response.data.results.length-1);
			setMovie(response.data.results[randomNum])
		})
	}, [])
	return (
		<div 
		style={{ backgroundImage: `url( ${Movie ? imgUrl+Movie.backdrop_path : '' }` }}
		className={classes.banner}>
			 <div className={classes.content}>
				 <h1 className={classes.title}> {Movie ? Movie.title ? Movie.title : Movie.name : ''} </h1>
				 <div className={classes.bannerButtons}>
					 <button className={classes.button} >Play</button>
					 <button className={classes.button} >My List</button>
				 </div>
				 <h1 className={classes.description}> {Movie ? Movie.overview : ''} </h1>
			 </div>
			 <div className={classes.fadeBottom}></div>
		</div>
	)
}

export default Banner
