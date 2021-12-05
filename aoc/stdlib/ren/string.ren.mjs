import { $just, $nothing } from './maybe.ren.mjs'

// split : String -> String -> Array String
export function split(separator) {
    return (string) => {
        return string.split(separator)
    }
}


// join : String -> Array String -> String
export function join(separator) {
    return (strings) => {
        return strings.join(separator)
    }
}

// append : String -> String -> String
export function append(a) {
    return (b) => {
        return `${a}${b}`
    }
}

// toNumber : String -> Maybe Number
export function toNumber(string) {
    const number = Number(string)

    return isNaN(number)
        ? $nothing
        : $just(number)
}

// isEmpty : String -> Boolean
export function isEmpty(string) {
    return string === ''
}

// length : String -> Number
export function length(string) {
    return string.length
}

// startsWith : String -> String -> Boolean
export function startsWith(leading) {
    return (string) => {
        return string.startsWith(leading)
    }
}

// drop : Number -> String -> String
export function drop(n) {
    return (string) => {
        return string.substring(n)
    }
}

// take : Number -> String -> Maybe String
export function take(n) {
    return (string) => {
        return string === ''
            ? $nothing
            : $just(string.substring(0, n))
    }
}

export function toInt(radix) {
    return (string) => {
        const number = parseInt(string, radix);

        return isNaN(number)
            ? ['#nothing']
            : ['#just', number]
    }
}
