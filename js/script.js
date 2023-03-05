"use strict";

const numberOfFilms = prompt("Скільки фільмів ви подивилися?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for (let i = 0; i < 2; i++) {
	const a = prompt("Однин з останніх переглянутих фільмів", ""),
		  b = prompt("Дайте йому оцінку", "");
	
	if (a != null && b !== null && a != "" && b != "" && a.length < 50 ) {
		console.log("done");
		personalMovieDB.movies[a] = b;
	} else {
		console.log("error");
		i--;
	}
}

if (personalMovieDB.count < 10) {
	console.log("Мало фільмів");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
	console.log("Класичний глядач");
} else if (personalMovieDB.count > 30) {
	console.log("Кіноман");
} else {
	console.log("Помилка");
}

console.log(personalMovieDB);


