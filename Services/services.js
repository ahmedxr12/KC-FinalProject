const toggle = document.getElementById('toggleDark');
const title = document.getElementById('title');
const title2 = document.getElementById('title2');
const info = document.getElementById('info');
const info2 = document.getElementById('info2');
const info3 = document.getElementById('info3');
const body = document.querySelector('body');

body.style.background = '#000018';
info.style.color = '#4e9eff';
info2.style.color = '#4e9eff';
info3.style.color = '#4e9eff';
title.style.color = '#4e9eff';
title2.style.color = '#4e9eff';
body.style.transition = '2s';

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = '#f0ecff';
        info.style.color = '#3a6cf4';
        info2.style.color = '#3a6cf4';
        info3.style.color = '#3a6cf4';
        title.style.color = '#3a6cf4';
        title2.style.color = '#3a6cf4';
        body.style.transition = '2s';
    }else{
        body.style.background = '#000018';
        info.style.color = '#4e9eff';
        info2.style.color = '#4e9eff';
        info3.style.color = '#4e9eff';
        title.style.color = '#4e9eff';
        title2.style.color = '#4e9eff';
        body.style.transition = '2s';
    }
});