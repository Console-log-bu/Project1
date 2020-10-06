let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
       let lastFilm = prompt('Один из последних просмотренных фильмов?');
       let evaluationFilm = prompt('На сколько оцените его?');

         if (lastFilm != null && evaluationFilm != null && lastFilm != '' && evaluationFilm != '' && lastFilm.length < 50 ) {
            personalMovieDB.movies[lastFilm] = evaluationFilm;
            console.log('Done');
         } else {
            console.log('Error');
            i--;
         } 
    }
}

/* rememberMyFilms(); */

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
       alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
       alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
       alert('Вы киноман');
    } else {
       alert('Произошла ошибка');
    }
}

/* detectPersonalLevel(); */

function showMyDB(hidden) {
  if (!hidden) {
     console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        let likeGenres = prompt(`Ваш любимый жанр под номером ${i}`);
        
        if (likeGenres == "" || likeGenres == null) {
           likeGenres = prompt("Вы ввели некорректные данные или не ввели их вовсе");  
           i--;
        } else {
           personalMovieDB.genres[i - 1] = likeGenres;
        }
    }
}
writeYourGenres();

