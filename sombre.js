const switcher=document.querySelector('.theme')
let a=0;
 switcher.addEventListener('click', () => {
     if(a===0){
        document.documentElement.style.setProperty('--couleur', '#262626' );
        document.documentElement.style.setProperty('--fond', '#F1F1F1');
        document.documentElement.style.setProperty('--ombre', 'rgba(0, 0, 0, 0.5)');
        a++;
     }
     else{
        document.documentElement.style.setProperty('--couleur', '#F1F1F1' );
        document.documentElement.style.setProperty('--fond', '#262626');
        document.documentElement.style.setProperty('--ombre', 'rgba(0, 0, 0, 0.5)');
        a--;
     }
 })