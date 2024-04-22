import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../Components/Playlist.css'

import axios from 'axios';

export default function Playlist() {

    const { id } = useParams();
    // console.log(id);
    const accessToken = sessionStorage.getItem('accessToken');
    const playlist_url = `https://api.spotify.com/v1/playlists/${id}`;


    const [playlist, setPlaylist] = useState({});
    console.log('usestate', playlist);

    const [playlistTracks, setPlaylistTracks] = useState([]);
    console.log("playlistTracks : ", playlistTracks);

    useEffect(() => {

        fetchPlaylistTracks(accessToken);

    }, [])




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


            {/* ------------------------Main----------------------------------- */}


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

                    {/* <img
                        src={playlist !== null ? playlist.images[0]?.url : '/public/Images/error.jpg'}
                        alt="playlist-cover"
                        onError={addDefaultImg}
                        id="playlist-cover"
                    /> */}

                    <div class="row">

                        <div class="col-lg-6" id="playlist-card1">

                            {/* <img src='https://i.scdn.co/image/ab67616d0000b27340f07cb85475289d1d40e0e7' height={'200px'} width={'200px'} /> */}



                            {/* <!-- Card --> */}
                            <div class="card" id="card">

                                <div class="bg-image" id='bg-image' data-mdb-ripple-color="light">
                                    <img class="card-img-top" id="card-img" src="https://mdbootstrap.com/wp-content/uploads/2019/02/flam.jpg"
                                        alt="Music Image" />
                                </div>

                                <div class="card-body text-center">

                                    <h5 class="h5 font-weight-bold"><a href="#" id='songname' target="_blank">Song Name</a></h5>
                                    <p class="mb-0" ><a href='#' id='artistname'> Artist Name </a></p>

                                    <audio id="music" preload="true">
                                        {/* <source src="#"> */}
                                    </audio>
                                    <div id="audioplayer">

                                        <i id="pButton" class="fas fa-play"></i>

                                        <div id="timeline">
                                            <div id="playhead"></div>
                                        </div>
                                    </div>

                                </div>
                            </div>{/* <!-- Card --> */}


                        </div>


                        <div class="col-lg-6 " id="playlist-card2">

                            <div class="container" id='containerlist'>

                                <div class="row cant d-flex justify-content-center align-items-center" id='cant'>

                                    <div class="col-md-6">

                                        <div class="p-3 card" id='listcard'>




                                            <div class="d-flex justify-content-between align-items-center p-3 music" >
                                                {/* onClick={() => trackid(item.track.id)}> */}
                        
                                                <div class="d-flex flex-row align-items-center">

                                                    <i class="fa fa-music color"></i>

                                                    <small class="ml-2">trackname - artist </small> 
                                                    {/* {item.track.name} - {item.track.artists[0].name} */}

                                                </div>
                                                {/* <i class="fa fa-check color"></i> */}

                                            </div>

                                        </div>

                                    </div>




                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
