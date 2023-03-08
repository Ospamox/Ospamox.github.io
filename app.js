let result = [];
let resultt = [];
let result4 = [];
let result3 = [];
let result2 = [];
let result1 = [];

let all =[];


let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");

let btn6 = document.getElementById("btn6");



btnmin1.addEventListener("click", function(){
// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();
// 	}
// 	else {
          all[0] = null

		  result1.splice(0,result1.length);
          btn01.innerHTML = btn01.innerHTML - 1;
          if (btn01.innerHTML < 0)
		{
			btn01.innerHTML = 0
		}
        sum = btn01.innerHTML*350
        result1.push("Вы заказали Биг Мак в количестве");
        result1.push(btn01.innerHTML);
        result1.push(sum);
        // console.log(result1);
        all[0] = result1;
        console.log(all)
	tg.MainButton.setText("Send in Telega"); 
        tg.MainButton.show();
        
// 	}
});

btnplus1.addEventListener("click", function(){
// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();
// 	}
// 	else {
          all[0] = null

		  result1.splice(0,result1.length);
          btn01.innerHTML = +btn01.innerHTML + 1;
          sum = btn01.innerHTML*350
          result1.push("Вы заказали Биг Мак в количестве");
          result1.push(btn01.innerHTML);
          result1.push(sum);
          // console.log(result1);
          all[0] = result1;
          console.log(all);
	  tg.MainButton.setText("Send in Telega"); 
          tg.MainButton.show();
        
// 	}
});

btnmin2.addEventListener("click", function(){
// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();
// 	}
// 	else {
		 all[1] = null;
		  result2.splice(0,result2.length);
          btn02.innerHTML = btn02.innerHTML - 1;
          if (btn02.innerHTML < 0)
		{
			btn02.innerHTML = 0
		}
        sum = btn02.innerHTML*270
        result2.push("Вы заказали Гамбургер в количестве");
        result2.push(btn02.innerHTML);
        result2.push(sum);
        // console.log(result2)
        all[1] = result2;
        console.log(all);
	tg.MainButton.setText("Send in Telega"); 
        tg.MainButton.show();
// 	}
});

btnplus2.addEventListener("click", function(){
// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();
// 	}
// 	else {
		all[1] = null;
		  result2.splice(0,result2.length);
          btn02.innerHTML = +btn02.innerHTML + 1;
          sum = btn02.innerHTML*270
          result2.push("Вы заказали Гамбургер в количестве");
          result2.push(btn02.innerHTML);
          result2.push(sum);
          // console.log(result2)
	  all[1] = result2;
          console.log(all);
	  tg.MainButton.setText("Send in Telega"); 
          tg.MainButton.show();
// 	}
});

btnmin3.addEventListener("click", function(){
// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();
// 	}
// 	else {
		  all[2] = null;
		  result3.splice(0,result3.length);
          btn03.innerHTML = btn03.innerHTML - 1;
          if (btn03.innerHTML < 0)
		{
			btn03.innerHTML = 0
		}
        sum = btn03.innerHTML*300
        result3.push("Вы заказали Чизбургер в количестве");
        result3.push(btn03.innerHTML);
        result3.push(sum);
        // console.log(result3);
        all[2] = result3;
        console.log(all); 
	tg.MainButton.setText("Send in Telega"); 
        tg.MainButton.show();
// 	}
});

btnplus3.addEventListener("click", function(){
// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();
// 	}
// 	else {
		  all[2] = null;
		  result3.splice(0,result3.length);
          btn03.innerHTML = +btn03.innerHTML + 1;
          sum = btn03.innerHTML*300
          result3.push("Вы заказали Чизбургер в количестве");
          result3.push(btn03.innerHTML);
          result3.push(sum);
          // console.log(result3)
          all[2] = result3;
          console.log(all);
	 tg.MainButton.setText("Send in Telega"); 
         tg.MainButton.show(); 
// 	}
});

btnmin4.addEventListener("click", function(){
// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();

// 	}
// 	else {

        all[3] = null;
		// очищаем массив
		result4.splice(0,result4.length);
		btn04.innerHTML = btn04.innerHTML - 1;
		if (btn04.innerHTML < 0)
		{
			btn04.innerHTML = 0
		}
        sum = btn04.innerHTML*320
        result4.push("Вы заказали Дабли Чиз. в количестве");
        result4.push(btn04.innerHTML);
        result4.push(sum);
        // console.log(result4)
        all[3] = result4;
        console.log(all);
	tg.MainButton.setText("Send in Telega"); 
        tg.MainButton.show();
// 	}
});

btnplus4.addEventListener("click", function(){
// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();
// 	}
// 	else {
		  all[3] = null;
		  result4.splice(0,result4.length);
          btn04.innerHTML = +btn04.innerHTML + 1;
          sum = btn04.innerHTML*320
          result4.push("Вы заказали Дабли Чиз. в количестве");
          result4.push(btn04.innerHTML);
          result4.push(sum);
          // console.log(result4);
          all[3] = result4;
          console.log(all);
	  tg.MainButton.setText("Send in Telega"); 
          tg.MainButton.show();
// 	}
});

btnminn.addEventListener("click", function(){
// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();

// 	}
// 	else {
        all[4] = null;

		// очищаем массив
		resultt.splice(0,resultt.length);
		btn00.innerHTML = btn00.innerHTML - 1;
		if (btn00.innerHTML < 0)
		{
			btn00.innerHTML = 0
		}
        sum = btn00.innerHTML*300
        resultt.push("Вы заказали Мак Чике в количестве");
        resultt.push(btn00.innerHTML);
        resultt.push(sum);
        // console.log(resultt);
        all[4] = resultt;
        console.log(all);
	tg.MainButton.setText("Send in Telega"); 
        tg.MainButton.show();
// 	}
});
btnpluss.addEventListener("click", function(){
// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();

// 	}
// 	else {
		  all[4] = null;
		  resultt.splice(0,resultt.length);
          btn00.innerHTML = +btn00.innerHTML + 1;
          sum = btn00.innerHTML*300
          resultt.push("Вы заказали Мак Чике в количестве");
          resultt.push(btn00.innerHTML);
          resultt.push(sum);
          // console.log(resultt)
          all[4] = resultt;
          console.log(all);
	  tg.MainButton.setText("Send in Telega"); 
          tg.MainButton.show();
// 		}
	});

btnmin.addEventListener("click", function(){

	// this.remove()
	// console.log('Hello, World!');
// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();
		
// 	}
// 	else {
		all[5] = null;
		// очищаем массив
		result.splice(0,result.length);
		btn0.innerHTML = btn0.innerHTML - 1;
		if (btn0.innerHTML < 0)
		{
			btn0.innerHTML = 0
		}
        sum = btn0.innerHTML*310
        result.push("Вы заказали Биг Тейсти в количестве");
        result.push(btn0.innerHTML);
        result.push(sum);
        // console.log(result)
		all[5] = result;
        console.log(all);
	tg.MainButton.setText("Send in Telega"); 
        tg.MainButton.show();
		
// 	}
 	
});

btnplus.addEventListener("click", function(){
// 	if (tg.MainButton.isVisible) {
// 		tg.MainButton.hide();

// 	}
// 	else {
		  all[5] = null;
		  result.splice(0,result.length);
          btn0.innerHTML = +btn0.innerHTML + 1;
          sum = btn0.innerHTML*310
          // console.log("Вы заказали Биг Тейсти в количестве " + btn0.innerHTML +" "+"на суму "+ sum )

          result.push("Вы заказали Биг Тейсти в количестве");
          result.push(btn0.innerHTML);
          result.push(sum);
          // console.log(result)
          all[5] = result;
          console.log(all);
	  tg.MainButton.setText("Send in Telega"); 
          tg.MainButton.show();
          
// 	}
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	all = JSON.stringify(all);
	tg.sendData(all);
function zapros() {
       fetch("https://molx-origen.ml/uk-g/h", {
       method: "POST",
       body: JSON.stringify({
       userId: "1",
       title: "Fix my bugs",
       completed: "uuu"
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});
}
zapros()

	
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.query_id}
${tg.initDataUnsafe.user.id}`;


usercard.appendChild(p); 






