//1й способ 
export class Exam {
    constructor(surname, name, bd, js, php) {
        this.surname = surname,
        this.name = name,
        this.bd = bd,
        this.js = js,
        this.php = php
    }

    //переопределяем строку
    toString() {
        return `${this.surname} ${this.name} сдал экзамен по БД на ${this.bd}, по JS на ${this.js} и по PHP на ${this.php}`;
    }

    //средний балл студента 
    get srBall() {
        let srBall = (this.bd + this.js + this.php) / 3;
        return `Средний балл ${this.surname} ${this.name} составляет ${srBall}  `
    }
    //хорошист 
    get good() {
        return this.bd >= 4 && this.js >= 4 && this.php >= 4;
    }
    get debtor() {
        return this.bd == 2 || this.js == 2 || this.php == 2;
    }
}


//2й способ
// export function Exam(surname, name, bd, php) {
//     this.surname = surname;
//     this.name = name;
//     this.bd = bd;
//     this.php = php;
//     this.toString = () => {
//         return `${this.surname} ${this.name} сдал экзамен по БД на ${this.bd}, по JS на ${this.js} и по PHP на ${this.php}`;
//     };
//     this.getSrBall = () => {
//         let srBall = (this.bd + this.js + this.php) / 3;
//         return `Средний балл ${this.surname} ${this.name} составляет ${srBall}  `
//     };
//     this.getGood = () => {
//         return (return this.bd >= 4 && this.js >=4 && this.php >= 4;
//     };

//     this.getDebtor = () => {
//         return this.bd == 2 || this.js == 2 || this.php == 2;
//     };
// }

