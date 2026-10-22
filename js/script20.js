const mainImage = document.getElementById("mainImage");
const buttons = document.querySelectorAll(".btn-effect");

buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        buttons.forEach(function(b) {
            b.classList.remove("active");
        });

        this.classList.add("active");

        const effectClass = this.getAttribute("data-effect");

        mainImage.className = "img-effect " + effectClass;
    });
});