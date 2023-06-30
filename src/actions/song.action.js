import { SELECTED_SONG } from "./actionType"

export const selectedSong = (song) =>{
    return(
        {
            type: SELECTED_SONG,
            payload: song
        }
    )
}