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


function header(word) {
    var html = "";
    html += "<header class='whole-head'>";
    html += "<div class = 'container-fluid'>"
    html += "<span class='ribbon1'>★</span><span class='ribbon2'>★</span>";
    html += "<div class='main-head'>" + word + "</div>";
    html += "<div class = 'sub-head'>18677128 辻野智大</div>";
    html += "</div>";
    html += "<div class = 'container-fluid site-header'>";
    html += "<span class='ribbon1'>★</span><span class='ribbon2'>★</span>";
    html += "<div class='main-head'>" + word + "</div>";
    html += "<div class = 'sub-head'>18677128 辻野智大</div>";
    html += "</div>";
    html += "</header>";
    // html += "<span class='ribbon1'>★</span><span class='ribbon2'>★</span>"
    // html += "<div class='main-head'>" + word + "</div>"　+ "<div class = 'sub-head'>18677128 辻野智大</div>"
    document.write(html);
}

function sidebar() {
    var html = "";
    html += "      <div class='left-sidebar'>";
    html += "        <div class='title'>メニュー覧</div>";
    html += "        <div class='menu'>";
    html += "        <a href='index.html' class='square_btn'>トップページ</a><br>";
    html += "        <a href='f2c.html' class='square_btn'>f2c converter</a><br>";
    html += "        <a href='touch.html' class='square_btn'>touch</a><br>";
    html += "        <a href='music.html' class='square_btn'>音楽鑑賞</a><br>";
    html += "        <a href='seizauranai.html' class='square_btn'>星座占い</a><br>";
    html += "        <a href='snail_watch.html'><img src='image/illustrain01-eto-i021-150x150.png'></a><br>";
    html += "        </div>";
    html += "      </div>";
    document.write(html);
}

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

////////////// snail_watch用関数

var button_move = false;
var img_snail = new Image();
img_snail.src = "image/illustrain10-tuyu04-150x150.png";
var snail_first_pos = [270, 50, 50, 50];
var snail_pos = [snail_first_pos[0], snail_first_pos[1], snail_first_pos[2], snail_first_pos[3], ];


function snail_init() {
    // キャンバスは320*180、varなしのグローバル変数
    canvas1 = document.getElementById('snail_canvas1');
    ctx1 = canvas1.getContext('2d');
    canvas2 = document.getElementById('snail_canvas2');
    ctx2 = canvas2.getContext('2d');
    ctx1.drawImage(img_snail, snail_pos[0], snail_pos[1], snail_pos[2], snail_pos[3]);
    start_button(5, 120, 150, 35);
    reset_button(165, 120, 150, 35);
    wait();

}


function start_button(x, y, width, height) {
    ctx2.beginPath();
    ctx2.rect(x, y, width, height);
    ctx2.stroke();
    var text = "スタート";
    ctx2.font = "18px 'ＭＳＰゴシック'";
    ctx2.fillText(text, 45, 145, 100);

    canvas2.addEventListener('click', function(e) {
        var button = e.target.getBoundingClientRect();
        mouseX = e.clientX - button.left;
        mouseY = e.clientY - button.top;
        if (x < mouseX && mouseX < x + width) {
            if (y < mouseY && mouseY < y + height) {
                if (button_move) {
                    change_stop(x, y, width, height);
                } else {
                    change_start(x, y, width, height);
                }
            }
        }
    }, false);
}

function reset_button(x, y, width, height) {
    ctx2.beginPath();
    ctx2.rect(x, y, width, height);
    ctx2.stroke();
    var text = "リセット";
    ctx2.font = "18px 'ＭＳＰゴシック'";
    ctx2.fillText(text, 205, 145);

    canvas2.addEventListener('click', function(e) {
        var button = e.target.getBoundingClientRect();
        mouseX = e.clientX - button.left;
        mouseY = e.clientY - button.top;
        if (x < mouseX && mouseX < x + width) {
            if (y < mouseY && mouseY < y + height) {
                snail_reset(x, y, width, height);
            }
        }
    }, false);
}

function snail_reset(x, y, width, height) {
    wait();
    clearInterval(set_timer);
    ctx1.clearRect(snail_pos[0], snail_pos[1], snail_pos[2], snail_pos[3]);
    snail_pos = [snail_first_pos[0], snail_first_pos[1], snail_first_pos[2], snail_first_pos[3], ];
    console.log(snail_first_pos);
    console.log(snail_pos);
    ctx1.beginPath();
    ctx1.drawImage(img_snail, snail_pos[0], snail_pos[1], snail_pos[2], snail_pos[3]);
    // ctx1.drawImage(img_snail , 270, 50, 50, 50);

    ctx2.clearRect(x + 1 - 160, y + 1, width - 2, height - 2);
    var text = "スタート";
    ctx2.font = "18px 'ＭＳＰゴシック'";
    ctx2.fillText(text, 45, 145, 100);
    button_move = false;
    wait();
}

function change_stop(x, y, width, height) {

    ctx2.clearRect(x + 1, y + 1, width - 2, height - 2);
    ctx2.beginPath();
    var text = "スタート";
    ctx2.font = "18px 'ＭＳＰゴシック'";
    ctx2.fillText(text, 45, 145, 100);
    button_move = false;
    clearInterval(set_timer);
    wait();
}

function change_start(x, y, width, height) {

    ctx2.clearRect(x + 1, y + 1, width - 2, height - 2);
    ctx2.beginPath();
    var text = "ストップ";
    ctx2.font = "18px 'ＭＳＰゴシック'";
    ctx2.fillText(text, 45, 145, 100);
    button_move = true;
    set_timer = setInterval("update()", 100);
    update();
    go();

}

var backupVx; // グローバル変数
var vx = -1;

function wait() { //ストップ関数とともに呼び出す
    if (vx != 0) backupVx = vx;
    vx = 0;
}

function go() { // スタートで呼び出し。リセット時は呼び出さない。
    if (vx == 0) vx = backupVx;
}

function update() {
    console.log(vx);
    ctx1.clearRect(snail_pos[0], snail_pos[1], snail_pos[2], snail_pos[3]);
    snail_pos[0] += vx;
    ctx1.drawImage(img_snail, snail_pos[0], snail_pos[1], snail_pos[2], snail_pos[3]);
}