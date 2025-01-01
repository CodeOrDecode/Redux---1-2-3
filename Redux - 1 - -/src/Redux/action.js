export function increment(val) {
    return { type: "INCREMENT", payload: val }
}


export function decrement(val) {
    return { type: "DECREMENT", payload: val }
}

export function reset() {
    return { type: "RESET", }
}


export function addtodo(val) {
    return { type: "ADDTODO", payload:val}
}