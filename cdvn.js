function chuyendoi(){
    let tong =document.getElementById('dauvao').value;
    let a1 =document.getElementById('a1').value;
    let a2 =document.getElementById('a2').value;
    if (a1 == "USD" && a2 == "VND") {
        Result = "Result: " + (tong * 23000) + " Đ";
    }
    else if (a1 == "VND"&& a2 =="USD"){
        Result = "Result: "+ (tong / 23000) + " $";
    }
    else if (a1 == "VND") {
        Result = "Result: " + tong + " Đ"
    } else {
        Result = "Result: " + tong + " $"
    }

    document.getElementById("Result").innerHTML = Result;}
