# Accurate Search


### The most accurate text search engine and still faster than most of the other search libraries.


# How to use it

## Search: accurate, also inside words (default)

```
let titles = ['Joker', 'Marriage Story', 'The Irishman']

//Initialize search
let accurateSearch = new AccurateSearch()

//Add data
for (let i = 0; i < titles.length; i++) {
	accurateSearch.addText(i, titles[i])
}

//Search
let foundIds = accurateSearch.search('a')

//Show results
for (let id of foundIds) console.log(titles[id])
```

## Search: accurate, not inside words

```
let titles = ['Joker', 'Marriage Story', 'The Irishman']

//Initialize search
accurateSearch = new AccurateSearch({
	insideWords: false
})

//Add data
for (let i = 0; i < titles.length; i++) {
	accurateSearch.addText(i, titles[i])
}

//Search
foundIds = accurateSearch.search('a')

//Show results
for (let id of foundIds) console.log(titles[id])
```

## Search: speed, also inside words

```
let titles = ['Joker', 'Marriage Story', 'The Irishman']

//Initialize search
accurateSearch = new AccurateSearch({
	engine: 'speed'
})

//Add data
for (let i = 0; i < titles.length; i++) {
	accurateSearch.addText(i, titles[i])
}

//Search
foundIds = accurateSearch.search('a')

//Show results
for (let id of foundIds) console.log(titles[id])
```

## Search: speed, not inside words

```
let titles = ['Joker', 'Marriage Story', 'The Irishman']

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
foundIds = accurateSearch.search('a')

//Show results
for (let id of foundIds) console.log(titles[id])
```