// Soal 1: Sistem Penilaian Sederhana
function cekNilai(nilai) {
  if (nilai >= 75) {
    console.log("Lulus");
  } else {
    console.log("Remedial");
  }
}

console.log("Soal 1:");
cekNilai(80);
cekNilai(60);

// Soal 2: Konversi Kode Peran (Role)
function cekRole(kode) {
  switch (kode) {
    case "A":
      console.log("Admin");
      break;
    case "U":
      console.log("User");
      break;
    default:
      console.log("Guest");
  }
}

console.log("Soal 2:");
cekRole("A");
cekRole("U");
cekRole("X");