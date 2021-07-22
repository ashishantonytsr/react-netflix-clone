import React from 'react'
import classes from './NavBar.module.css'

function NavBar() {
	return (
		<div className={classes.navbar} >
			<img className={classes.logo} src='https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg' alt='' />
			<img className={classes.avatar} src='https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg' alt='' />
		</div>
	)
}

export default NavBar
