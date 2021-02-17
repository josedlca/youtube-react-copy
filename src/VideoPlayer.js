import React, {useState, useEffect} from 'react'
import {YoutubeDataAPI} from 'youtube-v3-api'

const VideoPlayer= ({match})=>{

    useEffect(()=>{
        gettingVideoData();
    }, [])
    const [videoDataComments, setVideoDataComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const gettingVideoData = ()=>{
        const api = new YoutubeDataAPI(process.env.REACT_APP_API_KEY);
        api.searchCommentThreads(match.params.id,{order:'relevance'}).then((data) => {
            setVideoDataComments(data)
            setIsLoading(false)
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

                            <div className="videoplayer__videoAndComments--comments_comment">
                                <div className="videoplayer__videoAndComments--comments_comment-img">
                                    <div className ="videoplayer__videoAndComments--comments_comment-img-container">
                                        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}/>
                                    </div>
                                </div>
                                <div className="videoplayer__videoAndComments--comments_comment-content">
                                    <div className="videoplayer__videoAndComments--comments_comment-content-head">
                                        <p>{item.snippet.topLevelComment.snippet.authorDisplayName}</p>
                                        <span>{item.snippet.topLevelComment.snippet.publishedAt}</span>
                                    </div>

                                    <div className="videoplayer__videoAndComments--comments_comment-content-main">
                                        <p>{item.snippet.topLevelComment.snippet.textOriginal}</p>
                                    </div>

                                    <div className="videoplayer__videoAndComments--comments_comment-content-likes">
                                        <span>
                                            <i class="fas fa-thumbs-up"></i>
                                            {item.snippet.topLevelComment.snippet.likeCount}
                                        </span>
                                        <span>
                                            <i class="fas fa-thumbs-down"></i>
                                        </span>
                                    </div>
                                    <div className="videoplayer__videoAndComments--comments_comment-content-replies">
                                        <span>
                                            <i class="fas fa-sort-down"></i>
                                            Ver respuestas
                                        </span>                                        
                                    </div>
                                </div>
                            </div>

                        ))
                    }                 
                </div>
            </div>
            <div>
                other videos
            </div>
        </main>
    )
}

export default VideoPlayer