
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
const arrayFlatMap = [1, 2, 1];

const resultMap = arrayFlatMap.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result);

//Function ForEach: El método forEach() de las instancias de Array ejecuta una función proporcionada una vez por cada elemento del arreglo.
const arrayforEach = ['a', 'b', 'c'];

arrayforEach.forEach((element) => console.log(element));

//Function includes():El método includes() de las instancias de Array determina si un arreglo incluye cierto valor entre sus elementos, devolviendo verdadero (true) o falso (false) según corresponda.
const arrayIncludes = [1, 2, 3];

console.log(arrayIncludes.includes(2));
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
console.log(pets.includes('at'));

//Function indexOf():El método indexOf() de las instancias de Array devuelve el primer índice en el cual se puede encontrar un elemento dado en el arreglo, o -1 si no está presente.
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
console.log(beasts.indexOf('bison', 2));
console.log(beasts.indexOf('giraffe'));

//Function join():El método join() de las instancias de Array crea y devuelve un nuevo string al concatenar todos los elementos en este arreglo, separados por comas o por una cadena de separación especificada.
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('-'));

//Function keys():El método keys() de las instancias de Array devuelve un nuevo objeto iterador de arreglo que contiene las claves para cada índice en el arreglo.
const arrayKeys = ['a', 'b', 'c'];
const iterator = arrayKeys.keys();

for (const key of iterator) {
  console.log(key);
}

//Function lastIndexOf():El método lastIndexOf() de las instancias de Array devuelve el último índice en el cual se puede encontrar un elemento dado en el arreglo, o -1 si no está presente. El arreglo se busca en sentido inverso, comenzando en fromIndex.
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo'));
console.log(animals.lastIndexOf('Tiger'));

//Function map():El método map() de las instancias de Array crea un nuevo arreglo poblado con los resultados de llamar a una función proporcionada en cada elemento del arreglo llamador.
const arrayMap = [1, 4, 9, 16];
const map1 = arrayMap.map((x) => x * 2);
console.log(map1);

//Function pop():El método pop() de las instancias de Array elimina el último elemento de un arreglo y devuelve ese elemento. Este método cambia la longitud del arreglo.
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
console.log(plants);
plants.pop();
console.log(plants);

//Function push():El método push() de las instancias de Array agrega los elementos especificados al final de un arreglo y devuelve la nueva longitud del arreglo.
const animalsPush = ['pigs', 'goats', 'sheep'];

const count = animalsPush.push('cows');
console.log(count);
console.log(animalsPush);
animalsPush.push('chickens', 'cats', 'dogs');
console.log(animalsPush);

//Function reduce():El método reduce() de las instancias de Array ejecuta una función de devolución de llamada "reductora" suministrada por el usuario en cada elemento del arreglo, en orden, pasando el valor de retorno del cálculo en el elemento precedente. El resultado final de ejecutar el reductor en todos los elementos del arreglo es un valor único.
const arrayReduce = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = arrayReduce.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log(sumWithInitial);

//Function reduceRight():El método reduceRight() de las instancias de Array aplica una función a un acumulador y cada valor del arreglo (de derecha a izquierda) para reducirlo a un valor único.
const arrayReduceRight = [
    [0, 1],
    [2, 3],
    [4, 5],
  ];
  
  const resultReduceRight = arrayReduceRight.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
  
  console.log(resultReduceRight);


//Function reverse():El método reverse() de las instancias de Array invierte un arreglo en su lugar y devuelve la referencia al mismo arreglo, donde el primer elemento del arreglo pasa a ser el último y el último elemento del arreglo pasa a ser el primero.
const arrayReverse = ['one', 'two', 'three'];
console.log('arrayReverse:', array1);
const reversed = arrayReverse.reverse();
console.log('reversed:', reversed);
console.log('arrayReverse:', array1);


//Function shift():El método shift() de las instancias de Array elimina el primer elemento de un arreglo y devuelve ese elemento eliminado. Este método cambia la longitud del arreglo.
const arrayShift = [1, 2, 3];

const firstElement = arrayShift.shift();
console.log(arrayShift);
console.log(firstElement);


//Function slice():El método slice() de las instancias de Array devuelve una copia superficial de una porción de un arreglo en un nuevo objeto de arreglo seleccionado desde el índice "start" hasta "end" (sin incluir "end"), donde "start" y "end" representan los índices de los elementos en ese arreglo. El arreglo original no se modificará.
const animalsSlice = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animalsSlice.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animalsSlice.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animalsSlice.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animalsSlice.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animalsSlice.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animalsSlice.slice());

//Function some():El método some() de las instancias de Array verifica si al menos un elemento en el arreglo cumple con la prueba implementada por la función proporcionada. Devuelve verdadero (true) si encuentra un elemento en el arreglo para el cual la función proporcionada devuelve verdadero; de lo contrario, devuelve falso (false).
const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.some(even));


//Function sort():El método sort() de las instancias de Array ordena los elementos de un arreglo en su lugar y devuelve la referencia al mismo arreglo, ahora ordenado
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
const arraySort = [1, 30, 4, 21, 100000];
arraySort.sort();
console.log(arraySort);


//Function splice():El método splice() de las instancias de Array cambia el contenido de un arreglo al eliminar o reemplazar elementos existentes y/o agregar nuevos elementos en su lugar.
const monthsSplice = ['Jan', 'March', 'April', 'June'];
monthsSplice.splice(1, 0, 'Feb');
console.log(monthsSplice);
monthsSplice.splice(4, 1, 'May');
console.log(monthsSplice);

//Function toLocaleString():El método toLocaleString() de las instancias de Array devuelve una cadena que representa los elementos del arreglo. Los elementos se convierten a cadenas utilizando sus métodos toLocaleString y estas cadenas están separadas por una cadena específica de la configuración local (como una coma ",").
const arrayToLocalString = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = arrayToLocalString.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);

//Function toString():El método toString() de las instancias de Array devuelve una cadena que representa el arreglo especificado y sus elementos.
const arrayToString = [1, 2, 'a', '1a'];

console.log(arrayToString.toString());

//Function unshift():El método unshift() de las instancias de Array agrega los elementos especificados al principio de un arreglo y devuelve la nueva longitud del arreglo.
const arrayUnSghift = [1, 2, 3];
console.log(arrayUnSghift.unshift(4, 5));
console.log(arrayUnSghift);

//Function values():El método values() de las instancias de Array devuelve un nuevo objeto iterador de arreglo que itera sobre el valor de cada elemento en el arreglo.
const arrayValues = ['a', 'b', 'c'];
const iteratorValues = arrayValues.values();

for (const value of iteratorValues) {
  console.log(value);
}
