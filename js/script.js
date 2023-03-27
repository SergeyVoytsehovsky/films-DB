"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Скільки фільмів ви подивилися?", "");

	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Скільки фільмів ви подивилися?", "");
	}
}

// start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
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
}

// rememberMyFilms();

function detectPersonalLvl() {
	if (personalMovieDB.count < 10) {
		console.log("Мало фільмів");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
		console.log("Класичний глядач");
	} else if (personalMovieDB.count > 30) {
		console.log("Кіноман");
	} else {
		console.log("Помилка");
	}
}

// detectPersonalLvl();

function showMyDB() {
	if (personalMovieDB.privat === false) {
		console.log(personalMovieDB);
	}
}

showMyDB();

function writeMyGanres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`);
	}
}

writeMyGanres();



