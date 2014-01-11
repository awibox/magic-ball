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
            $('#magic-ball__value').fadeOut("slow", function() {
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

            var answer = Math.floor(Math.random() * (1 - 1 + 1) + 1);
            if (answer == 1) {



                $("#magic-ball__value-text").html('Соберись <br>с мыслями<br> и спроси<br> снова');
                $('#magic-ball__value').addClass("magic-ball__value_01", function() {
                    $('#magic-ball__value').fadeIn(2000);
                });
            }
            else if (answer == 2) {
                console.log("нет")
                $("#magic-ball__value-text").html('Перспектива не очень хорошая');
            }
            else if (answer == 3) {
                console.log("наверно")
                $("#magic-ball__value-text").html('Лучше сейчас не говорить тебе');
            }
            else if (answer == 4) {
                console.log("спроси еще раз")
                $("#magic-ball__value-text").html('спроси<br>еще раз');
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