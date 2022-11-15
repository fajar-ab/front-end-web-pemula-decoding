# Ikhtisar Browser Object Model, Document Object Model, dan Event

Selamat yah! Anda berada di akhir dari modul Browser Object Model, Document Object Model, dan Event. Mari kita uraikan materi yang sudah Anda pelajari untuk mempertajam pemahaman.

- **Browser Object Model (BOM)**
  - Objek JavaScript yang tersedia di browser yang dapat digunakan untuk mengontrol browser.
- **Member dari BOM yang sering digunakan:**
  - alert: Menampilkan pop-up pesan pada browser.
  - prompt: Menampilkan pop-up pesan yang dapat menerima input dari pengguna.
  - console: Menampilkan pesan atau nilai pada console browser.
- **Document Object Model (DOM):**
  - Objek JavaScript yang tersedia di browser yang dapat digunakan untuk mengontrol dan memanipulasi konten yang ditampilkan pada website.
- **DOM Tree:**
  - Struktur Website dalam bentuk JavaScript objek yang terbentuk seperti bagan pohon.
    DOM Tree terbentuk berdasarkan dari struktur berkas HTML.
- **Teknik manipulasi DOM:**
  - Mendapatkan Elemen: document.querySelector, document.querySelectorAll, document.getElementById, dan sebagainya.
  - Membuat Elemen: document.createElement.
  - Mengubah Konten: element.innerHTML, element.innerText element.setAttribute(), dan sebagainya.
  - Menambahkan Element: element.appendChild.
- **Macam-macam Event:**
  - Window Event
  - Form Event
  - Keyboard Event
  - Clipboard Event
  - Mouse Event
- **Menambahkan Event Handler pada HTML Element:**
  - Menggunakan method element.addEventListerner
- **Custom Event:**
  - Merupakan Event yang nama dan cara membangkitkannya ditentukan oleh kita sendiri.
- **Konsep Event Bubbling dan Event Capturing:**
  - Event Bubbling: Event yang terjadi dari element dalam ke element luar.
  - Event Capturing: Event yang terjadi dari element luar ke element dalam.
- **Event pada elemen `<form>`:**
  - onSubmit: Event yang dibangkitkan ketika tombol submit pada form ditekan.
  - Event pada elemen `<input>`:
    - onInput: Event yang dibangkitkan setiap kali menulis atau menghapus nilai pada elemen input.
    - onFocus: Event yang dibangkitkan ketika elemen input dalam keadaan fokus.
    - onBlur: Event yang dibangkitkan ketika elemen input dalam keadaan fokus berubah menjadi tidak fokus.
    - onChange: Event yang dibangkitkan ketika nilai elemen input berubah.
    - onCopy: Event yang dibangkitkan ketika pengguna men-copy nilai dari input.
    - onPaste: Event yang dibangkitkan ketika pengguna men-paste nilai pada input.

Dengan ringkasan tersebut, diharapkan Anda dapat memahami materi yang telah disampaikan. Jika belum, Anda bisa ulas kembali materi yang diberikan pada modul ini dan juga menanyakannya di forum diskusi. Untuk Anda yang sudah merasa mantap, yuk lanjut ke modul berikutnya. Kita akan belajar banyak mengenai bagaimana kita bisa menyimpan data di browser supaya bisa diakses kembali oleh JavaScript hampir di mana saja. Yuk belajar mengenai Web Storage.
