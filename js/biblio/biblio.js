const popupBiblio = document.querySelector('.popup_bg_bib')
const btn_popupBiblioClose = document.querySelector('.btn_biblio')

let dataObject;
let fullpath;

const contentHead = document.querySelector('#contentHead')
const contentImage = document.querySelector('#contentImage')
const contentText = document.querySelector('#contentText')
const imageText = document.querySelector('#imageText')
const numeration = document.querySelector('.numeration')
const popup_bg_bib = document.querySelector(".popup_bg_bib")
const panelUpr = document.querySelector('.panel_upr')

let autoSlide = true;
let slideTime = 8;
let autoplay = true;


//////////////// убираем опасити//////////////////
    ; (function noHidden() {
        setTimeout(() => {
            document.querySelector('header').classList.add('tran');
            document.querySelector('main').classList.add('tran');
        }, 1000);
    })()
//////////////////////////////////////////////////


///////// вешаем слушатель возврата к index //////
document.querySelector('#goBack').addEventListener('click', hrefIndex)

function hrefIndex() {
    document.querySelector('header').classList.remove('tran');
    document.querySelector('main').classList.remove('tran');
    setTimeout(hreI, 1000)
}

function hreI() {
    window.location.href = 'index.html'
}
////////////////////////////////////////////////////


/// Получаем список карточек и вешаем слушатели///
let card = document.getElementsByClassName('card')

for (let el of card) {
    el.addEventListener('click', popupOpenClose)
}

//////////////////////////////////////////////////


function popupOpenClose(open = true) {


    if (open) {
        fullpath = this.dataset.path;
        let path = this.dataset.path.slice(7, -1);
        objName(path);
        popupFilling(dataObject);
        popup_bg_bib.style.display = 'flex';

        panelUpr.appendChild(audioTrack())

        autoChangeSlide('on')

        document.querySelector('#pop_up_background').addEventListener('click', function closePopUp(e) {
            
            if(e.target.className == "popup_maket" || e.target.className == "popup_bg_bib" || [...e.target.classList].includes('index_btn_close_popApp')) {
                document.querySelector('#pop_up_background').removeEventListener('click', closePopUp);
                popupOpenClose(false)
            }

        })

        
       
    } else {
        
        popup_bg_bib.style.display = ''
        let audio = document.querySelector('audio')
        panelUpr.removeChild(audio)
        

        autoChangeSlide('off')

        if(document.querySelector('.sliderOff')) {
            document.querySelector('#child').classList.remove('sliderOff')
        }
    }

}


// btn_popupBiblioClose.addEventListener('click', function (e) {
    
//     popupOpenClose(false);
    
// })



////////// заполняем попАп ///////////////////////////////////////
function popupFilling(obj, numberEpxponat = 1) {

    if (obj.header[0].slice(0,22) == "Спектакль «Живой труп»" && numberEpxponat >=4) {
        contentHead.innerHTML = obj.header[1] // Добавляем заголовок
    } else {

        contentHead.innerHTML = obj.header[0] // Добавляем заголовок
    }
        
    
    let imagePatch = `${fullpath}${obj[numberEpxponat][0]}.jpg`
    contentImage.src = imagePatch
    
    imageText.innerHTML = obj[numberEpxponat][2]
    
    createBtn(Object.keys(dataObject).length - 3) // создаём кнопки
    
    
    const text = obj[numberEpxponat][3] // Если есть текст - добавляем
    if (text) {
        contentText.innerHTML = text
    } else {
        contentText.innerHTML = ''
    }

    numeration.querySelector('.activebtn').classList.remove('activebtn')
    numeration.querySelector(`.btn${numberEpxponat}`).classList.add('activebtn')

}

// создаём кнопки ///////////////////////////////////////////////////////
function createBtn(numberQuantity) {

    const btnContain = document.createElement('div');
    btnContain.className = 'btn_in_popup_contain';
    // btnContain.title = 'Кнопки для переключения между экспанатами';

    const arrowleft = createArrow('arrowleft')
    arrowleft.addEventListener('click', () => changeSlide('down'))
    arrowleft.title = 'Предыдущий слайд'
    btnContain.appendChild(arrowleft)

    for (let el = 1; el <= numberQuantity; el++) {

        const btn = document.createElement('div')
        btn.title = `Отобразить ${el} слайд`
        btn.classList = `btn_in_popup btn${+el}`;
        if (el === 1) {
            btn.classList.add('activebtn')
        }
        btn.textContent = el
        btn.addEventListener('click', function () { popupFilling(dataObject, this.textContent) })
        btnContain.appendChild(btn)
    }

    const arrowright = createArrow('arrowright')
    arrowright.title = 'Следующий слайд'
    arrowright.addEventListener('click', changeSlide);
    btnContain.appendChild(arrowright);

    window.addEventListener("keydown", keyChangeContent);

    numeration.innerHTML = '';
    numeration.appendChild(btnContain)

    function createArrow(a) {
        const d = document.createElement('div')
        d.className = a
        return d
    }
}

///// прокрутка слайдов по убыванию или возрастанию //////////////////
function changeSlide(a) {
    const activeBtn = numeration.querySelector('.activebtn')
    const btn = activeBtn.textContent
    const allBtn = activeBtn.parentElement.children.length - 2

    const down = () => {
        if (+btn > 1) {
            popupFilling(dataObject, +btn - 1)
        } else {
            popupFilling(dataObject, allBtn)
        }
    }
    const up = () => {
        if (+btn < allBtn) {
            popupFilling(dataObject, +btn + 1)
        } else {
            popupFilling(dataObject, 1)
        }
    }
    a === 'down'
        ? down()
        : up();
}
//////////////////////////////////////////////////////////////////////////


/////// клавиатурный слушатель копок "лево" / "право" ////////////////////
function keyChangeContent(e) {
    if (e.code === 'ArrowRight') {
        changeSlide()
    } else if (e.code === 'ArrowLeft') {
        changeSlide('down')
    }
}
//////////////////////////////////////////////////////////////////////////


/////////////Записываем в объект данные экспоната//////////////////
function objName(cn) {

    switch (cn) {
        case 'cat01': dataObject = madcash; break;
        case 'cat02': dataObject = otello; break;
        case 'cat03': dataObject = ivanG; break;
        case 'cat04': dataObject = pravda; break;
        case 'cat05': dataObject = revisor; break;
        case 'cat06': dataObject = fedor; break;
        case 'cat07': dataObject = liveDead; break;
        case 'cat08': dataObject = gore; break;
        case 'cat09': dataObject = vassa; break;
        case 'cat10': dataObject = upperC; break;
        case 'cat11': dataObject = zajavkaCh; break;
        default: dataObject = "";
    }
}


////////////////////////////// audioTrack  ///////////////////////////////
function audioTrack() {

    const audio = document.createElement('audio')

    audio.controls = true
    audio.autoplay = autoplay
    audio.title = "Управление голосовым сопровождением"

    const source = document.createElement('source');
    source.src = `${dataObject.audio}`

    audio.appendChild(source)
    return audio
}
///////////////////////////////////////////////////////////////////////////



// toggle ////////////////////////////////////////////
const toggle = document.querySelector('.slider')
const child = document.querySelector('#child')

toggle.addEventListener('click', function() {
    
    if([...child.classList].includes('sliderOff')) {
        child.classList.remove('sliderOff')
        autoChangeSlide('on')
    } else {
        child.classList.add('sliderOff')
        autoChangeSlide('off')
    }

})


let slide;

function autoChangeSlide(action) {

    if(action == 'on') {
        slide = setInterval(changeSlide, 1000*slideTime)
    } else {
        clearInterval(slide)
    }
}
