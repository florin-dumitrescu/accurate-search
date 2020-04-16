const AccurateSearch = require('./accuratesearch.min.js')

let movies = ['The Lighthouse', 'Marriage Story', 'The Irishman', 'Transit', 'A Hidden Life', 'Little Women',
	'Uncut Gems', 'Under the Silver Lake', 'The Beach Bum', 'Gloria Bell', 'An Elephant Sitting Still',
	'Portrait of a Lady on Fire', 'Apollo 11', 'The Souvenir', 'Pain and Glory', 'Parasite'
]
let ratings = [1.1, 1.3, 1.9]


console.log('\nSearch')

//Initialize search
let accurateSearch = new AccurateSearch()
//Add data
for (let i = 0; i < movies.length; i++) {
	accurateSearch.addText(i, movies[i])
}
//Search
let t = Date.now()
let foundIds = accurateSearch.search('a')
console.log(Date.now() - t + ' ms')
//Show results
for (let id of foundIds) console.log(movies[id])


console.log('\nSearch with ratings')

//Initialize search
accurateSearch = new AccurateSearch()

//Add data
for (let i = 0; i < movies.length; i++) {
	accurateSearch.addText(i, movies[i], ratings[i])
}

//Search
foundIds = accurateSearch.search('e')

//Show results
for (let id of foundIds) console.log(movies[id])


console.log('\nSearch suggestions')

//Initialize search
accurateSearch = new AccurateSearch()

//Add data
for (let i = 0; i < movies.length; i++) {
	accurateSearch.addText(i, movies[i])
}
//Search
t = Date.now()
let suggestions = accurateSearch.suggestions('l')
console.log(Date.now() - t + ' ms')
//Show results
for (let s of suggestions) console.log(s)