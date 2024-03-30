function coundownTime(destinationDateTime, curentTime) {
    let timeStampDestinationDateTime = destinationDateTime.getTime();
    let timestampCurentTime = curentTime.getTime();
    let remainTime = timeStampDestinationDateTime - timestampCurentTime;
    let intervalId = setInterval(function(){
        if (remainTime <= 0){
            console.log("Thời gian đã hết hạn");
            clearInterval(intervalId);
        } else {
            curentTime = new Date();
            timeStampDestinationDateTime = destinationDateTime.getTime();
            timestampCurentTime = curentTime.getTime();
            const remainTime = timeStampDestinationDateTime - timestampCurentTime;
            const day = Math.floor(remainTime/(1000*60*60*24));
            const hour = Math.floor(remainTime/(1000*60*60)- day*24);
            const minute = Math.floor(remainTime/(1000*60)-day*24*60-hour*60);
            const second = Math.floor(remainTime/1000-day*24*60*60-hour*60*60-minute*60);
            //In kết quả
            console.log(`Còn ${day} ngày, ${hour} giờ, ${minute} phút, ${second} giây nữa là đến tết`)
        }
    },1000)
}
let destinationDateTime = new Date("2023-03-8");
let curentTime = new Date();
coundownTime(destinationDateTime,curentTime);