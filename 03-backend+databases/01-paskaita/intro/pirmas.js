// const pasisveikink = (vardas) => {
//     console.log('sveiki')
//     console.log('jusu vardas yra: ', vardas);
// } 

// pasisveikink('Jonas');
// pasisveikink('Petras');

// console.log(global)

// global.console.log('global console')

setTimeout(()=> {
    console.log('praejo 2 sek')
}, 2000);

// The FizzBuzz test requires iterating through numbers (usually 1-100) 
// and applying three main conditions based on
//  divisibility: print "Fizz" if divisible by 3, "Buzz" if divisible by 5, 
// and "FizzBuzz" if divisible by both 3 and 5. If none apply, the number itself is printed

// 3 -> Fizz
// 5 -> buzz
// 3 ir 5 -> FizzBuzz
// tiesiog skaiciukas

// 02-uzduotys - sukurti folderi fizzbuzzz ir jame faila scripts.js


for (let i = 1; i <= 100; i++) {
    console.log(
        ( i % 3 ? "" : "Fizz") + ( i % 5 ? "" : "Buzz") || i 
    )
}

let result = new Array(100)
    .fill(0)
    .map((item, index) => index + 1)
    .map(item => ( item % 3 ? "" : "Fizz") + ( item % 5 ? "" : "Buzz") || item );

console.log(result)