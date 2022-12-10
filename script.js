//1е задание 
//let car = new Car("Nissan", 2014, Terrano);

import { Exam } from "./Exam.js"
//2 задание 
let arr = [
    new Exam("Васильков", "Ваня", 2, 5, 3),
    new Exam("Васильева", "Кристина", 5, 5, 5),
    new Exam("Полянская", "Яна", 5, 2, 4),
    new Exam("Выползов", "Влад", 5, 4, 3),
    new Exam("Назаров", "Егор", 2, 3, 4),
];
arr.sort(function (a, b) {
    if (a.srBall > b.srBall) {
        return -1;
    }
    if (a.srBall < b.srBall) {
        return 1;
    }
    return 0;
});

let hor = 0;
let bed = 0;
let sredBall = 0;
//хорошисты
console.log("Хорошисты");
console.log("*".repeat(20))
let arrGood = arr.filter(item => item.good);
arrGood.forEach(item => {
    console.log(`${item}`)
    hor++;
});
console.log("*".repeat(20))

//должники
console.log("должники")
console.log("*".repeat(20))
let arrBed = arr.filter(item => item.debtor);
arrBed.forEach(item => {
    console.log(`${item}`)
    bed++;
});
sredBall += item.srBall;
console.log("*".repeat(20))

//качественная успеваемость 
console.log(`качественная успеваемость = ${(hor / arr.length) * 100}%`);

//абсолютная успеваемость 
console.log(`абсолютная успеваемость = ${((arr.length - bed) / arr.length) * 100}%`);

//средний балл
console.log(`средний балл = ${sredBall / arr.length}`);
