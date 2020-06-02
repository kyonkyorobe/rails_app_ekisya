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
//= require jquery_ujs
$(function(){
  var rosen;
  var mykey = gon.my_private_key;

  function init() {
    rosen = new Rosen("map", {            // "map"は<div>のidと一致させる
      apiKey: mykey, 
      apiSetting: "https",                // HTTPS版のAPIサーバを指定
      tileSetting: "https"                // HTTPS版のタイルサーバを指定
    });

    rosen.on('selectStation', function(data) {
      // クリックした地点の付近に駅が複数ある場合は、複数の駅が返ってくるが、
      // 最初の駅を取得。
      var stationCode = data.stations[0].code;
      var stationName = data.stations[0].name;
      $('#map_message1').text(stationCode);
      $('#map_message2').text(stationName);
    });
  }

  window.addEventListener('load', init);
});
