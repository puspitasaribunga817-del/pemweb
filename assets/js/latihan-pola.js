// Soal 1: Segitiga
console.log("Soal 1: Segitiga");
for (let i = 1; i <= 4; i++) {
  let baris = "";
  for (let j = 1; j <= i; j++) {
    baris += "*";
  }
  console.log(baris);
}

// Soal 2: Persegi panjang
console.log("\nSoal 2: Persegi panjang");
for (let i = 1; i <= 4; i++) {
  let baris = "";
  for (let j = 1; j <= 8; j++) {
    baris += "*";
  }
  console.log(baris);
}

// Soal 3: Persegi panjang kosong
console.log("\nSoal 3: Persegi panjang kosong");
for (let i = 1; i <= 4; i++) {
  let baris = "";
  for (let j = 1; j <= 8; j++) {
    if (i === 1 || i === 4 || j === 1 || j === 8) {
      baris += "*";
    } else {
      baris += " ";
    }
  }
  console.log(baris);
}

// Soal 4: Segitiga sama sisi (angka sama)
console.log("\nSoal 4: Segitiga sama sisi");
for (let i = 1; i <= 4; i++) {
  let baris = "";
  for (let j = 1; j <= i; j++) {
    baris += i;
  }
  console.log(baris);
}

// Soal 5: Segitiga sama sisi 2 (angka berurutan)
console.log("\nSoal 5: Segitiga sama sisi 2");
let angka = 1;
for (let i = 1; i <= 4; i++) {
  let baris = "";
  for (let j = 1; j <= i; j++) {
    baris += angka + " ";
    angka++;
  }
  console.log(baris);
}

// Soal 6: Belah ketupat
console.log("\nSoal 6: Belah ketupat");
for (let i = 1; i <= 3; i++) {
  let baris = "";
  for (let s = 1; s <= 3 - i; s++) baris += " ";
  for (let j = 1; j <= 2 * i - 1; j++) baris += "*";
  console.log(baris);
}
for (let i = 2; i >= 1; i--) {
  let baris = "";
  for (let s = 1; s <= 3 - i; s++) baris += " ";
  for (let j = 1; j <= 2 * i - 1; j++) baris += "*";
  console.log(baris);
}

// Soal 7: Segitiga jam pasir
console.log("\nSoal 7: Segitiga jam pasir");
for (let i = 5; i >= 1; i--) {
  let baris = "";
  for (let s = 1; s <= 5 - i; s++) baris += " ";
  for (let j = 1; j <= i; j++) baris += "*";
  console.log(baris);
}
for (let i = 2; i <= 5; i++) {
  let baris = "";
  for (let s = 1; s <= 5 - i; s++) baris += " ";
  for (let j = 1; j <= i; j++) baris += "*";
  console.log(baris);
}

// Soal 8: Segitiga kosong
console.log("\nSoal 8: Segitiga kosong");
for (let i = 1; i <= 4; i++) {
  let baris = "";
  for (let s = 1; s <= 4 - i; s++) baris += " ";
  for (let j = 1; j <= 2 * i - 1; j++) {
    if (i === 4 || j === 1 || j === 2 * i - 1) {
      baris += "*";
    } else {
      baris += " ";
    }
  }
  console.log(baris);
}