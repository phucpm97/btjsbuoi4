/**bài1:
 *chia 3 TH: TH1 a lớn nhất : chia ra 2 trường hợp nhỏ , TH1 B lớn 2, TH2 C lớn 1
 *tương tự TH2: b lớn nhất TH3: c lớn nhất
 */
document.getElementById('btnKQsn').onclick = function() {
        var a = document.getElementById('txtSN1').value * 1;
        var b = document.getElementById('txtSN2').value * 1;
        var c = document.getElementById('txtSN3').value * 1;
        console.log(a, b, c);
        if (a >= b && a >= c) {

            console.log("a lon nhat");
            if (b >= c) {

                console.log(c, b, a);
                document.getElementById('KQ_Songuyen').innerHTML = ("Số nguyên theo thứ tự tăng dần là: ") + [c, b, a];
            } else {
                console.log(b, c, a);
                document.getElementById('KQ_Songuyen').innerHTML = ("Số nguyên theo thứ tự tăng dần là: ") + [b, c, a];
            }

        } else if (b >= a && b >= c) {

            console.log("b lon nhat");
            if (a >= c) {
                console.log(c, a, b);
                document.getElementById('KQ_Songuyen').innerHTML = ("Số nguyên theo thứ tự tăng dần là: ") + [c, a, b];
            } else {
                console.log(a, c, b);
                document.getElementById('KQ_Songuyen').innerHTML = ("Số nguyên theo thứ tự tăng dần là: ") + [a, c, b];
            }
        } else {
            console.log("c lon nhat");
            if (a >= b) {
                console.log(b, a, c);
                document.getElementById('KQ_Songuyen').innerHTML = ("Số nguyên theo thứ tự tăng dần là: ") + [b, a, c];
            } else {
                console.log(a, b, c);
                document.getElementById('KQ_Songuyen').innerHTML = ("Số nguyên theo thứ tự tăng dần là: ") + [a, b, c];
            }
        }
    }
    /**bai2:
     *nhập giá trị ký hiệu vd: B,M,A,E
     *nhập giá trị nào thi ứng với giá trị đó nên chia ra 5 trường hợp B,M,A,E và trường hợp nhập không đúng sẽ xuất ra câu chào cho từng người
     */
document.getElementById('btnKQGd').onclick = function() {
    var a = document.getElementById('txtTGD').value;
    console.log(a);
    if (a === "B") {
        var b = ("Xin chào ba")
        console.log("1", b);
        document.getElementById('KQ_Gd').innerHTML = (b);
    } else if (a === "M") {
        var b = ("Xin chào má")
        console.log("2");
        document.getElementById('KQ_Gd').innerHTML = (b);
    } else if (a === "A") {
        var b = ("Xin chào anh")
        console.log("3");
        document.getElementById('KQ_Gd').innerHTML = (b);
    } else if (a === "E") {
        var b = ("Xin chào chị")
        console.log("4");
        document.getElementById('KQ_Gd').innerHTML = (b);
    } else {
        var b = ("Bạn có thể xác nhận lại danh tính được không?")
        console.log("5");
        document.getElementById('KQ_Gd').innerHTML = (b);
    }
}

/**bai3:
 * tạo biến chia hết sử dụng hàm Math.floor chia hết cho 2, và 1 biến chia cho 2
 * kiểm tra xem 2 số đó có giống nhau ko, nếu giống là số chẵn còn khác là số lẻ
 * TH1:số1 chia het => chia ra 3 TH nhỏ: cả số 2 và số 3 chia hết || số 2 hoặc số 3 chia hết || cả số 2 và số 3 chia ko hết
 * TH2:số 1 chia ko hểt =>chia ra 3 TH nhỏ: cả số 2 và số 3 chia hết || số 2 hoặc số 3 chia hết || cả số 2 và số 3 chia ko hết
 */
document.getElementById('btnKQsnd').onclick = function() {
    var a = document.getElementById('txtSND1').value * 1;
    var b = document.getElementById('txtSND2').value * 1;
    var c = document.getElementById('txtSND3').value * 1;
    h_a = Math.floor(a / 2);
    k_a = a / 2;
    h_b = Math.floor(b / 2);
    k_b = b / 2;
    h_c = Math.floor(c / 2);
    k_c = c / 2;
    console.log(h_a, k_a, h_b, k_b, h_c, k_c);

    if (h_a == k_a) {
        if (h_b == k_b && h_c == k_c) {
            var TH = "có 3 số nguyên dương";
            console.log("co 3 so nguyen duong");
            document.getElementById('KQ_Songuyenduong').innerHTML = (TH);
        } else if (h_b != k_b && h_c != k_c) {
            var TH = "có 1 số nguyên dương và 2 số nguyên âm";
            console.log("co 1 so nguyen duong va 2 so nguyen am");
            document.getElementById('KQ_Songuyenduong').innerHTML = (TH);
        } else {
            var TH = "có 2 số nguyên dương và 1 số nguyên âm";
            console.log("co 2 so nguyen duong va 1 so nguyen am");
            document.getElementById('KQ_Songuyenduong').innerHTML = (TH);
        }
    } else if (h_a != k_a) {
        if (h_b != k_b && h_c != k_c) {
            var TH = "có 3 số nguyên âm";
            console.log("co 3 so nguyen am");
            document.getElementById('KQ_Songuyenduong').innerHTML = (TH);
        } else if (h_b == k_b && h_c == k_c) {
            var TH = "có 2 số nguyên dương và 1 số nguyên âm";
            console.log("co 2 so nguyen duong va 1 so nguyen am");
            document.getElementById('KQ_Songuyenduong').innerHTML = (TH);
        } else {
            var TH = "có 1 số nguyên dương và 2 số nguyên âm";
            console.log("co 1 so nguyen duong va 2 so nguyen am");
            document.getElementById('KQ_Songuyenduong').innerHTML = (TH);
        }

    }
}

/**
 * nhập giá trị 3 cạnh sau đó so sanh chia ra các TH
 * tam giác đều: 3 cạnh = nhau
 * tam giác cân: 2 cạnh giống và 1 cạnh khác
 * tam giác vuông: tìm cạnh có giá trị lớn nhất, gáng cho nó là cạnh huyền sau đó kiểm tra bằng công thức:
 * tổng bình phương cạnh góc vuông = bằng bình phương cạnh huyền
 * nếu 3 giá trị cạnh ko có trường hợp nào trên thì trường hợp cuối cùng là tam giác thường
 * xuất ra kết quả
 */
document.getElementById('btnKQctg').onclick = function() {
    var a = document.getElementById('txtCtg1').value * 1;
    var b = document.getElementById('txtCtg2').value * 1;
    var c = document.getElementById('txtCtg3').value * 1;
    var d = Math.max(a, b, c);

    console.log(a, b, c, d);
    if (a == b && a == c) {
        console.log("tam giac deu");
        document.getElementById('KQ_ctg').innerHTML = ('Tam giác đều');
    } else if (a == b || a == c || b == c) {
        console.log("tam giac can ");
        document.getElementById('KQ_ctg').innerHTML = ('Tam giác cân');
    } else if (d == a && a * a == b * b + c * c) {
        console.log("tam giac vuong co canh huyen la a");
        document.getElementById('KQ_ctg').innerHTML = ('Tam giác vuông có cạnh huyền là:a');
    } else if (d == b && b * b == a * a + c * c) {
        console.log("tam giac vuong co canh huyen la b");
        document.getElementById('KQ_ctg').innerHTML = ('Tam giác vuông có cạnh huyền là:b');
    } else if (d == c && c * c == b * b + a * a) {
        console.log("tam giac vuong co canh huyen la c");
        document.getElementById('KQ_ctg').innerHTML = ('Tam giác vuông có cạnh huyền là:c');
    } else {
        console.log("tam giac thuong");
        document.getElementById('KQ_ctg').innerHTML = ('Tam giác thường');
    };
};