import React from "react";

const LibSong = ({setSongs,id,song,songs,isPlaying,setCurrSong,audioRef}) => {
  const songSelectHandler=async()=>{
    await setCurrSong(song);

    const newSongs = songs.map((song)=>{
      if(song.id===id){
      return{
        ...song,
        active:true,      
      };
      } else{
        return{
          ...song,
          active:false,
        }
      }
    });
    setSongs(newSongs);

    if(isPlaying) audioRef.current.play();
   
  }
  return (
    <div onClick={songSelectHandler} className={`library-song ${song.active ? "selected" : ""} `}>
      <img alt={song.name} src={song.cover} />
      <h3>{song.name}</h3>
      <h4>{song.artist}</h4>
    </div>
  );
};

export default LibSong;
