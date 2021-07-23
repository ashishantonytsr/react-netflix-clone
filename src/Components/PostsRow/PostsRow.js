import React from 'react'
import classes from './PostsRow.module.css'

function PostRow(props) {
	return (
		<div className={classes.row} >
			<h2>{props.title}</h2>
			<div className={classes.posters}>
					<img className={props.isSmall ? classes.smallPoster : classes.poster} 
					src="" alt="smallPoster" />
			</div>
		</div>
	)
}

export default PostRow
