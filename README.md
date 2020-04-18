# accurate-search

The **fastest** and **most accurate** Javascript full-text search library.

Accurate search uses match distance algorithm to return the accurate order of the matching items. Match distance means words matched in the beginning of the text weight more than those matched further in the text. Setting ratings for entries will influence the scoring. No dependencies on other libraries or APIs, so it works offline too.

Features:
- **text search**:
  - the **fastest** and **most accurate** text search
  - takes ratings into consideration; if an item have rating, it will influence the scoring
- **ratings** (optional)
  - if an item have rating defined, this will influence the scoring. The item's score will be multiplied with the rating value
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
let ratings = [1.1, 1.3, 1.9]

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
