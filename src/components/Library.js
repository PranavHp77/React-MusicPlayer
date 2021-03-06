import React from 'react'
import LibSong from './LibSong'

const Library = ({songs,setCurrSong,audioRef,isPlaying,setSongs,libraryStatus}) => {
    return (
        <div className={`library ${libraryStatus ? "active-library" : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song)=>(
                    <LibSong 
                    setCurrSong={setCurrSong} 
                    songs={songs}
                    song={song}
                    id={song.id}
                    key={song.id}
                    audioRef={audioRef}
                    isPlaying={isPlaying}
                    setSongs={setSongs}
                    />
                ))} 
            </div>
        </div>
    )
}

export default Library
 