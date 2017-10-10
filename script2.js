//Дан массив 1,2,3, строка 5,6 найти строку в массиве и вывести на экран
var  searchM = [1,2,3,'array',5,6]; 
	for (var i = 0; i < searchM.length; i++){
		if (typeof(searchM[i]) == 'string')
			break;
		console.log(searchM[i]);
	
}

//Написать плагин, который находит число в массиве
(function () {
    var numberN = [2,6,1,4,3,9,8,7]
	for (i = 0; i < numberN.length; i++){
	if (numberN[i] == 8){
		console.log(numberN[i])
		}
	}
 }());
 
//Плагин, который упорядочивает массив в обратном порядке
 var reverseOne = [1,2,3,4,5,6];
 console.log(reverseOne.reverse());



