$(function() {
    var $start_counter = $( "#event-start" ),
        $drag_counter = $( "#event-drag" ),
        $stop_counter = $( "#event-stop" ),
        counts = [ 0, 0, 0 ];

    $( "#magic-ball" ).draggable({
        start: function() {
            counts[ 0 ]++;
            updateCounterStatus( $start_counter, counts[ 0 ] );
            $('#magic-ball__value').stop();
            $('#magic-ball__value').fadeOut(300, function() {
                $('#magic-ball__value').removeClass();
            });
        },
        drag: function() {
            counts[ 1 ]++;
            updateCounterStatus( $drag_counter, counts[ 1 ] );
        },
        stop: function() {
            counts[ 2 ]++;
            updateCounterStatus( $stop_counter, counts[ 2 ] );

            var answer = Math.floor(Math.random() * (3 - 1 + 1) + 1);
            answer = 14;
            if (answer == 1) {
                $("#magic-ball__value-text").html('Соберись <br>с мыслями<br> и спроси<br> снова');
                $('#magic-ball__value').addClass("magic-ball__value_01", function() {
                    $('#magic-ball__value').fadeIn(1000);
                });
            }
            else if (answer == 2) {
                $("#magic-ball__value-text").html('Знаки <br>указывают,<br> что да');
                $('#magic-ball__value').addClass("magic-ball__value_02", function() {
                    $('#magic-ball__value').fadeIn(1000);
                });
            }
            else if (answer == 3) {
                $("#magic-ball__value-text").html('Можешь<br> надеяться<br> на это');
                $('#magic-ball__value').addClass("magic-ball__value_02", function() {
                    $('#magic-ball__value').fadeIn(1000);
                });
            }
            else if (answer == 4) {
                $("#magic-ball__value-text").html('Не стоит<br>говорить<br> тебе');
                $('#magic-ball__value').addClass("magic-ball__value_02", function() {
                    $('#magic-ball__value').fadeIn(1000);
                });
            }
            else if (answer == 5) {
                $("#magic-ball__value-text").html('Знаки <br>указывают,<br> что нет');
                $('#magic-ball__value').addClass("magic-ball__value_02", function() {
                    $('#magic-ball__value').fadeIn(1000);
                });
            }
            else if (answer == 6) {
                $("#magic-ball__value-text").html('Даже<br>не думай<br> об этом');
                $('#magic-ball__value').addClass("magic-ball__value_03", function() {
                    $('#magic-ball__value').fadeIn(1000);
                });
            }
            else if (answer == 7) {
                $("#magic-ball__value-text").html('Перспектива<br> не очень<br> хорошая');
                $('#magic-ball__value').addClass("magic-ball__value_02", function() {
                    $('#magic-ball__value').fadeIn(1000);
                });
            }
            else if (answer == 8) {
                $("#magic-ball__value-text").html('Очень<br> сомневаюсь');
                $('#magic-ball__value').addClass("magic-ball__value_03", function() {
                    $('#magic-ball__value').fadeIn(1000);
                });
            }
            else if (answer == 9) {
                $("#magic-ball__value-text").html('Нет');
                $('#magic-ball__value').addClass("magic-ball__value_04", function() {
                    $('#magic-ball__value').fadeIn(1000);
                });
            }
            else if (answer == 10) {
                $("#magic-ball__value-text").html('Да');
                $('#magic-ball__value').addClass("magic-ball__value_04", function() {
                    $('#magic-ball__value').fadeIn(1000);
                });
            }
            else if (answer == 11) {
                $("#magic-ball__value-text").html('Бесспорно');
                $('#magic-ball__value').addClass("magic-ball__value_05", function() {
                    $('#magic-ball__value').fadeIn(1000);
                });
            }
            else if (answer == 12) {
                $("#magic-ball__value-text").html('Да,<br>  это так');
                $('#magic-ball__value').addClass("magic-ball__value_06", function() {
                    $('#magic-ball__value').fadeIn(1000);
                });
            }
            else if (answer == 13) {
                $("#magic-ball__value-text").html('Точно<br> нет');
                $('#magic-ball__value').addClass("magic-ball__value_07", function() {
                    $('#magic-ball__value').fadeIn(1000);
                });
            }
            else if (answer == 14) {
                $("#magic-ball__value-text").html('Извини,<br> нет');
                $('#magic-ball__value').addClass("magic-ball__value_07", function() {
                    $('#magic-ball__value').fadeIn(1000);
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