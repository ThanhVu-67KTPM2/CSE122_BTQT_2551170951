const form = document.getElementById("registerForm");
const txtHoTen = document.getElementById("txtHoTen");
const txtEmail = document.getElementById("txtEmail");
const txtMatKhau = document.getElementById("txtMatKhau");
const txtXacNhan = document.getElementById("txtXacNhan");

const errHoTen = document.getElementById("errHoTen");
const errEmail = document.getElementById("errEmail");
const errMatKhau = document.getElementById("errMatKhau");
const errXacNhan = document.getElementById("errXacNhan");

function hienThiLoi(input, elemMsg, noiDung) {
    input.classList.remove("is-valid-custom");
    input.classList.add("is-invalid-custom");
    elemMsg.className = "feedback-msg mt-1 error-text";
    elemMsg.innerText = "✗ " + noiDung;
}

function hienThiThanhCong(input, elemMsg) {
    input.classList.remove("is-invalid-custom");
    input.classList.add("is-valid-custom");
    elemMsg.className = "feedback-msg mt-1 success-text";
    elemMsg.innerText = "✓ Hợp lệ";
}

form.addEventListener("submit", function(e) {
    e.preventDefault(); // Chặn gửi form mặc định để kiểm tra bằng JS

    let hopLe = true;

    // 1. Kiểm tra Họ tên
    const hoTenVal = txtHoTen.value.trim();
    if (hoTenVal === "") {
        hienThiLoi(txtHoTen, errHoTen, "Họ và tên không được để trống");
        hopLe = false;
    } else {
        hienThiThanhCong(txtHoTen, errHoTen);
    }

    // 2. Kiểm tra Email
    const emailVal = txtEmail.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailVal === "") {
        hienThiLoi(txtEmail, errEmail, "Email không được để trống");
        hopLe = false;
    } else if (!emailRegex.test(emailVal)) {
        hienThiLoi(txtEmail, errEmail, "Email không hợp lệ (thiếu tên miền hoặc cấu trúc sai)");
        hopLe = false;
    } else {
        hienThiThanhCong(txtEmail, errEmail);
    }

    // 3. Kiểm tra Mật khẩu
    const mkVal = txtMatKhau.value;
    if (mkVal.length < 6) {
        hienThiLoi(txtMatKhau, errMatKhau, "Mật khẩu phải có ít nhất 6 ký tự");
        hopLe = false;
    } else {
        hienThiThanhCong(txtMatKhau, errMatKhau);
    }

    // 4. Kiểm tra Xác nhận mật khẩu
    const xnVal = txtXacNhan.value;
    if (xnVal === "") {
        hienThiLoi(txtXacNhan, errXacNhan, "Vui lòng xác nhận mật khẩu");
        hopLe = false;
    } else if (xnVal !== mkVal) {
        hienThiLoi(txtXacNhan, errXacNhan, "Xác nhận mật khẩu không khớp");
        hopLe = false;
    } else {
        hienThiThanhCong(txtXacNhan, errXacNhan);
    }

    // Nếu tất cả dữ liệu hợp lệ
    if (hopLe) {
        alert("Đăng ký tài khoản thành công!");
        form.submit(); // Cho phép gửi form hoặc xử lý tiếp
    }
});