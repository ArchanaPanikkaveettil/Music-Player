import React from 'react'

export default function Playlist() {
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
            </div>
        </>
    )
}
