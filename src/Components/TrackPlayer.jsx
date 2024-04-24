import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './TrackPlayer.css';

import useSound from "use-sound"; // for handling the sound

export default function TrackPlayer() {

    const [song, setSong] = useState({});
    console.log("song usestate: ", song);

    const accessToken = sessionStorage.getItem('accessToken');
    console.log("accessToken: ", accessToken);
    const trackid = sessionStorage.getItem('trackid');
    const trackurl = `https://api.spotify.com/v1/tracks/${trackid}`;


    useEffect(() => {

        //fetch selected track

        axios.get(trackurl, {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        })
            .then(res => {
                setSong(res.data);
            }).catch(err => {
                console.log(err);
            })

    }, [])

    const [volume, setVolume] = useState(50); // Initial volume value

    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
    };

    const [isPlaying, setIsPlaying] = useState(false); //for storing the current status of the player

    const [play, { pause, duration, sound }] = useSound(song.preview_url, {
        
    });

    return (
        <>


            {Object.keys(song).length > 0 && (

                <div class="card" id="card">

                    <div class="bg-image" id='bg-image' data-mdb-ripple-color="light">
                        <img class="card-img-top" id="card-img" src={song.album.images[0].url}
                            alt="Music Image" />
                    </div>
                    <br />
                    <div class="card-body text-center">

                        <h5 class="h5 font-weight-bold" id='songname'>{song.name}</h5>
                        <p class="mb-0" id='artist_name'>{song.artists.map(artist => artist.name).join(', ')}</p>
                        {/*  maps through the artists array, extracts the name of each artist,*/}
                        {/* .join(', ') ---- joins them into a single string separated by commas. */}


                        <br />
                        <div id="audioplayer">

                            {/* <i id="pauseButton" class="fas fa-pause"></i> */}

                            <i id='previousButton' class="fas fa-backward-step"></i>

                            <i id="playButton" class="fas fa-play"></i>

                            <i id='nextButton' class="fas fa-forward-step"></i>

                            <br />
                            <div id="timeline">
                                <div id="playhead"></div>
                            </div>
                            <br />
                            <i id='volume' class="fas fa-volume-low"></i>
                            <input
                                id='volumeSlider'
                                type="range"
                                min="0"
                                max="100"
                                value={volume}
                                onChange={handleVolumeChange}
                                
                            />
                            {/* <output>{volume}</output> */}

                        </div>

                    </div>
                </div>
            )}
        </>
    )
}
