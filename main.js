const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3fbb0a879emsh5dbb1a4dccb9411p1d3082jsn251a83671320',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
