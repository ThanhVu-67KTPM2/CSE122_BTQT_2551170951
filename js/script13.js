function doiSoThanh2Anh(so, idHangChuc, idHangDonVi) {
    const chuc = Math.floor(so / 10);
    const donVi = so % 10;

    document.getElementById(idHangChuc).src = "Anh/Bai13/0" + chuc + ".gif";
    document.getElementById(idHangDonVi).src = "Anh/Bai13/0" + donVi + ".gif";
}

function capNhatDongHo() {
    const now = new Date();
    const gio = now.getHours();
    const phut = now.getMinutes();
    const giay = now.getSeconds();

    doiSoThanh2Anh(gio, "h1", "h2");
    doiSoThanh2Anh(phut, "m1", "m2");
    doiSoThanh2Anh(giay, "s1", "s2");

    let loiChao = "";
    if (gio < 12) {
        loiChao = "Chào buổi sáng";
    } else if (gio < 18) {
        loiChao = "Chào buổi chiều";
    } else {
        loiChao = "Chào buổi tối";
    }

    document.getElementById("lblLoiChao").innerText = loiChao;
}

setInterval(capNhatDongHo, 1000);
capNhatDongHo();