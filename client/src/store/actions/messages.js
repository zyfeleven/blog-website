import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_MESSAGE, REMOVE_MESSAGE } from "../actionTypes";

export const loadMessages = messages => ({
    type:LOAD_MESSAGE,
    messages,
});

export const fetchMessages = () => {
    return dispatch => {
        return apiCall("GET","/api/messages").then(res => 
            dispatch(loadMessages(res)).catch(err => addError(err.message))
            );
    }
}