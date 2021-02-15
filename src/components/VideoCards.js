import React from 'react'
import {Link} from 'react-router-dom'

const VideoCards=(props)=>{
    let videoDaysCounter=()=>{
        let pastDate = new Date(props.videoData.snippet.publishedAt)
        let currentDate = new Date()
        let howMuchTime
        if( currentDate.getFullYear() != pastDate.getFullYear()){
            howMuchTime = `hace ${currentDate.getFullYear() - pastDate.getFullYear()} años`
        }else if(currentDate.getMonth() != pastDate.getMonth()){
            howMuchTime = `hace ${currentDate.getMonth() - pastDate.getMonth()} meses`
        }else if(currentDate.getDay() != pastDate.getDay()){
            howMuchTime = `hace ${currentDate.getDay() - pastDate.getDay()} dias`
        }else if( currentDate.getHours() != pastDate.getHours()){
            howMuchTime = `hace ${currentDate.getHours() - pastDate.getHours()} horas`
        }else{
            howMuchTime = currentDate.getMinutes()- pastDate.getMinutes()
        }
        return howMuchTime
    }
    return(
        <Link 
            className="videoCard__container"
            to={`/videoPlayer/${props.videoData.id.videoId}`}
        >

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
                            <span>{videoDaysCounter()}</span>
                        </div>

                    </div>

                </div>
            </div>
        </Link>
    )
}

export default VideoCards