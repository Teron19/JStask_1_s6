//*1 Отформатировать код пропуск (;)     -
(function(win){
    var params = {
        states: {
            url: "/",
            template: "temlate.js"
        }
    };
    function setStates(params) {
        if(win && !win.params) {
            win.params = params;
        }
    }
    setStates();
    console.log(params.states.template);
})(window); //передаю 

//*2 Создайте 3 переменные, сначала присвойте им трем одно и то же значение, выведите каждую переменную в консоль.   (+)

//var one,two,thee = 3;  ?
var one = 3;
var two = 3;
var thee = 3;
console.log(one + two + thee); //сума 9 one . two + thee
 
//Затем установите для каждой переменной разное значение и снова выведите в консоль.                                   (+)

var one = 1;
var two = 2;
var thee = 4;
console.log(one, two, thee);
 
/*3. Объявите переменную, но не присваивайте ей значение.                                                              (+)
Выведите ее в консоль чтобы убедиться, что она undefined.
Затем поочередно присваивайте ей разные значения и выводите в консоль.
Булевое значение -> в консоль, число -> в консоль, string -> в консоль, null -> в консоль.                        
И в конце проверьте переменную с null с помощью оператора typeof.*/
var bill;
console.log(bill);
bill = true;   //boolean
console.log(bill);
var bill = 4;  //number
console.log(bill);
bill = "fi";   //string
console.log(bill);
bill = null;
console.log(bill);

console.log(typeof(bill));

/*4 Создайте переменную с помощью let и установите в нее значение «JavaScript».                                        (+)
Создайте обычную переменную с помощью var установите в нее значение «courses».
Склейте две эти строки таким образом чтоб между ними был пробел и результат склеивания запишите в переменную result.
Выведите переменную result в консоль.*/
let name = "JavaScropt";
var name_1 = "courses";
var result;
//#1 ?

result = name + " " + name_1;
console.log(result);
//#2
result = name + " " + name_1;
console.log(result); 

/*5 Создайте переменную, с помощью инкремента (++) увеличьте ее на 3 и затем присвойте 
значение вашей переменной одновременно переменной «z» и «x».   (+/-)
Выражение присваивания должно быть в одну строку.*/

var fill = 1; 
var z, x;    
fill++;
++fill;
fill++;
//таки не понял   ?
z = x = fill;

/*6. Необходимо создать переменную типа Number, присвоить ей какое то значение.
Затем поочередно преобразовать ее в String, Boolean и опять в Number.
Обратите внимание что необходимо не переназначить, а именно преобразовать переменную в другой тип.*/
//Number (9);  ? вдруг и так 

/*(9).toString(); //зачем точка ?
(9).
(9).valueOf();  //Number*/

var rit = Number (9);

rit = String(rit);
rit = Boolean(rit);
rit = Number(rit);

//
(rit).toString(); //зачем точка  єто -?
//(rit).;
(rit).valueOf();  //Number
  
(rit).strLowerCase();

