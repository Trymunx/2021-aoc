import * as Array from '/Users/alexhouseago/dev/2021-aoc/aoc/stdlib/ren/array.ren.mjs'
import * as Console from '/Users/alexhouseago/dev/2021-aoc/aoc/stdlib/ren/console.ren.mjs'
import * as File from '/Users/alexhouseago/dev/2021-aoc/aoc/stdlib/ren/file.ren.mjs'
import * as String from '/Users/alexhouseago/dev/2021-aoc/aoc/stdlib/ren/string.ren.mjs'
import * as Result from '/Users/alexhouseago/dev/2021-aoc/aoc/stdlib/ren/result.ren.mjs'
import * as Maybe from '/Users/alexhouseago/dev/2021-aoc/aoc/stdlib/ren/maybe.ren.mjs'
import * as Math from '/Users/alexhouseago/dev/2021-aoc/aoc/stdlib/ren/math.ren.mjs'

export function main ([year, day, part]) {
    return (() => {
        var parse = (($) => (Array.filterMap (parseInput)) ((String.split ('\n')) ($)))

        var input = (Result.map (parse)) (File.open ('./input.txt')
                ({sync: true}))

        var test = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2']

        return (($) => {
            if (Array.isArray($) && $.length >= 2 && Array.isArray($[0]) && $[0].length >= 2 && $[0][0] == '#ok' && $[1] == '1') {
                var numbers = $[0][1]
                return Console.log (solvePartOne (numbers))
            }

            if (Array.isArray($) && $.length >= 2 && Array.isArray($[0]) && $[0].length >= 2 && $[0][0] == '#ok' && $[1] == '2') {
                var numbers = $[0][1]
                return Console.log (solvePartTwo (numbers))
            }

            if (Array.isArray($) && $.length >= 2 && Array.isArray($[0]) && $[0].length >= 2 && $[0][0] == '#err') {
                var e = $[0][1]
                return Console.error (e)
            }

            if (Array.isArray($) && $.length >= 2 && $[1] == 'test1') {
                
                return Console.log (solvePartOne (Array.filterMap (parseInput)
                            (test)))
            }

            if (Array.isArray($) && $.length >= 2 && $[1] == 'test2') {
                
                return Console.log (solvePartTwo (Array.filterMap (parseInput)
                            (test)))
            }

            return Console.warn (`Unknown part: "${part}".`)
        })([input, part])
    })()
}

function parseInput (line) {
    return (() => {
        var [dir, amountString] = String.split (' ') (line)

        var amount = String.toNumber (amountString)

        return Maybe.map ((x) => [dir, x]) (amount)
    })()
}

function solvePartOne (input) {
    return Array.foldl (Math.mul)
        (1)
        (Array.foldl (applySimpleMotion) ([0, 0]) (input))
}

function applySimpleMotion ([down, forward]) {
    return ([dir, amount]) => {
        if (dir == 'forward') {
            return [down, forward + amount]
        }

        if (dir == 'down') {
            return [down + amount, forward]
        }

        if (dir == 'up') {
            return [down - amount, forward]
        }
    }
}

function solvePartTwo (input) {
    return (() => {
        var [depth, dist] = Array.foldl (applyAimMotion) ([0, 0, 0]) (input)

        return depth * dist
    })()
}

function applyAimMotion ([down, forward, aim]) {
    return ([dir, amount]) => {
        if (dir == 'forward') {
            return [down + amount * aim, forward + amount, aim]
        }

        if (dir == 'down') {
            return [down, forward, aim + amount]
        }

        if (dir == 'up') {
            return [down, forward, aim - amount]
        }
    }
}
