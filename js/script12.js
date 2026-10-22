function inLich() {
    const ngay = parseInt(document.getElementById('txtNgay').value);
    const thang = parseInt(document.getElementById('txtThang').value);
    const nam = parseInt(document.getElementById('txtNam').value);

    if (isNaN(ngay) || isNaN(thang) || isNaN(nam) || thang < 1 || thang > 12 || ngay < 1 || ngay > 31) {
        alert("Vui lòng nhập Ngày, Tháng, Năm hợp lệ!");
        return;
    }

    const dateObj = new Date(nam, thang - 1, ngay);
    const thangHienTai = dateObj.getMonth() + 1;
    const thuIndex = dateObj.getDay();

    const mangThu = [
        "Chủ nhật", 
        "Thứ hai", 
        "Thứ ba", 
        "Thứ tư", 
        "Thứ năm", 
        "Thứ sáu", 
        "Thứ bảy"
    ];

    document.getElementById('lblNam').innerText = dateObj.getFullYear();
    document.getElementById('lblThang').innerText = "Tháng " + thangHienTai;
    document.getElementById('lblNgay').innerText = dateObj.getDate();
    document.getElementById('lblThu').innerText = mangThu[thuIndex];

    const gioHienTai = new Date().getHours();
    let loiChao = "";

    if (gioHienTai < 12) {
        loiChao = "Chào buổi sáng!";
    } else if (gioHienTai < 18) {
        loiChao = "Chào buổi chiều!";
    } else {
        loiChao = "Chào buổi tối!";
    }
    document.getElementById('lblLoiChao').innerText = loiChao;
}

document.getElementById('btnInLich').addEventListener('click', inLich);
inLich();