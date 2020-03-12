document.querySelector(".menu-toggle").addEventListener('click',function(){
    if(document.getElementById("menu").classList.contains('toggled')){
     
        document.getElementById("nav").style.width="";
        document.querySelector(".nav-links").style.height="0";
        document.querySelector(".nav-links").style.visibility="hidden";

        document.getElementById("menu").classList.remove("toggled");
        document.querySelector(".nav-links").style.transition="ease-in 0.27s";

    }else{
        document.getElementById("nav").style.width="50%"; 
        document.querySelector(".nav-links").style.height="86.5vh";
        document.querySelector(".nav-links").style.visibility="visible";    
        document.querySelector(".nav-links").style.transition="ease-in 0.27s";
        document.getElementById("menu").classList.add("toggled");
    }
    
});