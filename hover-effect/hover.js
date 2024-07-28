let hover = document.querySelector('.hover-effect');

hover.addEventListener('mouseover',(evt)=>{
    hover.classList.add('expand');
});

hover.addEventListener('mouseout',(evt)=>{
    hover.classList.remove('expand');
});