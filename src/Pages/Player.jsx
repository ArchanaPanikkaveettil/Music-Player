import React, { useEffect, useState } from 'react'
import './Player.css'
import SongList from '../Components/SongList'
import axios from 'axios';

export default function Player() {



    const [songs, setSongs] = useState([]);
    // console.log(songs);


    const [songid, setSongid] = useState({})
    console.log("songid", songid);

    const track_url = `https://api.spotify.com/v1/tracks/${songid}`;

    //PROPS
    const parentfun = (trackid) => { //trackid argument receives the song id from the songlist
        // console.log('track - id ',trackid);
        setSongid(trackid)
    }

    const access_token = sessionStorage.getItem('accessToken');
    console.log('access_token - player', access_token);

   
   
   
    //fuction to fetch a track
    const fetchTrack = (access_token) => {

        axios.post(track_url, {
            headers: {
                'Authorization': 'Bearer ' + access_token
            }
        })
        .then((response) => {

                // console.log("track - response", response.data);
                setSongs(response.data);

            })

    }

    fetchTrack(access_token); //function call



    return (
        <>
            {/* <!-- Content --> */}
            <div class="d-flex justify-content-center" id='container'>


                <div class='row'>


                    {/* {songs.map((item) => ( */}

                    <div id="mobile-box" class='col-lg-6'>

                        {/* <!-- Card --> */}
                        <div class="card" id="card">

                            <div class="bg-image" id='bg-image' data-mdb-ripple-color="light">
                                <img class="card-img-top" id="card-img" src="https://mdbootstrap.com/wp-content/uploads/2019/02/flam.jpg"
                                    alt="Music Image" />
                                {/* <a href="#!">
                                <div class="mask" ></div>
                                </a> */}
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
                    {/* ))} */}

                    {/* COL 2 */}

                    <div class='col-lg-6'>
                        <div id='songlist' style={{ paddingLeft: '40%' }}>

                            <SongList propname={parentfun} />
                            {/* propname is a property name and parentfun is a function created in parent component,which is now passed to child component */}

                        </div>
                    </div>

                </div> {/* row */}

            </div>


            {/* <!-- Content --> */}




        </>
    )
}
