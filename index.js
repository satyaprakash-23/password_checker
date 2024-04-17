/* setTimeout(() => {
    document.querySelector('.progress').style.width = '50%';
}, 1000);  */

let password = document.querySelector(".text")
let progress = document.querySelector('.progress')

password.oninput = function () { 
    let point = 0; 
    let value = password.value; 
    let widthPower =  
        ["1%", "25%", "50%", "75%", "100%"]; 
    let colorPower =  
        ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"]; 
  
    if (value.length >= 6) { 
        let arrayTest =  
            [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/]; 
        arrayTest.forEach((item) => { 
            if (item.test(value)) { 
                point += 1; 
            } 
        }); 
    } 
    progress.style.width = widthPower[point]; 
    progress.style.backgroundColor = colorPower[point]; 
};