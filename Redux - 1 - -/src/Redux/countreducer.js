export function countreducer(state = { count: 0 }, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + action.payload }

        case "DECREMENT":
            return { count: state.count - action.payload }

            case "RESET":
            return { count: 0 }
        default:
            return state
    }

}