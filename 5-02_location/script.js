const lang = document.querySelector('html').lang;
let htmlName;

switch(lang){
  case 'ja':
    htmlName = 'index.html';
    break;
  case 'en':
    htmlName = 'index-en.html';
    break;
  case 'zh':
    htmlName = 'index-zh.html';
    break;
}

const opt = document.querySelector('option[value="' + htmlName + '"]');
opt.selected = true;

document.getElementById('form').select.onchange = () => {
  location.href = document.getElementById('form').select.value;
}