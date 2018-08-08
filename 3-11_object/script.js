const addTableRecord = (book) =>{
  const tr = document.createElement('tr');

  for(prop in book){
    let td = document.createElement('td');
    td.textContent =book[prop];
    tr.appendChild(td);
  }

  document.getElementById('list').appendChild(tr);
}


document.getElementById('inputForm').onsubmit = () =>{
  const form = document.getElementById('inputForm');

  const book = {title: form.title.value
              ,auther: form.auther.value
              ,price: form.price.value
              ,stock: form.stock.value
              ,date: getFormatedDate()};
  console.log(book);
  addTableRecord(book);
  return false;
}

const padZero = (val, digit) =>{
  let ret = String(val);
  while(ret.length < digit){  
    ret ='0' + ret;
  }
  return ret;
}

const getFormatedDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = padZero(now.getSeconds(),2);
  
  const hour12 = hour % 12;
  let ampm;
  if (hour > 12){
    ampm = ".p.m"
  }else{
    ampm = ".a.m"
  }

/*     return year + '/' + month + '/' + date + ' ' + hour + ':' + min + ':' + sec;
 */
  return year + '/' + month + '/' + date + ' ' + hour12 + ':' + min + ':' + sec + ampm;
};


document.getElementById('time').textContent = getFormatedDate();

