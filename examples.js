const AccurateSearch = require('./index.min.js')

let titles = ['The Lighthouse', 'Marriage Story', 'The Irishman', 'Transit', 'A Hidden Life', 'Little Women',
	'Uncut Gems', 'Under the Silver Lake', 'The Beach Bum', 'Gloria Bell', 'An Elephant Sitting Still',
	'Portrait of a Lady on Fire', 'Apollo 11', 'The Souvenir', 'Pain and Glory', 'Parasite'
]


console.log('\nSearch: accurate, also inside words (default)')

//Initialize search
let accurateSearch = new AccurateSearch()
//Add data
for (let i = 0; i < titles.length; i++) {
	accurateSearch.addText(i, titles[i])
}
//Search
let t = Date.now()
let foundIds = accurateSearch.search('a')
console.log(Date.now() - t + ' ms')
//Show results
for (let id of foundIds) console.log(titles[id])


console.log('\nSearch: accurate, not inside words')

//Initialize search
accurateSearch = new AccurateSearch({
	insideWords: false
})
//Add data
for (let i = 0; i < titles.length; i++) {
	accurateSearch.addText(i, titles[i])
}
//Search
t = Date.now()
foundIds = accurateSearch.search('a')
console.log(Date.now() - t + ' ms')
//Show results
for (let id of foundIds) console.log(titles[id])


console.log('\nSearch: speed, also inside words')

//Initialize search
accurateSearch = new AccurateSearch({
	engine: 'speed'
})
//Add data
for (let i = 0; i < titles.length; i++) {
	accurateSearch.addText(i, titles[i])
}
//Search
t = Date.now()
foundIds = accurateSearch.search('a')
console.log(Date.now() - t + ' ms')
//Show results
for (let id of foundIds) console.log(titles[id])


console.log('\nSearch: speed, not inside words')

//Initialize search
accurateSearch = new AccurateSearch({
	engine: 'speed',
	insideWords: false
})
//Add data
for (let i = 0; i < titles.length; i++) {
	accurateSearch.addText(i, titles[i])
}
//Search
t = Date.now()
foundIds = accurateSearch.search('a')
console.log(Date.now() - t + ' ms')
//Show results
for (let id of foundIds) console.log(titles[id])