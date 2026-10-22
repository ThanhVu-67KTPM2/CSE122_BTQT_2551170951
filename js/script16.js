let danhSachCV = [
    { id: 1, ten: "Đọc chương HTML5 cơ bản", hoanThanh: true },
    { id: 2, ten: "Làm bài tập CSS Grid", hoanThanh: false },
    { id: 3, ten: "Quay video OBS nộp bài", hoanThanh: false }
];

const inputTask = document.getElementById("txtTask");
const btnAdd = document.getElementById("btnAdd");
const taskList = document.getElementById("taskList");
const lblRemaining = document.getElementById("lblRemaining");

function hienThiDanhSach() {
    taskList.innerHTML = "";
    let soViecChuaXong = 0;

    danhSachCV.forEach(function(item) {
        if (!item.hoanThanh) {
            soViecChuaXong++;
        }

        const divItem = document.createElement("div");
        divItem.className = `task-item ${item.hoanThanh ? "completed" : ""}`;

        divItem.innerHTML = `
            <div class="task-left" onclick="toggleHoanThanh(${item.id})">
                <div class="checkbox-custom"></div>
                <span class="task-text">${item.ten}</span>
            </div>
            <button type="button" class="btn-delete" onclick="xoaCongViec(${item.id})">Xoá</button>
        `;

        taskList.appendChild(divItem);
    });

    lblRemaining.innerText = `Còn ${soViecChuaXong} việc chưa hoàn thành`;
}

function themCongViec() {
    const tenMoi = inputTask.value.trim();
    if (tenMoi === "") {
        alert("Vui lòng nhập nội dung công việc!");
        return;
    }

    const cvMới = {
        id: Date.now(),
        ten: tenMoi,
        hoanThanh: false
    };

    danhSachCV.push(cvMới);
    inputTask.value = "";
    hienThiDanhSach();
}

function toggleHoanThanh(id) {
    danhSachCV = danhSachCV.map(function(item) {
        if (item.id === id) {
            return { ...item, hoanThanh: !item.hoanThanh };
        }
        return item;
    });
    hienThiDanhSach();
}

function xoaCongViec(id) {
    danhSachCV = danhSachCV.filter(function(item) {
        return item.id !== id;
    });
    hienThiDanhSach();
}

btnAdd.addEventListener("click", themCongViec);

inputTask.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        themCongViec();
    }
});

hienThiDanhSach();