﻿window.onload = function() {
    chrome.storage.local.get(null, function(items) {
        var selected_bgcolor = items.selected_bgcolor;
        var bgcolor = "#" + selected_bgcolor;

        // 背景色の変更
        var body = document.getElementsByTagName('body');
        body[0].style.cssText = "background-color: " + bgcolor + " !important;";
        //var container = document.getElementById('container');
        //container.style.backgroundColor = '#E6E6E6';

        var mondai_info = document.getElementById('mondai_info');

        // 癒し画像の表示
        var selected_image_right = items.selected_image_right;
        var selected_image_width = items.selected_image_width;
        //"<img src=" + "'file:///C:/Tux.png'" + " width=10% align='right'/>"+
        mondai_info.insertAdjacentHTML('beforeend',
        "<img src=" + selected_image_right + " width=" + selected_image_width + "% align='right'/>");

        // 共通メモの表示
        if(items.selected_disp_memo == true) {
            var col = items.selected_memo_col;
            var row = items.selected_memo_row;
            var font_size = items.selected_memo_font_size;
            //var memo_value = items.selected_memo;
            var memo_value = '';
            mondai_info.insertAdjacentHTML('beforeend',
                "<br />" +
                "共通メモ:&nbsp;"+
                "<textarea cols='" + col + "' rows='" + row + "' style='font-size: " + font_size + "px;' id='memo_area'>" + memo_value + "</textarea>"+
                "<input type='button' id='memo_save' value='保存' onclick='onclick_memo_save();'/>"+
                "<input type='button' id='memo_delete' value='削除' onclick='onclick_memo_delete();'/>"+
                "<style>#memo_area { vertical-align: middle; }</style>");
        }
    });
};

function onclick_memo_save() {
    //chrome.storage.local.set({
    //    selected_memo: document.getElementById('memo_area').value,
    //});
    alert(1);
}

function onclick_memo_delete() {
    chrome.storage.local.set({
        selected_memo: '',
    }, function() {
        alert(1);
        document.getElementById('memo_area').value = '';
    });
}

