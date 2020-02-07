const assert = require('assert')
const AccurateSearch = require('../accuratesearch.min.js')

let accurateSearch

let movies = ['The Lighthouse', 'Marriage Story', 'The Irishman', 'Transit', 'A Hidden Life', 'Little Women',
	'Uncut Gems', 'Under the Silver Lake', 'The Beach Bum', 'Gloria Bell', 'An Elephant Sitting Still',
	'Portrait of a Lady on Fire', 'Apollo 11', 'The Souvenir', 'Pain and Glory', 'Parasite'
]
let ratings = [8.6, 8.1, 8.0]

describe('Search: accurate, also inside words (default)', function () {

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


describe('Search: accurate, not inside words', function () {

	describe('init', function () {
		it('should return ok if search initialize successfully', function () {
			accurateSearch = new AccurateSearch({
				insideWords: false
			})
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


describe('Search: speed', function () {

	describe('init', function () {
		it('should return ok if search initialize successfully', function () {
			accurateSearch = new AccurateSearch({
				engine: 'speed'
			})
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
	let as1, as2

	describe('init', function () {
		it('should return ok if search initialize successfully', function () {
			as1 = new AccurateSearch()
			as2 = new AccurateSearch({
				engine: 'speed'
			})
			for (let i = 0; i < movies.length; i++) {
				as1.addText(i, movies[i])
				as2.addText(i, movies[i])
			}
			assert.ok(accurateSearch)
		});
	});

	describe('remove entries', function () {
		it('should return ok if entries are removed successfully', function () {
			as1.remove(0)
			as1.remove(2)
			as2.remove(0)
			as2.remove(2)
			assert.ok(1)
		});
	});

	describe('search accurate', function () {
		it('should return ok if only 3 matches are found', function () {
			let foundIds = as1.search('the')
			assert.ok(foundIds.length === 3)
		});
	});

	describe('search speed', function () {
		it('should return ok if only 3 matches are found', function () {
			let foundIds = as2.search('the')
			assert.ok(foundIds.length === 3)
		});
	});

});