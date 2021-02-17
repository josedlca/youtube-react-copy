import React from 'react'
import VideoCards from './components/VideoCards'

const MainPage = (props)=>{
    return(
        <main className="main__video__container">
            {
            props.loading ? 
            "loading..." : 
            props.youData.items.map((item,index) => (<VideoCards key={index} videoData={item} />))
            }
        </main>
    )
}

export default MainPage