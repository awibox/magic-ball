$(function() {
    var $start_counter = $( "#event-start" ),
        counts = [ 0, 0, 0 ];
    var ballPositionTop = Math.floor(Math.random() * (30 - 5 + 1) + 5) + "%";
    var ballPositionLeft = Math.floor(Math.random() * (60 - 15 + 1) + 15) + "%";
    $("#magic-ball").css('top', ballPositionTop);
    $("#magic-ball").css('left', ballPositionLeft);
    $("#information").tooltip();
    $("#magic-ball").draggable({
        start: function() {
            counts[ 0 ]++;
            updateCounterStatus( $start_counter, counts[ 0 ] );
            $('#magic-ball__value').stop();
            $('#magic-ball__value').removeClass();
            $('#magic-ball__value').hide();
            $('#magic-ball__value').css('opacity','0');
        },
//        drag: function() {
//            counts[ 1 ]++;
//            updateCounterStatus( $drag_counter, counts[ 1 ] );
//        },
        stop: function() {
            var answer = Math.floor(Math.random() * (24 - 1 + 1) + 1);
//            answer = 3;
            function magicBallShow() {
                $('#magic-ball__value').show();
                $('#magic-ball__value').animate({opacity: 1},1000);
            }
            if (answer === 1) {
                $("#magic-ball__value-text").html('Соберись <br>с мыслями<br> и спроси<br> снова');
                $('#magic-ball__value').addClass("magic-ball__value_01", function() {
                    magicBallShow();
                });
            }
            else if (answer === 2) {
                $("#magic-ball__value-text").html('Шансы<br> велики');
                $('#magic-ball__value').addClass("magic-ball__value_07", function() {
                    magicBallShow();
                });
            }
            else if (answer === 3) {
                $("#magic-ball__value-text").html('Возможно');
                $('#magic-ball__value').addClass("magic-ball__value_05", function() {
                    magicBallShow();
                });
            }
            else if (answer === 4) {
                $("#magic-ball__value-text").html('Шансов<br>мало');
                $('#magic-ball__value').addClass("magic-ball__value_07", function() {
                    magicBallShow();
                });
            }
            else if (answer === 5) {
                $("#magic-ball__value-text").html('Знаки <br>говорят,<br> что нет');
                $('#magic-ball__value').addClass("magic-ball__value_03", function() {
                    magicBallShow();
                });
            }
            else if (answer === 6) {
                $("#magic-ball__value-text").html('Даже<br>не думай');
                $('#magic-ball__value').addClass("magic-ball__value_03", function() {
                    magicBallShow();
                });
            }
            else if (answer === 7) {
                $("#magic-ball__value-text").html('Перспектива<br>плохая');
                $('#magic-ball__value').addClass("magic-ball__value_02", function() {
                    magicBallShow();
                });
            }
            else if (answer === 8) {
                $("#magic-ball__value-text").html('Очень<br> сомневаюсь');
                $('#magic-ball__value').addClass("magic-ball__value_03", function() {
                    magicBallShow();
                });
            }
            else if (answer === 9) {
                $("#magic-ball__value-text").html('Нет');
                $('#magic-ball__value').addClass("magic-ball__value_04", function() {
                    magicBallShow();
                });
            }
            else if (answer === 10) {
                $("#magic-ball__value-text").html('Да');
                $('#magic-ball__value').addClass("magic-ball__value_04", function() {
                    magicBallShow();
                });
            }
            else if (answer === 11) {
                $("#magic-ball__value-text").html('Бесспорно');
                $('#magic-ball__value').addClass("magic-ball__value_05", function() {
                    magicBallShow();
                });
            }
            else if (answer === 12) {
                $("#magic-ball__value-text").html('Да,<br>  это так');
                $('#magic-ball__value').addClass("magic-ball__value_06", function() {
                    magicBallShow();
                });
            }
            else if (answer === 13) {
                $("#magic-ball__value-text").html('Точно<br> нет');
                $('#magic-ball__value').addClass("magic-ball__value_07", function() {
                    magicBallShow();
                });
            }
            else if (answer === 14) {
                $("#magic-ball__value-text").html('Извини,<br> нет');
                $('#magic-ball__value').addClass("magic-ball__value_07", function() {
                    magicBallShow();
                });
            }
            else if (answer === 15) {
                $("#magic-ball__value-text").html('Без<br> сомнения');
                $('#magic-ball__value').addClass("magic-ball__value_03", function() {
                    magicBallShow();
                });
            }
            else if (answer === 16) {
                $("#magic-ball__value-text").html('Шанс<br>есть');
                $('#magic-ball__value').addClass("magic-ball__value_06", function() {
                    magicBallShow();
                });
            }
            else if (answer === 17) {
                $("#magic-ball__value-text").html('Может<br>быть');
                $('#magic-ball__value').addClass("magic-ball__value_07", function() {
                    magicBallShow();
                });
            }
            else if (answer === 18) {
                $("#magic-ball__value-text").html('Не могу<br> знать');
                $('#magic-ball__value').addClass("magic-ball__value_07", function() {
                    magicBallShow();
                });
            }
            else if (answer === 19) {
                $("#magic-ball__value-text").html('Сомневаюсь<br> на счет<br> этого');
                $('#magic-ball__value').addClass("magic-ball__value_02", function() {
                    magicBallShow();
                });
            }
            else if (answer === 20) {
                $("#magic-ball__value-text").html('Скорее<br>всего');
                $('#magic-ball__value').addClass("magic-ball__value_07", function() {
                    magicBallShow();
                });
            }
            else if (answer === 21) {
                $("#magic-ball__value-text").html('Перспектива<br>хорошая');
                $('#magic-ball__value').addClass("magic-ball__value_02", function() {
                    magicBallShow();
                });
            }
            else if (answer === 22) {
                $("#magic-ball__value-text").html('Очень<br>вероятно');
                $('#magic-ball__value').addClass("magic-ball__value_03", function() {
                    magicBallShow();
                });
            }
            else if (answer === 23) {
                $("#magic-ball__value-text").html('Я думаю,<br>что да');
                $('#magic-ball__value').addClass("magic-ball__value_07", function() {
                    magicBallShow();
                });
            }
            else if (answer === 24) {
                $("#magic-ball__value-text").html('Спроси<br> позже');
                $('#magic-ball__value').addClass("magic-ball__value_07", function() {
                    magicBallShow();
                });
            }
            else {
                $("#magic-ball__value-text").html('Спроси<br> снова');
                $('#magic-ball__value').addClass("magic-ball__value_07", function() {
                    magicBallShow();
                });
            }
        }
    },
        { containment: "parent" }
    );

    function updateCounterStatus( $event_counter, new_count ) {
        // first update the status visually...
        if ( !$event_counter.hasClass( "ui-state-hover" ) ) {
            $event_counter.addClass( "ui-state-hover" )
                .siblings().removeClass( "ui-state-hover" );
        }
        // ...then update the numbers
        $( "span.count", $event_counter ).text( new_count );
    }
});