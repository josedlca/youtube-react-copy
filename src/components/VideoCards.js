import React from 'react'

function VideoCards(){
    return(
        <div className="videoCard__container">

            <div className="videoCard__container__thumbnail">
                <img 
                    className="videoCard__container__thumbnail--img"
                    src="/img/arturia.jpg"
                />
            </div>

            <div className="videoCard__container__info">

                <div className="videoCard__container__info__miniature">
                    <img className="videoCard__container__info__miniature--img"/>
                </div>

                <div className="videoCard__container__info__text">

                    <div className="videoCard__container__info__text--tittle">
                        <h3>Video Tittle</h3>
                    </div>

                    <div className="videoCard__container__info__text--relative">

                        <div className="videoCard__container__info__text--relative_channelName">
                            Channel Name
                        </div>

                        <div className="videoCard__container__info__text--relative_viewsAndtime">
                            <span>0000.000 vistas</span>
                            <span>hace 10 meses</span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default VideoCards