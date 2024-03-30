function changeStr(str) {
    let result = " ";
    for (let i = 0; i < str.length ;i++){
        if (i === 0){
            result += str.charAt(i).toUpperCase();
        } else {
            result += str.charAt(i).toLowerCase();
        };

    }
    return result
}
str = "fFFF";
console.log(changeStr(str));