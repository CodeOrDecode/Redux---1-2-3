export function todoreducer(state = [], action) {
    switch (action.type) {
        case "ADDTODO":
            return [...state, action.payload]

        default:
            return state
    }

}