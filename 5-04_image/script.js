const thumbs = document.querySelectorAll('.thumb');

for(thumb of thumbs){
// アロー関数だと「this」を束縛しないので動作しない
//  thumb.onclick = () => {
  thumb.onclick = function() {
//    console.log(this.dataset.image);
    document.getElementById('bigimg').src = this.dataset.image;
  }
}
