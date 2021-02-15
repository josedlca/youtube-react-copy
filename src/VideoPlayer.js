import React from 'react'

const VideoPlayer= ({match})=>{
    console.log(match.params.id)
    return(
        <div>
            <iframe 
                width="560" 
                height="315" 
                src={`https://www.youtube.com/embed/${match.params.id}?autoplay=1`} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>

            </iframe>
        </div>
    )
}

export default VideoPlayer