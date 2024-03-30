function getFileExtension(fileName) {
    let arrayFileName = fileName.split(".");
    let result = " ";
    if (arrayFileName.length > 1){
        result = arrayFileName[arrayFileName.length-1];
    } else {
        result = "none";
    }    
    return result
}
let fileName = "Nam.txx.mnl";
console.log(getFileExtension(fileName));
