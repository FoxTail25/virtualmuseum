const cardData = {
    1:["source/cat01/99.jpg", '1933 г. "Бешенные деньги"', "заставка Бешеные деньги"],
    2:["source/cat02/99.jpg", '1935 г. "Отелло"', "заставка Отелло"],
    3:["source/cat03/99.jpg", '1944 г. "Иван Грозный"', "заставка Иван грозный"],
    4:["source/cat04/99.jpg", '1965 г. "Правда хорошо, а счастье лучше"', "заставка Правда хорошо, а счатье лучше"],
    5:["source/cat05/99.jpg", '1966 г. "Ревизор"', "заставка Ревизор"],
    6:["source/cat06/99.jpg", '1973 г. "Царь Фёдор Иоаннович"', "заставка царь Фёдор"],
    7:["source/cat07/99.jpg", '1952 г., 1984 г. "Живой труп"', "заставка Живой труп"],
    8:["source/cat08/99.jpg", '2000 г. "Горе от ума"', "заставка Горе от ума"],
    9:["source/cat09/99.jpg", '2018 г. "Васса Железнова - первый вариант"', "заставка Васса Железнова - первый вариант"],
    10:["source/cat10/99.jpg", 'Высшее театральное училище им. М.С. Щепкина', "заставка высшее театральное училище"],
    11:["source/cat11/99.jpg", 'Заявка Читателя. "Свадьба Кречинского"', "заставка свадьба Кречинского"],
    // 12:["source/cat12/99.jpg", 'Заявки режиссёров'],
    // 13:["source/cat13/99.jpg", 'Фонды и Малый театр'],
}

const exponatCont = document.querySelector('.main_contained')

for( i in cardData) {
 
    const exponatCard = document.createElement('div');
    exponatCard.classList.add('card');
    exponatCard.dataset.path = cardData[i][0].slice(0,-6);
    exponatCard.innerHTML = `<div class="card_img"><img src="${cardData[i][0]}" alt="${cardData[i][2]}"></div><div><p class='card_p'>${cardData[i][1]}</p></div><div class="paper"></div>`;

    exponatCont.append(exponatCard)
}




// exponatCard.innerHTML = `<div class="card_img"><div style='background-image:url(/${cardData[i][0]})'></div></div><div><p class='card_p'>${cardData[i][1]}</p></div><div class="paper"></div>`;