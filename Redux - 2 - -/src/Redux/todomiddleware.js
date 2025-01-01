export const todomiddleware = (state) => (next) => (action) => {
    if(action.type == "ADDJSONTODO"){
        action.payload= [{
            id:"222",
            title:"hhhh",
            status:true
        }]
    }
    next(action)
}