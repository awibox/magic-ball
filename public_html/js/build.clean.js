/* grunt-project - v0.1.0 - 2014-01-12 */
$(function(){function a(a,b){a.hasClass("ui-state-hover")||a.addClass("ui-state-hover").siblings().removeClass("ui-state-hover"),$("span.count",a).text(b)}var b=$("#event-start"),c=$("#event-drag"),d=($("#event-stop"),[0,0,0]);$("#magic-ball").draggable({start:function(){d[0]++,a(b,d[0]),$("#magic-ball__value").stop(),$("#magic-ball__value").removeClass(),$("#magic-ball__value").css("opacity","0")},drag:function(){d[1]++,a(c,d[1])},stop:function(){event.preventDefault();var a=Math.floor(24*Math.random()+1),b=function(){$("#magic-ball__value").animate({opacity:1},1e3)};1==a?($("#magic-ball__value-text").html("Соберись <br>с мыслями<br> и спроси<br> снова"),$("#magic-ball__value").addClass("magic-ball__value_01",function(){b()})):2==a?($("#magic-ball__value-text").html("Шансы<br> велики"),$("#magic-ball__value").addClass("magic-ball__value_07",function(){b()})):3==a?($("#magic-ball__value-text").html("Возможно"),$("#magic-ball__value").addClass("magic-ball__value_05",function(){b()})):4==a?($("#magic-ball__value-text").html("Шансов<br>мало"),$("#magic-ball__value").addClass("magic-ball__value_07",function(){b()})):5==a?($("#magic-ball__value-text").html("Знаки <br>говорят,<br> что нет"),$("#magic-ball__value").addClass("magic-ball__value_03",function(){b()})):6==a?($("#magic-ball__value-text").html("Даже<br>не думай"),$("#magic-ball__value").addClass("magic-ball__value_03",function(){b()})):7==a?($("#magic-ball__value-text").html("Перспектива<br>плохая"),$("#magic-ball__value").addClass("magic-ball__value_02",function(){b()})):8==a?($("#magic-ball__value-text").html("Очень<br> сомневаюсь"),$("#magic-ball__value").addClass("magic-ball__value_03",function(){b()})):9==a?($("#magic-ball__value-text").html("Нет"),$("#magic-ball__value").addClass("magic-ball__value_04",function(){b()})):10==a?($("#magic-ball__value-text").html("Да"),$("#magic-ball__value").addClass("magic-ball__value_04",function(){b()})):11==a?($("#magic-ball__value-text").html("Бесспорно"),$("#magic-ball__value").addClass("magic-ball__value_05",function(){b()})):12==a?($("#magic-ball__value-text").html("Да,<br>  это так"),$("#magic-ball__value").addClass("magic-ball__value_06",function(){b()})):13==a?($("#magic-ball__value-text").html("Точно<br> нет"),$("#magic-ball__value").addClass("magic-ball__value_07",function(){b()})):14==a?($("#magic-ball__value-text").html("Извини,<br> нет"),$("#magic-ball__value").addClass("magic-ball__value_07",function(){b()})):15==a?($("#magic-ball__value-text").html("Без<br> сомнения"),$("#magic-ball__value").addClass("magic-ball__value_03",function(){b()})):16==a?($("#magic-ball__value-text").html("Шанс<br>есть"),$("#magic-ball__value").addClass("magic-ball__value_06",function(){b()})):17==a?($("#magic-ball__value-text").html("Может<br>быть"),$("#magic-ball__value").addClass("magic-ball__value_07",function(){b()})):18==a?($("#magic-ball__value-text").html("Не могу<br> знать"),$("#magic-ball__value").addClass("magic-ball__value_07",function(){b()})):19==a?($("#magic-ball__value-text").html("Сомневаюсь<br> на счет<br> этого"),$("#magic-ball__value").addClass("magic-ball__value_02",function(){b()})):20==a?($("#magic-ball__value-text").html("Скорее<br>всего"),$("#magic-ball__value").addClass("magic-ball__value_07",function(){b()})):21==a?($("#magic-ball__value-text").html("Перспектива<br>хорошая"),$("#magic-ball__value").addClass("magic-ball__value_02",function(){b()})):22==a?($("#magic-ball__value-text").html("Очень<br>вероятно"),$("#magic-ball__value").addClass("magic-ball__value_03",function(){b()})):23==a?($("#magic-ball__value-text").html("Я думаю,<br>что да"),$("#magic-ball__value").addClass("magic-ball__value_07",function(){b()})):24==a?($("#magic-ball__value-text").html("Спроси<br> позже"),$("#magic-ball__value").addClass("magic-ball__value_07",function(){b()})):($("#magic-ball__value-text").html("Спроси<br> снова"),$("#magic-ball__value").addClass("magic-ball__value_07",function(){b()}))}},{containment:"parent"})});