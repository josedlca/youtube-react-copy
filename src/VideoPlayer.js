import React, {useState, useEffect} from 'react'
import {YoutubeDataAPI} from 'youtube-v3-api'
import Comment from './components/Comment'
import VideoCards from './components/VideoCards'

const VideoPlayer= ({match,props})=>{

    useEffect(()=>{
        gettingComments();
        gettingRelatedVideos();
    }, [])
    const [videoDataComments, setVideoDataComments] = useState([])
    const [relatedVideos, setRelatedVideos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [relatedLoading, setRelatedLoading] = useState(true)

    const gettingComments = ()=>{
        const api = new YoutubeDataAPI(process.env.REACT_APP_API_KEY);
        api.searchCommentThreads(match.params.id,{order:'relevance'}).then((data) => {
            setVideoDataComments(data)
            setIsLoading(false)
        },(err) => {
            console.error(err);
        })
    }

    const gettingRelatedVideos = () =>{
        const api = new YoutubeDataAPI(process.env.REACT_APP_API_KEY);
        api.searchAll(props.searchInput,25).then((data) => {
            setRelatedVideos(data)
            setRelatedLoading(false)
        },(err) => {
            console.error(err);
        })
    }

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
                    {
                        isLoading?
                        <div>Loading comments...</div>:
                        videoDataComments.items.map((item) => (
                        <Comment key={item.id} {...item}/>
                        ))
                    }                 
                </div>
            </div>
            <div className="videoplayer__related">
                {
                    relatedLoading?
                    <div>Is laoding...</div>:
                    relatedVideos.items.map((item,index) => (<VideoCards key={index} videoData={item} youAre="videoPlayer"/>))
                }
            </div>
        </main>
    )
}

export default VideoPlayer