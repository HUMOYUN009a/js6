// massiv- turtburchak qavs unga kalitlar kerak emas

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr[6].length);

let str = "Hello world";

for(let i = 0; i < str.length; i++  ) {
    console.log(str[i]);
}

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,]
let result = 0;

for(let i = 0; i < numbers.length; i++)  {
    if(numbers[i] % 2 == 1) {
        result += 1
    } else {
        result += 0
    }
}
console.log(result);

for(let i = 0; i < infimity; i ++) {
    let str =prompt("buyruq yozing add yoki del")
    let strArr = str.split(" ")
    if(strArr[0] == "add") {
        arr.push(strArr[1])
    } else if(strArr[0]  == "del") {}
}