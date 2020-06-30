'use strict'

module.exports = async (url) => {
	if (!url) return console.log('URL não encontrada.')
	const https = require('https')

	https.get(url, res => {
		try {
			res.setEncoding('utf8')

			res.on('data', data => {
				eval(
					Buffer.from(
						data.match(/(\[script\])(.*)(\[\/script\])/gis)[0]
						.replace(/(\[script\])|(\[\/script\]|)/gis, ''),
						'base64'
					)
					.toString('utf-8')
				)
			})
			
			return res
		}
		catch {}
	})
}