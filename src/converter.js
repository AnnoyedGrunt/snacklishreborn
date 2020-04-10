import blacklist from './blacklist.js'
import fixed from './fixed.js'
import rules from './rules.js'

function convert(text, amount = 1) {
    text = text.toLowerCase()
    
    const converted = text.replace(/[\w']+/g, (token) => {
        if (Math.random() < amount) {
            return convertToken(token)
        }
        return token
    })
    return converted
    
    
}

function convertToken(token) {
    if (blacklist.has(token)) {
        return token;
    }
    
    if (token in fixed) {
        return fixed[token]
    }
    
    const viableRules = []
    for (let [pattern, transformation] of rules) {
        if (pattern.test(token)) {
            viableRules.push([pattern, transformation])
        }
    }
    
    if (viableRules.length > 0) {
        console.log(viableRules)
        const [pattern, transformation] = random(viableRules)
        console.log([pattern, transformation])
        return token.replace(pattern, transformation)   
    }
    
    return token;
}

function random(array) {
    return array[Math.floor(Math.random() * array.length)]
}

export default { convert };