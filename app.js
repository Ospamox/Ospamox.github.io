let result = [];
let resultt = [];
let result4 = [];
let result3 = [];
let result2 = [];
let result1 = [];

//let all =[];
let all = [['', '', '', 700],['', '', '', 810],['', '', '', 300],['','','',900],['', '', '', 850],['', '', '', 700]];//что нибудь, чтобы не был пустым

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
          all[0] = null
		  result1.splice(0,result1.length);
          btn01.innerHTML = btn01.innerHTML - 1;
          if (btn01.innerHTML < 0)
		{
			btn01.innerHTML = 0
		}
        sum = btn01.innerHTML*350
        result1.push("1.png");
        result1.push("Вы заказали Биг Мак в количестве");
        result1.push(btn01.innerHTML);
        result1.push(sum);
        all[0] = result1;
        console.log(all)
	tg.MainButton.setText("Send in Telega"); 
        tg.MainButton.show();
    
});

btnplus1.addEventListener("click", function(){

          all[0] = null
		  result1.splice(0,result1.length);
          btn01.innerHTML = +btn01.innerHTML + 1;
          sum = btn01.innerHTML*350
          result1.push("1.png");
          result1.push("Вы заказали Биг Мак в количестве");
          result1.push(btn01.innerHTML);
          result1.push(sum);
          // console.log(result1);
          all[0] = result1;
          console.log(all);
	  tg.MainButton.setText("Send in Telega"); 
          tg.MainButton.show();
        
});

btnmin2.addEventListener("click", function(){

		 all[1] = null;
		  result2.splice(0,result2.length);
          btn02.innerHTML = btn02.innerHTML - 1;
          if (btn02.innerHTML < 0)
		{
			btn02.innerHTML = 0
		}
        sum = btn02.innerHTML*270
        result2.push("2.png");
        result2.push("Вы заказали Гамбургер в количестве");
        result2.push(btn02.innerHTML);
        result2.push(sum);
        all[1] = result2;
        console.log(all);
});

btnplus2.addEventListener("click", function(){

		all[1] = null;
		  result2.splice(0,result2.length);
          btn02.innerHTML = +btn02.innerHTML + 1;
          sum = btn02.innerHTML*270
          result2.push("2.png")
          result2.push("Вы заказали Гамбургер в количестве");
          result2.push(btn02.innerHTML);
          result2.push(sum);
	  all[1] = result2;
          console.log(all);
	  tg.MainButton.setText("Send in Telega"); 
          tg.MainButton.show();
});

btnmin3.addEventListener("click", function(){

		  all[2] = null;
		  result3.splice(0,result3.length);
          btn03.innerHTML = btn03.innerHTML - 1;
          if (btn03.innerHTML < 0)
		{
			btn03.innerHTML = 0
		}
        sum = btn03.innerHTML*300
        result3.push("3.png");
        result3.push("Вы заказали Чизбургер в количестве");
        result3.push(btn03.innerHTML);
        result3.push(sum);
        all[2] = result3;
        console.log(all); 
	tg.MainButton.setText("Send in Telega"); 
        tg.MainButton.show();
});

btnplus3.addEventListener("click", function(){

		  all[2] = null;
		  result3.splice(0,result3.length);
          btn03.innerHTML = +btn03.innerHTML + 1;
          sum = btn03.innerHTML*300
          result3.push("3.png");
          result3.push("Вы заказали Чизбургер в количестве");
          result3.push(btn03.innerHTML);
          result3.push(sum);
          all[2] = result3;
          console.log(all);
	 tg.MainButton.setText("Send in Telega"); 
         tg.MainButton.show(); 
});

btnmin4.addEventListener("click", function(){

        all[3] = null;
		// очищаем массив
		result4.splice(0,result4.length);
		btn04.innerHTML = btn04.innerHTML - 1;
		if (btn04.innerHTML < 0)
		{
			btn04.innerHTML = 0
		}
        sum = btn04.innerHTML*320
        result4.push("4.png");
        result4.push("Вы заказали Дабли Чиз. в количестве");
        result4.push(btn04.innerHTML);
        result4.push(sum);
        all[3] = result4;
        console.log(all);
	tg.MainButton.setText("Send in Telega"); 
        tg.MainButton.show();
});

btnplus4.addEventListener("click", function(){

		  all[3] = null;
		  result4.splice(0,result4.length);
          btn04.innerHTML = +btn04.innerHTML + 1;
          sum = btn04.innerHTML*320
          result4.push("4.png");
          result4.push("Вы заказали Дабли Чиз. в количестве");
          result4.push(btn04.innerHTML);
          result4.push(sum);
          all[3] = result4;
	  tg.MainButton.setText("Send in Telega"); 
          tg.MainButton.show();
});

btnminn.addEventListener("click", function(){

        all[4] = null;
		// очищаем массив
		resultt.splice(0,resultt.length);
		btn00.innerHTML = btn00.innerHTML - 1;
		if (btn00.innerHTML < 0)
		{
			btn00.innerHTML = 0
		}
        sum = btn00.innerHTML*300
        resultt.push("5.png");
        resultt.push("Вы заказали Мак Чике в количестве");
        resultt.push(btn00.innerHTML);
        resultt.push(sum);
        all[4] = resultt;
        console.log(all);
	tg.MainButton.setText("Send in Telega"); 
        tg.MainButton.show();
});
btnpluss.addEventListener("click", function(){

		  all[4] = null;
		  resultt.splice(0,resultt.length);
          btn00.innerHTML = +btn00.innerHTML + 1;
          sum = btn00.innerHTML*300
          resultt.push("5.png");
          resultt.push("Вы заказали Мак Чике в количестве");
          resultt.push(btn00.innerHTML);
          resultt.push(sum);
          // console.log(resultt)
          all[4] = resultt;
          console.log(all);
	  tg.MainButton.setText("Send in Telega"); 
          tg.MainButton.show();
	});

btnmin.addEventListener("click", function(){

		all[5] = null;
		// очищаем массив
		result.splice(0,result.length);
		btn0.innerHTML = btn0.innerHTML - 1;
		if (btn0.innerHTML < 0)
		{
			btn0.innerHTML = 0
		}
        sum = btn0.innerHTML*310
        result.push("6.png");
        result.push("Вы заказали Биг Тейсти в количестве");
        result.push(btn0.innerHTML);
        result.push(sum);
		all[5] = result;
        console.log(all);
	tg.MainButton.setText("Send in Telega"); 
        tg.MainButton.show();
 	
});

btnplus.addEventListener("click", function(){

		  all[5] = null;
		  result.splice(0,result.length);
          btn0.innerHTML = +btn0.innerHTML + 1;
          sum = btn0.innerHTML*310
          result.push("6.png");
          // console.log("Вы заказали Биг Тейсти в количестве " + btn0.innerHTML +" "+"на суму "+ sum )

          result.push("Вы заказали Биг Тейсти в количестве");
          result.push(btn0.innerHTML);
          result.push(sum);
          all[5] = result;
          console.log(all);
	  tg.MainButton.setText("Send in Telega"); 
          tg.MainButton.show();
          
});

let open_modal = document.querySelectorAll('.open_modal');
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];

let container = document.getElementById("modal_txt"); 
let o = document.createElement("o");
let t = document.createElement("t");
let l = document.createElement("l");
let k = document.createElement("k");
let el = document.createElement("elem");
let m = document.createElement("m");

function foo()
{

        modal.classList.add('modal_vis'); // добавляем видимость окна
        modal.classList.remove('bounceOutDown'); // удаляем эффект закрытия
        body.classList.add('body_block'); // убираем прокрутку

 
//вывод в модальное окно
if (all[0][0] == "1.png")
{
// когда товар равен 0, то его удаляем с модального окна
if(all[0][2] != "0")
{
o.innerHTML = `${'<img src="/static/1.png"width="50" height="38"style="padding-right: 20px;">'}
${'x' + all[0][2] + '________' +  all[0][3] +"грн."}`;
container.appendChild(o);
}
else{
    o.innerHTML = `${''} ${''} ${''}`;
    container.appendChild(o);
}
}
if (all[1][0] == "2.png")
{
if (all[1][2] != "0")
{
t.innerHTML = `${'<img src="/static/2.png"width="50" height="38"style="padding-right: 20px;">'}
${'x'+all[1][2] + '________'+ all[1][3]+ 'грн.'}`;
container.appendChild(t);
}
else{
    t.innerHTML = `${''} ${''} ${''}`;
    container.appendChild(t); 
}
}

if (all[2][0] == "3.png")
{
if (all[2][2] != "0")
{
l.innerHTML = `${'<img src="/static/3.png"width="50" height="38"style="padding-right: 20px;">'}
${'x'+all[2][2] + '________'+ all[2][3]+ 'грн.'}`;
container.appendChild(l);
}
else {
      l.innerHTML = `${''} ${''} ${''}`;
      container.appendChild(l);
}
}
if (all[3][0] == "4.png")
{
if (all[3][2] != "0")
{
k.innerHTML = `${'<img src="/static/4.png"width="50" height="38"style="padding-right: 20px;">'}
${'x'+all[3][2] + '________'+ all[3][3]+ 'грн.'}`;
container.appendChild(k);
}
else
    { 
      k.innerHTML = `${''} ${''} ${''}`;
      container.appendChild(k);
}
}

if (all[5][0] == "6.png")
{
if (all[5][2] != "0")
{
m.innerHTML = `${'<img src="/static/6.png"width="50" height="38"style="padding-right: 20px;">'}
${'x'+all[5][2] + '________'+ all[5][3]+ 'грн.'}`;
container.appendChild(m);
}
else{
     m.innerHTML = `${''} ${''} ${''}`;
     container.appendChild(m);
}
}
if (all[4][0] == "5.png")
{
if (all[4][2] != "0")
{
el.innerHTML = `${'<img src="/static/5.png"width="50" height="38"style="padding-right: 20px;">'}
${'x'+all[4][2] + '________'+  all[4][3]+ 'грн.'}`;
container.appendChild(el);
}
else {
      el.innerHTML = `${''} ${''} ${''}`;
      container.appendChild(el);}
}
}

//передача данных  в бот(слушатель главной кнопки)
Telegram.WebApp.onEvent("mainButtonClicked", function(){
//передача данных (использование кейборд кнопки)
	res = JSON.stringify(all);
        //tg.sendData(res);
       //Запрос  на фласк  с питоном (использование инлайн кнопки)
       function zapros(tg) {
       fetch("https://molx-origen.ml", {
       method: "POST",
       body: JSON.stringify({
       user: tg.initDataUnsafe.user.first_name,
       id: tg.initDataUnsafe.user.id,
       query_id: tg.initDataUnsafe.query_id
       }),
     headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});
}
//проверка текста главной кнопки для перехода в модальное окно(чтобы не закрылось webapp )
  if (tg.MainButton.text == "Send in Telega")
     {foo();}
  else{zapros(tg)}
  

tg.MainButton.setText("Send in T"); 
tg.MainButton.show();
tg.BackButton.show();
});

//слушатель кнопки назад 
Telegram.WebApp.onEvent('backButtonClicked', function(){
// закрытие модального окна
    modal.classList.add('bounceOutDown'); // добавляем эффект закрытия
    window.setTimeout(function() { // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
        modal.classList.remove('modal_vis');
        body.classList.remove('body_block'); // возвращаем прокрутку
        $(this).data('modal').$element.removeData();
    }, 500);
   
    tg.MainButton.setText("Send in Telega");
});















