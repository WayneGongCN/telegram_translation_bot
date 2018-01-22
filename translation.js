const tjs = require('translation.js')

/**
 * 翻译
 * @param { String } text 
 * @param { String } from 
 * @param { String } to 
 * @param { String } api 
 * @param { Boolean } com 
 */
module.exports = async function (text, from='en', to='zh-CN', api='google', com=true) {
    const params = { text,from,to,com,api }

    const result = await tjs.translate(params)
    const audio = await tjs.audio(result.result[0])
    return { result, audio }
}