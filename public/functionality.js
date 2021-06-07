var burger=document.getElementById('burger');
var unorderedList=document.getElementById('unorderedList');
var proba=document.getElementById('proba')

burger.addEventListener('click', appear);

function appear(){

    

unorderedList.classList.toggle('-right-full') 


if(unorderedList.classList.contains('-right-full'))

{burger.innerHTML=`<i class="fas fa-bars"></i>`}
else{
    burger.innerHTML=`<i class="fas fa-times"></i>`
}

}


var smallLinks=document.querySelectorAll('#sml');

smallLinks.forEach(function(link){


link.addEventListener('click', disappear);

function disappear(){

    unorderedList.classList.toggle('-right-full');

    
    
    if(unorderedList.classList.contains('-right-full'))

{burger.innerHTML=`<i class="fas fa-bars"></i>`}
else{
    burger.innerHTML=`<i class="fas fa-times"></i>`
}
}

}
)


var htmlEL=document.querySelector('html');
htmlEL.style.scrollBehavior='smooth';