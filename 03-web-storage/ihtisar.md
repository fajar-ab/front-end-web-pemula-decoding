# Ikhtisar

A
nda berada di akhir dari modul Web Storage. Mari kita uraikan materi yang sudah Anda pelajari untuk mempertajam pemahaman.

- **Web Storage**
  - Merupakan salah satu Browser API yang digunakan untuk menyimpan data dengan pola key-value.
  - Web Storage dapat menampung data maksimal 10MB per domain.
- **Fungsi dari Web Storage**
  - Menyimpan data dalam bentuk string yang dihasilkan oleh halaman web agar bisa diakses secara offline.
  - Cocok juga untuk menyimpan data konfigurasi preference untuk pengguna web.
- **Macam-macam Web Storage**
  - Local Storage: Digunakan untuk menyimpan data tanpa ada batasan waktu. Data yang disimpan tidak akan hilang bila browser atau tabs browser ditutup kecuali jika kita menghapusnya.
  - Session Storage: Digunakan untuk menyimpan data sementara pada browser. Data akan hilang ketika browser atau tab browser ditutup.
- **Fungsi-fungsi yang ada pada Web Storage:**
  - setItem: Digunakan untuk menyimpan data pada Web Storage. Fungsi ini membutuhkan dua parameter yakni key (sebagai kunci untuk mendapatkan nilai) dan value (sebagai nilai yang akan disimpan).
  - getItem: Digunakan untuk mengakses data pada Web Storage. Fungsi ini membutuhkan satu parameter yakni key sebagai kunci untuk mendapatkan nilai) dan data yang disimpan pada Web Storage akan dikembalikan dalam bentuk string.
- **Menyimpan dan Mendapatkan Data Kompleks pada Web Storage:**
  - Untuk menyimpan data kompleks seperti objek JavaScript dapat dilakukan dengan mengubah objek menjadi string menggunakan JSON.stringify().
  - Untuk mendapatkan data kompleks seperti objek JavaScript dari Web Storage dapat dilakukan dengan mengubah string objek menjadi objek menggunakan JSON.parse().

Dengan ringkasan tersebut, diharapkan Anda dapat memahami semua materi yang telah disampaikan. Jika belum, Anda bisa ulas kembali materi yang diberikan pada modul ini. Untuk Anda yang sudah merasa mantap, tinggal selangkah lagi agar Anda bisa lulus dari kelas ini! Di materi selanjutnya, terdapat proyek yang harus Anda kerjakan. Sudah tidak sabar untuk mengetahui apa itu proyeknya? Simak materi selanjutnya yah!
