// Exercise 1: Get the array of all directors.
function getAllDirectors(arreglo) {
  let result =  arreglo.map(directors => directors.director);
  console.log(result);
  return result;
}


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(arreglo, director) {
  let result =  arreglo.filter(directors => directors.director == director);
  console.log(result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(arreglo, director) {
  let result =  arreglo.filter(directors => directors.director == director);
  let scores = result.map(scores => scores.score)
  let sumScore = scores.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
      }, 0);
      let averageScore = sumScore / scores.length;
      console.log(averageScore.toFixed(2));
      return averageScore
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(arreglo) {

  var ordenTitulo = [...arreglo].sort(function(a, b) {
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
function orderByYear(arreglo) {
  var ordenYear = [...arreglo].sort(function(a, b) {
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

function moviesAverageByCategory(arreglo, genre) {
  let arrayCateg = arreglo.filter(x => x.genre.includes(genre));
    console.log(arrayCateg);
    return moviesAverage(arrayCateg);
}

function moviesAverage(arrayCateg){
  let scores = arrayCateg.map(scores => scores.score)
    for (let i = 0; i < scores.length; i++) {
      if (scores[i] == undefined)
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


function hoursToMinutes(arreglo) {

  let moviesInMinutes = []
  let RegexTime = new RegExp(/d+/)

  for (let i = 0; i < arreglo.length; i++) {
    let newItem = {}
      newItem.title = arreglo[i].title;
      newItem.year = arreglo[i].year;
      newItem.director = arreglo[i].director;
      newItem.duration = arreglo[i].duration;
      newItem.genre = arreglo[i].genre;
      newItem.score = arreglo[i].score;
      moviesInMinutes.push(newItem)
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
        let himSplited = him[0].split('')
        if (himSplited.includes('m')) {
          min = parseInt(himSplited.replace(RegexTime))
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
      console.log(moviesInMinutes);
  return moviesInMinutes
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
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
