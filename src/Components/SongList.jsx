import React from 'react'
import './SongList.css'

export default function SongList(props) {

    const { tracklist } = props;
    console.log("propsssssss",tracklist)


    return (
        <>
            <div class="container" id='containerlist'>

                <div class="row cant d-flex justify-content-center align-items-center" id='cant'>

                    <div class="col-md-6">

                        <div class="p-3 card" id='listcard'>

                            {tracklist.map((item) => (



                                <div class="d-flex justify-content-between align-items-center p-3 music" >
                                    {/* onClick={() => trackid(item.track.id)}> */}

                                    <div class="d-flex flex-row align-items-center" onClick={()=>{sessionStorage.setItem('trackid',item.track.id);window.location.reload()}}>

                                        <i class="fa fa-music color" />

                                        <img src={item.track.album.images[0].url} id='track-image' />

                                        <small class="trackdetails">{item.track.name} - {item.track.artists[0].name} </small>
                                        {/* {item.track.name} - {item.track.artists[0].name} */}

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
