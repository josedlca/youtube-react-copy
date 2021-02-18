import React from 'react'

const Comment = (props)=>{
    return(
        <div className="videoplayer__videoAndComments--comments_comment">
            <div className="videoplayer__videoAndComments--comments_comment-img">
                <div className ="videoplayer__videoAndComments--comments_comment-img-container">
                    <img src={props.snippet.topLevelComment.snippet.authorProfileImageUrl}/>
                </div>
            </div>
            <div className="videoplayer__videoAndComments--comments_comment-content">
                <div className="videoplayer__videoAndComments--comments_comment-content-head">
                    <p>{props.snippet.topLevelComment.snippet.authorDisplayName}</p>
                    <span>{props.snippet.topLevelComment.snippet.publishedAt}</span>
                </div>

                <div className="videoplayer__videoAndComments--comments_comment-content-main">
                    <p>{props.snippet.topLevelComment.snippet.textOriginal}</p>
                </div>

                <div className="videoplayer__videoAndComments--comments_comment-content-likes">
                    <span>
                        <i className="fas fa-thumbs-up"></i>
                        {props.snippet.topLevelComment.snippet.likeCount}
                    </span>
                    <span>
                        <i className="fas fa-thumbs-down"></i>
                    </span>
                </div>
                <div className="videoplayer__videoAndComments--comments_comment-content-replies">
                    <span>
                        <i className="fas fa-sort-down"></i>
                        Ver respuestas
                    </span>                                        
                </div>
            </div>
        </div>
    )
}

export default Comment