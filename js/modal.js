$('.modal_open').click(function () {
    $modal_id = $(this).data('modal');
    $("#"+$modal_id).fadeIn();
    $('body').addClass('modal_on');
    $datatext =  $(this).data('hidden');
    if ($datatext){
        $("#"+$modal_id+" .hidden").val($datatext);
    }
})

$('.modal_close').click(function () {
    $modal_id = $(this).parents(".modal").attr('id');
    $("#"+$modal_id).fadeOut();
    $('body').removeClass('modal_on');
})

$('.modal_close_btn').click(function () {
    $modal_id = $(this).parents(".modal").attr('id');
    $("#"+$modal_id).fadeOut();
    $('body').removeClass('modal_on');
})

$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".modal_wrapp"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.parent().fadeOut(); // скрываем его
        $('body').removeClass('modal_on');
    }
});






