$(function() {
    $("#information").tooltip();
    $("#magic-ball").click(function() {
            $('#magic-ball__value').fadeOut('300', function(){
                var answer = Math.floor(Math.random() * (24 - 1 + 1) + 1);
                if (answer === 1) {
                    $('#magic-ball__value').removeClass();
                    $("#magic-ball__value-text").html('Соберись <br>с мыслями<br> и спроси<br> снова');
                    $('#magic-ball__value').addClass("magic-ball__value_01");
                    magicBallShow()
                }
                else if (answer === 2) {
                    $('#magic-ball__value').removeClass();
                    $("#magic-ball__value-text").html('Шансы<br> велики');
                    $('#magic-ball__value').addClass("magic-ball__value_07");
                    magicBallShow()
                }
                else if (answer === 3) {
                    $('#magic-ball__value').removeClass();
                    $("#magic-ball__value-text").html('Возможно');
                    $('#magic-ball__value').addClass("magic-ball__value_05");
                    magicBallShow()
                }
                else if (answer === 4) {
                    $('#magic-ball__value').removeClass();
                    $("#magic-ball__value-text").html('Шансов<br>мало');
                    $('#magic-ball__value').addClass("magic-ball__value_07");
                    magicBallShow()
                }
                else if (answer === 5) {
                    $('#magic-ball__value').removeClass();
                    $("#magic-ball__value-text").html('Знаки <br>говорят,<br> что нет');
                    $('#magic-ball__value').addClass("magic-ball__value_03");
                    magicBallShow()
                }
                else if (answer === 6) {
                    $('#magic-ball__value').removeClass();
                    $("#magic-ball__value-text").html('Даже<br>не думай');
                    $('#magic-ball__value').addClass("magic-ball__value_03");
                    magicBallShow()
                }
                else if (answer === 7) {
                    $('#magic-ball__value').removeClass();
                    $("#magic-ball__value-text").html('Перспектива<br>плохая');
                    $('#magic-ball__value').addClass("magic-ball__value_02");
                    magicBallShow()
                }
                else if (answer === 8) {
                    $('#magic-ball__value').removeClass();
                    $("#magic-ball__value-text").html('Очень<br> сомневаюсь');
                    $('#magic-ball__value').addClass("magic-ball__value_03");
                    magicBallShow()
                }
                else if (answer === 9) {
                    $('#magic-ball__value').removeClass();
                    $("#magic-ball__value-text").html('Нет');
                    $('#magic-ball__value').addClass("magic-ball__value_04");
                    magicBallShow()
                }
                else if (answer === 10) {
                    $('#magic-ball__value').removeClass();
                    $("#magic-ball__value-text").html('Да');
                    $('#magic-ball__value').addClass("magic-ball__value_04");
                    magicBallShow()
                }
                else if (answer === 11) {
                    $('#magic-ball__value').removeClass();
                    $("#magic-ball__value-text").html('Бесспорно');
                    $('#magic-ball__value').addClass("magic-ball__value_05");
                    magicBallShow()
                }
                else if (answer === 12) {
                    $('#magic-ball__value').removeClass();
                    $("#magic-ball__value-text").html('Да,<br>  это так');
                    $('#magic-ball__value').addClass("magic-ball__value_06");
                    magicBallShow()
                }
                else if (answer === 13) {
                    $('#magic-ball__value').removeClass();
                    $("#magic-ball__value-text").html('Точно<br> нет');
                    $('#magic-ball__value').addClass("magic-ball__value_07");
                    magicBallShow()
                }
                else if (answer === 14) {
                    $('#magic-ball__value').removeClass();
                    $("#magic-ball__value-text").html('Извини,<br> нет');
                    $('#magic-ball__value').addClass("magic-ball__value_07");
                    magicBallShow()
                }
                else if (answer === 15) {
                    $('#magic-ball__value').removeClass();
                    $("#magic-ball__value-text").html('Без<br> сомнения');
                    $('#magic-ball__value').addClass("magic-ball__value_03");
                    magicBallShow()
                }
                else if (answer === 16) {
                    $('#magic-ball__value').removeClass();
                    $("#magic-ball__value-text").html('Шанс<br>есть');
                    $('#magic-ball__value').addClass("magic-ball__value_06");
                    magicBallShow()
                }
                else if (answer === 17) {
                    $('#magic-ball__value').removeClass();
                    $("#magic-ball__value-text").html('Может<br>быть');
                    $('#magic-ball__value').addClass("magic-ball__value_07");
                    magicBallShow()
                }
                else if (answer === 18) {
                    $('#magic-ball__value').removeClass();
                    $("#magic-ball__value-text").html('Не могу<br> знать');
                    $('#magic-ball__value').addClass("magic-ball__value_07");
                    magicBallShow()
                }
                else if (answer === 19) {
                    $('#magic-ball__value').removeClass();
                    $("#magic-ball__value-text").html('Сомневаюсь<br> на счет<br> этого');
                    $('#magic-ball__value').addClass("magic-ball__value_02");
                    magicBallShow()
                }
                else if (answer === 20) {
                    $('#magic-ball__value').removeClass();
                    $("#magic-ball__value-text").html('Скорее<br>всего');
                    $('#magic-ball__value').addClass("magic-ball__value_07");
                    magicBallShow()
                }
                else if (answer === 21) {
                    $('#magic-ball__value').removeClass();
                    $("#magic-ball__value-text").html('Перспектива<br>хорошая');
                    $('#magic-ball__value').addClass("magic-ball__value_02");
                    magicBallShow()
                }
                else if (answer === 22) {
                    $('#magic-ball__value').removeClass();
                    $("#magic-ball__value-text").html('Очень<br>вероятно');
                    $('#magic-ball__value').addClass("magic-ball__value_03");
                    magicBallShow()
                }
                else if (answer === 23) {
                    $('#magic-ball__value').removeClass();
                    $("#magic-ball__value-text").html('Я думаю,<br>что да');
                    $('#magic-ball__value').addClass("magic-ball__value_07");
                    magicBallShow()
                }
                else if (answer === 24) {
                    $('#magic-ball__value').removeClass();
                    $("#magic-ball__value-text").html('Спроси<br> позже');
                    $('#magic-ball__value').addClass("magic-ball__value_07");
                    magicBallShow()
                }
                else {
                    $('#magic-ball__value').removeClass();
                    $("#magic-ball__value-text").html('Спроси<br> снова');
                    $('#magic-ball__value').addClass("magic-ball__value_07");
                    magicBallShow()
                }
                function magicBallShow() {
                    $('#magic-ball__value').fadeIn('1000');
                }
            });

    });
});