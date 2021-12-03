import * as Array from '/Users/alexhouseago/dev/2021-aoc/aoc/stdlib/ren/array.ren.mjs'
import * as Console from '/Users/alexhouseago/dev/2021-aoc/aoc/stdlib/ren/console.ren.mjs'
import * as File from '/Users/alexhouseago/dev/2021-aoc/aoc/stdlib/ren/file.ren.mjs'
import * as String from '/Users/alexhouseago/dev/2021-aoc/aoc/stdlib/ren/string.ren.mjs'
import * as Result from '/Users/alexhouseago/dev/2021-aoc/aoc/stdlib/ren/result.ren.mjs'

export function main ([year, day, part]) {
    return (() => {
        var parse = (($) => (Array.filterMap (String.toNumber)) ((String.split ('\n')) ($)))

        var input = (Result.map (parse)) (File.open ('./input.txt')
                ({sync: true}))

        var test = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]

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
                
                return Console.log (solvePartOne (test))
            }

            if (Array.isArray($) && $.length >= 2 && $[1] == 'test2') {
                
                return Console.log (solvePartTwo (test))
            }

            return Console.warn (`Unknown part: "${part}".`)
        })([input, part])
    })()
}

function solvePartOne (numbers) {
    return (() => {
        var count = 0

        return doRecThing (count) (numbers)
    })()
}

function doRecThing (count) {
    return (numbers) => {
        if (Array.isArray(numbers) && numbers.length >= 2) {
            var x = numbers[0]
            var y = numbers[1]
            if (y > x) {
                return doRecThing (count + 1) (Array.tail (numbers))
            }
        }

        if (Array.isArray(numbers) && numbers.length >= 2) {
            var x = numbers[0]
            var y = numbers[1]
            return doRecThing (count) (Array.tail (numbers))
        }

        return count
    }
}

function solvePartTwo (numbers) {
    return avgThree (0) (numbers)
}

function avgThree (count) {
    return (numbers) => {
        if (Array.isArray(numbers) && numbers.length >= 4) {
            var a = numbers[0]
            var b = numbers[1]
            var c = numbers[2]
            var d = numbers[3]
            return (() => {
                var newCount = a + b + c < b + c + d
                    ? count + 1
                    : count

                return avgThree (newCount) (Array.tail (numbers))
            })()
        }

        return count
    }
}
