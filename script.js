let shanMasala = {
    name: "Bomaby Biryani",
    price: 100,
    contents: [
        'lalmirch',
        'black pepper',
        'elaichi',
        'zeera'
    ]
}

console.log(shanMasala.name);
for (let i = 0; i < shanMasala.contents.length; i++){
    console.log(shanMasala.contents[i]);
}


// const arrayOfOrder = [
//   {
//     counter: 1,
//     order: ["soap", "coke", "rice"]
//   },
//   {
//     counter: 2,
//     order: ["apple", "frozen food", "shampoo"]
//   },
//   {
//     counter: 1,
//     order: ["soap", "coke", "rice"]
//   }
// ];

// for (let i = 0; i < arrayOfOrder.length; i++){
//     console.log(`Counter No.: ${arrayOfOrder[i].counter}`);
//     for(let j = 0; j < arrayOfOrder[i].order.length; j++){
//         console.log(arrayOfOrder[i].order[j]);
//     }
// }

// const arr5 = [
//   {
//     objectArr: [1, 2, 3, 4, 5],
//     objectArr2: ["apple", "banana", "grapes"]
//   },

//   {
//     objectArr: [6, 7, 8, 9, 10],
//     objectArr2: ["a", "b", "c"]
//   }
// ];

// for (let i = 0; i < arr5.length; i++) {
//   for (let j = 0; j < arr5[i].objectArr.length; j++) {
//     console.log(arr5[i].objectArr[j]);
//   }

//   for (let k = 0; k < arr5[i].objectArr2.length; k++) {
//     console.log(arr5[i].objectArr2[k]);
//   }
// }

// const arr4 = [
//     [
//         [1,2,3,4,5,6],
//         ['orange', 'banana', 'grapes']
//     ],
//     [
//         ['a','b','c','d'],
//         ['alif', 'baa', 'taa']
//     ],
//     [
//         ['a','b','c','d'],
//         [2,6,7,4,8,90]
//     ]
// ];

// for(let i = 0; i < arr4.length; i++){
//     for(j = 0; j < arr4[i].length; j++){
//         for(let k = 0; k < arr4[i][j].length; k++){
//             console.log(arr4[i][j][k]);
//         }
//     }
// }

// let arr3 =[
//     [2,6,3,9,100,5],
//     ['apple', 'orange']
// ];

// for(let i = 0; i < arr3.length; i++){
//     // const newArr = arr3[i];
//     for(let j = 0; j < arr3[i].length; j++){
//         console.log(arr3[i][j]);
//     }
// }
