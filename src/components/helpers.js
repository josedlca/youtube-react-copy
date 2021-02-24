export const videoDaysCounter=(publishedAt)=>{
    let pastDate = new Date(publishedAt)
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

export const titleLimit = (title, youAre) =>{
    let howMany = youAre== "videoPlayer"? 50 : 70
    let res = title.substring(0, howMany);
    let newTitle = title.length > howMany ? `${res}...` : title
    return newTitle 
}
