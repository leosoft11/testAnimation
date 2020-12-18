const popup = document.querySelector('.popup');
const allBtn = document.querySelectorAll('.btn');
const line = document.querySelector('.progress-line__item');
const textinfo = document.querySelector('.text-red');
const scrollItems = document.querySelectorAll('.scroll-items');

const funcPop = () =>{
    allBtn.forEach((button) => {
        button.addEventListener('click', () => {
            const btntxt = button.textContent;
            popup.classList.add('open');
            popup.innerHTML = `<div class="popup__inner">
                                 <button class="popup__close">X</button> 
                                <div class="title">${btntxt}</div>
                                <div class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quas deleniti vero porro iste nulla explicabo, laudantium labore laboriosam, placeat doloribus voluptatibus suscipit dolor pariatur nobis quam cum voluptatem eum quia tempore? Suscipit ea sapiente obcaecati deleniti consequatur dolore, nulla, molestias, quidem maxime eos tempora quo natus dolores adipisci laudantium.</div>
                            </div>`;
        const btnClose = document.querySelector('.popup__close');
        btnClose.addEventListener('click', () =>{
                popup.innerHTML= ``;
                popup.classList.remove('open');
            });
        });
    });
} 

funcPop();
setInterval(() =>{
},3000);

const scrollAnim = () =>{
    let windowCenter = ( window.innerHeight /2 ) + window.scrollY;
    scrollItems.forEach(el =>{
        let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
        if (windowCenter >= scrollOffset){
            el.classList.add('anim-class');
        }
        else{
            el.classList.remove('anim-class');
        }
    });
};

const progressAnim = () =>{
    let scrollTop = window.scrollY;
    let windowHeight = window.innerHeight;
    let siteHeight = document.documentElement.scrollHeight;
    let percentrageProgress = Math.floor(scrollTop / (siteHeight - windowHeight) * 100);
    line.innerHTML = `${percentrageProgress}%`;
    line.style.width = `${percentrageProgress}%`;
};

const heightText = () =>{
    let winHeight = window.scrollY;
     winHeight >= 200 ? textinfo.classList.add('change') : textinfo.classList.remove('change');
};

const objHeight = () =>{
    let HeightTextRed = document.querySelector('.text-red').getBoundingClientRect();
    console.log(HeightTextRed);
};
progressAnim();
scrollAnim();
window.addEventListener('scroll',()=>{
    progressAnim();
    heightText();
    scrollAnim();
  //  objHeight();
   
});


// btn1.addEventListener('click',(e) => {
//     popup.classList.add('open');
//     popup.innerHTML = `<div class="popup__inner">
//                              <button class="popup__close">X</button> 
//                             <div class="title">${btnText}</div>
//                             <div class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quas deleniti vero porro iste nulla explicabo, laudantium labore laboriosam, placeat doloribus voluptatibus suscipit dolor pariatur nobis quam cum voluptatem eum quia tempore? Suscipit ea sapiente obcaecati deleniti consequatur dolore, nulla, molestias, quidem maxime eos tempora quo natus dolores adipisci laudantium.</div>
//                         </div>`;
//  const btnClose = document.querySelector('.popup__close');
//     btnClose.addEventListener('click', () =>{
//             popup.classList.remove('open');
//     });
// });

// btn2.addEventListener('click',() =>{
//     console.log('kek');
// });