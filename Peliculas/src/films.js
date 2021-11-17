// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(directors => directors.director);
  console.log(result);
  return result;
}


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result =  array.filter(directors => directors.director == director);
  console.log(result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let result =  array.filter(directors => directors.director == director);
  let scores = result.map(scores => scores.score)
  let sumScore = scores.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
      }, 0);
      let averageScore = sumScore / scores.length;
      console.log(averageScore.toFixed(2));
      return averageScore
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  var ordenTitulo = [...array].sort(function(a, b) {
  var titleA = a.title.toUpperCase();
  var titleB = b.title.toUpperCase();
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }

  return 0;
  });

  let arrayTitulos = ordenTitulo.map(titulos => titulos.title);
  let top20 = arrayTitulos.slice(0, 20)
  console.log(top20);
  return top20;
  
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  var ordenYear = [...array].sort(function(a, b) {
    var yearA = a.year;
    var yearB = b.year;
    var tituloA = a.title;
    var tituloB = b.title;
    if (yearA < yearB) {
      return -1;
    }
    if (yearA > yearB) {
      return 1;
    }
    
    if (yearA == yearB){
      if (tituloA < tituloB) {
      return -1
      }
        
      if (tituloA > tituloB) {
        return 1
      }
    }
    
    return 0;
    });
    console.log(ordenYear);
    return ordenYear
}

// Exercise 6: Calculate the average of the movies in a category

function moviesAverageByCategory(array, genre) {
  let arrayCateg = array.filter(x => x.genre.includes(genre));
    console.log(arrayCateg);
    return moviesAverage(arrayCateg);
}

function moviesAverage(arrayCateg){
  let scores = arrayCateg.map(scores => scores.score)
    for (let i = 0; i < scores.length; i++) {
      if (scores[i] == '')
      scores.splice(i, 1)
    }

  let sumScore = scores.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
    }, 0);
    let averageScore = sumScore / scores.length;
    console.log(averageScore.toFixed(2));
    return averageScore
}


// Exercise 7: Modify the duration of movies to minutes


function hoursToMinutes(array) {

  let moviesInMinutes = []
  let RegexTime = new RegExp(/d+/)

  for (let i = 0; i < array.length; i++) {

      moviesInMinutes.push({
        title: array[i].title,
        year: array[i].year,
        director: array[i].director,
        duration: array[i].duration,
        genre: array[i].genre,
        score: array[i].score,
      });
      
  }
  for (i = 0; i < moviesInMinutes.length; i++) {
    let him = moviesInMinutes[i].duration.split(' ')
    
      if (him.length == 2) {
        let horas = parseInt(him[0].replace(RegexTime))
        let min = parseInt(him[1].replace(RegexTime))
        let horasMin = horas * 60
        let total = horasMin + min
        moviesInMinutes[i].duration = total
      }
      else if (him.length == 1) {
        if (him[0].includes('min')) {
          min = parseInt(him[0].replace(RegexTime))
          total = min
          moviesInMinutes[i].duration = total
        }
        else
          horas = parseInt(him[0].replace(RegexTime))
          horasMin = horas * 60
          total = horasMin
          moviesInMinutes[i].duration = total
        }
      }
  return moviesInMinutes
}


// Exercise 8: Get the best film of a year


function bestFilmOfYear(array, year) {
  let result =  array.filter(pelis => pelis.year == year);
  console.log(result);
      let comp = result.sort(function (a, b) {
        var peliA = a.score
        var peliB = b.score
        if (peliB < peliA) {
          return -1;
        }
        if (peliB > peliA) {
          return 1;
        }
        
        return 0;
        });

        let bestScore = [comp.reduce(function (accumulator, currentValue) {
          return accumulator.score > currentValue.score ? accumulator : currentValue
        })]
        

        console.log(bestScore);
        return bestScore;
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
