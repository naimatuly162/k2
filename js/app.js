$(document).foundation();
$(function () {

    $('input').placeholder();

    /**
     * ラジオボタン用
     * ボタン切り替え時にラベルのアクティブ・非アクティブの表示切替を行う
     */
    $('input[type=radio] + label:not(.disabled)').on('click', function () {
        $(this).parents().find('.checked').removeClass('checked');
    });

    /**
     * カレンダーのリンククリック
     */
    $('.calender .main-nomal a').on('click', function () {

        var ok = $(this).data('ok');
        if(ok=='0'){
            return;
        }
        
        var date = $(this).data('date');
        var time = $(this).data('time');
        var place = $(this).data('place');

        var dateHidden = $('<input type="hidden">').attr('name', 'medical_checkup_date').val(date);
        var timeHidden = $('<input type="hidden">').attr('name', 'medical_checkup_time').val(time);
        var btimeHidden = $('<input type="hidden">').attr('name', 'departure_time').val('');
        var bcodeHidden = $('<input type="hidden">').attr('name', 'shuttle_busstop_code').val('');
        var bstopHidden = $('<input type="hidden">').attr('name', 'shuttle_busstop_name').val('');
        var placeHidden = $('<input type="hidden">').attr('name', 'place_name').val(place);

        $('#frm-item').append(dateHidden).append(timeHidden).append(btimeHidden).append(bcodeHidden).append(bstopHidden).append(placeHidden);

        goSubmit('frm-item');
    });

    /**
     * カレンダーのリンククリック（バス検診）
     */
    $('.calender .main-bus a').on('click', function () {

        var ok = $(this).data('ok');
        if(ok=='0'){
            return;
        }
        
        var date = $(this).data('date');
        var time = $(this).data('time');
        var btime = $(this).data('btime');
        var bcode = $(this).data('bcode');
        var bstop = $(this).data('bstop');

        var dateHidden = $('<input type="hidden">').attr('name', 'medical_checkup_date').val(date);
        var timeHidden = $('<input type="hidden">').attr('name', 'medical_checkup_time').val(time);
        var btimeHidden = $('<input type="hidden">').attr('name', 'departure_time').val(btime);
        var bcodeHidden = $('<input type="hidden">').attr('name', 'shuttle_busstop_code').val(bcode);
        var bstopHidden = $('<input type="hidden">').attr('name', 'shuttle_busstop_name').val(bstop);
        var placeHidden = $('<input type="hidden">').attr('name', 'place_name').val('');

        $('#frm-item').append(dateHidden).append(timeHidden).append(btimeHidden).append(bcodeHidden).append(bstopHidden).append(placeHidden);

        goSubmit('frm-item');
    });

    /**
     * カレンダーの日付移動
     */
    $('.calender .btn-move-date a').on('click', function () {
        var move_date = $(this).data('date');
        var dateHidden = $('<input type="hidden">').attr('name', 'moveDate').val(move_date);

        $('#frm-date').append(dateHidden);
        goSubmit('frm-date');
    });

    /**
     *最終内容確認ボタンの活性設定 
     */
    $('#agreement-yes').on('click', function () {
        $('.personal-form .personal-confirm').removeClass('disabled').removeAttr('aria-disabled');
    });

    /**
     *最終内容確認ボタンの非活性設定 
     */
    $('#agreement-no').on('click', function () {
        $('.personal-form .personal-confirm').addClass('disabled').attr('aria-disabled');
    });
});


/**
 * FormのSubmit（onclick用）
 */
function goSubmit(frmId) {
    $(function () {
        if ($('#' + frmId).data('submit') != '1') {
            //submit送信前にIDを変更しsubmitの二重実行を抑止する
            $('#' + frmId).attr('data-submit', '1');
            $('#' + frmId).submit();
        }
    });
}

/*
 * 郵便番号検索
 */
function AdrressFromZip(ajax_URL) {

    var zipcode = '';
    zipcode = $('.personal-form #zip_no_1').val() + $('.personal-form #zip_no_2').val();

    $.ajax({
        type: "POST",
        url: ajax_URL,
        datatype: "json",
        data: {zipcode: zipcode},
        success: function (data) {
            if (data.state) {
                $('.personal-form #e_state_name').val(data.state);
                $('.personal-form #e_city').val(data.address);
            } else {
                // 住所が取得できない場合、「都道府県」のプルダウンの選択状態は変更しない
                $('.personal-form #e_city').val('');
            }
        },
        error: function (XMLHttprequest, textStatus, errorThrown) {
            // 住所が取得できない場合、「都道府県」のプルダウンの選択状態は変更しない
            $('.personal-form #e_city').val('');
        }
    });
}