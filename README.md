# accurate-search

The most accurate text search engine and faster than most of the other search libraries. No dependencies on other libraries or APIs, so it works offline too. Offers search suggestions and scoring based on the items ratings.

Features:
- text search with options:
  - engine: accurate / speed
  - search inside words: true / false
  - if an item have rating, it will influence the scoring
- search suggestions
  - suggest full words starting with the letters entered by the user
- realtime indexing of the content
  - content will stay indexed after adding or removing items

# How to install

```
npm i accurate-search
```

# How to use

## Search: accurate, also inside words (default)

```
const AccurateSearch = require('accurate-search')

let movies = ['Joker', 'Marriage Story', 'The Irishman']

//Initialize search
let accurateSearch = new AccurateSearch()

//Add data
for (let i = 0; i < movies.length; i++) {
	accurateSearch.addText(i, movies[i])
}

//Search
let foundIds = accurateSearch.search('a')

//Show results
for (let id of foundIds) console.log(movies[id])
```

## Search items with rating

```
const AccurateSearch = require('accurate-search')

let movies = ['Joker', 'Marriage Story', 'The Irishman']
let ratings = [8.6, 8.1, 8.0]

//Initialize search
let accurateSearch = new AccurateSearch()

//Add data
for (let i = 0; i < movies.length; i++) {
	accurateSearch.addText(i, movies[i], ratings[i])
}

//Search
let foundIds = accurateSearch.search('a')

//Show results
for (let id of foundIds) console.log(movies[id])
```

## Search: accurate, not inside words

```
const AccurateSearch = require('accurate-search')

let movies = ['Joker', 'Marriage Story', 'The Irishman']

//Initialize search
let accurateSearch = new AccurateSearch({
	insideWords: false
})

//Add data
for (let i = 0; i < movies.length; i++) {
	accurateSearch.addText(i, movies[i])
}

//Search
let foundIds = accurateSearch.search('a')

//Show results
for (let id of foundIds) console.log(movies[id])
```

## Search: speed, also inside words

```
const AccurateSearch = require('accurate-search')

let movies = ['Joker', 'Marriage Story', 'The Irishman']

//Initialize search
let accurateSearch = new AccurateSearch({
	engine: 'speed'
})

//Add data
for (let i = 0; i < movies.length; i++) {
	accurateSearch.addText(i, movies[i])
}

//Search
let foundIds = accurateSearch.search('a')

//Show results
for (let id of foundIds) console.log(movies[id])
```

## Search: speed, not inside words

```
const AccurateSearch = require('accurate-search')

let movies = ['Joker', 'Marriage Story', 'The Irishman']

//Initialize search
let accurateSearch = new AccurateSearch({
	engine: 'speed',
	insideWords: false
})

//Add data
for (let i = 0; i < movies.length; i++) {
	accurateSearch.addText(i, movies[i])
}

//Search
let foundIds = accurateSearch.search('a')

//Show results
for (let id of foundIds) console.log(movies[id])
```

## Search suggestions

```
const AccurateSearch = require('accurate-search')

let movies = ['Joker', 'Marriage Story', 'The Irishman']

//Initialize search
let accurateSearch = new AccurateSearch()

//Add data
for (let i = 0; i < movies.length; i++) {
	accurateSearch.addText(i, movies[i])
}

//Search
let suggestions = accurateSearch.suggestions('m', 5)

//Show results
for (let s of suggestions) console.log(s)
```