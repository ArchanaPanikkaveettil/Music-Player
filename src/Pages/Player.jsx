import React from 'react'
import './Player.css'

export default function Player() {
  return (
    <>
      <div> 
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} /> 
      <Song currentSong={currentSong} /> 
      <Player 
        id={songs.id} 
        songs={songs} 
        songInfo={songInfo} 
        setSongInfo={setSongInfo} 
        audioRef={audioRef} 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        currentSong={currentSong} 
        setCurrentSong={setCurrentSong} 
        setSongs={setSongs} 
      /> 
      <Library 
        libraryStatus={libraryStatus} 
        setLibraryStatus={setLibraryStatus} 
        setSongs={setSongs} 
        isPlaying={isPlaying} 
        audioRef={audioRef} 
        songs={songs} 
        setCurrentSong={setCurrentSong} 
      /> 
      <audio 
        onLoadedMetadata={timeUpdateHandler} 
        onTimeUpdate={timeUpdateHandler} 
        src={currentSong.audio} 
        ref={audioRef} 
        onEnded={songEndHandler} 
      ></audio> 
    </div> 
    </>
  )
}
