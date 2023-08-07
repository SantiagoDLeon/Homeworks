
//function lenght: La propiedad de datos length de una instancia de Array representa la cantidad de elementos en ese arreglo. El valor es un número sin signo.
const arreglo1= [1,2,3,4,5];
const arreglo2= [4,5,6,7,8];
console.log(arreglo1.length);


//Function at: El método at() toma un valor entero y devuelve el elemento en ese índice, permitiendo tanto enteros positivos como negativos. Los enteros negativos cuentan hacia atrás desde el último elemento en el arreglo. 
const prueba1= arreglo1.at(1);
console.log(prueba1);

//Function concat: Nos permite concatenar o juntar dos arrays
let combinarArreglo= arreglo1.concat(arreglo2);
console.log(combinarArreglo)

//Function constructor : Permite crear objetos de tipo array
let nuevoArray= Array("perro","Gato");
console.log(nuevoArray)


//Function copyWithin: realiza una copia superficial de una parte de un arreglo a otra ubicación en el mismo arreglo, y lo devuelve sin modificar su longitud.
let copiaWithin= arreglo1.copyWithin(0,2,3);
console.log(copiaWithin);

//Function Entries:El método entries() devuelve un nuevo objeto iterador de matriz que contiene los pares clave/valor para cada índice en la matriz.
const array1 = ['a', 'b', 'c','d'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);

console.log(iterator1.next().value);

console.log(iterator1.next().value);

console.log(iterator1.next().value);

//Function Every : se utiliza para verificar si todos los elementos de una matriz cumplen con una condición específica. Devuelve un valor booleano que indica si todos los elementos de la matriz satisfacen la condición proporcionada.
const isBelowThreshold = (currentValue) => currentValue < 40;

const arrayEvery = [1, 30, 39, 29, 10, 13];

console.log(arrayEvery.every(isBelowThreshold));

//Function Fill : El método fill() cambia todos los elementos en una matriz a un valor estático, desde un índice de inicio (por defecto 0) hasta un índice final (por defecto la longitud de la matriz). Devuelve la matriz modificada.
const arrayFill = [1, 2, 3, 4];

console.log(arrayFill.fill(0, 2, 4));

console.log(arrayFill.fill(5, 1));

console.log(arrayFill.fill(6));

//Function Filter : El método filter() crea una copia superficial de una porción de una matriz dada, filtrando solo los elementos de la matriz proporcionada que pasan la prueba implementada por la función proporcionada.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);

//Function Find El método find() devuelve el primer elemento en la matriz proporcionada que cumple con la función de prueba proporcionada. Si ningún valor satisface la función de prueba, se devuelve "undefined".
const arrayFind = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);

//Function FindIndex : El método findIndex() devuelve el índice del primer elemento en una matriz que cumple con la función de prueba proporcionada. Si ningún elemento cumple con la función de prueba, se devuelve -1.
const arrayFindIndex = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));

//Function FindLast El método findLast() itera la matriz en orden inverso y devuelve el valor del primer elemento que cumple con la función de prueba proporcionada. Si ningún elemento cumple con la función de prueba, se devuelve "undefined".
const arrayFindLast = [5, 12, 50, 130, 44];

const found2 = arrayFindLast.findLast((element) => element > 45);

console.log(found2);

//Function FindLastIndex : El método findLastIndex() itera la matriz en orden inverso y devuelve el índice del último elemento que cumple con la función de prueba proporcionada.
const arrayLastIndex = [5, 12, 50, 130, 44];

const isLargeNumber2 = (element) => element > 45;

console.log(arrayLastIndex.findLastIndex(isLargeNumber));

//Function Flat : El método flat() crea una nueva matriz con todos los elementos de las submatrices concatenados en forma recursiva hasta la profundidad especificada.
 
const arrayFlat = [0, 1, 2, [3, 4]];
console.log(arrayFlat.flat());
const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2));

//Function FlatMap : El método flatMap() devuelve una nueva matriz formada al aplicar una función de devolución de llamada dada a cada elemento de la matriz, y luego aplanar el resultado en un nivel.
const arrayMap = [1, 2, 1];

const resultMap = arrayMap.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result);

//Function ForEach

//Function FlatMap

//Function FlatMap

//Function FlatMap

//Function FlatMap

//Function FlatMap

//Function FlatMap

//Function FlatMap
  