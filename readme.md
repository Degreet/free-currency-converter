# Конвертер валют

Данный конвертер валют **абсолютно** бесплатный. Работает он при помощи **netex24.net**, парся данные оттуда при помощи **Puppeteer**.

# Кол-во бесплатных запросов

**НЕОГРАНИЧЕННО**

# Установка и импорт

### Установка:

`npm i free-currency-converter`

### Импорт:

```javascript
const converter = require('free-currency-converter')
```

# Конвертируем

### Выбираем валюту

Для начала нам надо определиться с валютой. Все поддерживаемые валюты Вы можете посмотреть в `converter.currencies`, или создать свою валюту на основе данных в netex24.net в адресной строке (source, target). Например мы выберим валюту **Ethereum**:

```javascript
const currencyInfo = converter.currencies.eth
```

### Строим URL

Далее из полученных данных о валюте мы стоим URL адрес при помощи метода **buildUrl**:

```javascript
const url = converter.buildUrl(currencyInfo)
```

### Получаем результат

Далее получаем результат при помощи асинхронного метода **getCourse** и выводим результат в консоль:

```javascript
const sum = 0.003
const result = await converter.getCourse(url, sum)
```

В результате мы получим число в виде строки: 5,8 (в долларах, пример)

# Пример кода

void нужен в данном примере для того, чтобы не писать **;**

```javascript
const converter = require('./index')

void (async () => {
	const currencyInfo = converter.currencies.eth
	const url = converter.buildUrl(currencyInfo)
	const result = await converter.getCourse(url, 0.005)

	console.log(result)
})()
```

# Зависимости

Данный конвертер зависит от модуля **Puppeteer**, который позволяет парсить данные с сайтов.
