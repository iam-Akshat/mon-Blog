particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
document.getElementsByClassName('menu-toggle')[0].addEventListener('click',()=>{
    console.log("wtf");
    
    var m=document.getElementsByTagName('nav')[0];
    if((m.style.right=="0px")){
        m.style.right="-500px";
        m.style.width="0";
        m.style.display="none";
    }else{
        m.style.right="0px";
        m.style.display="block";
        m.style.width="60%";
    }
    
});