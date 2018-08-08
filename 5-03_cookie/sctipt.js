document.getElementById('form').onsubmit = () => {
  if(Cookies.get('answered') === 'yes') {
    window.alert('回答済です。アンケートの回答は1回しかできません。')
    return false;
  }else{
    Cookies.set('answered', 'yes', {expired: 7});
  }
}

document.getElementById('remove').onclick = () => {
  Cookies.remove('answered');
}