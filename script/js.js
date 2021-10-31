//==========1 Завдання=======//



// const credits = 23580;
// const price = 3000;
// let order;
// let message = "";
// order = prompt("Скільки дроїдів бажаєте замовити?");
// if (order===null){
//     message = "Скасовано"
// }else if(isNaN(Number(order))) {
//     message = "Це не число"
// }else{
//     const total = Number(order)*price;
//     if(total <= credits){
//         message = `Замовлення прийнято, сума ${total} кредитів, залишок ${credits-total}`;
//     }else{
//         message = "Недостатньо коштів"
//     }
// };
// console.log(message)



//============2 Завдання===========//



// let country = "";
// country = prompt("Введіть країну доставки")
// const china = 100
// const chile = 250
// const australia = 170
// const india = 80
// const jamacia = 120
// if (country){
//     switch(country.toLowerCase()){
//         case "china" :
//             message = `Доставка у ${country} буде ${china}`
//             break
//         case "chile" :
//             message = `Доставка у ${country} буде ${chile}`
//             break
//        case "australia" :
//             message = `Доставка у ${country} буде ${australia}`
//             break
//         case "india" :
//             message = `Доставка у ${country} буде ${india}`
//             break
//         case "jamacia" :
//             message = `Доставка у ${country} буде ${jamacia}`
//             break
//             default :
//             message = `Доставки в країну ${country} не існує`
//     }
//     console.log(message)
// }




//==============3 Завдання=========//


// let input ;
// let total = 0
// let sum = 0
// do{
//     input = prompt('Введіть числа');
//     let nan = isNaN(Number(input))
//     nan ? alert("Це не число") : sum +=Number(input);
// }while(input !== null)
// console.log(sum)