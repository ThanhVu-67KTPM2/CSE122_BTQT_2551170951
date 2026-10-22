const danhSachKyQuan = [
    {
        so: 1,
        ten: "Vịnh Hạ Long",
        moTa: "Gần 2.000 đảo đá vôi, Di sản thiên nhiên thế giới, thuộc Quảng Ninh.",
        anh: "Anh/Bai14/1-vinh-ha-long.jpg"
    },
    {
        so: 2,
        ten: "Hang Sơn Đoòng",
        moTa: "Hang động tự nhiên lớn nhất thế giới, thuộc Quảng Bình.",
        anh: "Anh/Bai14/2-son-doong.jpg"
    },
    {
        so: 3,
        ten: "Thác Bản Giốc",
        moTa: "Thác nước đẹp nhất Việt Nam, nằm ở Cao Bằng.",
        anh: "Anh/Bai14/3-thac-ban-gioc.jpg"
    },
    {
        so: 4,
        ten: "Fansipan",
        moTa: "“Mái nhà Đông Dương”, cao 3.147 m, thuộc Lào Cai.",
        anh: "Anh/Bai14/4-fansipan.jpg"
    },
    {
        so: 5,
        ten: "Đồng bằng sông Cửu Long",
        moTa: "Vựa lúa, miệt vườn sông nước trù phú miền Nam.",
        anh: "Anh/Bai14/5-mekong.jpg"
    },
    {
        so: 6,
        ten: "Động Phong Nha",
        moTa: "Hệ thống hang động kỳ vĩ, Di sản thiên nhiên thế giới.",
        anh: "Anh/Bai14/6-phong-nha.jpg"
    }
];

function hienThiKyQuan() {
    const grid = document.getElementById("wonderGrid");
    let htmlContent = "";

    danhSachKyQuan.forEach(function(item) {
        htmlContent += `
            <div class="wonder-card">
                <img src="${item.anh}" alt="${item.ten}" class="wonder-img">
                <div class="p-3">
                    <h2 class="wonder-title">${item.so}. ${item.ten}</h2>
                    <p class="wonder-desc">${item.moTa}</p>
                </div>
            </div>
        `;
    });

    grid.innerHTML = htmlContent;
}

hienThiKyQuan();