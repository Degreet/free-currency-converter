const puppeteer = require('puppeteer')

const currencies = {
	btc: {
		source: 154,
		target: 139,
	},
	usdt: {
		source: 173,
		target: 139,
	},
	eth: {
		source: 153,
		target: 139,
	},
	rub: {
		source: 141,
		target: 139,
	},
	qiwi: {
		source: 74,
		target: 139,
	},
	uah: {
		source: 163,
		target: 139,
	},
	euro: {
		source: 43,
		target: 139,
	},
}

function buildUrl(currencyInfo) {
	const { source, target } = currencyInfo
	return `https://www.netex24.net/#/ru/?source=${source}&target=${target}`
}

async function getCourse(url, sum) {
	const browser = await puppeteer.launch({
		headless: true,
		defaultViewport: null,
	})

	const page = await browser.newPage()
	await page.goto(url, { waitUntil: 'networkidle2' })

	const inputSumSelector =
		'#main-page > div > div > section.exchange > div.vExchange.is-in-action > div > div:nth-child(1) > div.vCalculator > div:nth-child(2) > div.calculator-wrapper > div:nth-child(2) > div.vCalculatorLine > div.v-cl-field > div > input'

	const inputResultSelector =
		'#main-page > div > div > section.exchange > div.vExchange.is-in-action > div > div:nth-child(1) > div.vCalculator > div:nth-child(2) > div.calculator-wrapper > div:nth-child(4) > div.vCalculatorLine > div.v-cl-field > div > input'

	await page.waitForSelector(inputSumSelector)
	await page.type(inputSumSelector, sum.toString())

	await page.waitForSelector(inputResultSelector)
	const result = await page.$eval(inputResultSelector, (el) => el.value)

	await page.close()
	await browser.close()

	return result
}

module.exports = {
	getCourse,
	buildUrl,
	currencies,
}
