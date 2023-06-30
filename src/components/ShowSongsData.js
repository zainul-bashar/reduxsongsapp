import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { selectedSong } from "../actions/song.action";

const ShowSongData = () =>{

    const songs = useSelector(state=>state.data)
    const dispatch = useDispatch()
    return(
        <div>
            <h1>Songs List</h1>
            <div style={{
                        border: "1px solid black",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                    }}>
        {
            songs && 
            songs.map((song,index)=>{
                return(
                   <div key={index}  style={{width:"200px"}}  onClick = {()=> dispatch(selectedSong(song))}>
                    <h3>{song.name}</h3>
                   </div>
                )
            })
        }
        </div>
        </div>
    )
}
export default ShowSongData;