import axios from "axios"

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
    return { type: "ADDTODO", payload: val }
}

export function addjsontodo(val) {
    return { type: "ADDJSONTODO", payload: val }
}

export async function getTodoData(dispatch) {
    let res = await axios({
        method: "get",
        url: "http://localhost:3000/todos",
    });
    dispatch(addjsontodo(res.data));
}



export const handleJadd = (obj) => async (dispatch) => {
    let res = await axios({
        method: "post",
        url: "http://localhost:3000/todos",
        data: obj
    });
    // console.log(res.data);

    getTodoData(dispatch);
}

