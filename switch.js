function change(){
    var x=document.getElementById('light-text');
    console.log("entrando en el chage");
    if (x.innerHTML==="OFF" ){
    x.innerHTML="ON";
    }else{
        x.innerHTML="OFF";
    }
    var element=document.body;
    element.classList.toggle("lights-on");
    }