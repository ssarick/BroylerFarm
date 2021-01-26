$(function() {

    $(window).scroll(function() {
        if (window.scrollY > 0) {
            $('.navbar').addClass('scrolled')
        } else {
            $('.navbar').removeClass('scrolled')
        }
    })

    $('.language_item').click(function(e) {
        e.stopPropagation()
        $('.language').toggleClass('opened')
    });

    $(window).click(function() {
        $('.language').removeClass('opened')
    })

    $('.navbar__burger').click(function(event) {
        $('.navbar__burger, .navbar_menu').toggleClass('activebur');
        $('body').toggleClass('lock');
    });

});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("activate");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

var progressApp = new Vue({
    el: '#progress-app',
    data: {
        activeValue: 1,
        years: [{
                year: '2015 год',
                info: 'Открытие мини-птицефабрика на 500 бройлеров',
                yearuz: '2015 йил',
                infouz: '500 та бройлер товуқлари учун мўлжалланган товуқ фабрикаси очилиши',
                value: 1
            },
            {
                year: '2016 год',
                info: 'Из-за нехватки комбикорма на рынке запуск собственного производства и увелечения объёма производсвта на 1т/сутки',
                yearuz: '2016 йил',
                infouz: 'Бозор ем махсулоти етмаслиги сабабли ўзимизнинг кичкина ишлаб чиқариш цехини йўлга қўйдик ва кунига 1 тоннагача озуқа ишлаб чиқаришни бошладик',
                value: 2
            },
            {
                year: '2017 год',
                info: 'Увеличения объёма производства комбикорма на 1 т/сутки',
                yearuz: '2017 йил',
                infouz: 'Ем озуқасини ишлаб чиқариш хажмини суткасига 3 т. гача кўтардик',
                value: 3
            },
            {
                year: '2018 год',
                info: 'Увеличения объёма производства комбикорма на 5 т/сутки',
                yearuz: '2018 йил',
                infouz: 'Ем озуқасини ишлаб чиқариш хажмини суткасига 5 т. гача кўтардик',
                value: 4
            },
            {
                year: '2019 год',
                info: 'Первый экспорт комбикорма в Афганистан и Таджикистан и увелечения мощности производства до 100 т/сутки',
                yearuz: '2019 йил',
                infouz: 'Биринчи экспорт Афғонистон ва Тожикистон давлатларига ва кунлик ишлаб чиқариш хажми 100 т ',
                value: 5
            },
            {
                year: '2020 год',
                info: 'Автоматизированный завод по производству комбикорма по турецким технологиям максимальная мощность до 350 т/сутки',
                yearuz: '2020 йил',
                infouz: 'Кунига 350 т ем озуқасини ишлаб чиқариш хажмига эга бўлган автоматлаштирилган завод',
                value: 6
            },
        ]
    }
})

let founders = new Swiper('.founder-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

$('a[href*="#"]').on('click', function(e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});