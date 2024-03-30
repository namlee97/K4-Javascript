//Khai báo date ngày tết
const destinationDateTime = new Date("2025-01-29");
//Khai báo date hiện tại
let curentTime = new Date();
//Get timestamp
let timeStampDestinationDateTime = destinationDateTime.getTime();
let timestampCurentTime = curentTime.getTime();
//Tính time còn lại 
let remainTime = timeStampDestinationDateTime - timestampCurentTime;
console.log(typeof remainTime);
let intervalId = setInterval(function(){
    if (remainTime <= 0){
        console.log("a")
        clearInterval(intervalId);
    } else {
        curentTime = new Date();
        timeStampDestinationDateTime = destinationDateTime.getTime();
        timestampCurentTime = curentTime.getTime();
        const remainTime = timeStampDestinationDateTime - timestampCurentTime;
        const day = Math.floor(remainTime/(1000*60*60*24));
        console.log(day);
        const hour = Math.floor(remainTime/(1000*60*60)- day*24);
        const minute = Math.floor(remainTime/(1000*60)-day*24*60-hour*60);
        const second = Math.floor(remainTime/1000-day*24*60*60-hour*60*60-minute*60);
        //In kết quả
        console.log(`Còn ${day} ngày, ${hour} giờ, ${minute} phút, ${second} giây nữa là đến tết`)
    }
},1000)