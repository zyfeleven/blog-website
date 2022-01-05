import { LOAD_MESSAGE,REMOVE_MESSAGE } from "../actionTypes";

export default (state=[], action) => {
    switch(action.type){
        case LOAD_MESSAGE:
            return [...action.message];
        // case REMOVE_MESSAGE:
        //     return 
        default:
            return state;
    }
}
