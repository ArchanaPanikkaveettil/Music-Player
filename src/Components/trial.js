import React, { useEffect, useState } from 'react'
import './SongList.css'
import axios from 'axios'


export default function SongList(argu) {


    const trackid = argu.propname; //accessing the function from the parent component
    // console.log('track-id', tackid);



    const playlist_id = "37i9dQZF1DZ06evO2pb4Ji"; //can Change the playlist ID as per requirement
    const playlist_url = `https://api.spotify.com/v1/playlists/${playlist_id}`;




    const [tracks, setTracks] = useState([]);



    useEffect(() => {


        const accessToken = sessionStorage.getItem('accessToken');

        fetchPlaylistTracks(accessToken); //calling functions to be executed after getting access token
        //passing access token as an argument //calling the function to get the playlist tracks




        // Function to fetch playlist tracks
        const fetchPlaylistTracks = async (accessToken) => {


            //api calling to get the playlist tracks
            try {
                const response = await axios.get(playlist_url,
                    {
                        headers: {
                            'Authorization': 'Bearer ' + accessToken
                        }
                    }
                );

                const playlistTracks = response.data.tracks.items;  //storing the tracks in a variable
                // console.log('Playlist Tracks:', playlistTracks);    //printing the tracks
                setTracks(playlistTracks);                          //storing the tracks in a state

                //                  OR
                // console.log(response.data.tracks.items);
                // setTracks(response.data.tracks.items);
                // console.log(tracks);   //printing user state

            } catch (error) {
                console.error('Error fetching playlist tracks:', error);
            }
        };

        



    }, []);






    return (
        <>
            <div class="container" id='containerlist'>

                <div class="row cant d-flex justify-content-center align-items-center" id='cant'>

                    <div class="col-md-6">

                        <div class="p-3 card" id='listcard'>



                            {tracks.map((item) => (

                                <div class="d-flex justify-content-between align-items-center p-3 music" onClick={() => trackid(item.track.id)}>
                                    {/* id is passed as an argument to the function in player.jsx */}

                                    <div class="d-flex flex-row align-items-center">

                                        <i class="fa fa-music color"></i>

                                        <small class="ml-2">{item.track.name} - {item.track.artists[0].name} </small>

                                    </div>
                                    {/* <i class="fa fa-check color"></i> */}
                                </div>

                            ))}


                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}
