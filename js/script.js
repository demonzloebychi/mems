const audio1 = new Audio();
audio1.src = "/music/1.mp3";

const audio2 = new Audio();
audio2.src = "/music/2.mp3";

const btn1 = document.querySelector('.yes')
const btn2 = document.querySelector('.no')
const yesA = document.querySelector('.yesA')
const yesB = document.querySelector('.yesB')
const wrapper = document.querySelector('.wrapper')

const textWin = 'ТЫ ПРАВИЛЬНО ОТВЕТИЛ! МОЛОДЕЦ!'


btn1.addEventListener ('click', function (e){
    yesA.classList.add('active');
    wrapper.classList.add('var-yes');
    wrapper.innerHTML = textWin;
  
    setTimeout(function (){ 
        location.reload()
    },5000);

})



btn2.addEventListener ('click', function (e){
    yesB.classList.add('active')
    wrapper.classList.add('var-no')
  
    setTimeout(function (){ 
        location.reload()
    },5000);

})

