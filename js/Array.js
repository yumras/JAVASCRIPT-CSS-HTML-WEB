// for loop 예제
function pushFor() {
    var number = [];

    for (var i = 0; i < 10; i++) {
        number[i] = i + 1
    }
    alert(number)
}
// while loop 예제
function whileExample() {
    var array = [1, 2, 3, 4, 5];
    var i = 0;
    while (i < array.length) {
        alert(array[i]);
        i++;
    }
}
// array 선언 예제
function arrayDefine() {

    //5개의 배열 요소를 가지는 변수 array1 선언
    var array1 = [1, 2, 3, 4, 5];

    //첫 번째 배열요소인 1과 두 번째 배열요소인 2를 더한 값을 마지막 배열 요소로 추가
    array1[array1.length] = array1[0] + array1[1];

    //문자열 'string'을 마지막 배열 요소로 추가 
    array1.push('string');

    //인덱스를 이용하여 array1의 모든 배열요소 출력 
    alert(array1[0]);
    alert(array1[1]);
    alert(array1[2]);
    alert(array1[3]);
    alert(array1[4]);
    alert(array1[5]);
    alert(array1[6]);

}
