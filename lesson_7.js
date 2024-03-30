function generateSimpleStrongPassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random()*charactersLength));
    }
    return result
}

function checkSimpleStrongPassword(password) {
    const hasUppercase = /[A-Z]/.test(password);//Chỗ này e copy code nhưng chưa hiểu
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[~!@#$%^&*()]/.test(password);
    const isLongEnough = password.length >= 8;

    return hasUppercase && hasLowercase && hasDigit && hasSpecialChar && isLongEnough;
}

let check = false;
let password = " ";
let length = 9;
while (!check){
    password = generateSimpleStrongPassword(length);
    check = checkSimpleStrongPassword(password);
}
console.log(password);
