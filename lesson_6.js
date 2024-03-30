function transformArray(number){
    result = [];
    let str = number.toString()
    for (let i = 0; i < str.length; i++){
        rerult = result.push(str.charAt(i));
    }
    return result
}
let number = 1234;
console.log(transformArray(number));