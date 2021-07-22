import React from 'react'
import classes from './Banner.module.css'

function Banner() {
	return (
		<div className={classes.banner}>
			 <div className={classes.content}>
				 <h1 className={classes.title}>Movie Name</h1>
				 <div className={classes.bannerButtons}>
					 <button className={classes.button} >Play</button>
					 <button className={classes.button} >My List</button>
				 </div>
				 <h1 className={classes.description}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </h1>
			 </div>
			 <div className={classes.fadeBottom}></div>
		</div>
	)
}

export default Banner
