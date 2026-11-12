// Soal 1: FizzBuzz
function fizzBuzz(angka) {
  if (angka % 15 === 0) {
    console.log("FizzBuzz");
  } else if (angka % 3 === 0) {
    console.log("Fizz");
  } else if (angka % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(angka);
  }
}

console.log("Soal 1: FizzBuzz");
for (let i = 1; i <= 15; i++) {
  fizzBuzz(i);
}

// Soal 2: Cek Genap & Ganjil
function cekGenapGanjil(angka) {
  if (angka % 2 === 0) {
    console.log(angka + " adalah bilangan genap");
  } else {
    console.log(angka + " adalah bilangan ganjil");
  }
}

console.log("Soal 2: Cek Genap & Ganjil");
cekGenapGanjil(4);
cekGenapGanjil(7);

// Soal 3: Balik String
function balikString(teks) {
  return teks.split("").reverse().join("");
}

console.log("Soal 3: Balik String");
console.log(balikString("halo"));
console.log(balikString("javascript"));