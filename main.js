const TelegramBot = require('node-telegram-bot-api')
const tsl = require('./translation')

const token = 'TOKEN'
const bot = new TelegramBot(token, {polling: true})

bot.onText(/\/tsl (([\w\-]+)->([\w\-]+) )?(.*)/ig, async (msg, match) => {
    let resp = ''
    const chatId = msg.chat.id

    const text = match[4]
    const from = match[2]
    const to = match[3]
    const tslResult = await tsl(text, from, to)

    const result = tslResult.result.result
    const resultText = tslResult.result.text
    const resultDict = tslResult.result.dict
    const resultLink = tslResult.result.link

    resp = `${resultText}\n${result}\n${resultDict}\n${resultLink}`
    bot.sendMessage(chatId, resp)
})