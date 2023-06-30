import { SELECTED_SONG } from "../actions/actionType";

const initialState = null

const songReducer = (state=initialState, actions) =>{
    switch(actions.type){
        case SELECTED_SONG:
            return actions.payload;
            default:
                return state;
    }
   
}
export default songReducer;