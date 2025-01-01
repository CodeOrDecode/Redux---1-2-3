export const todomiddleware = (store) => (next) => (action) => {
    if (typeof action == "function") {
        action(store.dispatch)
        return
    }
    next(action)

}