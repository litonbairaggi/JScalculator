let screen = document.getElementById('display');
buttons  = document.querySelectorAll('button');
let displayValue = '';

var result = 0;

// var hello = function(x) {
//     result = result+1;

//   }


for(let item of buttons){
    item.addEventListener('click', (element)=>{
        buttonText = element.target.innerText;
        console.log(`Button text ix : ${buttonText}`);
        if(buttonText=='C'){
            displayValue = displayValue.slice(0,-1);
            screen.value = displayValue;
        }
        else if(buttonText=='AC'){
            displayValue = '';
            screen.value = displayValue;
        }
        else if(buttonText=='√'){
            displayValue = Math.sqrt(displayValue);
            screen.value = displayValue;
        }
        // else if(buttonText=='x^y'){
        //     var x = displayValue;
        //     result = result +1;
        //     displayValue = Math.pow(x,y);
        //     screen.value = displayValue;
        // }
        else if(buttonText=='PI'){
            displayValue = Math.PI;
            screen.value = displayValue.toFixed(3);
        }
        else if(buttonText=='x²'){
            displayValue = displayValue*displayValue;
            screen.value = displayValue;
        }
        else if(buttonText=='='){
            screen.value = eval(displayValue); 
            displayValue = '';
        }
        else {
            displayValue += buttonText;
            screen.value = displayValue; 
        }
    })
}