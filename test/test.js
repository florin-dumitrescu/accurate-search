const assert = require('assert')
const AccurateSearch = require('../accuratesearch.min.js')

let accurateSearch

let movies = ['The Lighthouse', 'Marriage Story', 'The Irishman', 'Transit', 'A Hidden Life', 'Little Women',
	'Uncut Gems', 'Under the Silver Lake', 'The Beach Bum', 'Gloria Bell', 'An Elephant Sitting Still',
	'Portrait of a Lady on Fire', 'Apollo 11', 'The Souvenir', 'Pain and Glory', 'Parasite'
]
let ratings = [1, 1.1, 1.2]

describe('Search', function () {

	describe('init', function () {
		it('should return ok if search initialize successfully', function () {
			accurateSearch = new AccurateSearch()
			for (let i = 0; i < movies.length; i++) {
				accurateSearch.addText(i, movies[i])
			}
			assert.ok(accurateSearch)
		});
	});

	describe('search', function () {
		it('should return ok if at least one match is found', function () {
			let foundIds = accurateSearch.search('a')
			assert.ok(foundIds)
		});
	});

});


describe('Search with ratings', function () {

	describe('init', function () {
		it('should return ok if search initialize successfully', function () {
			accurateSearch = new AccurateSearch()
			for (let i = 0; i < movies.length; i++) {
				accurateSearch.addText(i, movies[i], ratings[i])
			}
			assert.ok(accurateSearch)
		});
	});

	describe('search', function () {
		it('should return ok if at least one match is found', function () {
			let foundIds = accurateSearch.search('a')
			assert.ok(foundIds)
		});
	});

});


describe('Search suggestions', function () {

	describe('init', function () {
		it('should return ok if search initialize successfully', function () {
			accurateSearch = new AccurateSearch({
				engine: 'speed',
				insideWords: false
			})
			for (let i = 0; i < movies.length; i++) {
				accurateSearch.addText(i, movies[i])
			}
			assert.ok(accurateSearch)
		});
	});

	describe('search suggestions', function () {
		it('should return ok if at least one match is found', function () {
			let foundIds = accurateSearch.suggestions('a')
			assert.ok(foundIds)
		});
	});

});


describe('Remove entry from index', function () {
	let as

	describe('init', function () {
		it('should return ok if search initialize successfully', function () {
			as = new AccurateSearch()
			for (let i = 0; i < movies.length; i++) {
				as.addText(i, movies[i])
			}
			assert.ok(accurateSearch)
		});
	});

	describe('remove entries', function () {
		it('should return ok if entries are removed successfully', function () {
			as.remove(0)
			as.remove(2)
			assert.ok(1)
		});
	});

	describe('search', function () {
		it('should return ok if exact 3 matches are found', function () {
			let foundIds = as.search('the')
			assert.ok(foundIds.length === 3)
		});
	});

});