import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios';

export default function Home() {


    const [Playlistss, setPlaylistss] = useState([])
    console.log("usestate", Playlistss)

    const client_id = "f87b8dbde16844349e31be3de4bf9601"; //both recived from spotify developer account
    const client_secret = "6fb6626ee4e844fc8f4cc9b71ea86a81";

    const fp_url = 'https://api.spotify.com/v1/browse/featured-playlists'


    useEffect(() => {
        getAccessToken();
    }, [])



    // Function to get access token
    const getAccessToken = async () => {


        //api calling to get the access token
        try {
            const response = await axios.post('https://accounts.spotify.com/api/token',
                new URLSearchParams({
                    grant_type: 'client_credentials',
                }),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
                    }
                }
            );


            const accessToken = response.data.access_token; //storing the access token in a variable
            console.log('Access Token:', accessToken);  //printing the access token

            sessionStorage.setItem('accessToken', accessToken);  //storing the access token in session storage

            //call functions to be executed using the access token
            getFeaturedPlaylists(accessToken);

        } catch (error) {
            console.error('Error getting access token:', error);
        }
    };



    // Function to get featured playlists
    const getFeaturedPlaylists = (accessToken) => {
        axios.get(fp_url, {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        })
            .then(response => {
                console.log('Featured Playlists:', response.data);
                setPlaylistss(response.data.playlists.items);

            })
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

                {/* ----- -- Playlists ---------- */}

                <div class="spotify-playlists">
                    <h2>Featured Playlists</h2>


                    <div class="list">

                        <div class="row">

                            {Playlistss.map((item) => (


                                <div class="col-lg-3" id="maincard">
                                    <div class="card" id='card1'>
                                        <div class="card" id='card2'>
                                            <img src={item.images[0].url} class="card-img-top"
                                                alt="Hollywood Sign on The Hill" />
                                            <div class="card-body" >
                                                <h5 class="card-title" style={{ color: "white" }}>{item.name}</h5>
                                                <p class="card-text" style={{ color: "grey" }}>
                                                    {item.description}
                                                </p>
                                            </div>
                                            <a href={`/playlist/${item.id}`}>
                                                <i className="fas fa-play icon" id="playbutton"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            ))}

                        </div>

                    </div>




                </div>
            </div>



        </>
    )
}
