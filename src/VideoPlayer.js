import React, {useState, useEffect} from 'react'
import {YoutubeDataAPI} from 'youtube-v3-api'

const VideoPlayer= ({match})=>{

    useEffect(()=>{
        gettingVideoData();
    }, [])
    const [videoDataComments, setVideoDataComments] = useState([])

    const gettingVideoData = ()=>{
        const api = new YoutubeDataAPI(process.env.REACT_APP_API_KEY);
        api.searchCommentThreads(match.params.id).then((data) => {
            setVideoDataComments(data)
        },(err) => {
            console.error(err);
        })
    }

    console.log(match.params.id)
    console.log(videoDataComments)
    return(
        <main className="videoplayer">
            <div className="videoplayer__videoAndComments">
                <div className="videoplayer__videoAndComments--video">
                    <iframe 
                        src={`https://www.youtube.com/embed/${match.params.id}?autoplay=1`} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="videoplayer__videoAndComments--comments">
                    Aqui van los comentarios
                </div>
            </div>
            <div>
                other videos
            </div>
        </main>
    )
}

export default VideoPlayer