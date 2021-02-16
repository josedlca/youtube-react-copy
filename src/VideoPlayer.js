import React from 'react'

const VideoPlayer= ({match})=>{
    console.log(match.params.id)
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