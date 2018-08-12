$(document).ready(function(){
  //ファイルの読み込み
  $.ajax({url:'data.json', dataType:'json'})
  .done(function(data){
    $(data).each(function(){
      if(this.crowded === 'yes'){
        const idName = '#' + this.id;
        $(idName).find('.check').addClass('crowded');
      }
    });
  })
  .fail(()=>{
    window.alert('読み込みエラー');
  })
  //クリックされたら空き状況を確認
  $('.check').on('click', function(){
    if($(this).hasClass('crowded')){
      $(this).text('残り席わずか').addClass('red');
    }else{
      $(this).text('お席あります').addClass('green');
    }
  })
});
