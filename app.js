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



btn1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 1!");
		item = "1";
		tg.MainButton.show();
	}
});

btn2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 2!");
		item = "2";
		tg.MainButton.show();
	}
});

btn3.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 3!");
		item = "3";
		tg.MainButton.show();
	}
});

btn4.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 4!");
		item = "4";
		tg.MainButton.show();
	}
});

btn5.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();

	}
	else {

		tg.MainButton.setText("Вы выбрали товар 5!");
		item = "5";
		tg.MainButton.show();
	}
});


btnmin.addEventListener("click", function(){

	// this.remove()
	// console.log('Hello, World!');
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
		console.log('Hello, World!');
	}
	else {
		btn0.innerHTML = btn0.innerHTML - 1;
		if (btn0.innerHTML < 0)
		{
			btn0.innerHTML = 0
		}
        console.log(btn0.innerHTML)
        sum = btn0.innerHTML*310
        console.log("Вы заказали Биг Тейсти в количестве " + btn0.innerHTML +" "+"на суму "+ sum )
		// tg.MainButton.setText("Вы выбрали товар 6!");
		// item = "6";
		// tg.MainButton.show();
	}
 	
});

btnplus.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();

	}
	else {
          btn0.innerHTML = +btn0.innerHTML + 1;
          console.log(btn0.innerHTML)
          sum = btn0.innerHTML*310
          console.log("Вы заказали Биг Тейсти в количестве " + btn0.innerHTML +" "+"на суму "+ sum )
//           let result = ["Биг Тейсти ", btn0.innerHTML, sum];		
               
		tg.MainButton.setText("Вы выбрали товар 5!");
		item = "6";
		tg.MainButton.show();
	}
});



Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;


usercard.appendChild(p); 






