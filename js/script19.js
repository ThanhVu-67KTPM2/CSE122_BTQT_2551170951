const tuKhoaDiemNhan = ["Phan Thiết", "Hòn Rơm"];

function kiemTraNoiDung() {
    const cacDoanVan = document.querySelectorAll(".content-box p");
    cacDoanVan.forEach(function(doan) {
        let noiDung = doan.innerHTML;
        tuKhoaDiemNhan.forEach(function(tu) {
            let regex = new RegExp(tu, "g");
            noiDung = noiDung.replace(regex, `<span class="highlight">${tu}</span>`);
        });
        doan.innerHTML = noiDung;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    kiemTraNoiDung();
});