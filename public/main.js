document.getElementsByClassName('menu-toggle')[0].addEventListener('click',()=>{
    console.log("wtf");
    
    var m=document.getElementsByTagName('nav')[0];
    if((m.style.right=="0px")){
        m.style.display="none";
        m.style.right="-500px";
    }else{
        m.style.right="0px";
        m.style.display="block";
    }
    
});