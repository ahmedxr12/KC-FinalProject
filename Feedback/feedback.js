const toggle = document.getElementById('toggleDark');
const container = document.getElementById('container');
const h3 = document.getElementById('h3');
const body = document.querySelector('body');

body.style.background = '#000018';
container.style.color = 'white';
h3.style.color = '#4e9eff';
body.style.transition = '2s';

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = '#f0ecff';
        container.style.color = 'black';
        h3.style.color = '#3a6cf4';
        body.style.transition = '2s';
    }else{
        body.style.background = '#000018';
        container.style.color = 'white';
        h3.style.color = '#4e9eff';
        body.style.transition = '2s';
    }
});