var header = document.querySelector(".header");
function check(weight, height){
    if(weight !== "" && height !== ""){
        return (parseFloat(weight)/(height*height/10000)).toFixed(2);  
    }
    alert("Vui lòng nhập đủ thông tin")
    
}
function getBMICategory(bmi) {
    if (bmi < 16) {
        return 'Gầy độ III';
    } else if (bmi < 17) {
        return 'Gầy độ II';
    } else if (bmi < 18.5) {
        return 'Gầy độ I';
    } else if (bmi < 25) {
        return 'Bình thường';
    } else if (bmi < 30) {
        return 'Thừa cân';
    } else if (bmi < 35) {
        return 'Béo phì độ I';
    } else if (bmi < 40) {
        return 'Béo phì độ II';
    } else {
        return 'Béo phì độ III';
    }
}

function getBMIComment(bmi) {
    let category = getBMICategory(bmi);
    switch(category) {
        case 'Gầy độ III':
            return 'Bạn cần phải tăng cân! Chỉ số BMI của bạn cho thấy bạn gầy độ III, điều này có thể gây ra các vấn đề sức khỏe nghiêm trọng.';
        case 'Gầy độ II':
            return 'Bạn cần phải tăng cân! Chỉ số BMI của bạn cho thấy bạn gầy độ II, điều này có thể gây ra các vấn đề sức khỏe.';
        case 'Gầy độ I':
            return 'Bạn cần phải tăng cân! Chỉ số BMI của bạn cho thấy bạn gầy độ I, điều này có thể gây ra các vấn đề sức khỏe nhất định.';
        case 'Bình thường':
            return 'Bạn có chỉ số BMI bình thường. Hãy tiếp tục giữ gìn sức khỏe!';
        case 'Thừa cân':
            return 'Bạn nên xem xét việc giảm cân để có một lối sống khỏe mạnh hơn. Chỉ số BMI của bạn cho thấy bạn thừa cân.';
        case 'Béo phì độ I':
            return 'Bạn nên xem xét việc giảm cân để có một lối sống khỏe mạnh hơn. Chỉ số BMI của bạn cho thấy bạn béo phì độ I, điều này có thể gây ra các vấn đề sức khỏe nghiêm trọng.';
        case 'Béo phì độ II':
            return 'Bạn nên xem xét việc giảm cân để có một lối sống khỏe mạnh hơn. Chỉ số BMI của bạn cho thấy bạn béo phì độ II, điều này có thể gây ra các vấn đề sức khỏe rất nghiêm trọng.';
        case 'Béo phì độ III':
            return 'Bạn nên xem xét việc giảm cân để có một lối sống khỏe mạnh hơn. Chỉ số BMI của bạn cho thấy bạn béo phì độ III, điều này có thể gây ra các vấn đề sức khỏe rất nghiêm trọng và nguy hiểm cho cuộc sống.';
    }
}
function calculateWeightChange(currentWeight, height) {
    let heightInMeters = height / 100; // Chuyển đổi chiều cao từ cm sang m
    let minNormalBMI = 18.5;
    let maxNormalBMI = 24.9;

    let minNormalWeight = minNormalBMI * heightInMeters * heightInMeters;
    let maxNormalWeight = maxNormalBMI * heightInMeters * heightInMeters;

    if (currentWeight < minNormalWeight) {
        return `Bạn cần phải tăng ${(minNormalWeight - currentWeight).toFixed(2)} kg để đạt được chỉ số BMI tối thiểu trong khoảng bình thường.`;
    } else if (currentWeight > maxNormalWeight) {
        return `Bạn cần phải giảm ${(currentWeight - maxNormalWeight).toFixed(2)} kg để đạt được chỉ số BMI tối đa trong khoảng bình thường.`;
    } else {
        return '';
    }
}


function printEachCharacter(str, element) {
    element.textContent = "";
    for (let i = 0; i < str.length; i++) {
        setTimeout(function() {
            element.textContent += str[i];
        }, i * 50); // Thay đổi thời gian chờ ở đây để điều chỉnh tốc độ hiển thị
    }
}

function comment(){
    let body = document.querySelector("body");
    let weight=header.children[1].children[0].value;
    let height=header.children[2].children[0].value;
    console.log(body.children.length)
    let cmtDiv = document.querySelector('.comment');
    let cmtH1 = cmtDiv.children[0];
    let cmtP = cmtDiv.children[1];
    cmtDiv.className = 'comment';
    let bmi = check(weight, height)
    cmtH1.innerHTML="chỉ số bmi của bạn là: " + bmi + " => " + getBMICategory(bmi);
    let commentP = getBMIComment(bmi)+calculateWeightChange(weight,height);
    printEachCharacter(commentP,cmtP);
    if(check(weight,height)!== undefined)cmtDiv.hidden = false;

}
function set() {
     header.children[3].onclick = comment;

}
window.onload = set();