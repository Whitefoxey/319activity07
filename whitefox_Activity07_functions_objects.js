/** Author: Faith Sheets
    ISU Netid : whitefox@iastate.edu
    Date : February 14th, 2024
*/

function maxOfTwo(n1,n2){
    if(n1 >= n2){
        return n1;
    } else {
        return n2;
    }
}

let n1 = 11;
let n2 = 10;
console.log('The max between ${n1} and ${n2} is :', maxOfTwo(n1,n2));


/******************************************************** */

function maxOfArray(array){
    let max = array[0];
    for(i = 1; i < array.length; i++){
        if(max < array[i]){
            max = array[i];
        }
    }
    return max;
}

let array = [10,11,1024,125,9,201];
console.log(maxOfArray(array));

/************************************************************* */

function showProperties(movie){
    console.log(`List of Keys :
    title
    releaseYear
    rating
    director
    List of Values :
    ${movie.title}
    ${movie.releaseYear}
    ${movie.rating}
    ${movie.director}`);
}

// Object :
const movie = {
title : 'Some movie',
releaseYear: 2018,
rating: 4.5,
director: 'Steven Spielberg'
};

showProperties(movie);

/**************************************************************** */

//Object :
let circle = {
    radius : 2,
    area : function(){
    return Math.PI * this.radius * this.radius;
}
};

console.log(circle.area());

/*************************************************************** */

//Object :
let circle2 = {
    radius: 2,
    get radiusValue(){
        return this.radius
    },
    set radiusValue(value){
        this.radius = value;
    },
    area : function(){
        return Math.PI * this.radius * this.radius;
    }
};

console.log(`Area with ${circle2.radiusValue} :`,circle2.area());
circle2.radiusValue = 3;
console.log(`Area with ${circle2.radiusValue} :`,circle2.area());

/*************************************************************** */
//Object :

let circle3 = {
    radius : 2,
    area : function(){
        return Math.PI * this.radius * this.radius;
    },
    getRadiusValue : function(){
        return this.radius;
    },
    setRadiusValue : function(value){
        this.radius = value;
    }
};

console.log(`Area with ${circle3.getRadiusValue()} :`,circle3.area());
circle3.setRadiusValue(3);
console.log(`Area with ${circle3.getRadiusValue()} :`,circle3.area());

/***************************************************************** */

const grades = {
    math: 85,
    science: 90,
    history: 75,
    literature: 88
};

function calculateAverageGrade(grades){
    let avg = grades.math + grades.science + grades.history + grades.literature
    avg = avg/4;
    return avg;
}

console.log(calculateAverageGrade(grades));

/**************************************************************** */

const students = [
    {
    Fer: {
    math: 85,
    science: 90,
    history: 75,
    literature: 88
    }
    },
    {
    Alex: {
    math: 99,
    science: 97,
    history: 94,
    literature: 90
    }
    },
    {
    Mary: {
    math: 79,
    science: 72,
    history: 81,
    literature: 79
    }
    }
 ];


    // do not think i need this
    //console.log(calculateAverageGrade(grades));
function calculateAverageGrade(array){
    let array2;
    for(i = 0; i < array.length; i++){
        array2[i] = array[i];
    }
    return array2;
}

averageGrades = calculateAverageGrade(students);






console.log(averageGrades);
