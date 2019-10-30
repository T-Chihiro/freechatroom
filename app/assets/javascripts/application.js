// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

//= require jquery
//= require popper
//= require bootstrap-sprockets

function nowday() {
    var day_of_the_week = new Array("日", "月", "火", "水", "木", "金", "土");
    var today = new Date();
    var month = today.getMonth() + 1;
    var week = today.getDay();
    document.write(today.getFullYear() + "年" + month + "月" + today.getDate() + "日 " + dey_of_the_week[week] + "曜日");
}


/////////////星座占い/////////////////////////
function horoscopes() {
    var constellations = [
        { name: "おひつじ座", day: "3/21～4/19", used: 0 },
        { name: "おうし座", day: "4/20～5/20", used: 0 },
        { name: "ふたご座", day: "5/21～5/21", used: 0 },
        { name: "かに座", day: "6/22～7/22", used: 0 },
        { name: "しし座", day: "7/23～8/22", used: 0 },
        { name: "おとめ座", day: "8/23～9/22", used: 0 },
        { name: "てんびん座", day: "9/23～10/23", used: 0 },
        { name: "さそり座", day: "10/24～11/22", used: 0 },
        { name: "いて座", day: "11/23～12/21", used: 0 },
        { name: "やぎ座", day: "12/22～1/19", used: 0 },
        { name: "みずがめ座", day: "1/20～2/18", used: 0 },
        { name: "うお座", day: "2/19～3/20", used: 0 },
    ];

    var html = "<table>";
    var num = constellations.length;
    var full_num = num;
    var index;
    var rank;
    for (var i = 0; i < full_num; i++) {
        index = Math.floor(Math.random() * num);
        console.log(constellations);
        console.log(constellations[index]);
        rank = i + 1;
        html += "<tr><th>第" + rank + "位<th>" + "<td>" + constellations[index].name + " </td><td>(" + constellations[index].day + ")</td></tr>";

        constellations.splice(index, 1);
        num = constellations.length;
    }
    html += "</table>";
    document.write(html);

}