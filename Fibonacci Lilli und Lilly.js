function berechneFibonacci(anzahl) {
  var fib = [0, 1]; 
  if (anzahl <= 2) {
    return fib.slice(0, anzahl);
  }

  for (var i = 2; i < anzahl; i++) {
    
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

var anzahl = 10; 
var fibonacciZahlen = berechneFibonacci(anzahl);


console.log("Die ersten " + anzahl + " Fibonacci-Zahlen sind:");
console.log(fibonacciZahlen.join(", "));