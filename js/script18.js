const danhSachMonAn = [
    "Bánh tráng Mỹ Lồng, bánh phồng Sơn Đốc",
    "Dồi lươn rim nước cốt dừa",
    "Bún mắm",
    "Bún nước lèo Sóc Trăng",
    "Nem lai Vung",
    "Cốm dẹp",
    "Bưởi Tân Triều"
];

function renderDanhSach() {
    const ul = document.getElementById("flavorList");
    let html = "";

    danhSachMonAn.forEach(function(mon) {
        html += `<li>${mon}</li>`;
    });

    ul.innerHTML = html;
}

renderDanhSach();