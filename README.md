# accurate-search

The most accurate text search engine and faster than most of the other search libraries. Has options to set ratings for entries which will influence the scoring or to switch the search engine to speed which has the fastest search and still very good results. No dependencies on other libraries or APIs, so it works offline too.

Features:
- **text search** with options:
  - engine: 
    - accurate - the most accurate search, faster than most of the other search libraries
		  - have the option to search matches inside words, not only at the beginning of the words
      - takes ratings into consideration. If an item have rating, it will influence the scoring
	  - speed - the fastest search, still very good results. Doesn't take ratings into consideration
- **ratings** (optional)
  - the accurate search engine will also take into consideration the ratings if they are defined (bigger rating is better)
- **search suggestions**
  - suggest full words starting with the letters entered by the user
- realtime indexing of the content
  - content will stay indexed after adding or removing entries


# Benchmark

A comparison with other javascript search libraries can be found on the Accurate Search website: [accuratesearch.org](http://accuratesearch.org)


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

## Search items with ratings

```
const AccurateSearch = require('accurate-search')

let movies = ['The Irishman', 'Joker', 'Marriage Story']
let ratings = [8.0, 8.6, 8.1]

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

## Search: speed

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


## Remove entry from search index

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
let suggestions = accurateSearch.search('a')

//Show results
for (let s of suggestions) console.log(s)

//Remove entry
accurateSearch.remove(2)

//Search again
let suggestions = accurateSearch.search('a')

//Show results
for (let s of suggestions) console.log(s)
```