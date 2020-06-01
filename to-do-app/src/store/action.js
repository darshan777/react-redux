export const  CREATE_TODO = (text) =>({
    type : 'CREATE_TODO',
    payload : {text}
})

export const  REMOVE_TODO = (text) =>({
    type : 'REMOVE_TODO',
    payload : {text}
})