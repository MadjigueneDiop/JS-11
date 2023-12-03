// Recuperer les ID
const ajout =document.getElementById("Input1");
const ajouter =document.getElementById("taskList");
const btn =document.getElementById("Add");
btn.addEventListener('click',() =>{
// Creer un nouveau element div
 
let div1=document.createElement('div');
ajouter.appendChild(div1); 
div1.classList.add('div2');




// Creer un nouveau element div
let li1=document.createElement('li');
li1.innerHTML=ajout.value;
div1.appendChild(li1);

// Creer un nouveau element span
let span1=document.createElement('span');
div1.appendChild(span1);

// Creer un nouveau element button1
let button1=document.createElement("button");
button1.textContent="to do"
span1.appendChild(button1)
button1.classList.add('btn1')


// Creer un nouveau element button2
let button2 =document.createElement("button");
button2.textContent="doing"
span1.appendChild(button2)
button2.classList.add('btn2')



// Creer un nouveau element button3
let button3 =document.createElement("button");
button3.textContent="done"
span1.appendChild(button3);
button3.classList.add('btn3');



// Changement des couleurs
let btn1 =document.querySelector('.btn1');
let btn3 =document.querySelector('.btn3');
let btn2 =document.querySelector('.btn2');

btn2.addEventListener('click',function(){
    div1.style.backgroundColor='orange'
    btn2.style.backgroundColor="orange";
})

btn3.addEventListener('click',function(){
    div1.style.backgroundColor='green'
    btn3.style.backgroundColor="green";
})

btn1.addEventListener('click',function(){
    div1.style.backgroundColor='red'
    btn1.style.backgroundColor="red";
})

    ajout.value=" ";
})




