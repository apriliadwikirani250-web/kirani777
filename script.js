// 1. Pesan Selamat Datang Saat Halaman Dibuka
window.onload = function() {
    alert("Selamat datang di Website Digital Marketing Toko Wilwil!");
}

// 2. Fungsi Menampilkan Informasi Produk
function infoProduk() {
    alert(
        "Roti Bronis Kopi – Inovasi terbaru dari Toko Wilwil.\n" +
        "Kelebihan:\n" +
        "- Rasa kopi yang khas\n" +
        "- Tekstur lembut dan moist\n" +
        "- Bahan baku pilihan\n" +
        "- Cocok untuk semua kalangan"
    );
}

// 3. Fungsi Menampilkan Lokasi Toko
function tampilLokasi() {
    alert("Toko Wilwil berlokasi di Jl. Contoh Alamat No. 123, Kota Anda");
}

// 4. Fungsi Pemesanan Produk Sederhana
function pesanProduk() {
    // Ambil nilai input form
    var nama = document.getElementById("nama").value;
    var kelas = document.getElementById("kelas").value;
    var absen = document.getElementById("absen").value;
    var jumlah = document.getElementById("jumlah").value;

    // Validasi input
    if(nama === "" || kelas === "" || absen === "" || jumlah === "") {
        alert("Harap lengkapi semua data pemesanan!");
        return false;
    }

    if(isNaN(absen) || isNaN(jumlah)) {
        alert("Nomor absen dan jumlah harus berupa angka!");
        return false;
    }

    // Pesan konfirmasi
    alert(
        "Terima kasih " + nama + "!\n" +
        "Pemesanan Roti Bronis Kopi berhasil.\n" +
        "Detail:\n" +
        "Kelas: " + kelas + "\n" +
        "Nomor Absen: " + absen + "\n" +
        "Jumlah: " + jumlah + " pcs\n" +
        "Kami akan menghubungi Anda untuk proses selanjutnya."
    );

    // Reset form setelah pemesanan
    document.getElementById("formPemesanan").reset();
}

// 5. Fungsi Promo Khusus (Contoh Bonus)
function promo() {
    alert("Promo Spesial: Diskon 10% untuk pembelian 5 pcs Roti Bronis Kopi!");
}
