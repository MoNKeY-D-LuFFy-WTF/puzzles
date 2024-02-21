//1
// const numberOne = 2;
// const numberTwo = 300;
// let quan = 0;
// let answer = [];
// for (let a = numberOne; a < numberTwo; a++) {
//     for (let b = a; b > 0; b--) {
//         let isFloat = (a / b).toString().split('.').length === 2;
//         if (!isFloat) {
//             quan++;
//         }
//     }
//     if (quan === 2) {
//         answer.push(a);
//     }
//     quan = 0
// }
// console.log(answer);



//3
// function happyTicket(ticket) {
//     const arrayNumber = ticket.toString().split('');
//     const oneOne = arrayNumber.length / 2;
//     const oneTwo = oneOne * 2;
//     let numberOneAnswer = 0;
//     let numberTwoAbswer = 0;
//     for (let a = 0; a < oneOne; a++) {
//         numberOneAnswer += +arrayNumber[a];
//     }
//     for (let b = oneOne; b < oneTwo; b++) {
//         numberTwoAbswer += +arrayNumber[b];
//     }
//     let result = numberOneAnswer === numberTwoAbswer
//     if (result) {
//         return 'YES'
//     } else {
//         return 'NO'
//     }
// }
// console.log(happyTicket(385916));