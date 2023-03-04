"use strict";

const numberOfFilms = prompt("Скільки фільмів ви подивилися?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt("Однин з останніх переглянутих фільмів", ""),
	  b = prompt("Дайте йому оцінку", ""),
	  c = prompt("Однин з останніх переглянутих фільмів", ""),
	  d = prompt("Дайте йому оцінку", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
