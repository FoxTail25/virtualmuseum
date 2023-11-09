// try {
//     if ("finally" in Promise.prototype === false) throw e;
// } catch(e) {
//     document.querySelector('body').innerHTML = '<p>Загрузка остановлена.<br>Пожалуйста установите более современный браузер.';
// }

'use strict'



const indexPopApp = document.querySelector('.index_pop_app_bg');
const indexPopAppCont = document.querySelector('.index_pop_app_container');
const copy = document.querySelector('.copyright')

function getBrouser() {
    console.log(window.navigator)
}

getBrouser()

function removeHid() {
    setTimeout(function() {
        document.querySelector('header').classList.add('tran');
        document.querySelector('.banner').classList.add('tran');
        document.querySelector('.copyright').classList.add('tran');
    }, 1000);
}

removeHid()

function hrefBib() {
    
    document.querySelector('header').classList.remove('tran');
    document.querySelector('.banner').classList.remove('tran');
    document.querySelector('.copyright').classList.remove('tran');
    
    setTimeout(hreB, 600)
    setTimeout(removeHid, 2000)
}

function hreB() {
    window.location.href = 'biblio.html'
}

const MOBILE = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/));
if (!MOBILE) {
    copy.innerHTML = '© Федеральное государственное бюджетное учреждение культуры Российская государственная библиотека искусств 2023&nbsp;г.';
} else {
    copy.innerHTML = '© РГБИ 2023 г.';
}


function IndexPopApp(a) {
    switch (a) {
        case 1: indexPopApp.classList.add('index_pop_app_tran');
        indexPopAppCont.classList.remove('index_pop_app_container_tran');
        indexPopAppCont.querySelector('.overflowDiv').innerHTML += expozition;
        orgupr()
        break;
        case 2: indexPopApp.classList.add('index_pop_app_tran');
        indexPopAppCont.classList.remove('index_pop_app_container_tran');
        indexPopAppCont.querySelector('.overflowDiv').innerHTML = bibliograf;
        break;
        case 3: indexPopApp.classList.add('index_pop_app_tran');
        indexPopAppCont.classList.remove('index_pop_app_container_tran');
        indexPopAppCont.querySelector('.overflowDiv').innerHTML = zakluchenie;
        break;
        default: indexPopApp.classList.remove('index_pop_app_tran');
        indexPopAppCont.classList.add('index_pop_app_container_tran');
        setTimeout(function() {indexPopAppCont.querySelector('.overflowDiv').innerHTML = '', 500});
    }
}



function orgupr() {
    const uprpokaz = document.querySelector("#orgupr");

    const h2 = document.createElement('h2');
    h2.textContent = 'Управление показом';

    // const img = document.createElement('img');
    // img.src = "../img/orgupr.jpg"
    uprpokaz.appendChild(h2)
    
    const ul = document.createElement('ul');
    
    for(let el in orgUprObj) {
        const li = document.createElement('li')
        li.innerHTML = orgUprObj[el];
        ul.appendChild(li)
    }
    uprpokaz.appendChild(ul)
    
}

const orgUprObj = {

    1: "<img src='./img/banner/uprpok1.jpg'>",
    2: "<span class='colorred'>1.</span> пауза/старт аудиофайла",
    3: "<span class='colorred'>2.</span> полоса проигрывателя",
    4: "<span class='colorred'>3.</span> открыть/закрыть регулеровку громкости",
    5: "<span class='colorred'>4.</span> выбор скорости воспроизведения/скачать файл",
    6: "<img src='./img/banner/uprpok2.jpg'>",
    
    7: "<span class='colorred'>5.</span> включение/выключение автопоказа слайдов",
    
    8: "<img src='./img/banner/uprpok3.jpg'>",
    9: "<span class='colorred'>6.</span> предыдущий слайд",
    10: "<span class='colorred'>7.</span> выбор слайда",
    11: "<span class='colorred'>8.</span> следующий слайд",

}
const expozition = `<audio autoplay id="audio1"><source src="source/audio/start.mp3"></source></audio>

<h1 class="index__popapp_header">Об экспозиции</h1>

<p>
Предмет гордости Российской государственной библиотеки искусств – ее особый читатель. Именно для «нестандартного» читателя, ради удовлетворения его творческих запросов в 1922 году и была создана библиотека. Ее сотрудники продолжают заложенные создателями традиции, становясь консультантами и соавторами своих читателей – режиссеров, артистов, художников, архитекторов, дизайнеров, исследователей театра, искусствоведов. Библиотека стала местом, где зарождаются театральные, кинематографические, изобразительные или научные замыслы.<br><br>Уже более ста лет РГБИ является своеобразной творческой лабораторией, в которой читатель-творец с помощью специалистов библиотеки может найти и получить все необходимое для обеспечения художественного процесса: от информационных справок до научных консультаций, от текстовых изданий до нужной подборки изобразительного ряда.
<br><br> Тот факт, что библиотека причастна к созданию многих выдающихся произведений отечественного театра и искусства в целом, послужил основанием для открытия в РГБИ единственного в своем роде Музея читателя. Процесс создания художественного произведения показан здесь через чтение и использование читателями-творцами всего богатства книжных и изобразительных материалов библиотеки. В этом – новизна и уникальность проекта. Музей читателя демонстрирует богатейшие фонды библиотеки и представляет ее историю как одну из ярких страниц российской культуры. <br><br>Благодаря подготовленной специалистами РГБИ виртуальной версии экспозиции Музея читателя «Малый театр и Библиотека» жители Чеченской Республики, не приезжая в Москву, могут познакомиться с неповторимой по содержанию и составу представленных материалов выставкой, призванной обогатить культурный уровень и развить творческий потенциал зрителей.
</p>

<div id="orgupr"></div>

`;



const bibliograf = `<h1  class="index__popapp_header">Литература о Музее читателя РГБИ</h1>
<ul>

<li>
1. Ерусалимский Д. Артист не писатель, а читатель//Культура. – 2009. – 17–23 дек. (№ 49). – С. 3 
</li>

<li>
2. Колганова А.А. Профессиональное чтение художника в библиотеке//Библиотеки и информационные ресурсы в современном мире науки, культуры, образования и бизнеса: тема 2007 года: Роль электронной информации и электронных библиотек в продвижении к обществу, построенному на знаниях. – М., 2007 
</li>

<li>
3. Колганова А.А. Чтение Художника, или Как сохраняется читающая интеллигенция//Поддержка и развитие чтения в библиотечном пространстве России: сборник научно-практических работ. – М., 2007. – С. 115–120 
</li>

<li>
4. Колганова А.А. Музей Читателя в Российской государственной библиотеке по искусству//Информационный бюллетень РБА. – 2008. – № 46. – С. 57–59 
</li>

<li>
5. Колганова А.А. Пространство духовной работы: искусство помогать//Библиотечное дело. – 2012. – № 10. – С. 2–8
</li>

<li>
6. Колганова А.А., Ваганова И.А. Музей читателя как новая форма библиотечной экспозиции// Информационный бюллетень РБА. – 2013. – № 68. – С. 159–163
</li>

<li>
7. Конакова А.К. Книжный мир в новой реальности//Современная библиотека. – 2020. – № 5. – С. 22–25 
</li>

<li>
8. Лабозина Л.О. Музей читателя//Книжное обозрение PRO. – 2010. – № 2 (323). – С. 15 
</li>

<li>
9. «Музей читателя» в Российской государственной библиотеке искусств//Вестник Библиотечной Ассамблеи Евразии. – 2010. – № 1. – С. 94 
</li>

<li>
10. Матлина С.Г. Доверие – репутация – имидж – статус: (в каком символическом капитале нуждается современная библиотека) //Материалы вторых социально-экономических библиотечных чтений, 20–21 ноября 2019 года, Ханты-Мансийск – Челябинск, 2020. – С. 118–134 
</li>

<li>
11. Михайлова М., Ермолаева И. Малый театр отметит день библиотек вместе с РГБИ//Театрал. – 2020. – 27 мая  
</li>

<li>
12. Новый взгляд на читателя-творца//Современная библиотека. – 2010. – № 1. – С. 109–111 
</li>

<li>
13. Соловьева М.В. В соавторстве с библиотекой: Музей читателя в Российской государственной библиотеке по искусству//Библиотечное дело. – 2010. – № 4. – С. 28–
</li>

<li>
14. Читательский музей//Московская правда. – 2009. – 10 дек. – C. 7 
</li>

<li>
15. Штукатурова Н.М. В соавторстве со знаменитыми мхатовцами: выставка идей, костюмов, образов//Мир библиографии. – 2013. – № 1. – С. 33–36 
</li>

<li>
16. Шумянцева Е.Е. Наша гордость – особый читатель. Опыт создания музея в библиотеке//Библиотечное дело. – 2022. – № 8. – С. 23–26 
</li>

</ul>`

const zakluchenie = `<audio autoplay id="audio1"><source src="source/audio/zakluchenie.mp3"></source></audio>
<h1  class="index__popapp_header">Заключение</h1>
<p style="text-indent: 60px">Виртуальная экспозиция Музея читателя «Малый театр и Библиотека» – вклад Российской государственной библиотеки искусств в дело развития и поддержки чтения. Выставка отражает работу с книгой выдающихся театральных деятелей, показывает, почему художник нуждается в библиотеке.
</p>
<p style="text-indent: 60px"> Мы надеемся, что посетители других библиотек вдохновятся примером читателей РГБИ, а библиотекам будет полезен ее опыт. Не столь важно, в какой области искусства, науки или производства служит человек. Создать выдающиеся произведения удается тем, кто обращается к книгам как к источнику знаний и опыта, накопленных в предшествующей культуре.</p>`    