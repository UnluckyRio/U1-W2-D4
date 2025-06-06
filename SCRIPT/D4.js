/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const area = function (l1, l2) {
  return l1 * l2;
};

console.log("--- ESERCIZIO 1: area ---");
console.log("Area del rettangolo (4, 5):", area(4, 5)); // Dovrebbe stampare: 20
console.log("Area del rettangolo (10, 2):", area(10, 2)); // Dovrebbe stampare: 20

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
};

console.log("\n--- ESERCIZIO 2: crazySum ---");
console.log("Somma (2, 3):", crazySum(2, 3)); // Dovrebbe stampare: 5
console.log("Somma (5, 5):", crazySum(5, 5)); // Dovrebbe stampare: 30 (5+5)*3

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (num) {
  const diff = Math.abs(num - 19);
  if (num > 19) {
    return diff * 3;
  } else {
    return diff;
  }
};

console.log("\n--- ESERCIZIO 3: crazyDiff ---");
console.log("Differenza (10):", crazyDiff(10)); // Dovrebbe stampare: 9 (abs(10-19))
console.log("Differenza (25):", crazyDiff(25)); // Dovrebbe stampare: 18 (abs(25-19)*3 = 6*3)
console.log("Differenza (19):", crazyDiff(19)); // Dovrebbe stampare: 0

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  return (n >= 20 && n <= 100) || n === 400;
};

console.log("\n--- ESERCIZIO 4: boundary ---");
console.log("Boundary (30):", boundary(30)); // Dovrebbe stampare: true
console.log("Boundary (10):", boundary(10)); // Dovrebbe stampare: false
console.log("Boundary (100):", boundary(100)); // Dovrebbe stampare: true
console.log("Boundary (400):", boundary(400)); // Dovrebbe stampare: true

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (str) {
  if (str.startsWith("EPICODE")) {
    return str;
  } else {
    return "EPICODE" + str;
  }
};

console.log("\n--- ESERCIZIO 5: epify ---");
console.log("Epify ('Ciao'):", epify("Ciao")); // Dovrebbe stampare: EPICODECiao
console.log("Epify ('EPICODE Developers'):", epify("EPICODE Developers")); // Dovrebbe stampare: EPICODE Developers

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (num) {
  if (num < 0) {
    console.warn("Please provide a positive number.");
    return false;
  }
  return num % 3 === 0 || num % 7 === 0;
};

console.log("\n--- ESERCIZIO 6: check3and7 ---");
console.log("Multiplo di 3 o 7 (6):", check3and7(6)); // Dovrebbe stampare: true (multiplo di 3)
console.log("Multiplo di 3 o 7 (14):", check3and7(14)); // Dovrebbe stampare: true (multiplo di 7)
console.log("Multiplo di 3 o 7 (10):", check3and7(10)); // Dovrebbe stampare: false
console.log("Multiplo di 3 o 7 (21):", check3and7(21)); // Dovrebbe stampare: true (multiplo sia di 3 che di 7)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (str) {
  return str.split("").reverse().join("");
};

console.log("\n--- ESERCIZIO 7: reverseString ---");
console.log("Stringa invertita ('EPICODE'):", reverseString("EPICODE")); // Dovrebbe stampare: EDOCIPE
console.log("Stringa invertita ('Hello'):", reverseString("Hello")); // Dovrebbe stampare: olleH

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function (str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

console.log("\n--- ESERCIZIO 8: upperFirst ---");
console.log(
  "Prime lettere maiuscole ('ciao mondo javascript'):",
  upperFirst("ciao mondo javascript")
); // Dovrebbe stampare: Ciao Mondo Javascript
console.log(
  "Prime lettere maiuscole ('lorem ipsum dolor'):",
  upperFirst("lorem ipsum dolor")
); // Dovrebbe stampare: Lorem Ipsum Dolor

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (str) {
  if (str.length < 2) {
    return "";
  }
  return str.slice(1, -1);
};

console.log("\n--- ESERCIZIO 9: cutString ---");
console.log("Stringa tagliata ('EPICODE'):", cutString("EPICODE")); // Dovrebbe stampare: PICOD
console.log("Stringa tagliata ('Ciao'):", cutString("Ciao")); // Dovrebbe stampare: ia
console.log("Stringa tagliata ('A'):", cutString("A")); // Dovrebbe stampare: '' (stringa vuota)

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function (n) {
  const randomArray = [];
  for (let i = 0; i < n; i++) {
    randomArray.push(Math.floor(Math.random() * 11)); // * 11 per includere 10
  }
  return randomArray;
};

console.log("\n--- ESERCIZIO 10: giveMeRandom ---");
console.log("Array di 5 numeri random:", giveMeRandom(5)); // Dovrebbe stampare un array di 5 numeri tra 0 e 10
console.log("Array di 3 numeri random:", giveMeRandom(3)); // Dovrebbe stampare un array di 3 numeri tra 0 e 10
