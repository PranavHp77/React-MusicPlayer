import React,{useState,useRef} from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import "./Style/app.scss";
import data from './components/util'
import Library from './components/Library'
import Nav from './components/Nav'

function App() {

  const audioRef = useRef(null);

  const [songs,setSongs]=useState(data());
  const [currSong,setCurrSong]=useState(songs[0]);
  const [isPlaying,setIsPlaying]=useState(false);

  const [libraryStatus,setLibraryStatus]=useState(false);

  const timeUpdateHandler= (e) =>{
    const current=e.target.currentTime;
    const duration=e.target.duration;
    const roundedCurrent=Math.round(current);
    const roundedDuration=Math.round(duration);
    const animation=Math.round((roundedCurrent/roundedDuration)*100);
    console.log(animation);
    setSongInfo({...songInfo,currentTime:current,duration,animationp:animation});
  }

  const songEndHandler=async()=>{
    let currentIndex=songs.findIndex((song)=> song.id===currSong.id);
       await setCurrSong(songs[(currentIndex+1)%songs.length]);
       if(isPlaying)audioRef.current.play();
    }
  

  
  
  const [songInfo,setSongInfo]=useState({
    currentTime:0,
    duration: 0,
    animationp: 0,
  });

  return (
    <div className={`App ${libraryStatus ? 'library-active' : ''}`}>
      <Nav
      libraryStatus={libraryStatus}
      setLibraryStatus={setLibraryStatus}
      />
      <Song currentSong={currSong} />
      <Player 
        timeUpdateHandler={timeUpdateHandler}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currSong={currSong}
        setSongInfo={setSongInfo}
        setCurrSong={setCurrSong}
        songInfo={songInfo}
        songs={songs}
        setSongs={setSongs}
        />
        <Library 
        libraryStatus={libraryStatus}
        isPlaying={isPlaying} 
        audioRef={audioRef} 
        songs={songs} 
        setCurrSong={setCurrSong}
        setSongs={setSongs}
        />
        <audio 
                onLoadedMetadata={timeUpdateHandler}
                onTimeUpdate={timeUpdateHandler} 
                ref={audioRef} 
                src={currSong.audio}
                onEnded={songEndHandler}
                >
        </audio>
    </div>
  );
}

export default App;
