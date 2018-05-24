// JavaScript source code

//자기호출 함수
//(function () 
//    alert("페이지가 초기화되었습니다.");
////실행코드
//})();
// call back 함수
function check(message) {
    var i = 0;
    var sum = 0;

    while (1) {
        i++;
        sum += i;
        if (sum > 20) {
            message();
            break;
        }
    }

}
// call back 함수 (오류체크 및 데이터 조회완료등에 사용)
function callbackFunction() {
    check(function () {
        alert("합이 20을 넘었습니다")
    })
}
// random함수
function randomItem(a) {
    return a[Math.floor(Math.random() * a.length)];
}
function advancedFor() {
    var student = ["최경재",
        "신성우",
        "박승진",
        "채성은",
        "조정연",
        "이우석",
        "최민한",
        "정경화",
        "이효재",
        "하태양",
        "이동근",
        "김의진",
        "성한빈",
        "이한민",
        "이은실",
        "최민성",
        "김도운",
        "김지성",
        "윤성호",
        "조동역",
        "노영우",
        "김강용",
        "정유석",
        "오미진",
        "최동훈",
        "정효재"];

    var student2 = [];
    var loopSize = student.length
    
    for (var i = 0; i < loopSize; i++) {
        var pickedItem = randomItem(student)
        student2.push(pickedItem)
        document.getElementById("demo").innerHTML = pickedItem;
        student.splice(student.indexOf(pickedItem), 1)
    }
    alert(student2)
}

