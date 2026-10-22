const menuLinks = document.querySelectorAll(".menu-link");
const contentTitle = document.getElementById("contentTitle");
const subMenu = document.getElementById("subMenu");

const noiDungDuLieu = {
    html: {
        tieuDe: "Bài tập HTML cơ bản",
        menuCon: ["Đảo chuỗi", "Phân tích chuỗi", "Tìm và thay thế"],
        noiDungChinh: "Trung Tâm Tin học – ĐH KHTN<br>Chào mừng các bạn đến với ngôn ngữ HTML"
    },
    js: {
        tieuDe: "Bài tập Ngôn ngữ JavaScript",
        menuCon: ["Biến và Kiểu dữ liệu", "Hàm và Sự kiện", "Vòng lặp và Điều kiện"],
        noiDungChinh: "Trung Tâm Tin học – ĐH KHTN<br>Chào mừng các bạn đến với lập trình JavaScript"
    },
    objects: {
        tieuDe: "Các đối tượng trong JavaScript",
        menuCon: ["Đối tượng Date", "Đối tượng Math", "Đối tượng String"],
        noiDungChinh: "Trung Tâm Tin học – ĐH KHTN<br>Khám phá các đối tượng có sẵn trong JavaScript"
    },
    css: {
        tieuDe: "CSS và bố cục hiện đại",
        menuCon: ["Flexbox Layout", "CSS Grid Layout", "Responsive Design"],
        noiDungChinh: "Trung Tâm Tin học – ĐH KHTN<br>Làm chủ giao diện hiện đại với CSS3"
    }
};

menuLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        menuLinks.forEach(function(l) {
            l.classList.remove("active");
        });
        this.classList.add("active");

        const key = this.getAttribute("data-menu");
        const data = noiDungDuLieu[key];

        if (data) {
            contentTitle.innerText = data.tieuDe;
            
            let htmlMenu = "";
            data.menuCon.forEach(function(item) {
                htmlMenu += `<li>• ${item}</li>`;
            });
            subMenu.innerHTML = htmlMenu;

            const mainBox = document.querySelector(".main-content-box p");
            const detailBox = document.querySelector(".main-content-box .fw-semibold");
            mainBox.innerText = "Thiết kế trang web có nội dung tương ứng:";
            detailBox.innerHTML = data.noiDungChinh;
        }
    });
});