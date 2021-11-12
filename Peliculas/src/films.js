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
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

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
