export function jsontodoreducer(state=[],action){
    switch(action.type){
        case "ADDJSONTODO":
            return action.payload
        default:
            return state
    }

}