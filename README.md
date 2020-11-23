# accurate-search

The **fastest** and **most accurate** Javascript full-text search library.

Accurate search uses match distance algorithm to return the accurate order of the matching items. Match distance means words matched in the beginning of the text weight more than those matched further in the text. Scoring is influenced by the distance of the match in the text. No dependencies on other libraries or APIs, so it works offline too.

Features:
- **text search**:
  - the **fastest** and **most accurate** text search
  - scoring is influenced by the distance of the match in the text
	- if there is no accurate match found, it will run a **fuzzy search**
- **search suggestions**
  - suggest full words starting with the letters entered by the user
- **realtime indexing** of the content
  - content will stay indexed after adding or removing entries


# Benchmark

A comparison with other javascript search libraries can be found on the Accurate Search website: [accuratesearch.org](https://accuratesearch.org)

[![Search libraries comparison](https://accuratesearch.org/search-comparison.png)](https://accuratesearch.org)


# How to install

```
npm i accurate-search
```


# How to use

## Search

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
let ratings = [8.0, 8.6, 8.3]

//Initialize search
let accurateSearch = new AccurateSearch()

//Add data
for (let i = 0; i < movies.length; i++) {
	accurateSearch.addText(i, movies[i], 100-10*ratings[i])
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



## Available methods

- addText(id, text, distanceBehind = 0)
- search(query) - Search with accurate engine. If there is no match found, search again with fuzzy engine.
- accurateSearch(query)
- fuzzySearch(query)
- suggestions(query, limit)
- remove(id)