

let btnToggle = document.querySelector('button.toggle');
let menuBtn = document.querySelector('.menu-btn i');
let navLinks = document.querySelector('.header .items');
let items = document.querySelectorAll('.items button');


function checkMenuBtn()
{
    if(menuBtn.classList.contains('fa-bars'))
    {
        menuBtn.classList.replace('fa-bars','fa-xmark')
    }
    else
    {
        menuBtn.classList.replace('fa-xmark','fa-bars')
    }
}

menuBtn.onclick = function()
{
    navLinks.classList.toggle('open')
    checkMenuBtn()

}


navLinks.onclick = function()
{
    navLinks.classList.remove('open');
    checkMenuBtn()
}


btnToggle.onclick = _ => 
{
    window.scroll(0,0);

}

window.onscroll = function()
{
    if(window.scrollY > 300)
    {
        btnToggle.style.display = "flex"
    }
    else
    {
        btnToggle.style.display = "none"
    }
}



const mixer = mixitup('.project-items') 

items.forEach(function(item)
{
    item.onclick = function()
    {
        document.querySelector('.projects .items button.active').classList.remove('active');
        item.classList.add('active')
    }
})

