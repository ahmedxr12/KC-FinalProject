// toggle dark/white mode
const toggle = document.getElementById('toggleDark');
const section = document.getElementById('section');
const logoSection = document.getElementById('logo-section');
const content = document.getElementById('content');

section.style.background = '#000018';
logoSection.style.color = 'white';
content.style.color = '#4e9eff';

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        section.style.background = '#f0ecff';
        logoSection.style.color = 'black';
        content.style.color = '#0a49f6';
        section.style.transition = '2s';
    }else{
        section.style.background = '#000018';
        logoSection.style.color = 'white';
        content.style.color = '#4e9eff';
        section.style.transition = '2s';
    }
});