import React from 'react'

function VideoCards(props){
    console.log(props.videoData.snippet.thumbnails.url)
    return(
        <div className="videoCard__container">

            <div className="videoCard__container__thumbnail">
                <img 
                    className="videoCard__container__thumbnail--img"
                    src={props.videoData.snippet.thumbnails.high.url}
                />
            </div>

            <div className="videoCard__container__info">

                <div className="videoCard__container__info__miniature">
                    <div className="videoCard__container__info__miniature--img">
                        <img src="/img/miniPicture.jpg"/>
                    </div>
                </div>

                <div className="videoCard__container__info__text">

                    <div className="videoCard__container__info__text--tittle">
                        <h3>{props.videoData.snippet.title}</h3>
                    </div>

                    <div className="videoCard__container__info__text--relative">

                        <div className="videoCard__container__info__text--relative_channelName">
                            {props.videoData.snippet.channelTitle}
                        </div>

                        <div className="videoCard__container__info__text--relative_viewsAndtime">
                            <span>0000.000 vistas</span>
                            <span>{props.videoData.snippet.publishedAt}</span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default VideoCards