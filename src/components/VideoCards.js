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

    let titleLimit = (title) =>{
        let howMany = props.youAre== "videoPlayer"? 50 : 70
        let res = title.substring(0, howMany);
        let newTitle = title.length > howMany ? `${res}...` : title
        return newTitle 
    }

    return(
        <Link 
            className="videoCard__container"
            style={
                props.youAre=="videoPlayer" ? 
                {width: '100%', flexDirection: 'row'}:
                {width: '20%', flexDirection: 'column'}
            }
            to={`/videoPlayer/${props.videoData.id.videoId}`}
        >
            <div 
                className="videoCard__container__thumbnail"
                style={
                    props.youAre=="videoPlayer"?
                    {width: '16.8rem', paddingTop: '9.4rem', marginRight: '0.8rem'}:
                    {paddingTop: '51%'}
                }
            >
                <img 
                    className="videoCard__container__thumbnail--img"
                    src={props.videoData.snippet.thumbnails.high.url}
                />
            </div>

            <div 
                className="videoCard__container__info"
                style={
                    props.youAre=="videoPlayer"?
                    {width: '60%'}:
                    {width: '100%'}
                }
            >

                <div 
                    className="videoCard__container__info__miniature"
                    style={
                        props.youAre=="videoPlayer"?
                        {display:'none'}:
                        {display: 'inline-flex'}
                    }
                >
                    <div className="videoCard__container__info__miniature--img">
                        <img src="/img/miniPicture.jpg"/>
                    </div>
                </div>

                <div className="videoCard__container__info__text">

                    <div 
                        className="videoCard__container__info__text--tittle"
                        style = {
                            props.youAre == "videoPlayer"?
                            {margin: '0 0 0.4rem 0'}:
                            {margin: '1.2rem 0 0.4rem 0'}
                        }
                    >
                        <h3>{titleLimit(props.videoData.snippet.title)}</h3>
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