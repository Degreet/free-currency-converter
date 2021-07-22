const converter = require('./index')

void (async () => {
	const currencyInfo = converter.currencies.eth
	const url = converter.buildUrl(currencyInfo)
	const result = await converter.getCourse(url, 0.005)

	console.log(result)
})()
