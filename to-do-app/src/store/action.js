export const  createToDo = (text) =>({
    type : 'CREATE_TODO',
    payload : {text}
})

export const  removeToDo = (text) =>({
    type : 'REMOVE_TODO',
    payload : {text}
})