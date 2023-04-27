const THEME = document.getElementById('THEME');
const NAVBAR = document.getElementById('NAVBAR');
const HAM = document.getElementById('HAM');


var DarkMode = localStorage.getItem('Theme') || "false"

THEME.innerHTML = (DarkMode === 'false')? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>'

var r = document.querySelector(':root');
var rs = getComputedStyle(r);

if(DarkMode === 'false'){
    THEME.innerHTML = '<i class="fa-solid fa-moon"></i>'
    r.style.setProperty('--NavFont', 'black');
    r.style.setProperty('--BGCOLOR', 'white');
    r.style.setProperty('--SLIDECOLOR', 'rgb(228, 226, 230)');
}else{
    THEME.innerHTML = '<i class="fa-solid fa-sun"></i>'
    r.style.setProperty('--NavFont', 'white');
    r.style.setProperty('--BGCOLOR', 'black');
    r.style.setProperty('--SLIDECOLOR', '#595e5d');
}




THEME.addEventListener('click',()=>{
   // THEME.innerHTML = 
    
    
    
   var isDark = (THEME.innerHTML === '<i class="fa-solid fa-sun"></i>')? false : true
    console.log(isDark)
    ///'<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>'
    /// change colors here: 
    /// and local storage

   

    if(isDark === false){
        localStorage.setItem('Theme',false);
        THEME.innerHTML = '<i class="fa-solid fa-moon"></i>'
        r.style.setProperty('--NavFont', 'black');
        r.style.setProperty('--BGCOLOR', 'white');
        r.style.setProperty('--SLIDECOLOR', 'rgb(228, 226, 230)');
    }else{
        localStorage.setItem('Theme',true);
        THEME.innerHTML = '<i class="fa-solid fa-sun"></i>'
        r.style.setProperty('--NavFont', 'white');
        r.style.setProperty('--BGCOLOR', 'black');
        r.style.setProperty('--SLIDECOLOR', '#595e5d');
    }
})


HAM.addEventListener('click',()=>{

        if(NAVBAR.className !== 'UNSET'){
            var isOPEN = (NAVBAR.className === 'CLOSE')? false : true
        }else{
            var isOPEN = false
        }

   if(!isOPEN){
    NAVBAR.className = 'OPEN';
   }else {
    NAVBAR.className = 'CLOSE';
   }
})

