import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Playlist.css'
import '../Components/SongList'


import axios from 'axios';
import SongList from '../Components/SongList';
import TrackPlayer from '../Components/TrackPlayer';

export default function Playlist() {

    const { id } = useParams();
    // console.log(id);
    const accessToken = sessionStorage.getItem('accessToken');
    const playlist_url = `https://api.spotify.com/v1/playlists/${id}`;

    //playlist whole data
    const [playlist, setPlaylist] = useState({});
    console.log('usestate', playlist);

    //playlist tracks data only
    const [playlistTracks, setPlaylistTracks] = useState([]);
    console.log("playlistTracks : ", playlistTracks);

    useEffect(() => {

        if (!accessToken) {
            // Handle missing access token
            console.error("Access token is missing.");
            return;
        }
        fetchPlaylistTracks(accessToken);

    }, [accessToken])




    // Function to fetch playlist tracks
    const fetchPlaylistTracks = (accessToken) => {
        //api calling to get the playlist tracks

        axios.get(playlist_url, {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        })
            .then(res => {
                console.log(res.data);
                setPlaylist(res.data);
                setPlaylistTracks(res.data.tracks.items);
            }).catch(error => {
                console.log(error);
            })
    }



    const addDefaultImg = ev => {
        ev.target.src = "/public/Images/download.jpeg"
    }



    return (
        <>


            <div class="sidebar">
                <div class="logo">
                    <a href="#">
                        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="Logo" />
                    </a>
                </div>

                <div class="navigation">
                    <ul>
                        <li>
                            <a href="">
                                <span class="fa fa-home"></span>
                                <span>Home</span>
                            </a>
                        </li>

                        <li>
                            <a href="/">
                                <span class="fa fa-search"></span>
                                <span>Search</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <span class="fa fas fa-book"></span>
                                <span>Your Library</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="navigation">
                    <ul>
                        <li>
                            <a href="#">
                                <span class="fa fas fa-plus-square"></span>
                                <span>Create Playlist</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <span class="fa fas fa-heart"></span>
                                <span>Liked Songs</span>
                            </a>
                        </li>
                    </ul>
                </div>


            </div>





            <div class="main-container">


                {/* --------Tob nav bar -------- */}

                <div class="topbar">
                    <div class="search">
                        {/* onclick search - search bar*/}
                    </div>
                    <div class="navbar">
                        <ul>
                            <li>
                                <a href="#">Download</a>
                            </li>
                            <li class="divider">|</li>
                            <li>
                                <a href="#">Sign Up</a>
                            </li>
                        </ul>
                        <button type="button">Log In</button>
                    </div>
                </div>

                {/* ------------BODY------------------------ */}

                {Object.keys(playlistTracks).length > 0 && (
                    
              

                    <div class="playlist">

                        <h3>{playlist.name}</h3>

                        {playlist !== null && playlist.images && playlist.images.length > 0 && (
                            <img
                                src={playlist.images[0]?.url || '/public/Images/error.jpg'}
                                alt="playlist-cover"
                                onError={addDefaultImg}
                                id="playlist-cover"
                            />
                        )}

                        <div class="row">

                            <div class="col-lg-6" id="playlist-card1">


                                {/* <!-- Card1 --> */}

                                <TrackPlayer />

                            </div>


                            <div class="col-lg-6 " id="playlist-card2">

                                {/* ---Card2--- */}

                                <SongList tracklist={playlistTracks} />

                            </div>


                        </div>
                    </div>
                )}
            </div>


        </>
    )
}
