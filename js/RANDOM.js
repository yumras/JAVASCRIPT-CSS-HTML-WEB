// JavaScript source code

//�ڱ�ȣ�� �Լ�
//(function () 
//    alert("�������� �ʱ�ȭ�Ǿ����ϴ�.");
////�����ڵ�
//})();
// call back �Լ�
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
// call back �Լ� (����üũ �� ������ ��ȸ�Ϸ� ���)
function callbackFunction() {
	check(function () {
		alert("���� 20�� �Ѿ����ϴ�")
	})
}
// random�Լ�
function randomItem(a) {
	return a[Math.floor(Math.random() * a.length)];
}
function advancedFor() {
	var student = ["�ְ���",
		"�ż���",
		"�ڽ���",
		"ä����",
		"������",
		"�̿켮",
		"�ֹ���",
		"����ȭ",
		"��ȿ��",
		"���¾�",
		"�̵���",
		"������",
		"���Ѻ�",
		"���ѹ�",
		"������",
		"�ֹμ�",
		"�赵��",
		"������",
		"����ȣ",
		"������",
		"�뿵��",
		"�谭��",
		"������",
		"������",
		"�ֵ���",
		"��ȿ��"];

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
