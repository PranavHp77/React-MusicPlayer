import React,{useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'


const Player = ({setSongs,setCurrSong,currSong,songs,songInfo,setSongInfo,audioRef,isPlaying,setIsPlaying}) => {

    useEffect(()=>{
        const newSongs = songs.map((song)=>{
            if(song.id===currSong.id){
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
    },[currSong])

    const playSongHandler= () =>{
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }

    const dragHandler= (e) =>{
        audioRef.current.currentTime=e.target.value
        setSongInfo({...songInfo,currentTime: e.target.value})
    }

    const getTime = (time) => {
        return(
            Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2)
        )
    }

    const skipTrackHandler= async (direction)=>{
        let currentIndex=songs.findIndex((song)=> song.id===currSong.id);
        if(direction==='skip-forward'){
           await setCurrSong(songs[(currentIndex+1)%songs.length]);
        }
        if(direction==='skip-back'){
            if((currentIndex-1)%songs.length===-1){
            await setCurrSong(songs[songs.length - 1]);
            if(isPlaying) audioRef.current.play();
            return;
        }
        await setCurrSong(songs[(currentIndex-1)%songs.length])
    }
    if(isPlaying) audioRef.current.play();
    }

    const trackAnim={
        transform:`translateX(${songInfo.animationp}%)`
    }

    return (
            <div className="player">
                <div className="time-control">
                    <p>{getTime(songInfo.currentTime)}</p>
                    <div style={{background:`linear-gradient(to right,${currSong.color[0]},${currSong.color[1]})`}} className="track">
                    <input
                    min={0} 
                    max={songInfo.duration} 
                    value={songInfo.currentTime} 
                    onChange={dragHandler}
                    type='range'/>
                    <div style={trackAnim} className="animate-track"></div>
                    </div>
                    <p>{getTime(songInfo.duration)}</p>
                </div>
                <div className="play-control">
                    <FontAwesomeIcon onClick={()=>skipTrackHandler('skip-back')} className="skip-back" size='2x' icon={faAngleLeft} />
                    <FontAwesomeIcon onClick={playSongHandler} 
                    className="play" 
                    size='2x' 
                    icon={isPlaying ? faPause : faPlay}
                    color={songInfo.playercolor} />
                    <FontAwesomeIcon onClick={()=>skipTrackHandler('skip-forward')} className="skip-forward" size='2x' icon={faAngleRight} />
                </div>
            </div>

    )
}

export default Player
