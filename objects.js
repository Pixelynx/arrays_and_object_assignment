// Question 1 & 2:
let cat = {
  genus: 'Felis',
  species: 'Catus',
  color: 'Black',

}
console.log(cat['species']);

// Question 3:

console.log(cat.hasOwnProperty('texture'));

// Question 4:
let films = [
 {
   name: 'Psycho',
   director: 'Alfred Hitchcock',
   released: 1960
 }, {
   name: 'Citizen Kane',
   director: 'Orson Welles',
   released: 1941
 }, {
   name: 'The Usual Suspects',
   director: 'Bryan Singer',
   released: 1995
 }
];

for(let i = 0; i < films.length; i++) {
  console.log(films[i]['director']);
}


// Question 5:
// false

// 1 - #### Recipe
let recipe = {
  name: 'Chocolate Marshmallow Brownies',
  serving: '12',
  ingredients:
['1 cup butter',
'2 cups sugar',
'1/3 cup cocoa',
'4 eggs',
'1 1/2 cup flour',
'1 tsp salt',
'2 tsp vanilla',
'1 (10 oz) package of miniature marshmallows',
'1 stick margarine or butter (1/2 cup)',
'2 tablespoons milk',
'1 teaspoon vanilla',
'3-4 Tablespoons of cocoa',
'3 cups of powdered sugar']
}

console.log(recipe['ingredients']);

for(let key in recipe) {
  console.log(key + ': ' + recipe[key]);
}

// 2 - #### getProps
let favAnime = {
  name: 'Gintama',
  author: 'Sorachi Hideaki',
  numOfEpisode: 361,
  caughtUp: false
}

let keyList = [];

for(let keys in favAnime) {
      keyList.push(keys);
    }
console.log(keyList);

// *** REMEMBERED AFTER THE FACT***

console.log(Object.keys(favAnime));


// 3 - #### getValues

let valList = [];

for(let moreKeys in favAnime) {
  valList.push(favAnime[moreKeys])
}
console.log(valList);

// *** REMEMBERED AFTER THE FACT***

console.log(Object.values(favAnime));


// 4 - #### getObjLength

  console.log(Object.values(favAnime).length + Object.keys(favAnime).length);


// 5 - #### WatchList

let movies = [
  {
    Title: 'Deadpool',
    Director: 'Tim Miller',
    Watched: true
  },
  {
    Title: 'Deadpool 2',
    Director: 'David Leitch',
    Watched: false
  },
  {
    Title: 'Thor Ragnarok',
    Director: 'Taika Waititi',
    Watched: false
  },
  {
    Title: 'Black Panther',
    Director: 'Ryan Coogler',
    Watched: true
  }
];

for (let m = 0; m < movies.length; m++) {
  if (movies[m]['Watched'] === true) {
    console.log('You already watched ' + movies[m]['Title'] + ' directed by ' + movies[m]['Director'] + '.');

  } else {
    console.log('You need to watch ' + movies[m]['Title'] + ' directed by ' + movies[m]['Director'] + '.');
  }
}



// 6 - #### characterCount

let itsAstring = 'junjou romantica';
let thisArr = itsAstring.split('');
let repeated = {};

for (let q = 0; q < itsAstring.length; q++) {
  if (!repeated[itsAstring[q]]) {
    repeated[itsAstring[q]] = 1;
  } else {
    repeated[itsAstring[q]] += 1;
  }
}
console.log(repeated);
