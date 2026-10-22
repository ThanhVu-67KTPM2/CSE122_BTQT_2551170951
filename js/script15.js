let bieuThuc = "";
let ngoacMo = true;

const lblExpression = document.getElementById("lblExpression");
const lblResult = document.getElementById("lblResult");
const cacNut = document.querySelectorAll(".calc-btn");

function xuLyBamNut(giaTri) {
    if (giaTri === "C") {
        bieuThuc = "";
        ngoacMo = true;
        lblExpression.innerText = "";
        lblResult.innerText = "0";
        return;
    }

    if (giaTri === "=") {
        if (bieuThuc === "") return;
        try {
            let chuoiTinhToan = bieuThuc
                .replace(/×/g, "*")
                .replace(/÷/g, "/")
                .replace(/%/g, "/100");

            let ketQua = eval(chuoiTinhToan);
            ketQua = Math.round(ketQua * 100000000) / 100000000;

            lblExpression.innerText = bieuThuc;
            lblResult.innerText = ketQua;
            bieuThuc = ketQua.toString();
        } catch (error) {
            lblResult.innerText = "Lỗi";
            bieuThuc = "";
        }
        return;
    }

    if (giaTri === "()") {
        bieuThuc += ngoacMo ? "(" : ")";
        ngoacMo = !ngoacMo;
    } else if (["+", "-", "×", "÷"].includes(giaTri)) {
        bieuThuc += " " + giaTri + " ";
    } else {
        bieuThuc += giaTri;
    }

    lblExpression.innerText = bieuThuc;
}

cacNut.forEach(function(nut) {
    nut.addEventListener("click", function() {
        const giaTri = this.getAttribute("data-val");
        xuLyBamNut(giaTri);
    });
});