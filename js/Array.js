// for loop ����
function pushFor() {
    var number = [];

    for (var i = 0; i < 10; i++) {
        number[i] = i + 1
    }
    alert(number)
}
// while loop ����
function whileExample() {
    var array = [1, 2, 3, 4, 5];
    var i = 0;
    while (i < array.length) {
        alert(array[i]);
        i++;
    }
}
// array ���� ����
function arrayDefine() {

    //5���� �迭 ��Ҹ� ������ ���� array1 ����
    var array1 = [1, 2, 3, 4, 5];

    //ù ��° �迭����� 1�� �� ��° �迭����� 2�� ���� ���� ������ �迭 ��ҷ� �߰�
    array1[array1.length] = array1[0] + array1[1];

    //���ڿ� 'string'�� ������ �迭 ��ҷ� �߰� 
    array1.push('string');

    //�ε����� �̿��Ͽ� array1�� ��� �迭��� ��� 
    alert(array1[0]);
    alert(array1[1]);
    alert(array1[2]);
    alert(array1[3]);
    alert(array1[4]);
    alert(array1[5]);
    alert(array1[6]);

}
