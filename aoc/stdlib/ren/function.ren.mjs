// always : a -> b -> a
export function always(x) {
    return (y) => {
        return x
    }
}

// discard : a -> b -> b
export function discard(x) {
    return (y) => {
        return y
    }
}

// pipe : a -> (a -> b) -> b
export function pipe(x) {
    return (f) => {
        return f(x)
    }
}

// compose (a -> b) -> (b -> c) -> a -> c
export function compose(f) {
    return (g) => (x) => {
        return g(f(x))
    }
}

//
export function identity(a) {
    return a
}