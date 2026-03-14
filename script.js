let balance=0;

document.getElementById("dashboard").style.display="none";

function login(){

let u=document.getElementById("user").value;
let p=document.getElementById("pass").value;

if(u && p){

document.getElementById("login").style.display="none";
document.getElementById("dashboard").style.display="block";

}else{

alert("তথ্য দিন");

}

}

function addBalance(){

let amount=prompt("bKash Send Money করার পর Amount লিখুন");

balance+=Number(amount);

document.getElementById("balance").innerText=balance;

}

function order(price){

if(balance>=price){

balance-=price;

document.getElementById("balance").innerText=balance;

alert("অর্ডার সফল");

}else{

alert("ব্যালেন্স কম");

}

}