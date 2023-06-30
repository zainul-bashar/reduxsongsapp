import { createStore } from "redux";
import data from "./reducers/data.reducer";
import songReducer from "./reducers/song.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    data: data,
    selectedSong: songReducer
})

const store = createStore(rootReducer)

export default store;