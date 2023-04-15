        function validateCreditCardNumber(cardNumb) {
            cardNumb = cardNumb.split(' ').join("");
            // вывод номера карты
            // console.log(cardNumb);
            if(parseInt(cardNumb) <= 0 || (!/\d{15,16}(~W[a-zA-Z])*$/.test(cardNumb)) || cardNumb.length > 16) {
                return false;
            }
            var carray = new Array();
            for(var i = 0; i < cardNumb.length; i++) {
                carray[carray.length] = cardNumb.charCodeAt(i) - 48;
            }
            carray.reverse(); // luhn approaches number from the end
            var sum = 0;
            for(var i = 0; i < carray.length; i++) {
                var tmp = carray[i];
                if((i % 2) != 0) {
                    tmp *= 2;
                    if(tmp > 9) {
                        tmp -= 9;
                    }
                }
                sum += tmp;
            }
            return (sum % 10) == 0;
        }
       
        function update(cardNumb) {
            var img = document.getElementById("img");
            var valid = document.getElementById("valid");
            if(validateCreditCardNumber(cardNumb)) {
                
// *************************************************************************
                // номер карты валидный
                console.log(cardNumb);
// *************************************************************************                
            }
            else {
            consol.log("Number card faild ...");
            alert("Faild ...") }
        }
   
