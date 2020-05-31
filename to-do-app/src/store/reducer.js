export const todos = ( state, action ) =>{
        const { type, payload }  = action;

        switch( type ){
            case 'CREATE_TODO':{
                const { text } = payload;
                return state.concat(text);
            }
            case 'REMOVE_TODO':{

            }
            default :{
                return state;
            }
        }
}