import React from 'react'
import './Player.css'
import SongList from '../Components/SongList'

export default function Player() {
    return (
        <>
            {/* <!-- Content --> */}
            <div class="d-flex justify-content-center" id='container'>


                <div class='row'>



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

                    </div> {/* COL 1 */}

                    {/* COL 2 */}

                    <div class='col-lg-6' id='songlist'>

                                <SongList />

                    </div>

                </div> {/* row */}

            </div>


            {/* <!-- Content --> */}




        </>
    )
}
