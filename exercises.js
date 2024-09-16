
// юнит 10.3, задача 1//
let x = promt('введите значение');
y = +x;
if (typeof(y) === 'number' && isNaN(y)) {
    y % 2 == 0 ? console.log('четное число') : console.log('нечетное число')
} else { 
    console.log('Упс, кажется, вы ошиблись') 
};

// юнит 10.3, задача 2//

let x = "1234a";
y = typeof (x);
switch (y) {
    case 'number':
        console.log('x -число');
        break;
    case 'string':
        console.log('x - строка');
        break;
    case 'boolean':
        console.log('x - логический тип');
        break;
    default:
        console.log('Тип x не определён');
};

// юнит 10.4, задача 1//

const l = 'Hello';
const reverseL = l.split('').reverse().join(''); 
console.log(reverseL);

// юнит 10.4, задача 2//

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
  alert( randomInteger(0, 100) );


  // юнит 10.5, задача 1//

let arr = [1.3, 'sdsd', 5, 54, 10, 8];
console.log(arr.length);

arr.forEach(function(elem) {
	console.log(elem);
});

  // юнит 10.6, задача 1//
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }


// юнит 10.7, задача 1//

let arrMap = new Map ();
for (let elem of arrMap) { 

    console.log(elem); 
 
}