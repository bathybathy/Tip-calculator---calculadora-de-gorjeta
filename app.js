const form = document.querySelector('.form');
let fullPrice = 0;
const open = document.querySelector('.final');


form.addEventListener(('submit'), e =>{
    e.preventDefault();
    let amount = parseFloat(document.querySelector('.q1').valueAsNumber);
    let percent = parseFloat(document.querySelector('.q2').valueAsNumber)/100;
    
    
    fullPrice += parseFloat(amount) * parseFloat(percent) + parseFloat(amount);
    console.log(fullPrice);

    open.classList.remove ('d-none');
    open.querySelector('span').textContent = `${fullPrice}`;
    
    if(fullPrice>0){
       document.querySelector('.form').reset();
       fullPrice = 0;
    }

});



