import { LOAD_MESSAGE,REMOVE_MESSAGE } from "../actionTypes";

export default (state=[], action) => {
    switch(action.type){
        case LOAD_MESSAGE:
            return [...action.messages];
        // case REMOVE_MESSAGE:
        //     return 
        default:
            return state;
    }
}
