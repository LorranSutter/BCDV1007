$(document).ready(function () {
    var ulGenre = $('#genres');
    var ulTV = $('#tv');
    var ulPeople = $('#people');
	// TODO: supply your API key
	var apiKey = "15d007dc4d548197fa98b313337e040b";
	var baseUrl = 'https://api.themoviedb.org/3/';
	var genreUrl = `genre/movie/list?api_key=${apiKey}`;

	$.get(baseUrl + genreUrl).done(function(data) {
		for (genre of data.genres) {
            ulGenre.append(`<li>${genre.name}</li>`);
		}
	})	


	var tvUrl = `tv/airing_today?api_key=${apiKey}`;
	$.get(baseUrl + tvUrl).done(function(data){
		for (tvName of data.results) {
            ulTV.append(`<li>${tvName.name}</li>`);
		}
	})
	
	var peopleUrl = `person/popular?api_key=${apiKey}`;
	$.get(baseUrl + peopleUrl).done(function(data){
		for (person of data.results) {
            ulPeople.append(`<li>${person.name}</li>`);
		}
	})

})


/* 
- Exercises: 
- create a list of tv shows airing today
- create a list of /person/popular

*/