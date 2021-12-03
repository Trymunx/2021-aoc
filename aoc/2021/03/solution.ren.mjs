import * as Array from '/Users/alexhouseago/dev/2021-aoc/aoc/stdlib/ren/array.ren.mjs'
import * as Console from '/Users/alexhouseago/dev/2021-aoc/aoc/stdlib/ren/console.ren.mjs'
import * as File from '/Users/alexhouseago/dev/2021-aoc/aoc/stdlib/ren/file.ren.mjs'
import * as String from '/Users/alexhouseago/dev/2021-aoc/aoc/stdlib/ren/string.ren.mjs'
import * as Result from '/Users/alexhouseago/dev/2021-aoc/aoc/stdlib/ren/result.ren.mjs'
import * as Bitwise from '/Users/alexhouseago/dev/2021-aoc/aoc/stdlib/ren/bitwise.ren.mjs'

export function main ([year, day, part]) {
    return (() => {
        var parse = (($) => (Array.filterMap (parseInput)) ((String.split ('\n')) ($)))

        var input = (Result.map (parse)) (File.open ('./input.txt')
                ({sync: true}))

        var test = ['00100', '11110', '10110', '10111', '10101', '01111', '00111', '11100', '10000', '11001', '00010', '01010']

        return (($) => {
            if (Array.isArray($) && $.length >= 2 && Array.isArray($[0]) && $[0].length >= 2 && $[0][0] == '#ok' && $[1] == '1') {
                var numbers = $[0][1]
                return solvePartOne (numbers)
            }

            if (Array.isArray($) && $.length >= 2 && Array.isArray($[0]) && $[0].length >= 2 && $[0][0] == '#ok' && $[1] == '2') {
                var numbers = $[0][1]
                return solvePartTwo (numbers)
            }

            if (Array.isArray($) && $.length >= 2 && Array.isArray($[0]) && $[0].length >= 2 && $[0][0] == '#err') {
                var e = $[0][1]
                return Console.error (e)
            }

            if (Array.isArray($) && $.length >= 2 && $[1] == 'test1') {
                
                return solvePartOne (Array.filterMap (parseInput) (test))
            }

            if (Array.isArray($) && $.length >= 2 && $[1] == 'test2') {
                
                return solvePartTwo (Array.filterMap (parseInput) (test))
            }

            return Console.warn (`Unknown part: "${part}".`)
        })([input, part])
    })()
}

function parseInput (line) {
    return String.toInt (2) (line)
}

function solvePartOne (input) {
    return Array.foldl (Bitwise.xor) (32) (input)
}

function solvePartTwo (input) {
    return Console.log (input)
}
