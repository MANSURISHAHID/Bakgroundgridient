let btn1=document.querySelector("#btn1");
let btn2=document.querySelector("#btn2");
let body=document.querySelector("body");
let copydiv=document.querySelector(".copycode");
let rgb1="#444";
let rgb2="#3434";


const hexdecimel=()=>{
    let myhex="0123456789abcdef";
    let data="#";
    for(let i=0;i<6;i++){
       data=data + myhex[Math.floor((Math.random()*16))];
                
    }
    return data;
}


const handelbutton1=() =>{
     rgb1=hexdecimel();
    console.log(rgb1);
    btn1.innerText=rgb1;
    body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2}`;
   copydiv.innerHTML=`bakground-image:linear-gradient(to right,${rgb1},${rgb2}`;
}


const handelbutton2=() =>{
     rgb2=hexdecimel();
    console.log(rgb2);
    btn2.innerText=rgb2;
    body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2}`;
   copydiv.innerHTML=`bakground-image:linear-gradient(to right,${rgb1},${rgb2}`;
}


btn1.addEventListener("click",handelbutton1);
btn2.addEventListener("click",handelbutton2);

copydiv.addEventListener("click",()=>{
    navigator.clipboard.writeText(copydiv.innerHTML);
});

