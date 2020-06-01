import {CREATE_TODO, REMOVE_TODO} from './action'


export const todos = ( state=[], action ) =>{
        const { type, payload }  = action;

        switch( type ){
            case CREATE_TODO:{
                const { text } = payload;
                return state.concat(text);
            }
            case REMOVE_TODO:{
                //Do some thing
            }
            default :{
                return state;
            }
        }
}