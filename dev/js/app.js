var click=document.getElementById('clickme');

click.addEventListener('click',function (params) {
    // var heightToChange=document.querySelector('.navbar');
    // heightToChange.style.height='8rem';
    // document.querySelector('.navbar_elements').style.display='none';
    // click.style.display='none';
    // click.style.opacity='0';
    // document.querySelector('.navbar_toShow').style.display='block';
    document.querySelector('.navbar').classList.toggle('hide');
});