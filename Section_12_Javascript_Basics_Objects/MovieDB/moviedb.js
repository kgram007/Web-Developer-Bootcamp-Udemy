var moveDB = [
  {
    title: "Aayirathil Oruvan",
    rating: 4.5,
    hasWatched: true
  },
  {
    title: "Paiyaa",
    rating: 3.75,
    hasWatched: true
  },
  {
    title: "Idharkuthane Aasaipattai Balakumara",
    rating: 4.25,
    hasWatched: true
  },
  {
    title: "Jil Jung Juk",
    rating: 4.0,
    hasWatched: true
  },
  {
    title: "Kadaisi Bench Karthi",
    rating: 5.0,
    hasWatched: false
  },
];

function printMovieDB() {
  moveDB.forEach(function(movie) {
    var str = "You have ";
    if(movie.hasWatched) {
      str += "watched ";
    } else {
      str += "not seen ";
    }
    str += "\""+ movie.title + "\"";
    str += " - " + movie.rating + " stars";
    console.log(str);
  });
}

/* List the movies from Movie DataBase */
printMovieDB();
