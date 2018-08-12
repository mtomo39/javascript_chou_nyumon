'use strict';

$(document).ready(function(){
  const rssURL = "http://www.slidpanda.com/book/feed/";
  $.ajax({
      url:'cdxml.php',
      type:'GET',
      dataType: 'xml',
      data: {
        url:rssURL
      }
  })
  .done(function(data){
    console.log(data);
  })
  .fail(function(){
    window.alert('データの読み込みに失敗しました。');
  });
});