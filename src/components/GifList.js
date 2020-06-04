import React from 'react'

const GifList = props =>
	<ul>
		{console.log(props.gifs)}
		{props.gifs.map(gif =>
		<li key={gif.id}><img src={gif.images.original.url} alt=""/>
		</li>
		)}
	</ul>

export default GifList
