const images = ['images/image1.jpg'
                ,'images/image2.jpg'
                ,'images/image3.jpg'
                ,'images/image4.jpg'
                ,'images/image5.jpg'
              ];

let current = 0;

const pageNum = () => {
  document.getElementById('page').textContent = (current + 1) + '/' + images.length;
};

const changeImage = (num) => {
  if(current + num >= 0 && current + num < images.length){
    current += num;
    document.getElementById('main_image').src = images[current];
    pageNum();
  }
};

const preloadImage = (path) => {
  const imgTag = document.createElement('img');
  imgTag.src = path;
};

for(image of images){
  preloadImage(image);
}

pageNum();

document.getElementById('prev').onclick = () => {
  changeImage(-1);
};

document.getElementById('next').onclick = () => {
  changeImage(1);
};
