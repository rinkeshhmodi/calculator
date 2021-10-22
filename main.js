let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('key'));

buttons.map( key => {
    key.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                } 
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});

function dark() {
    // console.log(5);
    // let element = document.body;
    // element.classList.toggle("dark-mode");
 }